source 'https://rubygems.org'
ruby '2.2.2'

gem 'rails', '4.2.4'
gem 'pg', '0.18.3'
gem 'devise', '3.5.2'
gem 'ember-cli-rails', '0.4.0'
gem 'active_model_serializers', '0.9.3'
gem 'rails_12factor', group: [:staging, :production]

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
