class Review < ActiveRecord::Base
  validates :name, :review, :score, :bench_id, presence: true
end
