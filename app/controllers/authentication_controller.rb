class AuthenticationController < ApplicationController
   before_action :authorize_request, only: :verify  
   before_action :authorize_request, only: :company_verify
   #post /auth/login
   def login
    @user = User.find_by(username: login_params[:username])
      if @user.authenticate(login_params[:password])
        token = encode({id: @user.id})
        render json: {
            user: @user.attributes.except("password_digest"),
            token: token,
        }, status: :ok
        else 
            render json: { errors: 'unauthorized'}, status: :unauthorized
      end
   end
   #get/auth/verify
   def verify
    render json: @current_user.attributes.except("password_digest"), status: :ok
   end

   #for companies
   def company_login
    @company = Company.find_by(username: login_params[:username])
      if @company.authenticate(login_params[:password])
        token = encode({id: @user.id})
        render json: {
            company: @company.attributes.except("password_digest"),
            token: token,
        }, status: :ok
        else 
            render json: { errors: 'unauthorized'}, status: :unauthorized
      end
   end
   #get/auth/verify
   def company_verify
    render json: @current_company.attributes.except("password_digest"), status: :ok
   end




   private

   def login_params
    params.require(:authentication).permit(:username, :password)
   end
end
