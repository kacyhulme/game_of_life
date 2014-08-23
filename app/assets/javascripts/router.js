GameOfLife.Router.map (function() {
  this.route('about');
  this.resource('products', function() {
    this.resource('product', { path: '/:product_id' });
  });
  this.resource('games');
});
