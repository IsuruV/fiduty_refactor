class Portfolio < ApplicationRecord
    belongs_to :advisor, required: false
    # has_one :advisor
    has_many :user_portfolios
    has_many :users, :through => :user_portfolios
    has_many :reviews

    def self.search_portfolios_by_criteria(portfolio_type, advisor_type)
        portfolios_sorted = []
        Portfolio.where(investment_type: portfolio_type).each do |portfolio|
            if portfolio.advisor.type_of_fund == advisor_type
                portfolios_sorted.push(portfolio)
            end
        end
        portfolios_sorted
    end

      def self.search_fund_type_only(advisor_type)
          portfolios_sorted = []
        Portfolio.all.each do |portfolio|
            if portfolio.advisor.type_of_fund == advisor_type
                portfolios_sorted.push(portfolio)
            end
        end
        portfolios_sorted
     end

     def self.portfolios_index_page_formated(advisor_type)

       portfolios = Portfolio.search_portfolio_type_only(advisor_type)
       portfolios_formatted = []
       portfolios.each do |portfolio|
         portfolios_formatted.push({'advisor_id': portfolio.advisor_id,'symbol': portfolio.symbol, 'portfolioID': portfolio.id, 'portfolioName': portfolio.name,
                                    'portfolioSymbol': portfolio.symbol, 'fundType': portfolio.fund_type,
                                    'roi': portfolio.ytd_raw, 'ratingTotal': portfolio.reviews.average(:rating)
                                    })
       end
       portfolios_formatted
     end

      def self.destroy_nil_risk_portfolios
        errors = Portfolio.where(stdDev: 0.0, fund_type: 'ETF')
        errors.each do |error|
          Portfolio.destroy(error)
        end
      end


      def self.safety_net
        Portfolio.all.where('"stdDev" < 5')
      end

      def self.conservative
        Portfolio.all.where(' "stdDev" >= 5 AND "stdDev" <= 10')
      end

      def self.moderate
        Portfolio.all.where(' "stdDev" > 10 AND "stdDev" <= 30')
      end

      def self.aggressive
        Portfolio.all.where(' "stdDev" > 30')
      end

      def self.search_portfolio_type_only(portfolio_type)
          if portfolio_type == 'safety_net'
            Portfolio.safety_net
          elsif portfolio_type == 'conservative'
            Portfolio.conservative
          elsif portfolio_type == 'moderate'
            Portfolio.moderate
          elsif portfolio_type == 'aggressive'
            Portfolio.aggressive
          end
      end

      def self.filter_by(portfolio_type, filter)
        portfolios = Portfolio.search_portfolio_type_only(portfolio_type)
        if filter == 'reviews'
          portfolios.reviews.order('rating desc')
        elsif filter == 'return'
          portfolios.order('ytd_raw desc')
        end
      end

      def real_time_quotes
        # YahooApi.real_time_quotes(self.symbol)
      end

      def return_price
        yahoo_client = YahooFinance::Client.new
        data = yahoo_client.quotes([self.symbol], [:last_trade_price])
        data_formatted = data[0]
        # self.update(price: data_formatted[:last_trade_price].to_f)
        data_formatted[:last_trade_price].to_f
      end

      def self.lvl_based_portfolios
          [lvl_one_portfolios, lvl_two_portfolios, lvl_three_portfolios, lvl_four_portfolios]
      end

      def self.lvl_one_portfolios
        portfolios = {"level":"1", "description": "5 backbone Industries that is driving the US economy: Manufacturing, Energy,
                        Transportation, Agriculture and Healthcare. Here 3 of those sectors will be available for
                        Fiduty investors and they are Manufacturing, Energy and Transportation sectors of US economy.",
                      portfolios: []
        }
        # Portfolio.where(symbol:['SPY','TAN','QQQ']).each{|port| port.return_price}
        portfolios['portfolios'] = Portfolio.where(symbol:['SPY','TAN','QQQ'])
        portfolios
      end

      def self.lvl_two_portfolios
        portfolios = {"level":"2", "description": "Agriculture and Healthcare sectors will open here. Healthcare is one of the
                      fastest growing industries mainly because of the aging population. Agriculture has done well
                      since recession in 2008 due to the increase in the global demand for agricultural products. ",
                      portfolios: []
        }

        portfolios['portfolios'] = Portfolio.where(symbol:['VWO','VEA'])
        portfolios
      end

      def self.lvl_three_portfolios
        portfolios = {"level":"3", "description": "",
                      portfolios: []
        }

        portfolios['portfolios'] = Portfolio.where(symbol:['VNQ','VUG','VTV'])
        portfolios
      end

      def self.lvl_four_portfolios
        portfolios = {"level":"4", "description": "",
                      portfolios: []
        }

        portfolios['portfolios'] = Portfolio.where(symbol:['SPY','DIA'])
        portfolios
      end

end
# @port = Portfolio.all.where(symbol:'DIA').first
# @port.update(simple_description: 'One of the oldest, most watched indices in the world. It consists of 30 companies. When media says: "The market is up, most likely they are referring to this fund which is known as Dow Jones in financial world.')
# @port.save
