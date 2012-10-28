Package.describe({
  summary: "Knockout.js, a Javascript library that provides MVVM - a dependency of the Knockout.Meteor package."
});

Package.on_use(function (api, where) {
  where = where || ['client']
  api.add_files(['lib/knockout/knockout.js', 'lib/knockout/knockout.mapping.js'] , where);
});