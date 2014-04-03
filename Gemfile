source 'https://rubygems.org'

ruby "2.0.0"

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.0.beta1'
gem 'coffee-rails', '~> 4.0.0'

gem "pg", "~> 0.17.1", group: :production
gem 'sqlite3',         group: :development

gem "omniauth", "~> 1.2.1"
gem "omniauth-venmo", "~> 1.0.1"

gem 'rails_12factor', group: :production

gem 'sass-rails', '~> 4.0.0.rc1'

gem 'uglifier', '>= 1.3.0'

gem 'dotenv-rails', :groups => [:development, :test]

# Font End Framework
gem 'foundation-rails', "~> 5.0.3.1"

# Use jquery as the JavaScript library
gem 'jquery-rails'

gem 'sdoc',          group: :doc, require: false

gem "spring", "~> 1.0.0", group: :development
gem "spring-commands-rspec", "~> 1.0.1", group: :developement

gem 'debugger', group: [:development, :test]

gem 'ember-appkit-rails', git: 'https://github.com/dockyard/ember-appkit-rails.git'

gem 'money-rails'

group :development do
  gem "better_errors",     "~> 1.0.1"
  gem "binding_of_caller", "~> 0.7.2"
  gem "quiet_assets",      "~> 1.0.2"
end


group :development, :test do
  gem "phantomjs", ">= 1.8.1.1" # this is optional if you install phantomjs manually (as of teaspoon 0.7.9)
  gem "rspec-rails"
  gem "factory_girl_rails", "~> 4.0"
  gem "minitest"
  gem 'shoulda-matchers', git: "https://github.com/thoughtbot/shoulda-matchers.git"
  gem "pry",                     "~> 0.9.12.2"
  gem "pry-debugger",            "~> 0.2.2"
end

gem "paranoia", "~> 2.0.2"
gem "devise", "~> 3.2.3"
gem "ember_devise_simple_auth", "~> 0.4.4"
