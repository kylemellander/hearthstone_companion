class CardsController < ApplicationController

  def index
    @cards = Card.all
    render json: @cards
  end

  def show
    @card = Card.find(params[:id])
  end

  def create
    @card = Card.find_or_initialize_by(name: card_params[:name])
    @card.update(card_params)
    if @card.save
      render json: @card, status: :created, location: @card
    else
      render json: @card.errors, status: :unprocessable_entity
    end
  end

private

  def card_params
    params.require(:card).permit(:name, :card_set, :rarity, :cost, :player_class, :card_type, :img, :hearthstone_id)
  end

end
