const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const cheerio=require('cheerio');
const axios=require('axios');

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Declared variables to use for Axios search;
var topic;
var startyear;
var endyear;

app.post('/sendData',(req,res)=>{
  console.log(req.body)
   topic=req.body.topic;
   startyear=req.body.startYear;
   endyear=req.body.endYear;
  console.log(topic);
  console.log(startyear);
  console.log(endyear);
  res.end()
})

app.get('/searchnews',(req,res)=>{
  console.log("Topic: " + topic)
 /* axios.get('https://www.nytimes.com/search?query=' + topic).then(function(data){
    console.log(data)
  }).catch(function(err){
    console.log(err);
  }) */
  res.send("hello please search")
})

app.get('/news',(req,res)=>{
  axios.get('https://www.newyorktimes.com').then(function(response){
    
    var $=cheerio.load(response.data);
    $(".mini-navigation-menu").each(function(i,element){
      var results={};

      results.title=$(this).children()
      .children("a").text();
      console.log("We hope: " +results.title)
      res.send(results.title.split(''))
    })
    
  })

})







// Define API routes here

//const routes = require("./routes/api.js");
//app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
