GameOfLife.ProductsRoute = Ember.Route.extend({
  model: function(){
    return this.store.findAll('product');
  }
});
