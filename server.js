// 'use strict';
const API_TOKEN = "4cf98abd34bd0b1dca2e540bbfba89a310766bde"
const API_KEY = "abce8279a4914b5d8a06a8fa46d7d89f"

const express = require('express');
var cors = require('cors');
var request = require('request');
const util = require('util')
var moment = require('moment');
var bodyParser = require('body-parser')
var path = require('path');

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var requestSummary = {
        'url': 'https://api.tiingo.com/tiingo/daily/',
        'headers': {
            'Content-Type': 'application/json'
            }
};
var requestPrice = {
        'url': 'https://api.tiingo.com/iex/',
        'headers': {
            'Content-Type': 'application/json'
        }
};
var requestHistory = {
        'url': 'https://api.tiingo.com/iex/',
        'headers': {
            'Content-Type': 'application/json'
        }
};
var requestDay = {
    'url': 'https://api.tiingo.com/iex/',
    'headers': {
        'Content-Type': 'application/json'
    }
};
var requestNews = {
    'url': 'https://newsapi.org/v2/everything?apiKey=' + API_KEY + "&q=",
    'headers': {
        'Content-Type': 'application/json'
    }
};
var requestTicker = {
    'url': 'https://api.tiingo.com/tiingo/utilities/search?query=',
    'headers': {
        'Content-Type': 'application/json'
    }
};
// Constants
const PORT = process.env.port || 8081;
const HOST = '127.0.0.1';
const _app_folder = 'dist/angular-hw8';

// App
const app = express();
app.use('' ,express.static(path.join(_app_folder)));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, _app_folder + '/index.html'));
})
app.get('/watchlist', (req, res) => {
  res.sendFile(path.join(__dirname ,'dist/angular-hw8/index.html'));
})
app.get('/portfolio', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular-hw8/index.html'));
})
app.get('/details/:ticker', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular-hw8/index.html'));
})

const requestPromise = util.promisify(request);
// app.get('/', cors(), (req, res) => {
//   res.sendFile('/index.html');
// });


app.get('/search/details/:ticker', cors(), async (req, res) => {
    var myDate = new Date();
    var date = (myDate.getFullYear() - 2) + '-' + ("0" + (myDate.getMonth() + 1)).slice(-2) + '-' + myDate.getDate()
    var ticker = req.params.ticker;
    console.log(ticker)
    requestSummary.url = "https://api.tiingo.com/tiingo/daily/" + ticker + "?token=" + API_TOKEN
    requestPrice.url = 'https://api.tiingo.com/iex/' + ticker + "?token=" + API_TOKEN
    requestHistory.url = 'https://api.tiingo.com/iex/' + ticker + "/prices?startDate=" + date + "&resampleFreq=12hour&columns=close,high,low,open,volume&token=" + API_TOKEN
    requestNews.url = 'https://newsapi.org/v2/everything?apiKey=' + API_KEY + "&q=" + ticker

    var data = {}
    let summary = await requestPromise(requestSummary)
    let price = await requestPromise(requestPrice)
    let history = await requestPromise(requestHistory)
    let news = await requestPromise(requestNews)

    data.summary = JSON.parse(summary.body)
    data.price = JSON.parse(price.body)[0]
    data.history = JSON.parse(history.body)
    data.news = JSON.parse(news.body)
    
    //console.log(data.price.lastSaleTimestamp)
    if (data.price == null || data.price == undefined || data.price == [] || data.price == {} || data.price.detail != null) res.json({})
    else
    //console.log(requestDay.url)
    {
        requestDay.url = 'https://api.tiingo.com/iex/' + ticker + "/prices?startDate=" + data.price.lastSaleTimestamp.slice(0, 10) + "&resampleFreq=2min&columns=close&token=" + API_TOKEN
        let day = await requestPromise(requestDay)
        data.day = JSON.parse(day.body)
        for (var e of data.history)
        e.date = moment.utc(e.date.slice(0, 10), "YYYY-MM-DD").local().valueOf() - 28800000
    for (var e of data.day)
        e.date = moment.utc(e.date.slice(0, 19), "YYYY-MM-DDTHH:mm:ss").local().valueOf() - 28800000
    var lastDate = new Date(data.price.lastSaleTimestamp)
    console.log(lastDate.getHours()  == 13)
    data.isOpen = lastDate.getHours()  < 21 && lastDate.getHours() > 14 ? true : false
    if(new Date(data.price.timestamp).getHours() == 14 && new Date(data.price.timestamp).getMinutes() >= 30) data.isOpen = true
    console.log(data.price.timestamp + " " + new Date(data.price.timestamp).getHours())
    data.price.lastSaleTimestamp = lastDate.getFullYear() + "-" + ("0" + (lastDate.getMonth()+1 )).slice(-2)+ "-" + ("0" + (lastDate.getDate())).slice(-2) + " " + ("0" + (lastDate.getHours()-8)).slice(-2) + ":" + ("0" + lastDate.getMinutes()).slice(-2) + ":" + ("0" + lastDate.getSeconds()).slice(-2)
    for (var e of data.news.articles)
       { var dateArr = new Date(e.publishedAt).toDateString().split(" ")
       console.log(dateArr)
        e.publishedAt = dateArr[1] + " " + dateArr[2] + ", " + dateArr[3]}
    data.tab = "details"
        
    res.json(data);}
  });

app.get('/query/:inputString', cors(), async (req, res) => {
    requestTicker.url = 'https://api.tiingo.com/tiingo/utilities/search?query=' + req.params.inputString + "&token=" + API_TOKEN
    console.log(req.params.inputString)
    var ticker = await requestPromise(requestTicker)
    var data = { data: [] }
    var arr = JSON.parse(ticker.body)
    if (arr == [] || arr.detail != null) res.json([])
    else
    {for (var e of arr)
        data.data.push({ "name": e.name, "ticker": e.ticker })
        data.request = req.params.inputString
        
    res.json(data);}
});

app.post('/items',  urlencodedParser, cors(), async (req, res) => {
    var requestPara = req.body
    console.log(requestPara)
    // var requestString = ""
    // for (x of requestPara)
    //     requestString += x + ","
    //     console.log(requestString)
    requestPrice.url = 'https://api.tiingo.com/iex/?tickers=' + requestPara + "&token=" + API_TOKEN
    var data = await requestPromise(requestPrice)
    data = JSON.parse(data.body)
    console.log(data)
    res.json(data);
});
app.get('/item/:inputString',  cors(), async (req, res) => {
    var requestPara = req.body
    console.log(requestPara)
    // var requestString = ""
    // for (x of requestPara)
    //     requestString += x + ","
    //     console.log(requestString)
    requestPrice.url = 'https://api.tiingo.com/iex/?tickers=' + req.params.inputString + "&token=" + API_TOKEN
    var data = await requestPromise(requestPrice)
    data = JSON.parse(data.body)
    let newData = {}
    newData.data = data
    console.log(newData)
    res.json(newData);
  });
app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);