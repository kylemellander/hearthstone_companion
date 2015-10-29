class CardDecksController < ApplicationController
  def create
    if user && Devise.secure_compare(user.authentication_token, token)
      card_deck = CardDeck.find_or_initialize_by(deck_id: card_deck_params[:deck_id].to_i, card_id: card_deck_params[:card_id].to_i)
      card_deck.update(count: card_deck_params[:count])
      card_deck.save
      render json: card_deck
    else
      render json: {"error": "You are not logged in."}
    end
  end

  private

  def token
    if !env["HTTP_AUTHORIZATION"].nil?
      env["HTTP_AUTHORIZATION"].split('"')[1]
    end
  end

  def user_email
    binding.pry
    if !env["HTTP_AUTHORIZATION"].nil?
      env["HTTP_AUTHORIZATION"].split('"')[3]
    end
  end

  def user
    user_email && User.find_by_email(user_email)
  end

  def card_deck_params
    params.require(:card_deck).permit(:card_id, :count, :deck_id)
  end

end
