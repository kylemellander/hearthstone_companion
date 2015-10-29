class Deck < ActiveRecord::Base
  has_many :card_decks
  has_many :cards, through: :card_decks

  validates_presence_of :name
end
