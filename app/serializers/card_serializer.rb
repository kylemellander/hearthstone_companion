class CardSerializer < ActiveModel::Serializer
  # cache key: 'card', expires_in: 6.hours
  attributes :id, :name, :card_set, :rarity, :cost, :player_class, :card_type, :img, :hearthstone_id, :count

  def count
    count = 0
    card_user = CardUser.find_by(card_id: id, user_id: serialization_options[:user_id].to_i)
    if card_user != nil
      count = card_user.count
    end
    count
  end
end
