App.ProductsController = Ember.ArrayController.extend({
  productsCount: Ember.computed.alias('length')
});
