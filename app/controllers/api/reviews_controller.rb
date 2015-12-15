class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.findby(bench_id: params[:bench_id])
  end

  def create
    @review = Review.new(review_params)
    @review.save
    render :index
  end

  private
  def review_params
    params.require(:review).permit(:name, :review, :score, :bench_id)
  end
end
