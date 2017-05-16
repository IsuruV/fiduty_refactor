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
    let updatedValue = 0;
    for(let i =0; i<data.length; i++){
      updatedValue += fetchPrices(data[i].symbol, data[i].transaction, updatedValue);
    }

    appendValue(updatedValue);

  });
}

const fetchPrices = (symbol, transaction, updatedValue)=>{
  this.symbol = symbol;
  this.transaction = transaction;
  this.updatedValue = updatedValue;
  let lastTrade = '';
  let result = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22${symbol}%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`;
  $.get( `${result}`, (data)=> {
    lastTrade = data.query.results.quote.LastTradePriceOnly;
    return lastTrade;
    // do calculations
    // updatedValue += calculateValue(lastTrade, transaction);

    // console.log('last trade');
    // console.log(lastTrade);
    // console.log('updated value');
    // console.log(updatedValue);
    // console.log('WORKS');
  }).then((lastTrade)=>{
       calculateValue(lastTrade.query.results.quote.LastTradePriceOnly,transaction);
  });
}

const calculateValue = (lastTrade, transaction)=>{
  let value = lastTrade * transaction.weight;
  console.log('calculate value');
  console.log(value);
  debugger;
  return value;
}


const appendValue = (value)=>{
  // debugger;
  // let value = lastTrade * transaction.weight;
  // let lastAmount = $('span#value').text(); =
  $('span#value').text(value);
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
