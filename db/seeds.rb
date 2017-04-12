# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#

# Portfolio.all.each do |portfolio|
#     portfolio.reviews.create(content: Faker::Company.catch_phrase)
# end

# Review.all.each do |review|
#     review.rating = rand(1..5)
#     review.save
# end

# require 'csv'
# require 'pry'

# csv_text = File.read('db/migrate/Safety_Net.csv')
# csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
# csv.each do |row|
#
#   @advisor = Advisor.find_or_create_by(type_of_fund: row[1], name: row[2], address: row[4])
#   @advisor.portfolios.find_or_create_by(open: row[10], day_high: row[11], day_low: row[12], volume: row[13], week_52: row[16], ytd: row[17], avg_1: row[19],
#                             avg_3: row[20], avg_5: row[21], market_cap: row[22], p_e: row[23], beta: row[24], description: row[29], investment_type: 'Safety Net',
#                             fund_type: row[3], down_side_risk: row[28])
#
#
# end
#
# csv_text = File.read('db/migrate/Conservative.csv')
# csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
# csv.each do |row|
#
#   @advisor = Advisor.find_or_create_by(type_of_fund: row[1], name: row[2], address: row[4])
#   @advisor.portfolios.find_or_create_by(open: row[10], day_high: row[11], day_low: row[12], volume: row[13], week_52: row[16], ytd: row[17], avg_1: row[19],
#                             avg_3: row[20], avg_5: row[21], market_cap: row[22], p_e: row[23], beta: row[24], description: row[29], investment_type: 'Conservative',
#                             fund_type: row[3], down_side_risk: row[28])
#
#
# end
#
# csv_text = File.read('db/migrate/Moderate.csv')
# csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
# csv.each do |row|
#
#   @advisor = Advisor.find_or_create_by(type_of_fund: row[1], name: row[2], address: row[4])
#   @advisor.portfolios.find_or_create_by(open: row[10], day_high: row[11], day_low: row[12], volume: row[13], week_52: row[16], ytd: row[17], avg_1: row[19],
#                             avg_3: row[20], avg_5: row[21], market_cap: row[22], p_e: row[23], beta: row[24], description: row[29], investment_type: 'Moderate',
#                             fund_type: row[3])
#
#
# end
#
#
# csv_text = File.read('db/migrate/Aggressive.csv')
# csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
# csv.each do |row|
#
#   @advisor = Advisor.find_or_create_by(type_of_fund: row[1], name: row[2], address: row[4])
#   @advisor.portfolios.find_or_create_by(open: row[10], day_high: row[11], day_low: row[12], volume: row[13], week_52: row[16], ytd: row[17], avg_1: row[19],
#                             avg_3: row[20], avg_5: row[21], market_cap: row[22], p_e: row[23], beta: row[24], description: row[29], investment_type: 'Aggressive',
#                             fund_type: row[3], down_side_risk: row[28])
# end

#### YAHOO API to get risks

# CsvParser.etf_parser
# Portfolio.all.each do |portfolio|
#   YahooApi.update_portfolio_risk_ratios(portfolio)
# end
#### /YAHOO API to get risks


# Portfolio.all.each do |portfolio|
#   yahoo_client = YahooFinance::Client.new
#      data = yahoo_client.quotes([portfolio.symbol], [:annualized_gain ])
#      portfolio.update(avg_1: data)
# end


# Task.create(level_id: 1, task: 'What is investing?')
# Task.create(level_id: 1, task: 'Make one investment')
# Task.create(level_id: 1, task: 'Level one: 1 question quiz')

# Task.create(level_id: 2, task: 'What is ...')
# Task.create(level_id: 2, task: 'Invite 1 friend')
# Task.create(level_id: 2, task: 'Level two: 2 question quiz')

# Task.create(level_id: 3, task: 'What is diversificaton?')
# Task.create(level_id: 3, task: 'Make additonal Investment to the same fund')
# Task.create(level_id: 3, task: 'Level three: Answer a quiz')

