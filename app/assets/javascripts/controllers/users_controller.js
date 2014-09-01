App.UsersController = Ember.ArrayController.extend({
  kids: function() {
    return this.filter(function(user) {
      return user.get('age') < 19;
    });
  }.property(),
  adults: function() {
    return this.filter(function(user) {
      return user.get('age') > 19;
    });
  }.property()
});
