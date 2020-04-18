class JavascriptsController < ApplicationController

  def index
    if user_signed_in?
      @js = Javascript.where(user_id: current_user.id)
      @js1 = @js.where(game: "js1").maximum(:score)
    end
  end

  def create
    @js = Javascript.create(score_params)
  end

  private
  def score_params
    params.permit(:score, :game, :user_id)
  end

end
