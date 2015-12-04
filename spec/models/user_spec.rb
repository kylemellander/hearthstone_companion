require 'rails_helper'

describe User do
  it { should have_many :cards }
  it { should have_many :card_users }
  it "ensures authentication token" do
    expect(User.new.ensure_authentication_token).not_to eq ""
  end
  it { should have_one :user_info }
end
