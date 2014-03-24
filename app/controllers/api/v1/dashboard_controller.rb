class Api::V1::DashboardController < Api::V1::ApplicationController
  def index
    render json: { balance: Client.sum(:balance), some_random_attr: current_user.venmo_balance.to_s }
  end
end
