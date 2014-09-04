App.ProductsController = Ember.ArrayController.extend({
  time: function() {
    var time = (new Date()).getTime();
    return time;
  }.property(),
  onSale: Ember.computed.alias('product.onsale'),

  expensive: function() {
    return this.filter(function(product){
      return product.get('price') < 200;
    });
  }.property(),

  title: '',
  description: '',
  price:  '',
  onsale: '',

  actions: {
    createProduct: function() {
      var product = this.store.createRecord('product', {
        title: this.get('title'),
        description: this.get('description'),
        price: this.get('price'),
        onsale: this.get('onsale')
      });
      var controller = this;
      product.save().then(function(product) {
        controller.set('title', '');
        controller.set('description', '');
        controller.set('price', '');
        controller.set('onsale', '');
      });
    }
  },
  // can sort here for client side sorting vs server side
  // sortProperties: ['title']
});
