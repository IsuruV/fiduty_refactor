const updateEtfPrices = (data)=>{
  var tickers = [];
  for(let i =0; i< data.portfolios.length; i++){
    data.portfolios[i].portfolios.forEach((portfolio)=>{
      tickers.push(portfolio.symbol);
    });
  }
  updatePrices(tickers);
  console.log(tickers);
}

const appendPriceChange = (location, currentPrice) =>{
  $(`h2#${location}`).text(`$${Math.round(currentPrice * 100) / 100}`);
}

const fetchPrice = (symbol)=>{
var lastTrade = '';
let result = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22${symbol}%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`;
$.get( `${result}`, function( data ) {
  lastTrade = data.query.results.quote.LastTradePriceOnly;
  console.log(lastTrade);
  appendPriceChange(symbol, lastTrade);
})
}

const updatePrices = (data)=>{
  var tickers = data
  for (let i =0; i<tickers.length; i++){
    window.setInterval(function(){
    fetchPrice(tickers[i]);
  }, 1000);
  }
}
