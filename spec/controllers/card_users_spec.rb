require 'rails_helper'

describe CardUsersController do
  describe "#index" do
    it "returns json error when not logged in" do
      get :index
      expect(response.body).to eq '{"error":"You are not logged in."}'
    end

    it "returns list of all card_users" do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      user = FactoryGirl.create(:user)
      sign_in :user, user
      get :index, {}, { 'HTTP_AUTHORIZATION'=>"Token token=\"#{user.authentication_token}\", user_email=\"#{user.email}\"" }
      expect(response.body).to eq "{\"card_users\":[]}"
    end
  end

  describe "#show" do
    it "returns error when not logged in" do
      user = FactoryGirl.create(:user)
      card = Card.create(name: "Innervate", id:1)
      card_user = CardUser.create(card: card, count: 1, user: user)
      get :show, id: card.id
      expect(response.body).to eq '{"error":"You are not logged in."}'
    end

    it "returns specific card_user" do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      user = FactoryGirl.create(:user)
      sign_in :user, user
      card = Card.create(name: "Innervate", id:1)
      card_user = CardUser.create(card: card, count: 1, user: user)
      get :show, {id: card_user.id}, { 'HTTP_AUTHORIZATION'=>"Token token=\"#{user.authentication_token}\", user_email=\"#{user.email}\"" }
      expect(response.body).to eq "{\"card_user\":{\"id\":#{card_user.id},\"count\":1,\"card_id\":1}}"
    end
  end

  describe "#create" do
    it "returns error when not logged in" do
      user = FactoryGirl.create(:user)
      card = Card.create(name: "Innervate", id:1)
      post :create, {card_id: card.id, count: 1}
      expect(response.body).to eq '{"error":"You are not logged in."}'
    end

    it "returns specific card_user" do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      user = FactoryGirl.create(:user)
      sign_in :user, user
      card = Card.create(name: "Innervate", id:1)
      post :create, {card_user: {card_id: card.id, count: 1}}, { 'HTTP_AUTHORIZATION'=>"Token token=\"#{user.authentication_token}\", user_email=\"#{user.email}\"" }
      expect(response.body).to eq "{\"card_user\":{\"id\":#{response.body.split("\"id\":").last.split(",\"count").first
},\"count\":1,\"card_id\":1}}"
    end
  end

  describe "#update" do
    it "returns error when not logged in" do
      user = FactoryGirl.create(:user)
      card = Card.create(name: "Innervate", id:1)
      card_user = CardUser.create(card: card, count: 1, user: user)
      patch :update, {id: card_user.id, count: 2}
      expect(response.body).to eq '{"error":"You are not logged in."}'
    end

    it "returns specific card_user" do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      user = FactoryGirl.create(:user)
      sign_in :user, user
      card = Card.create(name: "Innervate", id:1)
      card_user = CardUser.create(card: card, count: 1, user: user)
      patch :update, {id: card_user.id, card_user: {card_id: card.id, count: 2}}, { 'HTTP_AUTHORIZATION'=>"Token token=\"#{user.authentication_token}\", user_email=\"#{user.email}\"" }
      expect(response.body).to eq "{\"card_user\":{\"id\":#{card_user.id},\"count\":2,\"card_id\":1}}"
    end
  end
end
