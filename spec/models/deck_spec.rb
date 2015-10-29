require 'rails_helper'

describe Deck do
  it { should have_many :cards }
  it { should have_many :card_decks }
end
