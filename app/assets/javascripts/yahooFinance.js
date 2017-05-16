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



/// get up to date account value
const getInvestments= ()=>{
  $.ajax({
    type:'get',
    url:`/user_portfolios.json`,
    dataType:'json'
  }).done(function(data){
    for(let i =0; i<data.length; i++){
      fetchPrices(data[i].symbol, data[i].transaction);
    }
  });
}

const fetchPrices = (symbol, transaction)=>{
  this.symbol = symbol;
  this.transaction = transaction;
  let lastTrade = '';
  let result = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22${symbol}%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`;
  $.get( `${result}`, (data)=> {
    lastTrade = data.query.results.quote.LastTradePriceOnly;
    // do calculations
    appendValue(lastTrade, transaction)
    console.log('WORKS')
  });
}

const appendValue = (lastTrade, transaction)=>{
  debugger;
  let value = lastTrade * transaction.weight;
  let lastAmount = $('span#value').text(); =
}

const appendGainLoss = ()=>{

}
// class UpdateAccount{
//
//
//   getInvestments(){
//     $.ajax({
//       type:'get',
//       url:`/user_portfolios.json`,
//       dataType:'json'
//     }).done(function(data){
//
//     });
//
//   }
//
//   totalValue(){
//
//   }
//
//   totalGainLoss(){
//
//   }
//
//   ROI(){
//
//   }
// }
