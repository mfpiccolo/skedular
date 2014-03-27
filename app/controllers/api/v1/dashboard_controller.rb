class Api::V1::DashboardController < Api::V1::ApplicationController
  def index
    render json: {
      balance: "$#{current_user.venmo_balance}",
      approved_payables: "$100.00",
      upapproved_payables: "$50.00",
      approved_receivables: "$25.00",
      unapproved_receivables: "$76.25"
    }
  end
end
