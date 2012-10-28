Package.describe({
  summary: "Knockout.Meteor, a Javascript library that provides MVVM for Meteor."

Package.on_use(function (api, where) {
  where = where || ['client']
  api.add_files('lib/knockout/knockout.js', where);
  api.add_files('lib/knockout/knockout.mapping.js', where);
  api.add_files('lib/knockout.meteor/build/knockout.meteor.js', where);
});