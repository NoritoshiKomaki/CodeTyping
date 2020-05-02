class VuesController < ApplicationController

  def index
    if user_signed_in?
      @vue = Vue.where(user_id: current_user.id)
      @vue1 = @vue.where(game: "vue1").maximum(:score)
    end
  end

  def create
    @vue = Vue.create(score_params)
  end

  def show
    @ranks = Vue.group(:user_id).maximum(:score).sort_by { |_, v| -v }
    @ranks_h = @ranks.to_h
    @user_id = @ranks_h.keys
    @pages = Kaminari.paginate_array(@ranks).page(params[:page]).per(10)
    if user_signed_in?
      @id = Vue.find_by(user_id: current_user.id)
    end
  end

  private
  def score_params
    params.permit(:score, :game, :user_id)
  end

end
