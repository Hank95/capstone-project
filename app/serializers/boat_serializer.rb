class BoatSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :title, :description, :price, :make, :model, :year, :length, :passengers, :crew, :bed, :sleep, :fuel, :sailboat, :tender, :alcohol, :food, :extras, :lat, :long, :location, :photo
  has_one :user

  def photo
    return unless object.photo.attached?

    object.photo.blob.attributes
          .slice('filename', 'byte_size')
          .merge(url: photo_url)
          .tap { |attrs| attrs['name'] = attrs.delete('filename') }
  end

  def photo_url
    url_for(object.photo)
  end



end
