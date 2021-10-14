require "./decorator/*"

# Decorator provides a simple interface to decorate an object with additional
# functionality.
module Decorator
  VERSION = {{ `shards version "#{__DIR__}"`.chomp.stringify }}
end