# Task.create(level_id: 4, task: 'Invest in a portfolio of your risk level')
# Task.create(level_id: 4, task: 'Invite 10 friends')
# Task.create(level_id: 4, task: 'Invest in one of the social feed portfolios')

# @understand = TableSkill.all.first
# @invest = TableSkill.all.second
# @coinvest = TableSkill.all.last

# Task.create(level_id:1 , task:"What is investing", table_skill_id:1)
# Task.create(level_id:1 , task:"Make one investment", table_skill_id:2)
# Task.create(level_id:1 , task:"1 question quiz", table_skill_id:1)

# Task.create(level_id:2 , task:"What is a stock?", table_skill_id:1)
# Task.create(level_id:2 , task:"Make 2 investments", table_skill_id:2)
# Task.create(level_id:2 , task:"2 question quiz", table_skill_id:1)

# Task.create(level_id:3 , task:"Whats is bond", table_skill_id:1)
# Task.create(level_id:3 , task:"Make an additional investment", table_skill_id:2)
# Task.create(level_id:3 , task:"Take a quiz", table_skill_id:1)

# Task.create(level_id:4 , task:"What is return", table_skill_id:1)
# Task.create(level_id:4 , task:"What is interest", table_skill_id:1)
# Task.create(level_id:4 , task:"Take a quiz", table_skill_id:1)

# Task.create(level_id:5 , task:"What is risk", table_skill_id:1)
# Task.create(level_id:5 , task:"Make a risky investment", table_skill_id:2)
# Task.create(level_id:5 , task:"Invest through social feed", table_skill_id:3)

# Task.create(level_id:6 , task:"Take a quiz for risk", table_skill_id:1)
# Task.create(level_id:6 , task:"What is a portfolio", table_skill_id:1)
# Task.create(level_id:6 , task:"Sell a bad performing portfolio", table_skill_id:2)

# Task.create(level_id:7 , task:"What is diversification", table_skill_id:1)
# Task.create(level_id:7 , task:"Special task/quiz. Based on your own information", table_skill_id:1)
# Task.create(level_id:7 , task:"Take a quiz on portfolio", table_skill_id:1)

# Task.create(level_id:8 , task:"What is a robot/ETF", table_skill_id:1)
# Task.create(level_id:8 , task:"Reach 100$ in total investment", table_skill_id:2)
# Task.create(level_id:8 , task:"Create a group", table_skill_id:3)

# Task.create(level_id:9 , task:"What is a 'human'", table_skill_id:1)
# Task.create(level_id:9 , task:"Create a group", table_skill_id:3)
# Task.create(level_id:9 , task:"Create a group", table_skill_id:2)
# Task.create(level_id:9 , task:"Quiz - Robots", table_skill_id:1)
# Task.create(level_id:9 , task:"Quiz - Humans", table_skill_id:1)


# create level

Level.find_or_create_by(level: 1 , name: "One")
Level.find_or_create_by(level: 2 , name: "Two")
Level.find_or_create_by(level: 3 , name: "Three")
Level.find_or_create_by(level: 4 , name: "Four")
Level.find_or_create_by(level: 5 , name: "Five")
Level.find_or_create_by(level: 6 , name: "Six")
Level.find_or_create_by(level: 7 , name: "Seven")
Level.find_or_create_by(level: 8 , name: "Eight")
Level.find_or_create_by(level: 9 , name: "Nine")

# create and set etf vals

Portfolio.find_or_create_by(symbol: "SPY")
Portfolio.find_or_create_by(symbol: "TAN")
Portfolio.find_or_create_by(symbol: "QQQ")
Portfolio.find_or_create_by(symbol: "VWO")
Portfolio.find_or_create_by(symbol: "VEA")
Portfolio.find_or_create_by(symbol: "VNQ")
Portfolio.find_or_create_by(symbol: "VUG")
Portfolio.find_or_create_by(symbol: "VTV")

