require 'rails_helper'

describe DecksController do
  describe "#index" do
    it "returns list of all decks" do
      get :index
      expect(response.body).to eq "{\"decks\":[]}"
    end

    it "returns list of filtered decks" do
      deck = Deck.create(name: "Blah", remote_id: "Frank")
      get :index, {filter: {remote_id: "Frank"}}
      expect(response.body).to include "Blah"
      expect(response.body).to include "Frank"
    end

  end

  describe "#show" do
    it "returns a specific deck" do
      deck = Deck.create(name: "Blah")
      get :show, id: deck.id, format: "json"
      expect(response.body).to eq "{\"deck\":{\"id\":#{deck.id},\"name\":\"Blah\",\"url\":null,\"player_class\":null,\"remote_id\":null,\"card_decks\":[],\"cards\":[]}}"
    end
  end

  describe "#create" do
    it "creates a deck" do
      post :create, {deck: {name: "Blah"}}, format: "json"
      expect(response.body).to include "Blah"
    end
    it "returns error when it can't make a deck" do
      post :create, {deck: {url: "hi"}}, format: "json"
      expect(response.body).to include "can't be blank"
    end
  end

  describe "#update" do
    it "updates a deck" do
      deck = Deck.create(name:"Frank")
      patch :update, {id: deck.id, deck: {name: "George"}}
      expect(response.body).to include "George"
    end

    it "returns error when name is tried to update as blank" do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      deck = Deck.create(name:"Frank")
      patch :update, {id: deck.id, deck: {name: ""}}
      expect(response.body).to include "can't be blank"
    end
  end

end
