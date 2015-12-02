require 'rails_helper'

describe CardsController do
  describe "#index" do
    it "returns list of all cards" do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      user = FactoryGirl.create(:user)
      sign_in :user, user
      get :index, {}, { 'HTTP_AUTHORIZATION'=>"Token token=\"#{user.authentication_token}\", user_email=\"#{user.email}\"" }
      expect(response.body).to include "cards"
    end
  end

  describe "#create" do
    it "creates a card" do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      user = FactoryGirl.create(:user)
      sign_in :user, user
      post :create, {card: {name: "Blah"}}, { 'HTTP_AUTHORIZATION'=>"Token token=\"#{user.authentication_token}\", user_email=\"#{user.email}\"" }, format: "json"
      expect(response.body).to include "Blah"
    end
    it "returns error when it can't make a card" do
      @request.env["devise.mapping"] = Devise.mappings[:user]
      user = FactoryGirl.create(:user)
      sign_in :user, user
      Card.create(name:"Blah", hearthstone_id: "frank")
      post :create, {card: {name: "nope", hearthstone_id: "frank"}}, { 'HTTP_AUTHORIZATION'=>"Token token=\"#{user.authentication_token}\", user_email=\"#{user.email}\"" }, format: "json"
      expect(response.body).to include "has already been taken"
    end
  end

end
