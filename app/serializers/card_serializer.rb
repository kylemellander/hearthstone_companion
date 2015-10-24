class CardSerializer < ActiveModel::Serializer
  cache key: 'card', expires_in: 6.hours
  attributes :id, :name, :card_set, :rarity, :cost, :player_class, :card_type, :img, :hearthstone_id
end
