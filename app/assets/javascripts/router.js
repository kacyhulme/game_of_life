App.Router.map (function() {
  this.resource('products', function() {
    this.resource('product', { path: '/:product_id' });
    this.route('deals');
  });
  this.resource('games', function() {
    this.resource('game', { path: '/:game_id' });
  });
  this.resource('users', function() {
    this.resource('user', { path: '/:user_id'});
  });
});
