class DeckSerializer < ActiveModel::Serializer
  attributes :id, :name, :url, :player_class, :remote_id

  has_many :card_decks
  has_many :cards
  #
  # def cards
  #   result = []
  #   object.cards.each do |card|
  #     result.push(card.id)
  #   end
  #   result
  # end
end
