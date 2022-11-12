
// index.js
const express = require('express')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app

/*const PORT = process.env.PORT || 8000
const express = require('express')
const cheerio = require('cheerio')
const axios = require('axios')
//const { data } = require('cheerio/lib/api/attributes')

const app = express()

const dataArr = []

app.get('/', (req, res) => {
    res.json('nothing here, try /[searchwordhere] instead')
})
//Only tori, whole finland
app.get('/tori/:searchword', async (req, res) => {
    const searchword = req.params.searchword
    dataArr.length = 0
    axios.get(`https://www.tori.fi/koko_suomi?q=${searchword}`)
        .then((response) => {
            const $ = cheerio.load(response.data)
            const div = $('div .list_mode_thumb')
            div.children('a').each(function () {
                const text = $(this).find('.li-title').text()
                const url = $(this).attr('href')
                const site = "tori.fi"
                dataArr.push({
                    text, url, site
                })
            })
            res.json(dataArr)
        }).catch((err) => console.log(err))
});
//only huuto, whole finland
app.get('/huuto/:searchword', async (req, res) => {
    const searchword = req.params.searchword
    dataArr.length = 0
    axios.get(`https://www.huuto.net/haku?words=${searchword}&area=`)
        .then((response) => {
            const $ = cheerio.load(response.data)
            $('a[class=item-card-link]').each(function () {
                const text = $(this).attr('title')
                const url ="https://www.huuto.net" + $(this).attr('href')
                const site = "huuto.net"
                dataArr.push({
                    text, url, site
                })
            })
            res.json(dataArr)
        }).catch((err) => console.log(err))
});

// only tori, with county variable
app.get('/tori/:searchword/:county', async (req, res) => {

    // Works only if the county is written correclty and there are some hits for the searchterm 
    const searchword = req.params.searchword
    const county = req.params.county
    dataArr.length = 0
    axios.get(`https://www.tori.fi/${county}?q=${searchword}`)
        .then((response) => {
            console.log(2)
            const $ = cheerio.load(response.data)
            const div = $('div .list_mode_thumb')
            div.children('a').each(function () {
                const text = $(this).find('.li-title').text()
                const url = $(this).attr('href')
                const site = "tori.fi"
                dataArr.push({
                    text, url, site
                })
            })
            res.json(dataArr)
        }).catch((err) => console.log(err))
    
    
});

// only huuto, with county variable
app.get('/huuto/:searchword/:county', async (req, res) => {
    const searchword = req.params.searchword
    const county = req.params.county
    dataArr.length = 0
    axios.get(`https://www.huuto.net/haku?words=${searchword}&area=${county}`)
        .then((response) => {
            const $ = cheerio.load(response.data)
            $('a[class=item-card-link]').each(function () {
                const text = $(this).attr('title')
                const url ="https://www.huuto.net" + $(this).attr('href')
                const site = "huuto.net"
                dataArr.push({
                    text, url, site
                })
            })
            res.json(dataArr)
        }).catch((err) => console.log(err))
});

//both sites, whole finland
app.get('/kaikki/:searchword', async (req, res) => {
    const searchword = req.params.searchword
    dataArr.length = 0
    const requests = [axios.get(`https://www.huuto.net/haku?words=${searchword}&area=`), axios.get(`https://www.tori.fi/koko_suomi?q=${searchword}`)]
    axios.all(requests)
        .then(axios.spread((...responses) => {
            const $ = cheerio.load(responses[0].data)
            console.log("mjooh")
            $('a[class=item-card-link]').each(function () {
                const text = $(this).attr('title')
                const url ="https://www.huuto.net" + $(this).attr('href')
                const site = "huuto.net"
                dataArr.push({
                    text, url, site
                })
            })
            const $2 = cheerio.load(responses[1].data)
            const div = $2('div .list_mode_thumb')
            div.children('a').each(function () {
                const text = $2(this).find('.li-title').text()
                const url = $2(this).attr('href')
                const site = "tori.fi"
                dataArr.push({
                    text, url, site
                })
            })
            res.json(dataArr)
        })).catch((err) => console.log(err))

    
});

//both sites, county variable
app.get('/kaikki/:searchword/:county', async (req, res) => {
    const searchword = req.params.searchword
    const county = req.params.county
    dataArr.length = 0
    const requests = [axios.get(`https://www.huuto.net/haku?words=${searchword}&area=${county}`), axios.get(`https://www.tori.fi/${county}?q=${searchword}`)]
    axios.all(requests)
        .then(axios.spread((...responses) => {
            const $ = cheerio.load(responses[0].data)
            console.log("mjooh")
            $('a[class=item-card-link]').each(function () {
                const text = $(this).attr('title')
                const url ="https://www.huuto.net" + $(this).attr('href')
                const site = "huuto.net"
                dataArr.push({
                    text, url, site
                })
            })
            const $2 = cheerio.load(responses[1].data)
            const div = $2('div .list_mode_thumb')
            div.children('a').each(function () {
                const text = $2(this).find('.li-title').text()
                const url = $2(this).attr('href')
                const site = "tori.fi"
                dataArr.push({
                    text, url, site
                })
            })
            res.json(dataArr)
        })).catch((err) => console.log(err))

    
});

app.listen(PORT, () => console.log(`Running on ${PORT}`))

module.exports = app;*/