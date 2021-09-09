class BoatSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :make, :model, :year, :length, :passengers, :crew, :bed, :sleep, :fuel, :sailboat, :tender, :alcohol, :food, :extras, :lat, :long, :location
  has_one :user
end
