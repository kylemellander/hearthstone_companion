class CardsController < ApplicationController

  def index
    @cards = Card.all
    render json: @cards
  end

  def create
    @card = Card.find_or_initialize_by(name: params[:name])
    @card.update(card_params)
    if @card.save
      render json: @card, status: :created, location: @card
    else
      render json: @card.errors, status: :unprocessable_entity
    end
  end

private

  def card_params
    { "name":           params[:name],
      "card_set":       params[:card_set],
      "rarity":         params[:rarity],
      "cost":           params[:cost],
      "player_class":   params[:player_class],
      "card_type":      params[:card_type],
      "img":            params[:img],
      "hearthstone_id": params[:hearthstone_id]
    }
  end

end
