App.NotesController = Ember.ObjectController.extend({
  title: '',
  description: '',

  actions: {
    createNewNote: function() {
      var note = this.store.createRecord('note', {
        title: this.get('title'),
        description: this.get('description')
      });

      var controller = this;
      note.save().then(function(note) {
        controller.set('title', '');
        controller.set('description', '');
      });
    },

      deleteNote: function(note){
        note.destroyRecord();
      }
    }
  }
});
