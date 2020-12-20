crystal_doc_search_index_callback({"repository_name":"decorator","body":"# Decorator\n\n![Shard CI](https://github.com/stephendolan/decorator/workflows/Shard%20CI/badge.svg)\n[![API Documentation Website](https://img.shields.io/website?down_color=red&down_message=Offline&label=API%20Documentation&up_message=Online&url=https%3A%2F%2Fstephendolan.github.io%2Fdecorator%2F)](https://stephendolan.github.io/decorator)\n[![GitHub release](https://img.shields.io/github/release/stephendolan/decorator.svg?label=Release)](https://github.com/stephendolan/decorator/releases)\n\nA simple [Crystal](https://crystal-lang.org) shard for decorating objects.\n\n## Installation\n\n1. Add the dependency to your `shard.yml`:\n\n   ```yaml\n   dependencies:\n     decorator:\n       github: stephendolan/decorator\n   ```\n\n2. Run `shards install`\n\n## Usage\n\nRequire the shard:\n\n```crystal\nrequire \"decorator\"\n```\n\nCreate a decorator that inherits from Decorator::Base, and tell the decorator what it `decorates` to decorate:\n\n```crystal\nclass TimeDecorator < Decorator::Base\n  decorates time : Time\n\n  # Return a pretty version of a date and weekday in the format:\n  # `Monday, November 2, 2020`\n  def date_with_weekday : String\n    time.to_s(\"%A, %B %-d, %Y\")\n  end\n\n  # Return a pretty version of a date in the format:\n  # `November 2, 2020`\n  def date : String\n    time.to_s(\"%B %-d, %Y\")\n  end\nend\n```\n\nIn the above example, `Decorator` adds the following to the `TimeDecorator` class for you:\n\n- An `initialize(@time : Time)` method\n- A `getter` (or `getter?` for `Bool` types) for `@time`\n\n## Contributing\n\n1. Fork it (<https://github.com/your-github-user/decorator/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [Stephen Dolan](https://github.com/stephendolan) - creator and maintainer\n\n## Inspiration\n\n- The [Lucky::Assignable Module](https://github.com/luckyframework/lucky/blob/master/src/lucky/assignable.cr) The `decorates` syntax and code mimics the implementation created by the [Lucky](https://luckyframework.org) team.\n","program":{"html_id":"decorator/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"decorator","program":true,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"decorator/Decorator","path":"Decorator.html","kind":"module","full_name":"Decorator","name":"Decorator","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"src/decorator.cr","line_number":4,"url":"https://github.com/stephendolan/decorator/blob/b5dfef8d793117290c5a0254256847569f340495/src/decorator.cr#L4"},{"filename":"src/decorator/base.cr","line_number":1,"url":"https://github.com/stephendolan/decorator/blob/b5dfef8d793117290c5a0254256847569f340495/src/decorator/base.cr#L1"},{"filename":"src/decorator/version.cr","line_number":1,"url":"https://github.com/stephendolan/decorator/blob/b5dfef8d793117290c5a0254256847569f340495/src/decorator/version.cr#L1"}],"repository_name":"decorator","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[{"id":"VERSION","name":"VERSION","value":"\"0.7.1\"","doc":null,"summary":null}],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":"Decorator provides a simple interface to decorate an object with additional functionality.","summary":"<p>Decorator provides a simple interface to decorate an object with additional functionality.</p>","class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"decorator/Decorator/Base","path":"Decorator/Base.html","kind":"class","full_name":"Decorator::Base","name":"Base","abstract":false,"superclass":{"html_id":"decorator/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"decorator/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"decorator/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/decorator/base.cr","line_number":1,"url":"https://github.com/stephendolan/decorator/blob/b5dfef8d793117290c5a0254256847569f340495/src/decorator/base.cr#L1"}],"repository_name":"decorator","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"decorator/Decorator","kind":"module","full_name":"Decorator","name":"Decorator"},"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[{"id":"decorates(type_declaration)-macro","html_id":"decorates(type_declaration)-macro","name":"decorates","doc":"The `decorates` macro defines all of the Decorator core logic.\n\nCurrently, you can only supply **one** `decorates` statement per decorator that inherits from `Decorator::Base`.\n\nGiven a decorator class like this:\n\n```crystal\nclass TimeDecorator < Decorator::Base\n  decorates time : Time\nend\n```\n\nThe following items are made available to the `TimeDecorator` class:\n\n- An `initialize(@time : Time)` method\n- A `getter` (or `getter?` for `Bool` types) for `@time`\n\nImplementation is heavily inspired by the [Lucky::Assignable] module:\nhttps://github.com/luckyframework/lucky/blob/master/src/lucky/assignable.cr","summary":"<p>The <code><a href=\"../Decorator/Base.html#decorates(type_declaration)-macro\">decorates</a></code> macro defines all of the Decorator core logic.</p>","abstract":false,"args":[{"name":"type_declaration","doc":null,"default_value":"","external_name":"type_declaration","restriction":""}],"args_string":"(type_declaration)","source_link":"https://github.com/stephendolan/decorator/blob/b5dfef8d793117290c5a0254256847569f340495/src/decorator/base.cr#L26","def":{"name":"decorates","args":[{"name":"type_declaration","doc":null,"default_value":"","external_name":"type_declaration","restriction":""}],"double_splat":null,"splat_index":null,"block_arg":null,"visibility":"Public","body":"    \n{% if DECORATOR_ASSIGNS.empty? %}{% else %}\n      {% previous_declaration = DECORATOR_ASSIGNS.first %}\n      {% raise(\"\\n\\n'decorates' can only be defined once per decorator. Unable to process '#{type_declaration}' because of:\\n'#{previous_declaration}' defined in #{previous_declaration.filename}:#{previous_declaration.line_number}:#{previous_declaration.column_number}\") %}\n    {% end %}\n\n\n    \n{% if type_declaration.is_a?(TypeDeclaration) %}{% else %}\n      {% raise(\"'decorates' expects a type declaration like 'name : String', instead got: '#{type_declaration}'.\") %}\n    {% end %}\n\n\n    \n{% if type_declaration.var.stringify.ends_with?(\"?\") %}\n      {% raise(\"Using '?' in a 'decorates' var name is not supported. A method ending in '?' will be generated if the type is 'Bool'.\") %}\n    {% end %}\n\n\n    \n{% if type_declaration.type.stringify == \"Bool\" %}\n      getter? {{ type_declaration }}\n    {% else %}\n      getter {{ type_declaration }}\n    {% end %}\n\n\n    forward_missing_to @\n{{ type_declaration.var }}\n\n\n    def initialize(@\n{{ type_declaration.var }}\n : \n{{ type_declaration.type }}\n)\n    \nend\n\n    \n{% DECORATOR_ASSIGNS << type_declaration %}\n\n  \n"}}],"types":[]}]}]}})