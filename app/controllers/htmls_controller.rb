class HtmlsController < ApplicationController

def index
    if user_signed_in?
      @html = Html.where(user_id: current_user.id)
      @html1 = @html.where(game: "html1").maximum(:score)
    end
  end

  def create
    @html = Html.create(score_params)
  end

  private
  def score_params
    params.permit(:score, :game, :user_id)
  end

end
