import { Component, OnInit,  ViewChild, ElementRef} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, fromEvent} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as Highcharts from 'highcharts';
import HC_stock from 'highcharts/modules/stock';
import vbp from 'highcharts/indicators/volume-by-price';
import IndicatorsCore from "highcharts/indicators/indicators";
import { stringify } from 'querystring';
import { tick } from '@angular/core/testing';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';


HC_stock(Highcharts);
IndicatorsCore(Highcharts);
vbp(Highcharts);

export interface Company {
  name: string;
  ticker: string;
}
export interface Company2 {
  name: string;
  ticker: string;
  last: number;
  prevClose: number;
  change: boolean;
  color: string;
}
export interface Company3 {
  name: string;
  ticker: string;
  last: number;
  avgCost: number;
  quant: number;
  prevClose: number;
  change: boolean;
  color: string;
  color2: string;
}
export interface IHash {
  [details: string]: Company2;
}
export interface IHash2 {
  [details: string]: Company3;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './2app.component.css']
})

/**
 * @title Display value autocomplete
 */
export class AppComponent implements OnInit {
  title = 'angular-hw8'
  myControl = new FormControl('a');
  myFormGroup = new FormGroup(
  {myControl2 : new FormControl('b'),
  myControl3 : new FormControl('c')})
  options: Company[] = [];
  inputString: any;
  input: Company = {name: '', ticker: ''}
  filteredOptions: Observable<Company[]>;
  data = {isOpen: true, day: [], news: {articles: [{source: {id: "business-insider", name: "Business Insider"}, description: '', title: '', publishedAt: '', url: '', urlToImage: ''}]}, price: {
    timestamp: '2020-11-04T21:00:00+00:00',
    bidSize: null,
    lastSaleTimestamp: '2020-11-04T21:00:00+00:00',
    low: 112.35,
    bidPrice: null,
    prevClose: 110.44,
    quoteTimestamp: '2020-11-04T21:00:00+00:00',
    last: 114.95,
    askSize: null,
    volume: 138235482,
    lastSize: null,
    ticker: 'AAPL',
    high: 115.59,
    mid: null,
    askPrice: null,
    open: 114.14,
    tngoLast: 114.95
  }, history: [], summary: {
    exchangeCode: 'NASDAQ',
    description: "Apple Inc. (Apple) designs, manufactures and markets mobile communication and media devices, personal computers, and portable digital music players, and a variety of related software, services, peripherals, networking solutions, and third-party digital content and applications. The Company's products and services include iPhone, iPad, Mac, iPod, Apple TV, a portfolio of consumer and professional software applications, the iOS and OS X operating systems, iCloud, and a variety of accessory, service and support offerings. The Company also delivers digital content and applications through the iTunes Store, App StoreSM, iBookstoreSM, and Mac App Store. The Company distributes its products worldwide through its retail stores, online stores, and direct sales force, as well as through third-party cellular network carriers, wholesalers, retailers, and value-added resellers. In February 2012, the Company acquired app-search engine Chomp.",
    ticker: 'AAPL',
    startDate: '1980-12-12',
    name: 'Apple Inc',
    endDate: '2020-11-04'
  }}
  ticker = ''

  showSearch = true
  showContent = false
  showWatchlist = false
  showPortfolio = false
  showSpinner = false
  showSmallSpinner = false
  showOptions = false
  showTable1 = true
  showTable2 = true
  arrowUp = true
  arrowDown = false
  starBlank = true
  starFilled = false
  showAlert1 = false
  showAlert2 = false
  showAlert3 = false
  showNav = true
  showNav2 = false
  showTitle = true

  wannaShowPortfolio = false
  wannaShowWatchlist = false

  curTime: string
  id: any
  id2: any
  mode = true

  closeResult = '';

  Highcharts: typeof Highcharts = Highcharts; // required
  chartOptions: Highcharts.Options = {}; // required
  Highcharts2: typeof Highcharts = Highcharts; // required
  chartOptions2: Highcharts.Options = {}; // required
  chartConstructor: string = "stockChart"
  updateFlag: boolean = false; // optional boolean
  oneToOneFlag: boolean = true; // optional boolean, defaults to false
  runOutsideAngular: boolean = false; // optional boolean, defaults to false

  tmp: any
  tmpSize = new Array(20)

