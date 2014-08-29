App.Router.map (function() {
  this.resource('products', function() {
    this.resource('product', { path: '/:product_id' });
  });
  this.resource('games');
  this.resource('users', function() {
    this.resource('user', { path: '/:user_id'});
  });
});
