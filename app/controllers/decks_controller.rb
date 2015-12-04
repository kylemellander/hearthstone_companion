class DecksController < ApplicationController
  before_action :set_deck, only: [:show, :edit, :update, :destroy]

  # GET /decks
  def index
    if params[:filter] != nil && params[:filter][:remote_id] != nil
      @decks = Deck.where("remote_id = ?", params[:filter].values[0])
    elsif params[:player_class] != nil
      if !params[:start].nil? && !params[:limit].nil?
        @decks = Deck.where("player_class = ? ", params[:player_class]).order(created_at: :desc).limit(params[:limit].to_i).offset(params[:start].to_i)
      else
        @decks = Deck.where("player_class = ? ", params[:player_class]).order(created_at: :desc)
      end
    elsif !params[:start].nil? && !params[:limit].nil?
      @decks = Deck.order(created_at: :desc).limit(params[:limit].to_i).offset(params[:start].to_i)
    else
      @decks = Deck.order(created_at: :desc)
    end

    render json: @decks
  end

  # GET /decks/1
  def show
    render json: @deck
  end

  # POST /decks
  # POST /decks.json
  def create
    @deck = Deck.new(deck_params)

    if @deck.save
      render json: @deck, status: :created
    else
      render json: @deck.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /decks/1
  # PATCH/PUT /decks/1.json
  def update
    if @deck.update(deck_params)
      render json: @deck
    else
      render json: @deck.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_deck
      @deck = Deck.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def deck_params
      params.require(:deck).permit(:name, :url, :player_class, :remote_id, :deck_type, :position)
    end
end
