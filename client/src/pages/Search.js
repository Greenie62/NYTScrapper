import React, {Component} from "react";

import axios from "axios";
import "../App.css";


class Search extends Component{
    //search topics declared as states
    state={
        results:[],
        topic:"",
        startYear:0,
        endYear:0,
    }

    userSearch=()=>{
        //grabbing the info from searchbars(using setState and defining them
        // as states kept getting me an initial empty return. Would like
        // explanation to that.)
        var userInfo={
            topic:document.getElementById('topic').value,
            startYear:document.getElementById('startyear').value,
            endYear:document.getElementById('endyear').value
        }

        //set state values to users input
        this.setState({topic:userInfo.topic, startYear:userInfo.startyear, endYear:userInfo.endyear})
        
        //testing console.log
        console.log(userInfo)

        //send data to back-end for an axios request/query value in
        //basing our axios.get to NYT
        axios.post('/sendData',userInfo).then(function(){
            console.log("success")
        }).catch(function(err){
            console.log(err)});
       
    
}

    render(){
        return(
            <div className='searchContainer'>
            <form>
                <label>Topic:
            <input type='text' id='topic' placeholder="topic to search for"/>
            </label>
            </form>
            <br/>
            <form>
                <label>Start Year:
            <input type='text' id='startyear' placeholder="start_year"/>
            </label>
            </form>
            <br/>
            <form>
                <label>End Year:
            <input type='text' id='endyear' placeholder="end_year"/>
            </label>
            </form>
            <br/>
            <button onClick={this.userSearch}>Search </button>
            </div>
        )
    }
}

export default Search;