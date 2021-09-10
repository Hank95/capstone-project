class Api::UsersController < ApplicationController
    wrap_parameters format: []

    skip_before_action :authorize, only: [:create]
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id 
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show 
        user = @current_user
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:email, :username, :password, :password_confirmation, :bio, :join_date)
    end


end
