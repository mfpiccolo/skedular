class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, :omniauth_providers => [:venmo]

  has_many :receivables, foreign_key: "collector_id", class_name: "Payment"
  has_many :payables, foreign_key: "payer_id", class_name: "Payment"

  monetize :venmo_balance_cents

  after_initialize :init

  def approved_receivables
    receivables.approved
  end

  def unapproved_receivables
    receivables.unapproved
  end

  def approved_payables
    payables.approved
  end

  def unapproved_payables
    payables.unapproved
  end


  private

  def init
    self.venmo_balance_cents ||= 0
  end
end
