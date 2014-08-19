GameOfLife.ProductsRoute = Ember.Route.extend({
  model: function(){
    return GameOfLife.PRODUCTS;
  }
});

GameOfLife.ProductRoute = Ember.Route.extend({
  model: function(params){
    return GameOfLife.PRODUCTS.findBy('title', params.title);
  }
});