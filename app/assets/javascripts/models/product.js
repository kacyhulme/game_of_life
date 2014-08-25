App.Product = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  onSale: DS.attr('boolean'),
  imageSrc: function(){
    return "http://placepuppy.it/400/30" + this.get("id")
  }.property()
});
