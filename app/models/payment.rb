class Payment < ActiveRecord::Base
  belongs_to :user

  # TODO add validation to have either user id or email

  monetize :amount_cents

  def self.approved
    where(approved: true)
  end

  def self.unapproved
    where(approved: false)
  end

  def title
    description
  end

  def start
    payment_at.to_date
  end

  def as_json options=nil
    options ||= {}
    options[:methods] = ((options[:methods] || []) + [:title, :start])
    super options
  end

end
