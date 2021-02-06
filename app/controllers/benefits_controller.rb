class BenefitsController < ApplicationController
    before_action :set_benefit, only: [:show, :update, :destroy]
    before_action :authorize_request_company, only: [:index,:create]

  def index
    @benefit = @current_company.benefits
    render json: @benefit
  end

  def show
    render json:@benefit
  end

  def create
   @benefit = Benefit.new(benefit_params)
   @benefit.company = @current_company

    if@benefit.save
      
     render json: @benefit, status: :created
     else
      render json:@benefit.errors, status: :unprocessable_entity
     end
  end

  def update
    if@benefit.update(benefit_params)
      render json:@benefit
    else
      render json:@benefit.errors, status: :unprocessable_entity
    end
  end

  def destroy
   @benefit.destroy
  end

  private

def set_benefit
 @benefit = Benefit.find(params[:id])
end

  def benefit_params
  params.require(:benefit).permit(:membership, :name, :price, :location, :date, :description, :expiration, :length)
  end

end
