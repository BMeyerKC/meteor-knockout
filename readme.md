# Knockout for Meteor

This package provides the full power of Knockout to Meteor. http://knockoutjs.com

That being said - the focus is two killer features:

1. Form Auto-Syncing
2. Form Validation

Currently:
* Meteor has no form validation and a synced form requires tons of boiler-plate.
* MappedQuery for [Knockout.meteor](https://github.com/steveluscher/knockout.meteor) does not work - due to a library issue. 

## How to install 
1. npm install -g meteorite (if not already installed)
2. mrt add knockout

## Demos
I am working on a full demo - to be released soon.

The dynamic_finders example in [Knockout.Meteor](https://github.com/steveluscher/knockout.meteor) - remove the client dir and run "mrt add knockout".

As MappedQuery does not work - the todos_list example in [Knockout.Meteor](https://github.com/steveluscher/knockout.meteor) is not functional.

jsFiddle of Form Validation (no Meteor code) - [Demo](http://jsfiddle.net/ericbarnard/KHFn8/)

## Contains
* [Knockout](https://github.com/SteveSanderson/knockout)
* [Knockout.mapping](https://github.com/SteveSanderson/knockout.mapping)
* [Knockout.meteor](https://github.com/steveluscher/knockout.meteor)
* [Knockout.validation](https://github.com/ericmbarnard/Knockout-Validation) 
* The default US English localization error messages are included for the validation library