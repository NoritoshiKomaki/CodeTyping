class CssesController < ApplicationController

  before_action :require_login

  def index
    @css = Css.where(user_id: current_user.id)
    @css1 = @css.where(game: "css1").maximum(:score)
  end

  def create
    @css = Css.create(score_params)
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
