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
    cities = this.get('allChosenCities');
    length = cities.length;
    for (i = 0; i < length; i++){
      var answer = cities[Math.floor(Math.random()*cities.length)];
    }
      alert("Your future home is in " + (answer.value));
  }

});
App.ChosenCity = Ember.Object.extend({
  type: null
});
