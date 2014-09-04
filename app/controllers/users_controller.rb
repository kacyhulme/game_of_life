class UsersController < ApplicationController
  respond_to :html, :json

  def index
    @users = User.all
    respond_with @users
  end

  def show
  end

  def create
    @user = User.create(user_params)
    respond_with @user
  end


  private
  def user_params
    params.require(:user).permit(:name, :city, :age, :male, :female, :favorite_animal)
  end
end
