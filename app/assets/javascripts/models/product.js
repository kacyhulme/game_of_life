GameOfLife.Product = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  onSale: DS.attr('boolean'),
  // This should probably come from the server
  // Right now it's just a cute trick to change the image
  // whenever the ID of the product changes.
  imageSrc: function(){
    return "http://placepuppy.it/400/30" + this.get("id")
  }.property()
});
