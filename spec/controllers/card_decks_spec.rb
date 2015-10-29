require 'rails_helper'

describe CardDecksController do

  describe "#create" do
    it "returns error when not logged in" do
      user = FactoryGirl.create(:user)
      card = Card.create(name: "Innervate", id:1)
      post :create, {card_id: card.id, count: 1}
      expect(response.body).to eq '{"error":"You are not logged in."}'
    end

    it "creates a card_deck" do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      user = FactoryGirl.create(:user)
      sign_in :user, user
      card = Card.create(name: "Innervate", id:1)
      deck = Deck.create(name: "DRUID")
      post :create, {card_deck: {card_id: card.id, count: 1, deck_id: deck.id}}, { 'HTTP_AUTHORIZATION'=>"Token token=\"#{user.authentication_token}\", user_email=\"#{user.email}\"" }
      expect(response.body).to eq "{\"card_deck\":{\"id\":#{response.body.split("\"id\":").last.split(",\"count").first
},\"count\":1}}"
    end
  end
end
