App.GamesController = Ember.ObjectController.extend({
  allChosenCities: [],
  populateChosenCities: function(){
    for (i = 0; i < 5; i++) {
      var city = App.ChosenCity.create({
        type: "city",
        value:""
      });
      this.get('allChosenCities').pushObject(city)
    }
  }.on("init"),

  cities: Ember.computed.filterBy('allChosenCities', 'type', 'city'),

  selectWinningCity: function(allChosenCities){
    this.get('allChosenCities').forEach(function(e) {
      if (e.value == "Hong Kong"){
        alert("Your future home is in " + (e.value));
      }
    });
  }
});
App.ChosenCity = Ember.Object.extend({
  type: null
});
