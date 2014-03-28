class Api::V1::PaymentsController < Api::V1::ApplicationController
  before_action :set_payment, only: [:show, :edit, :update, :destroy]

  respond_to :json

  # GET /payments
  def index
    @payments = Payment.all
    if params[:start]
      render json: @payments.to_json
    else
      respond_with @payments
    end
  end

  # GET /payments/1
  def show
    respond_with @payment
  end

  # POST /payments
  def create
    @payment = Payment.new(payment_params)

    if @payment.save
      respond_with(@payment, status: :created, location: [:api, :v1, @payment])
    else
      render json: @payment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /payments/1
  def update
    if @payment.update(payment_params)
      head :no_content
    else
      render json: @payment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /payments/1
  def destroy
    @payment.destroy

    head :no_content
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_payment
    @payment = Payment.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def payment_params
    params.require(:payment).permit(:id, :payent_date, :description, :payment_at,
     :payer_email, :collector_id, :payer_id, :amount_cents, :created_at, :updated_at, :payer_email, :approved)
  end
end
