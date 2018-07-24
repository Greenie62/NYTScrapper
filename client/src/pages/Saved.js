import React, {Component} from "react";
import axios from "axios";



class Saved extends Component{
  

    getShit(){
       
        
        axios.get('/news').then(function(data){
            console.log(data);
         
        })
    }

    render(){
        return(
            <div>
            <h1>Eventually some saved articles rendered
                by a findAll query to mongo DB of articles that 
                have been inserted from button click from the user
                on the cheerio scrape of the axios request of articles</h1>
                <button onClick={this.getShit}>CLICK</button>
                </div>
        )
    }
}

export default Saved;