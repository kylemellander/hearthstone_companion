require 'rails_helper'

RSpec.describe UserInfo, type: :model do
  it { should belong_to :user }
end
