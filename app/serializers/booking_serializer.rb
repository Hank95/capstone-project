class BookingSerializer < ActiveModel::Serializer
  attributes :id, :date, :guests, :accepted, :user
  has_one :boat
  has_one :user
end
