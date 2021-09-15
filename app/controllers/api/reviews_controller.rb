class Api::ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    wrap_parameters format: []

    def show
        boat = Boat.find(params[:id])
        if boat
            render json: boat.reviews
        else
            render json: {error: "boat not found"}, status: :unprocessable_entity
        end
    end

    def create 
        review = @current_user.reviews.create(review_params)
        render json: review
    end

    private

    def review_params
        params.permit(:content, :boat_id, :rating)
    end
end
