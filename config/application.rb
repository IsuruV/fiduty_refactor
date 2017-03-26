require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Fid
  class Application < Rails::Application
    config.browserify_rails.commandline_options = "-t [ babelify --presets [ es2015 ] --extensions .es6 ]"
    # config.assets.initialize_on_precompile = false
    # config.assets.enabled = false
    config.middleware.use Rack::Cors do
      allow do
        origins '*'
        resource '*',
          :headers => :any,
          :expose  => ['access-token', 'expiry', 'token-type', 'uid', 'client'],
          :methods => [:get, :post, :options, :delete, :put]
      end
    end
  end
end
