class ProductsController < ApplicationController
  respond_to :html, :json

  def index
    @products = Product.all
    respond_with @products
  end

  def create
    @product = Product.create(product_params)
    respond_with @product
  end


  private
  def product_params
    params.require(:product).permit(:title, :description, :price, :onsale)
  end
end
