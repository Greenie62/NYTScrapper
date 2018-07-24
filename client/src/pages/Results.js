import React, {Component} from "react";

import '../App.css';


class Results extends Component{
    state={
        results:[],
        saveArticle:"",
    }
/*
    componentDidMount(){
        axios.get('/articles',(req,res)=>{
            this.setState({results:req.body})
        })
    }

    saveArticle=()=>{
        var article={
            article:this.state.article
        }
        axios.post("/saveArticle",(req,res)=>{
           
        })
    }*/

    //somehow want to link an article ID(or some propety) to a click-event that triggers 
    // a save,store(into object) and send to the back-end for an DB insertion
    // that will then be avaialble for a find query on the saved articles page
    saveArticle=()=>{

    }

    render(){
        return(
            <div className='resultsContainer'>
             <h1>Article Place Holder </h1>
            {/* {this.state.results.map(article=>( */}
                {/* <tr>{article.name} <button onClick={this.saveArticle}>Save</button> </tr> */}
            {/* ))} */}
           
            </div>
        )
    }
}

export default Results;