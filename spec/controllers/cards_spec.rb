require 'rails_helper'

describe CardsController do
  describe "#index" do
    it "returns list of all cards" do
      get :index
      expect(response.body).to include "cards"
    end
  end

  describe "#create" do
    it "creates a card" do
      post :create, {card: {name: "Blah"}}, format: "json"
      expect(response.body).to include "Blah"
    end
    it "returns error when it can't make a card" do
      Card.create(name:"Blah", hearthstone_id: "frank")
      post :create, {card: {name: "nope", hearthstone_id: "frank"}}, format: "json"
      expect(response.body).to include "has already been taken"
    end
  end

end