  change = 0
  isOpen = true
  status_text = 'Market is Open'
  fbURL = ''
  twURL = ''
  news_link = ''
  changeColor = '#287824'
  changeColor2 = '#287824'
  changebgColor = '#c3dbbf'
  quant = 0
  tmpQuant = 0
  portfolioTicker = ''
  portfolioPrice = 0
  portfolioName = ''
  quant2 = 0

  watchlist: Company2[] = []
  portfolio: Company3[] = []

  @ViewChild('news') newsElement: ElementRef;

  ngOnInit(): void {
    this.myControl.valueChanges.pipe(startWith('')).subscribe(value => {if(typeof value === 'undefined') return; this.request(typeof value === 'string' ? value : value.ticker)})
    //this.myFormGroup.controls.myControl2.valueChanges.subscribe(value => {this.checkValue('stock_quantity', this.tmpQuant)})
    this.id = setInterval(() => {
      var date = new Date()
      this.curTime = date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + ("0" + date.getDate()).slice(-2)
      + '  ' + ("0" + date.getHours()).slice(-2) + ':' + ("0" + date.getMinutes()).slice(-2) + ':' + ("0" + date.getSeconds()).slice(-2)
    }, 1000);
    this.id2 = setInterval(() => {
      if(this.showContent) this.requestData(this.ticker)
    }, 15000);
    if(window.screen.width <= 576) {
      this.showNav = false
      this.showNav2 = true
    }
  }
  ngAfterViewInit(): void {
    
  }
  ngOnDestroy(): void {
  if (this.id) {
    clearInterval(this.id);
  }
  if (this.id2) {
    clearInterval(this.id2);
  }
}
  

