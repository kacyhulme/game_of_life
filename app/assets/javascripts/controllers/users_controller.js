App.UsersController = Ember.ArrayController.extend({
  kids: function() {
    return this.filter(function(user) {
      return user.get('age') < 19;
    });
  }.property(),
  adults: function() {
    return this.filter(function(user) {
      return user.get('age') > 19;
    });
  }.property(),

  name: '',
  city: '',
  age: '',
  male: '',
  female: '',
  favorite_animal: '',

  actions: {
    createUser: function() {
      var user = this.store.createRecord('user', {
        name: this.get('name'),
        city: this.get('city'),
        age: this.get('age'),
        male: this.get('male'),
        female: this.get('female'),
        favorite_animal: this.get('favorite_animal')
      });
      var controller = this;
      user.save().then(function(user) {
        controller.set('name', '');
        controller.set('city', '');
        controller.set('age', '');
        controller.set('male', '');
        controller.set('female', '');
        controller.set('favorite_animal', '');
      });
    }
  },
  // can sort here for client side sorting vs server side
  // sortProperties: ['title']
});
