GameOfLife.ProductsArrayController = Ember.Controller.extend({
  productsCount: 6,
  image: 'images/graffiti3.jpg',
  time: function() {
    return (new Date()).toDateString()
  }.property()
});
