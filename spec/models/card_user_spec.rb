require 'rails_helper'

describe CardUser do
  it { should belong_to :card }
  it { should belong_to :user }
end
