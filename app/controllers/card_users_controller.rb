class CardUsersController < ApplicationController
  def index
    if user && Devise.secure_compare(user.authentication_token, token)
      @card_users = user.card_users
      render json: @card_users
    else

      render json: {"error": "You are not logged in."}
    end
  end

  def show
    if user && Devise.secure_compare(user.authentication_token, token)
      @card_user = CardUser.find(params[:id])
      render json: @card_user
    else
      render json: {"error": "You are not logged in."}
    end
  end

  def create
    if user && Devise.secure_compare(user.authentication_token, token)
      card_user = CardUser.find_or_initialize_by(user_id: user.id, card_id: card_user_params[:card_id].to_i)
      card_user.update(count: card_user_params[:count])
      card_user.save
      render json: card_user
    else
      render json: {"error": "You are not logged in."}
    end
  end

  def update
    if user && Devise.secure_compare(user.authentication_token, token)
      user.card_users.where(card_id: card_user_params[:card_id].to_i)[0].update({count: card_user_params[:count]})
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

  def card_user_params
    params.require(:card_user).permit(:card_id, :count, :id)
  end
end
