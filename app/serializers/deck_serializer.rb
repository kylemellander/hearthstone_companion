class DeckSerializer < ActiveModel::Serializer
  attributes :id, :name, :url, :player_class, :remote_id

  has_many :card_decks
end
