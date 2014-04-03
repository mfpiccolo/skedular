class DashboardInfo
  include ActionView::Helpers::NumberHelper

  attr_reader :user, :approved_payables_total, :approved_receivables_total,
   :unapproved_receivables_total, :unapproved_payables_total, :net_snapshot,
   :dashboard_json

  def initialize(user)
    @user = user
  end

  def call
    build_balances
    build_json
  end

  def build_balances
    @approved_payables_total = user.approved_payables.present? ? user.approved_payables.to_a.sum(&:amount) : Money.new(0)
    @unapproved_payables_total = user.unapproved_payables.present? ? user.unapproved_payables.to_a.sum(&:amount) : Money.new(0)
    @approved_receivables_total = user.approved_receivables.present? ? user.approved_receivables.to_a.sum(&:amount) : Money.new(0)
    @unapproved_receivables_total = user.unapproved_receivables.present? ? user.unapproved_receivables.to_a.sum(&:amount) : Money.new(0)
    @net_snapshot = approved_receivables_total - approved_payables_total + user.venmo_balance
  end

  def build_json
    @dashboard_json = {
      balance: number_to_currency(user.venmo_balance),
      approved_payables: number_to_currency(approved_payables_total),
      unapproved_payables: number_to_currency(unapproved_payables_total),
      approved_receivables: number_to_currency(approved_receivables_total),
      unapproved_receivables: number_to_currency(unapproved_receivables_total),
      net_snapshot: number_to_currency(net_snapshot)
    }
  end

  def self.call(user)
    new(user).call
  end

end
