namespace :parlors do
  desc "Backfill latitude and longitude for parlor addresses"
  task backfill_addresses: :environment do
    parlors = Parlor.where(latitude: nil)
    parlors.each do |parlor|
      puts "Updating #{parlor.name}"
      result = Geocoder.search("#{parlor.street_address} #{parlor.city}, #{parlor.state}")
      location = result.first.geometry["location"]
      latitude = location["lat"]
      longitude = location["lng"]
      parlor.update!({
        latitude: latitude,
        longitude: longitude
      })
      puts "Updated #{parlor.name} with #{latitude} and #{longitude}"
    end
  end

end
