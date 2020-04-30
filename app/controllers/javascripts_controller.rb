class JavascriptsController < ApplicationController

  def index
    if user_signed_in?
      @js = Javascript.where(user_id: current_user.id)
      @js1 = @js.where(game: "js1").maximum(:score)
      @js2 = @js.where(game: "js2").maximum(:score)
    end
  end

  def create
    @js = Javascript.create(score_params)
  end

  def show
    @ranks = Javascript.group(:user_id).maximum(:score).sort_by { |_, v| -v }
    @ranks_h = @ranks.to_h
    @user_id = @ranks_h.keys
    @pages = Kaminari.paginate_array(@ranks).page(params[:page]).per(10)
    if user_signed_in?
      @id = Javascript.find_by(user_id: current_user.id)
    end
  end

  private
  def score_params
    params.permit(:score, :game, :user_id)
  end

end
