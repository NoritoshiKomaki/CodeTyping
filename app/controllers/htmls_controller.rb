class HtmlsController < ApplicationController

  before_action :require_login

  def index
    @html = Html.where(user_id: current_user.id)
    @html1 = @html.where(game: "html1").maximum(:score)
  end

  def create
    @html = Html.create(score_params)
  end

  private
  def score_params
    params.permit(:score, :game, :user_id)
  end

  def require_login
    unless user_signed_in?
      redirect_to new_user_session_path
    end
  end

end
