class CssesController < ApplicationController

  def index
    if user_signed_in?
      @css = Css.where(user_id: current_user.id)
      @css1 = @css.where(game: "css1").maximum(:score)
    end
  end

  def create
    @css = Css.create(score_params)
  end

  def show
    @ranks = Css.group(:user_id).maximum(:score).sort_by { |_, v| -v }
    @ranks_h = @ranks.to_h
    @user_id = @ranks_h.keys
    @pages = Kaminari.paginate_array(@ranks).page(params[:page]).per(10)
    if user_signed_in?
      @id = Css.find_by(user_id: current_user.id)
    end
  end

  private
  def score_params
    params.permit(:score, :game, :user_id)
  end

end
