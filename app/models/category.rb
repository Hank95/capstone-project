class Category < ApplicationRecord
    has_many :boat_categories
    has_many :boats, through: :boat_categories
end
