require 'rails_helper'

describe CardDeck do
  it { should belong_to :card }
  it { should belong_to :deck }
end
