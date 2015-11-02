class DecksController < ApplicationController
  before_action :set_deck, only: [:show, :edit, :update, :destroy]

  # GET /decks
  # GET /decks.json
  def index
    if params[:filter] != nil && params[:filter][:remote_id] != nil
      @decks = Deck.where("remote_id = ?", params[:filter].values[0])
    elsif params[:player_class] != nil
      @decks = Deck.where("player_class = ?", params[:player_class])
    else
      @decks = Deck.all
    end

    if params[:start] != nil
      end_point = params[:start].to_i + params[:limit].to_i
      if @decks.length <= end_point
        end_point = @decks.length - 1
      end
      @decks = @decks[params[:start].to_i, end_point]
    end

    render json: @decks
  end

  # GET /decks/1
  # GET /decks/1.json
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

  # # DELETE /decks/1
  # # DELETE /decks/1.json
  # def destroy
  #   @deck.destroy
  #   respond_to do |format|
  #     format.html { redirect_to decks_url }
  #     format.json { head :no_content }
  #   end
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_deck
      @deck = Deck.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def deck_params
      params.require(:deck).permit(:name, :url, :player_class, :remote_id)
    end
end
