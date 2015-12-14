class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, :seating, presence: true

  def self.in_bounds(bounds)
    benches = self.all
    lat_north = bounds['NECorner']['lat'].to_f
    lat_south = bounds['SWCorner']['lat'].to_f
    lng_east = bounds['NECorner']['lng'].to_f
    lng_west = bounds['SWCorner']['lng'].to_f

    benches_within_bounds = []

    benches.each do |bench|
      if bench.lat.between?(lat_south, lat_north)
        if bench.lng.between?(lng_west, lng_east)
          benches_within_bounds << bench
        end
      end
    end

    return benches_within_bounds
  end
end
