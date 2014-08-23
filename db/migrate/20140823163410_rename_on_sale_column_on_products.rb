class RenameOnSaleColumnOnProducts < ActiveRecord::Migration
  def change
    rename_column :products, :onSale, :on_sale
  end
end
