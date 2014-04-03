class Api::V1::DashboardController < Api::V1::ApplicationController

  def index
    render json: DashboardInfo.call(current_user)
  end
end
