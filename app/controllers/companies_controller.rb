class CompaniesController < ApplicationController
  before_action :set_user, only: [:show, :update, :delete]
  before_action :authorize_request, except: :create
  def index
    @company = Company.all
    render json: @company
  end

  def show
    render json: @company
  end

  def create
    @company = Company.new(company_params)
    if @company.save
      @token = encode({id:@company.id})
     render json: {
       company: @company.attributes.except("password_digest"),
       token: @token
     }, status: :created
     else
      render json: @company.errors, status: :unprocessable_entity
     end
  end

  def update
    if @company.update(company_params)
      render json: @company
    else
      render json: @company.errors, status: :unprocessable_entity
    end
  end

  def delete
    @company.destroy
  end

  private

def set_company
  @company = Company.find(params[:id])
end

  def company_params
  params.require(:company).permit(:username, :email, :password, :phone_number, :industry, :suffix, :duns)
  end
  
end
