Package.describe({
  summary: "MVVM with validations for Meteor."
});

Package.on_use(function (api, where) {
  api.add_files('lib/knockout/knockout.js', 'client');
  api.add_files('lib/knockout/knockout.mapping.js', 'client');
  api.add_files('lib/knockout-validation/Dist/knockout-validation.js');
  api.add_files('lib/knockout-validation/Localization/en-US.js');
  api.add_files('lib/knockout.meteor/build/knockout.meteor.js', 'client');
});