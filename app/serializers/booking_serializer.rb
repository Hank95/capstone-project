class BookingSerializer < ActiveModel::Serializer
  attributes :id, :date, :guests
  has_one :boat
  has_one :user
end
