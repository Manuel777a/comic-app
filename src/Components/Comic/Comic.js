import React, {Component} from 'react'
import {Card} from '@material-ui/core/';
import ComicDetails from '../ComicDetails/ComicDetails.js'
import './Comic.css'



class Comic extends Component
{
    render()
    {
        const {comic,grid} = this.props;
        let gridClass = grid ? 'comicGrid' : 'comicList';
        let listClass = grid ? 'coverIcon' : 'coverIconList';
        let infoClass = grid ? 'info' : 'infoList';
        let displayClass = grid ? 'MuiPaper-root' : 'MuiPaper-rootList'
        return(
            

        
        <Card className={displayClass}>

                <div className={gridClass} >              
                <img src={comic.image.original_url} alt={comic.name + " Cover Image"} className={listClass}></img>        
                </div>
                <div className={infoClass}>
                    <div><h3>{comic.name}</h3></div>
                    <p>{"#"+ comic.count_of_issues}</p>
                <div className="comicDate">{comic.date_added}</div>
                <ComicDetails comicDetail ={comic}></ComicDetails> 
                </div>
                
                                    
        </Card>
          
        
        )
        
    }
}

export default Comic