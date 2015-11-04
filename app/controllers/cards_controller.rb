class CardsController < ApplicationController

  def index
    @cards = Card.all
    if user && Devise.secure_compare(user.authentication_token, token)
      render json: @cards, user_id: user.id
    end
  end

  def show
    @card = Card.find(params[:id])
  end

  def create
    if user && Devise.secure_compare(user.authentication_token, token)
      @card = Card.find_or_initialize_by(name: card_params[:name])
      @card.update(card_params)
      if @card.save
        render json: @card, status: :created, location: @card
      else
        render json: @card.errors, status: :unprocessable_entity
      end
    end
  end

  def update
    if user && Devise.secure_compare(user.authentication_token, token)
      @card = Card.find(params[:id])
      card_user = CardUser.find_or_create_by(card_id: params[:id], user_id: user.id)
      card_user.update(count: count)
      render json: @card, user_id: user.id
    end
  end

private

  def card_params
    params.require(:card).permit(:name, :card_set, :rarity, :cost, :player_class, :card_type, :img, :hearthstone_id)
  end

  def count
    params.require(:card).permit(:count)[:count]
  end

  def token
    if !env["HTTP_AUTHORIZATION"].nil?
      env["HTTP_AUTHORIZATION"].split('"')[1]
    elsif !request.env["rack.session"].nil? && !request.env["rack.session"]["HTTP_AUTHORIZATION"].nil?

      request.env["rack.session"]["HTTP_AUTHORIZATION"].split('"')[1]
    end
  end

  def user_email
    if !env["HTTP_AUTHORIZATION"].nil?
      env["HTTP_AUTHORIZATION"].split('"')[3]
    elsif !request.env["rack.session"].nil? && !request.env["rack.session"]["HTTP_AUTHORIZATION"].nil?
      request.env["rack.session"]["HTTP_AUTHORIZATION"].split('"')[3]
    end
  end

  def user
    user_email && User.find_by_email(user_email)
  end


end
