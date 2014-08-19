
GameOfLife.Router.map (function() {
  this.route('about');
  this.resource('products');
  this.resource('product', { path: '/products/:title' });
  this.resource('games');
});
