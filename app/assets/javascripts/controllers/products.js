GameOfLife.ProductsController = Ember.ArrayController.extend({
  // Time is a controller property and belongs here:
  time: function() {
    return new Date();
  }.property()
});
