class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  validates :username, presence: true, uniqueness: true, length: {maximum: 10}
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable
  VALID_PASSWORD_REGEX = /\A[a-z0-9]+\z/i
  validates :password, format: { with: VALID_PASSWORD_REGEX }


  def email_required?
    false
  end

  def email_changed?
    false
  end
end
