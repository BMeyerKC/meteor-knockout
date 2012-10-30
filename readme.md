# Knockout for Meteor

Data bindings with form validation for Meteor

## How to install 
1. npm install meteorite (if not already installed)
2. mrt add knockout

## Description
This package provides the full power of Knockout to Meteor.

That being said - the focus is two killer features:
1. Form Auto-Syncing
2. Form Validation

Currently, Meteor has no form validation and to write synced forms requires tons of boiler-plate.

Currently, MappedQuery for [Knockout.meteor] does not work - it is not due to this package - but a library issue. 

## Demos
I am working on a full demo - to be released soon.

The dynamic_finders demo in [Knockout.Meteor](https://github.com/steveluscher/knockout.meteor) works - remove the client dir and run "mrt add knockout".

As MappedQuery does not work - the todos_list in [Knockout.Meteor](https://github.com/steveluscher/knockout.meteor) example is not functional.

jsFiddle of Form Validation (no Meteor code) - [Demo](http://jsfiddle.net/ericbarnard/KHFn8/)

## Contains
* [Knockout](https://github.com/SteveSanderson/knockout)
* [Knockout.mapping](https://github.com/SteveSanderson/knockout.mapping)
* [Knockout.meteor](https://github.com/steveluscher/knockout.meteor)
* [Knockout.validation](https://github.com/ericmbarnard/Knockout-Validation) 
* The default US English localization error messages are included for the validation library