class BenefitsController < ApplicationController
    before_action :set_benefit, only: [:show, :update, :delete]

  def index
    @benefit = Benefit.all
    render json: @benefit
  end

  def show
    render json:@benefit
  end

  def create
   @benefit = Benefit.new(company_params)
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

  def delete
   @benefit.destroy
  end

  private

def set_benefit
 @benefit = Benefit.find(params[:id])
end

  def benefit_params
   @benefit = Benefit.find(params[:id])
  end

end
