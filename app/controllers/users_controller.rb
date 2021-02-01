class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :delete]
  before_action :authorize_request, except: :create
 
  def index 
    render json @user
  end

  def show
    render json: @user
  end

  def create
    @user = User.new(user_params)
      if @user.save
        @token = encode({id:@user.id})
        render json: {
          user: @user.attributes.except("password_digest"),
          token: @token
        }, status: :created 
   
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.error, status: :unprocessable_entity
    end
  end

  def delete
    @user.destroy 
  end

  private
  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit( :username, :email, :password)
    # validates :password, length :{ minimum: 8}
  end
end
