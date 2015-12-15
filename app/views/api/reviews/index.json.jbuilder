json.array! @reviews do |review|
  json.name review.name
  json.review review.review
  json.score review.score
  json.id review.id
  json.benchId review.bench_id
end
