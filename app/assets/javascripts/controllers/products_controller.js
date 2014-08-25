App.ProductsController = Ember.ArrayController.extend({
  time: function() {
    return new Date();
  }.property()
});
