Package.describe({
  summary: "Knockout.Meteor, a Javascript library that provides MVVM for Meteor."

Package.on_use(function (api, where) {
  where = where || ['client']
  api.add_files(['lib/knockout/knockout.js', 'lib/knockout/knockout.mapping.js', 'lib/knockout.meteor/build/knockout.meteor.js'] , where);
});