abstract struct Decorator::Base
  # Keep track of how many `decorates` statements have been provided so that we
  # can limit to 1.
  macro inherited
    DECORATOR_ASSIGNS = [] of Nil
  end

  # The `decorates` macro defines all of the Decorator core logic.
  #
  # Currently, you can only supply **one** `decorates` statement per decorator
  # that inherits from `Decorator::Base`.
  #
  # Given a decorator struct like this:
  #
  # ```
  # struct TimeDecorator < Decorator::Base
  #   decorates time : Time
  # end
  # ```
  #
  # The following items are made available to the `TimeDecorator` struct:
  #
  # - An `initialize(@time : Time)` method
  # - A `collection(objects : Array(Time))` class method
  # - A `getter` (or `getter?` for `Bool` types) for `@time`
  #
  # Implementation is heavily inspired by the [Lucky::Assignable] module:
  # https://github.com/luckyframework/lucky/blob/master/src/lucky/assignable.cr
  macro decorates(type_declaration)
    {% unless DECORATOR_ASSIGNS.empty? %}
      {% previous_declaration = DECORATOR_ASSIGNS.first %}
      {% raise <<-ERROR
        \n
        'decorates' can only be defined once per decorator. Unable to process '#{type_declaration}' because of:
        '#{previous_declaration}' defined in #{previous_declaration.filename}:#{previous_declaration.line_number}:#{previous_declaration.column_number}
        ERROR
      %}
    {% end %}

    {% unless type_declaration.is_a?(TypeDeclaration) %}
      {% raise "'decorates' expects a type declaration like 'name : String', instead got: '#{type_declaration}'." %}
    {% end %}

    {% if type_declaration.var.stringify.ends_with?("?") %}
      {% raise "Using '?' in a 'decorates' var name is not supported. A method ending in '?' will be generated if the type is 'Bool'." %}
    {% end %}

    {% if type_declaration.type.stringify == "Bool" %}
      getter? {{ type_declaration }}
    {% else %}
      getter {{ type_declaration }}
    {% end %}

    forward_missing_to @{{ type_declaration.var }}

    def initialize(@{{ type_declaration.var }} : {{ type_declaration.type }})
    end

    def self.collection(objects : Array({{ type_declaration.type }}))
      objects.map { |object| new(object) }
    end

    {% DECORATOR_ASSIGNS << type_declaration %}
  end
end
