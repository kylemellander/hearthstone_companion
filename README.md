# Template for: Ember Cli (1.13.8), Rails (4.2.4), Simple Auth, & Devise

This template is designed to make it easy to start a project that uses Rails as a backend and Ember CLI as the frontend and use authentication.

> Giving you a chance to make that Ember/Rails app you wanted to,
> without the headache of trying to piece together outdated documentation.

### Version
1.0.0

### Features
* Login
* Sign Up
* Error & Success Messages

### Tech
* Ember CLI
* Ruby on Rails
* Devise
* Simple Auth
* Postgres
* [node.js]
* [jQuery]

### Installation
Clone this repository to your desktop.
Make sure you have postgres running on your computer
```sh
$ cd Ember-and-Rails-with-Simple-Auth-and-Devise
$ cd my-backend
$ rake db:create
$ rake db:migrate
$ rails s
```
This will run the rails backend.
For the frontend, open up a new tab in your terminal.
```sh
$ cd ../updated_frontend
$ npm install
$ bower install
$ ember s --proxy http://localhost:3000
```

### Development

Want to contribute? Great!

### ToDos

* A feature for recovering lost passwords
* Bug Checking and fixing

License
----
MIT


**Free Software**

   [node.js]: <http://nodejs.org>
   [jQuery]: <http://jquery.com>
