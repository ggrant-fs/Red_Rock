class UserController < ApplicationController
  #controllers provides us with all the logic as to 
  #how the routes are managed. In ruby to create the 
  # routes we must first create the controlers with 
  # the following methods (index, show, create, update
  # delete)

  #each of these methods will have specifi logic what will 
  #satisfy CRUD
  def index
    #the index method is a get request that will retreive all
    #the requested data in our database
   
    # @user is an instance variable that holds our User get request
    # line 17 renders data in the variable in json format
    @user = User.all
    render json: @user
  end

  def show
    #the show method will return one specific item from the 
    #database with the use of an ID (it is also a get request)
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    #create is a post request that will create data that is submitted
    #from the client side to the backend(create will not take an ID)
    @user = User.create(params)
    render json: @user
  end

  def update
    #udate is a put request to update an item in our database
    #the update method will first use the find method to locate the
    #item then use the update method to change the state of the item
    #update does use an ID

    @user = User.find(params[:id])
    @user.update(params)
  end

  def delete
    #The delete meothod will use a destroy request. Although
    #before an item is removed permently from the database via the
    #destroy method it must first use the find method to locate
    #the item in the database.Once the item is selected it can
    #select and destroy the item from the database
    @user = User.find(params[:id])
    @user.destroy 
  end
end
