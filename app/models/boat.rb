class Boat < ApplicationRecord
  include Rails.application.routes.url_helpers

  belongs_to :user
  has_one_attached :photo
  has_many :reviews
  # has_many :bookings
  # has_many :users, through: :bookings
  has_many :boat_categories
  has_many :categories, through: :boat_categories
  scope :by_lat, -> (min, max) { min && max ? where("lat >= :min AND lat <= :max", min: min, max: max) : all }
  scope :by_long, -> (min, max) { min && max ? where("long >= :min AND long <= :max", min: min, max: max) : all }

  API_RESULTS_LIMIT = 100

  def self.search(min_lat:, max_lat:, min_lng:, max_lng:)
    by_lat(min_lat, max_lat).
      by_long(min_lng, max_lng).
      limit(API_RESULTS_LIMIT)
  end

  def photo_url
    if photo.attached?
      url_for(self.photo)
      # photos.blobs
    end
  end

  # def get_image_url
  #   rails_blog_url(self.photos)
  # end
end
