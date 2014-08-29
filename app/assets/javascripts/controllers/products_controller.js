App.ProductsController = Ember.ArrayController.extend({
  time: function() {
    var time = (new Date()).getTime();
    return time;
  }.property(),
  onSale: Ember.computed.alias('product.onsale'),

  action: {
    createProduct: function() {
      var product = this.store.createRecord('product', {
        text: this.get('text'),
        product: this.get('model'),
        createdAt: new Date()
      });
      var controller = this;
      review.save().then(function(review) {
        controller.set('text', '');
        controller.get('model.reviews').addObject(review);
     });
    }
  }
});
