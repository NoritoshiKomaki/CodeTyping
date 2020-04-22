10.times do |n|
  User.create!(username: "ユーザー#{n + 1}", password: 111111)
end

10.times do |n|
  Html.create!(score: 300 - n * 30 , game: 'html1', user_id: n + 1)
end

10.times do |n|
  Css.create!(score: 300 - n * 30 , game: 'css1', user_id: n + 1)
end

10.times do |n|
  Javascript.create!(score: 300 - n * 30 , game: 'js1', user_id: n + 1)
end