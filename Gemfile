source 'https://rubygems.org'

gem 'rails', '4.2.4'
gem 'pg'
gem 'devise'
gem 'ember-cli-rails'
gem 'active_model_serializers'

group :development do
  gem 'rack-cors', require: 'rack/cors'
  gem 'seed_dump'
  gem 'byebug'
  gem 'web-console'
  gem 'spring'
  gem 'quiet_assets'
end

group :test, :development do
  gem 'rspec-rails'
  gem 'launchy'
  gem 'pry'
end

group :test do
  gem 'shoulda-matchers'
  gem 'capybara'
  gem 'simplecov', :require => false
  gem 'faker'
  gem 'factory_girl_rails'
  gem 'database_cleaner'
end

gem 'rails_12factor', group: [:staging, :production]
