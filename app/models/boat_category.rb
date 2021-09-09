class BoatCategory < ApplicationRecord
  belongs_to :boat
  belongs_to :category
end
