App.Product = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('text'),
  price: DS.attr('number'),
  onSale: DS.attr('boolean')
});
