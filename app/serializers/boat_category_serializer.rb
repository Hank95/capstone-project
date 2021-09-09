class BoatCategorySerializer < ActiveModel::Serializer
  attributes :id
  has_one :boat
  has_one :category
end
