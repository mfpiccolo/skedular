class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, :omniauth_providers => [:venmo]

  monetize :venmo_balance_cents

  after_initialize :init

  def init
    self.venmo_balance_cents ||= 0
  end
end
