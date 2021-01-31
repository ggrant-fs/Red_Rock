class CompanyController < ApplicationController
  before :set_user, only: [:show, :update, :delete]
  before_action :authorize_request, except: :create
  def index
     #the index method is a get request that will retreive all
    #the requested data in our database
    @company = Company.all
    render json: @company
  end

  def show
    #the show method will return one specific item from the 
    #database with the use of an ID (it is also a get request)
    render json: @company
  end

  def create
   #create is a post request that will create data that is submitted
    #from the client side to the backend(create will not take an ID)
    @company = Company.new(company_params)
    if @company.save
      render json: @company, status: :created
    else
      render json: @company, status: :unprocessable_entity
    end
  end

  def update
    #udate is a put request to update an item in our database
    #the update method will first use the find method to locate the
    #item then use the update method to change the state of the item
    #update does use an ID
    if @company.update(company_params)
      render json: @company
    else
      render json: @company.errors, status: :unprocessable_entity
    end
  end

  def delete
      #The delete meothod will use a destroy request. Although
    #before an item is removed permently from the database via the
    #destroy method it must first use the find method to locate
    #the item in the database.Once the item is selected it can
    #select and destroy the item from the database
    @company.destroy
  end

  private

  def company_params
    @company = Company.find(params[:id])
  end
end
