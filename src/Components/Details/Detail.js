import React, {Component} from 'react'
import './Detail.css'
import {Grid} from '@material-ui/core/';



class Detail extends Component
{   
    
       

    render()
    {
        const {title,content} = this.props;
        if(!content){
            return(
            <div>
                <p className="title">{title}</p>
                <p>No information available</p>
            </div>
            
            )
            
        }
        else
        {
            return(
                <div>
                    <p className="title">{title}</p>
                <Grid container spacing= {2}>
                    
                    {content.map(object=>                    
                        <Grid item xs={12} md={12} lg={3} key={object.id}>
                        <div className="item">
                        
                        <p>{object.name}</p>
                        </div>
                        </Grid>
                    )}
                    
                </Grid>
                    
                </div>
                    
                )
        }
        
    }
}
export default Detail