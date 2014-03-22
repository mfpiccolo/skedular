class Api::V1::DashboardController < Api::V1::ApplicationController
  def index
    render json: { balance: Client.sum(:balance), some_random_attr: "Some Random Attr" }
  end
end
