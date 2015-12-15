class Api::BenchesController < ApplicationController
  def index
    # debugger
    @benches = Bench.in_bounds(params[:bounds], params[:min], params[:max])
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      render :index
    else
      reder json: @bench.errors.full_messages
    end
  end

  def show
      @bench = Bench.find(params[:id])
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng, :seating)
  end
end
