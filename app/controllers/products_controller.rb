class ProductsController < ApplicationController
  respond_to :html, :json

  def index
    @products = Product.all
    respond_with @products
  end
end
