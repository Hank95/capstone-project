json.array! @boats do |boat|
    json.extract! boat, :id, :title, :price, :lat, :long
    json.photosUrl url_for(boat.photos)
end