class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :age, :male, :female, :favorite_animal
end
