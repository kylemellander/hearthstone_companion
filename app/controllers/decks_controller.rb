class DecksController < ApplicationController
  before_action :set_deck, only: [:show, :edit, :update, :destroy]

  # GET /decks
  # GET /decks.json
  def index
    decks = Deck.all
    if params[:filter] != nil && params[:filter][:remote_id] != nil
      @decks = decks.where(remote_id: params[:filter].values[0])
    else
      @decks = decks
    end

    render json: @decks
  end

  # GET /decks/1
  # GET /decks/1.json
  def show
    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @deck }
    end
  end

  # GET /decks/new
  def new
    @deck = Deck.new
  end

  # GET /decks/1/edit
  def edit
  end

  # POST /decks
  # POST /decks.json
  def create
    @deck = Deck.new(deck_params)

    respond_to do |format|
      if @deck.save
        format.html { redirect_to @deck, notice: 'Deck was successfully created.' }
        format.json { render json: @deck, status: :created }
      else
        format.html { render action: 'new' }
        format.json { render json: @deck.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /decks/1
  # PATCH/PUT /decks/1.json
  def update
    respond_to do |format|
      if @deck.update(deck_params)
        format.html { redirect_to @deck, notice: 'Deck was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @deck.errors, status: :unprocessable_entity }
      end
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
