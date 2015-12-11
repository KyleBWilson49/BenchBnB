# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Bench.create!(
  description: "fun little bench in the park",
  lat: 37.773001,
  lng: -122.443330
)
Bench.create!(
  description: "So close to the bus stop that the bus stops right in front of you",
  lat: 37.782003,
  lng: -122.410742
)
Bench.create!(
  description: "has plenty of shade",
  lat: 37.768909,
  lng: -122.440130
)
Bench.create!(
  description: "Nice friendly neighborhood",
  lat: 37.781556,
  lng: -122.425614
)
Bench.create!(
  description: "Has all the charm of a landfill",
  lat: 37.784309,
  lng: -122.412502
)
Bench.create!(
  description: "comfy and sunny",
  lat: 37.800469, 
  lng: -122.398368
)
