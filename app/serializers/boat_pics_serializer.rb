class BoatPicsSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :title, :description, :price, :make, :model, :year, :length, :passengers, :crew, :bed, :sleep, :fuel, :sailboat, :tender, :alcohol, :food, :extras, :lat, :long, :location, :photo_blob
  has_one :user
  has_many :bookings


  def photo_blob
    if object.photo.attached?
      object.photo.blob
    end
  end
end
