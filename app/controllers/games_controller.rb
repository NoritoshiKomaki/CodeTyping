class GamesController < ApplicationController

  def show
    @htmls = Html.group(:user_id).maximum(:score).sort_by { |_, v| -v }
    @htmls_h = @htmls.to_h
    @user_id = @htmls_h.keys
    @pages = Kaminari.paginate_array(@htmls).page(params[:page]).per(10)
  end
end
