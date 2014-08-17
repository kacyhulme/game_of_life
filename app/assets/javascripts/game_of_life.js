//= require ./store
//= require_tree ./models
//= require_tree ./controllers
//= require_tree ./views
//= require_tree ./helpers
//= require_tree ./components
//= require_tree ./templates
//= require_tree ./routes
//= require ./router
//= require_self


App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.Router.map(function() {
  this.route('about');
  this.resource('products')
  this.resource('games');
});

App.ProductsRoute = Ember.Route.extend({
  model: function() {
    return App.PRODUCTS;
  }
});

App.AboutController = Ember.Controller.extend({
  bio: "This is the about page that tells what we're about."
});

App.PRODUCTS = [
{
  title: 'Pants',
  price: 25,
  description: 'These are pants',
  onSale: true,
  image: 'pants.png'
},
{
  title: 'Shirt',
  price: 30,
  description: 'This is a shirt',
  onSale: false,
  image: 'shirt.png'
}
];

