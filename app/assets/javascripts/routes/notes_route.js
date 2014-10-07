App.NotesRoute = Ember.Route.extend({
  model: function(){
    return this.store.findAll('note');
  }
});
