# Decorator

![Shard CI](https://github.com/stephendolan/decorator/workflows/Shard%20CI/badge.svg)
[![API Documentation Website](https://img.shields.io/website?down_color=red&down_message=Offline&label=API%20Documentation&up_message=Online&url=https%3A%2F%2Fstephendolan.github.io%2Fdecorator%2F)](https://stephendolan.github.io/decorator)
[![GitHub release](https://img.shields.io/github/release/stephendolan/decorator.svg?label=Release)](https://github.com/stephendolan/decorator/releases)

A simple [Crystal](https://crystal-lang.org) shard for decorating objects.

## Installation

Add the dependency to your `shard.yml`:

```yaml
dependencies:
  decorator:
    github: stephendolan/decorator
```

Run `shards install`

## 🎬 Screencast

<div style="width:50%">
  <a href="https://luckycasts.com/videos/decorator-shard"><img src="https://i.imgur.com/1gs4z0c.jpg" title="Decorating Lucky Apps with the Decorator Shard" /></a>
</div>

[Watch Screencast](https://luckycasts.com/videos/decorator-shard)

## Usage

Require the shard:

```crystal
require "decorator"
```

Create a decorator that inherits from Decorator::Base, and tell the decorator what it `decorates` to decorate:

```crystal
class TimeDecorator < Decorator::Base
  decorates time : Time

  # Return a pretty version of a date and weekday in the format:
  # `Monday, November 2, 2020`
  def date_with_weekday : String
    time.to_s("%A, %B %-d, %Y")
  end

  # Return a pretty version of a date in the format:
  # `November 2, 2020`
  def date : String
    time.to_s("%B %-d, %Y")
  end
end
```

In the above example, `Decorator` adds the following to the `TimeDecorator` class for you:

- An `initialize(@time : Time)` method
- A `getter` (or `getter?` for `Bool` types) for `@time`

## Contributing

1. [Fork it](https://github.com/stephendolan/decorator/fork)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Contributors

- [Stephen Dolan](https://github.com/stephendolan) - creator and maintainer

## Inspiration

- The `decorates` syntax and code mimics the [Lucky::Assignable Module](https://github.com/luckyframework/lucky/blob/master/src/lucky/assignable.cr) `needs` implementation created by the [Lucky](https://luckyframework.org) team.
