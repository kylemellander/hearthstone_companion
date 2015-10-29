require 'rails_helper'

describe Card do
  it { should have_many :users }
  it { should have_many :card_users }
  it { should have_many :card_decks }
  it { should have_many :decks }
  it { should validate_uniqueness_of :name }
  it { should validate_uniqueness_of :hearthstone_id }
end
