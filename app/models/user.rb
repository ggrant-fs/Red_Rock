class User < ApplicationRecord
    has_secure_password
    validates :username , presence:true, uniqueness: true
    validates :email, presence:true, uniqueness: true
    validates :email, format: { with: URI:MailTo::EMAIL_REGEX}
    validates :password, length: {minimum: 6}
end
