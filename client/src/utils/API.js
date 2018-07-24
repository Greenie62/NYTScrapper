/*import axios from "axios";
import cheerio from "cheerio";

function getArticles(){
axios.get('https://www.newyorktimes.com').then(function(response){
    
    var $=cheerio.load(response.data);
    $(".mini-navigation-menu").each(function(i,element){
      var results={};

      results.title=$(this).children()
      .children("a").text();
      console.log("We hope: " +results.title)
    })
})
}
export default getArticles;


// Export an object containing methods we'll use for accessing the Dog.Ceo API


function  getArticles() {
    axios.get('https://www.newyorktimes.com').then(function(response){
    
    var $=cheerio.load(response.data);
    $(".mini-navigation-menu").each(function(i,element){
      var results={};

      results.title=$(this).children()
      .children("a").text();
      console.log(results)
  })
})

  }
  

export default getArticles
*/