  constructor(private modalService: NgbModal, private router: Router) {
    this.router.events.subscribe(event =>{
      if (event instanceof NavigationStart){
         if(event.url == '/watchlist')
            this.showWatchlistButton()
         else if(event.url == '/portfolio')
            this.showPortfolioButton()
         else if(event.url.indexOf('/details/') == 0)
          {
            let tmpTicker = event.url.slice(9)         
            this.requestData(tmpTicker)
          }         
        }
      })
     }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openNews(content, idx) {
    console.log(idx)
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    $('#news-title').text(this.data.news.articles[idx].source.name)
    $('#news-date').text(this.data.news.articles[idx].publishedAt)
    $('#news-body-title').text(this.data.news.articles[idx].title)
    $('#news-body').text(this.data.news.articles[idx].description)
    this.twURL = "https://twitter.com/intent/tweet?text=" + this.data.news.articles[idx].title + "&url=" + this.data.news.articles[idx].url
    this.fbURL = "https://www.facebook.com/sharer/sharer.php?u=" + this.data.news.articles[idx].url + "%2F&amp;src=sdkpreparse" 
    this.news_link = this.data.news.articles[idx].url
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  request(stringValue: string): string {
    this.showOptions = false
    console.log(typeof stringValue)
    this.inputString = stringValue
    if (this.inputString.length === 0)
      {this.options = []}
    else
    {
      this.showSmallSpinner = true
      this.options = []
      const XHR = new XMLHttpRequest()
    
      XHR.onreadystatechange = () =>
      {
          if (XHR.readyState === 4 && XHR.status === 200)
          {
              this.showSmallSpinner = false
              const jsonObj = JSON.parse(XHR.responseText)
              if (JSON.stringify(jsonObj) === '[]')
              {
              }
              else
              {
                if(jsonObj.request === this.inputString)
                  {this.options = jsonObj.data
                  console.log(this.options)}
                this.showOptions = true
              }
          }
      }
      const query = '/query/' + this.inputString
      console.log(this.inputString + typeof this.inputString)
      XHR.open('GET', query, true)
      XHR.send(null)
    }
    return stringValue;
}

  displayFn(user: Company): string {
    return user && user.name && user.ticker ? user.ticker : '';
  }

  private _filter(ticker: string): Company[] {
    const filterValue = ticker.toLowerCase();

    return this.options.filter(option => option.ticker === null || option.ticker.toLowerCase().indexOf(filterValue) === 0);
  }

  updateSelectedValue(company: Company): void {
    console.log('kkkkk')
    this.input = company
    console.log(this.input)
  }

  requestData(inputTicker): void {
    
    this.showSearch = false
    this.showWatchlist = false
    this.showPortfolio = false
    this.wannaShowPortfolio = false
    this.wannaShowWatchlist = false
    if(this.mode == true)
      {this.showSpinner = true
      this.mode = false}
    console.log(typeof inputTicker)
    // console.log(this.inputString)
    if(typeof inputTicker === 'object')
      {inputTicker = inputTicker.ticker}
    this.ticker = inputTicker.toLowerCase()
    this.input = {name: '', ticker: ''}
    const XHR = new XMLHttpRequest()
    XHR.onreadystatechange = () =>
    {
        if (XHR.readyState === 4 && XHR.status === 200)
        {
            const jsonObj = JSON.parse(XHR.responseText)
            if (JSON.stringify(jsonObj) === '{}')
            {
              this.showSpinner = false
              this.showAlert1 = true
            }
            else
            {
                this.data = jsonObj
                this.update()
                console.log(this.data)
                this.createChart()
                if(localStorage.getItem('watchlist') == null)
                  localStorage.setItem('watchlist', 'null')
                if(localStorage.getItem('watchlist').indexOf('^'+this.data.summary.ticker.toLowerCase()) != -1)
                {
                  this.starBlank = false
                  this.starFilled = true
                }
                else
                {
                  // console.log('kkk')
                  this.starBlank = true
                  this.starFilled = false
                }
                if(localStorage.getItem(this.ticker) != null)
                {
                  let tmpString = localStorage.getItem(this.ticker)
                  let endIdx = tmpString.indexOf('^',tmpString.indexOf('^',tmpString.indexOf('^')+1)+1)
                  this.quant2 = (+tmpString.slice(tmpString.indexOf('^quant:')+7,endIdx))
                  console.log(endIdx)
                }
                else
                  this.quant2 = 0
                  
                this.showSpinner = false
                if(!this.showContent)
                  this.createChart2()
                  this.showContent = true
                this.tmp = new Array(this.data.news.articles.length/2)
            }
        }
    }
    const query = '/search/details/' + this.ticker
    XHR.open('GET', query, true)
    XHR.send(null)
  }

  createChart(): void  {
    let input1 = []
    let input2 = []
    for(let i = 0; i < this.data.day.length; i++)
        input1.push([this.data.day[i]["date"], this.data.day[i]["close"]])
    //console.log(this.data.day[0]["date"])
    this.chartOptions = {
        title: {
            text: this.ticker.toUpperCase()
        },
        
        plotOptions: {
            column: {
                    pointWidth: 5
            },
            series: {            
                    pointPlacement: "on"
                }
        },
        xAxis: {
           type: 'datetime'
        },

        rangeSelector: {
          enabled: false
      },
      navigator: {
            series: {
                type: 'area',
                color: this.changeColor,
                fillColor: {
                linearGradient: {
                    x1: 1,
                    y1: 1,
                    x2: 1,
                    y2: 1
                },
                stops: [
                    [0, this.changeColor],
                    [1, this.changeColor]
                ]
            },
            }
        },
        series: [{
            type: 'line',
            data: input1,
            gapSize: 5,
            tooltip: {
                valueDecimals: 2
            },
            color: this.changeColor,
            threshold: null
          }]
      }
    }

  createChart2(): void  {
    
    let ohlc = []
    let volume = []
    const dataLength = this.data.history.length
    // set the allowed units for data grouping
    const groupingUnits:[string, number[]][] = [[
        'week',                         // unit name
        [1]                             // allowed multiples
    ], [
        'month',
        [1, 2, 3, 4, 6]
    ]]



    for (let i = 0; i < dataLength; i += 1) {
        ohlc.push([
            this.data.history[i]["date"], // the date
            this.data.history[i]["open"], // open
            this.data.history[i]["high"], // high
            this.data.history[i]["low"], // low
            this.data.history[i]["close"] // close
        ]);

        volume.push([
            this.data.history[i]["date"], // the date
            this.data.history[i]["volume"] // the volume
        ]);
    }
    // console.log(dataLength + " " + ohlc)

    // create the chart
    
    this.chartOptions2 = {
        rangeSelector: {
            selected: 2
        },

        title: {
            text: this.ticker.toUpperCase() + ' Historical'
        },

        subtitle: {
            text: 'With SMA and Volume by Price technical indicators'
        },

        yAxis: [{
            startOnTick: false,
            endOnTick: false,
            labels: {
                align: 'right',
                x: -3
            },
            title: {
                text: 'OHLC'
            },
            height: '60%',
            lineWidth: 2,
            resize: {
                enabled: true
            }
        }, {
            labels: {
                align: 'right',
                x: -3
            },
            title: {
                text: 'Volume'
            },
            top: '65%',
            height: '35%',
            offset: 0,
            lineWidth: 2
        }],

        tooltip: {
            split: true
        },

        plotOptions: {
            series: {
                dataGrouping: {
                    // units: groupingUnits
                    approximation: 'average'
                }
            }
        },

        series: [{
            type: 'candlestick',
            name: this.ticker.toUpperCase(),
            id: this.ticker,
            zIndex: 2,
            data: ohlc
        }, {
            type: 'column',
            name: 'Volume',
            id: 'volume',
            data: volume,
            yAxis: 1
        }, {
            type: 'vbp',
            linkedTo: this.ticker,
            params: {
                volumeSeriesID: 'volume'
            },
            dataLabels: {
                enabled: false
            },
            zoneLines: {
                enabled: false
            }
        }, {
            type: 'sma',
            linkedTo: this.ticker,
            zIndex: 1,
            marker: {
                enabled: false
            }
        }]
   
    }
  }

  update(): void {
      this.change = this.data.price.last - this.data.price.prevClose
      this.isOpen = this.data.isOpen
      if(!this.isOpen)
      {
        this.status_text = 'Market Closed on ' + this.data.price.lastSaleTimestamp
        this.showTable2 = false
        this.changebgColor = "#F5D7D9"
        this.changeColor2 = "#F31100"
      }
      else
      {
        this.status_text = 'Market is Open'
        this.showTable2 = true
        this.changebgColor = '#c3dbbf'
        this.changeColor2 = '#287824'
      }
      if(this.change >= 0)
      {
        this.changeColor = '#287824'
        // $('#arrow').append('')
        this.arrowUp = true
        this.arrowDown = false
      
      }
      else{
        this.changeColor = "#F31100"
        this.arrowUp = false
        this.arrowDown = true
      }
  }

  star(ticker, name): void {
    this.starBlank = false
    this.starFilled = true
    localStorage.setItem("watchlist", localStorage.getItem('watchlist') + '^' + ticker + ";" + name);
  }
  unStar(ticker): void {
    this.starBlank = true
    this.starFilled = false
    let tmpString = localStorage.getItem('watchlist')
    let endIdx = tmpString.slice(tmpString.indexOf('^'+ticker)+1).indexOf('^')
    if(endIdx != -1)
      localStorage.setItem("watchlist", tmpString.slice(0,tmpString.indexOf('^'+ticker)) + tmpString.slice(tmpString.slice(tmpString.indexOf('^'+ticker)+1).indexOf('^')))
    else
      localStorage.setItem("watchlist", tmpString.slice(0,tmpString.indexOf('^'+ticker)))
  }
  clickUnStar(ticker): void {
    this.unStar(ticker)
    this.updateWatchlist()
  }
  
  showWatchlistButton(): void {
    this.wannaShowWatchlist = true
    this.showAlert1 = false
    this.showAlert2 = false
    this.showAlert3 = false
    this.mode = true
    this.updateWatchlist()
    this.showSearch = false
    this.showContent = false
    this.showPortfolio = false
    $('#search').css({'border-width':'0px','color': 'gainsboro'})
    $('#watchlist').css({'border-width':'1px','color': 'white'})
    $('#portfolio').css({'border-width':'0px','color': 'gainsboro'})
  }
  updateWatchlist(): void {
    this.showSpinner = true
    this.showWatchlist = false
    this.watchlist = []
    // localStorage.clear()
    // localStorage.setItem("watchlist", localStorage.getItem('watchlist') + ' ' + "aapl" + ";" + "APPLE");
    // localStorage.setItem("watchlist", localStorage.getItem('watchlist') + ' ' + "fb" + ";" + "FACEBOOK");
    if(localStorage.getItem('watchlist') == null || localStorage.getItem('watchlist') == 'null' || localStorage.getItem('watchlist').indexOf('null') == -1 || localStorage.getItem('watchlist') == '')
      {this.showAlert2 = true
      this.showSpinner = false}
    else
    {
      let items = localStorage.getItem('watchlist').split('^')
    console.log(localStorage.getItem('watchlist'))
    let items_request = ''
    let item: IHash = {}
    for(let x of items)
    {
      console.log(x)
      if(x != "null" && x != null && x.indexOf('null') == -1)
      {let x_title = x.split(';')
      let newCompany: Company2 = {ticker: x_title[0], name:x_title[1], prevClose:0, last:0, change:true, color:'#287824'}
      item[x_title[0]] = newCompany
      items_request += x_title[0] + ","
    }
    }
    
    const XHR = new XMLHttpRequest()
    XHR.onreadystatechange = () =>
    {
        if (XHR.readyState === 4 && XHR.status === 200)
        {
            const jsonObj = JSON.parse(XHR.responseText)
            if (JSON.stringify(jsonObj) === '{}')
            {
            }
            else
            {
                for(let y of jsonObj)
                {
                  let curTicker = y.ticker.toLowerCase()
                  item[curTicker].last = y.last
                  item[curTicker].prevClose = y.prevClose
                  item[curTicker].change = y.last - y.prevClose >= 0? true : false
                  if(!item[curTicker].change) item[curTicker].color = '#F31100'
                }
                for(let x of Object.values(item))
                  this.watchlist.push(x)
                this.watchlist.sort((a, b) => a.ticker.localeCompare(b.ticker))
                console.log(this.watchlist)
                this.showSpinner = false
                this.showWatchlist = true
                 console.log(this.showWatchlist)
            }
        }
    }
    const query = '/items'
    XHR.open('POST', query, true)
    XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    XHR.send("x=" + items_request )
    }
    
  }

  showSearchButton(): void {
    this.wannaShowPortfolio = false
    this.wannaShowWatchlist = false
    this.showAlert1 = false
    this.showAlert2 = false
    this.showAlert3 = false
    this.inputString = ''
    this.mode = true
    this.showSpinner = true
    this.showContent = false
    this.showWatchlist = false
    this.showPortfolio = false
    this.showSpinner = false
    this.showSearch = true
    $('#search').css({'border-width':'1px','color': 'white'})
    $('#watchlist').css({'border-width':'0px','color': 'gainsboro'})
    $('#portfolio').css({'border-width':'0px','color': 'gainsboro'})
  }
  showPortfolioButton(): void {
    this.wannaShowPortfolio = true
    this.showAlert1 = false
    this.showAlert2 = false
    this.showAlert3 = false
    this.mode = true
    this.updatePortfolio()
    this.showSearch = false
    this.showContent = false
    this.showWatchlist = false
    $('#search').css({'border-width':'0px','color': 'gainsboro'})
    $('#watchlist').css({'border-width':'0px','color': 'gainsboro'})
    $('#portfolio').css({'border-width':'1px','color': 'white'})
  }

  updatePortfolio(): void {
    this.showSpinner = true
    this.showPortfolio = false
    this.portfolio = []
    //this.watchlist = []
    // localStorage.clear()
    // localStorage.setItem("portfolio", "^aapl^fb");
    // localStorage.setItem("aapl", "^name:APPLE^quant:20^avgCost:5000");
    // localStorage.setItem("fb", "^name:FACEBOOK^quant:30^avgCost:4000");
    if(localStorage.getItem('portfolio') == null || localStorage.getItem('portfolio') == 'null' || localStorage.getItem('portfolio').indexOf('null') == -1 || localStorage.getItem('portfolio') == '')
      {this.showAlert3 = true
      this.showSpinner = false}
    else
    {
      let items = localStorage.getItem('portfolio').split('^')
    console.log(items)
    let items_request = ''
    let item: IHash2 = {}
    for(let x of items)
    {
      let name  = ''
      let quant = ''
      let avgCost = ''
      if(x != "null" && x != null && x.indexOf('null') == -1 && x != '')
      {
      // console.log(x)
      let tmpString = localStorage.getItem(x)
      let endIdx = tmpString.indexOf('^',1)
          name = tmpString.slice(tmpString.indexOf('^name:')+6,endIdx)
      endIdx = tmpString.indexOf('^',endIdx+1)
          quant = tmpString.slice(tmpString.indexOf('^quant:')+7,endIdx)
      console.log(tmpString)
      console.log(endIdx)
      
      avgCost = tmpString.slice(tmpString.indexOf('^avgCost:')+9)

      // let x_title = x.split(';')
      let newCompany: Company3 = {ticker:x, name:name, prevClose:0, last:0, change:true, color:'#287824', color2: '#287824', quant:+quant, avgCost: +avgCost}
      item[x] = newCompany
      items_request += x + ","
    }
    }
    
    const XHR = new XMLHttpRequest()
    XHR.onreadystatechange = () =>
    {
        if (XHR.readyState === 4 && XHR.status === 200)
        {
            const jsonObj = JSON.parse(XHR.responseText)
            if (JSON.stringify(jsonObj) === '{}')
            {
            }
            else
            {
                for(let y of jsonObj)
                {
                  let curTicker = y.ticker.toLowerCase()
                  item[curTicker].last = y.last
                  item[curTicker].prevClose = y.prevClose
                  item[curTicker].prevClose = y.prevClose
                  item[curTicker].change = y.last - y.prevClose >= 0? true : false
                  if(!item[curTicker].change) item[curTicker].color = '#F31100'
                  if(item[curTicker].avgCost > y.last) item[curTicker].color2 = '#F31100'
                  console.log(item[curTicker].quant)
                }
                for(let x of Object.values(item))
                  this.portfolio.push(x)
                this.portfolio.sort((a, b) => a.ticker.localeCompare(b.ticker))
                //console.log(this.watchlist)
                this.showSpinner = false
                this.showPortfolio = true
            }
        }
    }
    const query = '/items'
    XHR.open('POST', query, true)
    XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    XHR.send("x=" + items_request )
    }
    
  }
  buy(ticker, price, name): void {
    if(localStorage.getItem(ticker) == "null" || localStorage.getItem(ticker) == null)
    {
      localStorage.setItem('portfolio', localStorage.getItem('portfolio') + "^" + ticker)
      localStorage.setItem(ticker, "^name:" + name + "^quant:" + this.tmpQuant  + "^avgCost:" + price)
      console.log(ticker + " " + this.tmpQuant + " " + price)
    }
    else{
      let tmpString = localStorage.getItem(ticker)
      let endIdx = tmpString.indexOf('^',tmpString.indexOf('^',tmpString.indexOf('^')+1)+1)
      let preQuant = +tmpString.slice(tmpString.indexOf('^quant:')+7,endIdx)
      let preAvgCost = +tmpString.slice(tmpString.indexOf('^avgCost:')+9)
      let newQuant = preQuant+this.tmpQuant
      let newAvgCost = ((preQuant * preAvgCost + price * this.tmpQuant) / newQuant).toFixed(2)
      localStorage.setItem(ticker, "^name:" + name + "^quant:" + newQuant  + "^avgCost:" + newAvgCost)
      console.log(newQuant + " " + newAvgCost)
    }
    this.quant2 += this.tmpQuant
    console.log(this.quant2 + " " + this.tmpQuant)
    this.tmpQuant = 0
    if(this.showPortfolio)
      this.updatePortfolio()
  }
  sell(ticker, price, name): void {
    
      let tmpString = localStorage.getItem(ticker)
      let endIdx = tmpString.indexOf('^',tmpString.indexOf('^',tmpString.indexOf('^')+1)+1)
      let preQuant = +tmpString.slice(tmpString.indexOf('^quant:')+7,endIdx)
      let preAvgCost = +tmpString.slice(tmpString.indexOf('^avgCost:')+9)
      let newQuant = preQuant-this.tmpQuant
      if(newQuant == 0)
      {
        localStorage.setItem(ticker,"null")
        let tmpString2 = localStorage.getItem('portfolio')
        localStorage.setItem('portfolio', tmpString2.slice(0,tmpString2.indexOf("^" + ticker)) + tmpString2.slice(tmpString2.indexOf("^" + ticker)+ticker.length+1))
      }
      else{
      let newAvgCost = ((preQuant * preAvgCost - price * this.tmpQuant) / newQuant ).toFixed(2)
      localStorage.setItem(ticker, "^name:" + name + "^quant:" + newQuant  + "^avgCost:" + newAvgCost)
      }
      this.quant2 -= this.tmpQuant
      this.tmpQuant = 0
      this.updatePortfolio()
  }

  bindValue(ticker, price, name, quant): void {
    this.portfolioTicker = ticker
    this.portfolioPrice = price
    this.portfolioName = name
    this.quant2 = quant
  }
  checkValue(event): void {
    let value = this.tmpQuant
      if(!Number.isInteger(value) || value <= 0)
        $('#buy_button').attr('disabled', 'disabled')
      else
        $('#buy_button').removeAttr('disabled')
      
  }
  sellCheckValue(event): void {
    let value = this.tmpQuant
    let total = this.quant2
    if(!Number.isInteger(value) || value <= 0 || value > total)
        $('#sell_button').attr('disabled', 'disabled')
    else
        $('#sell_button').removeAttr('disabled')
        console.log('ok')
  }
}

