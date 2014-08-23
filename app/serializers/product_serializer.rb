class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :on_sale
end
