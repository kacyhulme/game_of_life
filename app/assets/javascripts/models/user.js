App.User = DS.Model.extend({
  name: DS.attr('string'),
  city: DS.attr('string'),
  age: DS.attr('number'),
  male: DS.attr('boolean'),
  female: DS.attr('boolean'),
  favorite_animal: DS.attr('string')
});
