class CardUsersController < ApplicationController
  def index
    if user && Devise.secure_compare(user.authentication_token, token)
      @cards = user.cards
      render json: @cards
    else
      render json: {"error": "You are not logged in."}
    end
  end

  def create
    if user && Devise.secure_compare(user.authentication_token, token)
      card_user = CardUser.find_or_initialize_by(user_id: user.id, card_id: params[:card].to_i)
      card_user.update(count: params[:count].to_i)
      card_user.save
      head :no_content
    else
      render json: {"error": "You are not logged in."}
    end
  end

  def update
    if user && Devise.secure_compare(user.authentication_token, token)
      user.card_users.where(card_id: params[:card].to_i)[0].update({count: params[:count].to_i})
      head :no_content
    else
      render json: {"error": "You are not logged in."}
    end
  end

  def destroy
    if user && Devise.secure_compare(user.authentication_token, token)
      CardUser.find(params[:id].to_i).destroy
      head :no_content
    else
      render json: {"error": "You are not logged in."}
    end
  end

  private

  def token
    env["HTTP_AUTHORIZATION"].split('"')[1]
  end

  def user_email
    env["HTTP_AUTHORIZATION"].split('"')[3]
  end

  def user
    user_email && User.find_by_email(user_email)
  end
end