Portfolio.all.each do |etf|
  YahooApi.update_portfolio_risk_ratios(etf)
end

YahooApi.update_all_etfs

@spy = Portfolio.find_by(symbol: "SPY")
@tan = Portfolio.find_by(symbol: "TAN")
@qqq = Portfolio.find_by(symbol: "QQQ")
@vwo = Portfolio.find_by(symbol: "VWO")
@vea = Portfolio.find_by(symbol: "VEA")
@vnq = Portfolio.find_by(symbol: "VNQ")
@vug = Portfolio.find_by(symbol: "VUG")
@vtv = Portfolio.find_by(symbol: "VTV")

@spy.simple_description = "Our most popular offering, Benchmark is world famous as an investment fund. It is composed of 500 large US companies, and it has set a performance standard in its lifetime. Long-term, this fund is exceedingly difficult to beat."
@spy.fiduty_name = "Benchmark"
@spy.save

@tan.simple_description = "If you are someone who considers themselves socially responsible and you want to be active in making a positive impact on the planet, Clean Energy could be the right choice for you. The emphasis here is on decreasing our carbon footprint."
@tan.fiduty_name = "Clean Energy"
@tan.save

@qqq.simple_description = "Tracking a variety of technology companies, Technology Mix is popular among young people for connecting them to the companies that touch their lives the most, including Facebook, Google, Apple, and Tesla."
@qqq.fiduty_name = "Technology Mix"
@qqq.save

@vwo.simple_description = "To the risk-takers belong the greatest rewards. If you can handle the pressure of a high-risk investment, then this is the fund for you, investing heavily in emerging markets, which are known for failing often and quickly but also for winning big sometimes."
@vwo.fiduty_name = "Roller Coaster"
@vwo.save

@vea.simple_description = "You do not need to invest in Canada or the United States alone. There are other strong, developed options overseas, and this fund will give you access to those options so that you can diversify confidently."
@vea.fiduty_name = "Advanced Economies"
@vea.save

@vnq.simple_description = "There is an old saying about land: they’re not making any more of it! Even if you are not a homeowner yet, you probably understand just what a crucial investment real estate can be. This includes hotels, malls, office space, warehouse, and other real estate."
@vnq.fiduty_name = "Property Tycoon"
@vnq.save

@vug.simple_description = "While there is a definite time and place to seek out a stream of payments, there are benefits to leaving your investments alone and letting them develop. This fund collects strong, innovative companies such as Facebook, Google, and Disney for that purpose."
@vug.fiduty_name = "Growth Hacking"
@vug.save

@vtv.simple_description = "There are undervalued buys out there, and if you can find them for yourself, you can turn a healthy profit off investing in them. That is what this fund does, saving you the work of picking out such solid bets as ExxonMobil, Wells Fargo, and Johnson & Johnson."
@vtv.fiduty_name = "Undervalued Stocks"
@vtv.save

## creat skill table
TableSkill.find_or_create_by(skill_name: "Understand")
TableSkill.find_or_create_by(skill_name: "Invest")
TableSkill.find_or_create_by(skill_name: "Co-Invest")


Task.create(level_id:1 , task:"What is investing", table_skill_id:1)
Task.create(level_id:1 , task:"Make one investment", table_skill_id:2)
Task.create(level_id:1 , task:"Which One is an Investment?", table_skill_id:1)

Task.create(level_id:2 , task:"Whats is bond", table_skill_id:1)
Task.create(level_id:2 , task:"Make an additional investment", table_skill_id:2)
Task.create(level_id:2 , task:"Take a quiz", table_skill_id:1)

Task.create(level_id:3 , task:"What is a stock?", table_skill_id:1)
Task.create(level_id:3 , task:"Make 2 investments", table_skill_id:2)
Task.create(level_id:3 , task:"2 question quiz", table_skill_id:1)
