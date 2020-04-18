class HtmlsController < ApplicationController

  def create
    @html = Html.create(score_params)
  end

  private
  def score_params
    params.permit(:score, :game, :user_id)
  end

end
