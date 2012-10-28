Package.describe({
  summary: "Knockout.Meteor, a Javascript library that provides MVVM for Meteor."
});

Package.on_use(function (api, where) {
  api.add_files('lib/knockout/knockout.js', 'client');
  api.add_files('lib/knockout/knockout.mapping.js', 'client');
  api.add_files('lib/knockout.meteor/build/knockout.meteor.js', 'client');
});