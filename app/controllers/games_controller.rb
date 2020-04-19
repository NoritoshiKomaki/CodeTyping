class GamesController < ApplicationController

  def show
    @htmls = Html.group(:user_id).maximum(:score).sort_by { |_, v| -v }.to_h
    @user_id = @htmls.keys
  end
end
