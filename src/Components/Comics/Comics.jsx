import React, {Component} from 'react';
import Comic from '../Comic/Comic';
import {withStyles} from '@material-ui/core/styles';
import {Grid,Button,CircularProgress} from '@material-ui/core/';

const useStyles = theme=>({
  grid: {
    width: '85%',
    margin: 'auto',
    justify: 'center',
    
  },
  paper:{
    borderRadius: '8px',
    textAlign: 'center'
  },
  papelList:{

  },
  div:{
    margin: 'auto'
  },
  loading:
  {
    width: '25%',
    padding: '200px',
    margin: 'auto',
    textAlign: 'center',
  }


});

class Comics extends Component{
    
    constructor(props)
    {
      super(props);
      this.state={
        comics: [],
        isLoaded: false,
        grid:true
        
      }
    }
    componentDidMount()
    { 
      fetch('https://comicvine.gamespot.com/api/volumes/?api_key=6f7e42c1a04a1903ca5c2a635e441781e12a537b&format=json&sort=date_added:desc')
      .then(res => res.json().then(resJson=>{
        this.setState({
          comics: resJson.results,
          isLoaded: true
        })
      }))
    
      
      
    }
  render()
  {
    var { isLoaded, comics,grid} = this.state;
    const {classes} = this.props;
    if(!isLoaded)
    {
      return<div className={classes.loading}>
        <h1>Loading...</h1>
        <div><CircularProgress /></div>
         
      
      </div>
    }
    else
    {
      if(grid)
      {
        return <div className={classes.div}>
        <Grid container spacing= {2} className={classes.grid}>
          
          {comics.map(comic=>
          <Grid item xs={12} md={6} lg={3}  key={comic.id} className={classes.paper}>
           
              <Comic grid={true} list={false} comic ={comic}/>          
            
          </Grid>
        )}
        </Grid>
        </div>
      }
      else
      {
        return <div className={classes.div}>
        <Grid container spacing= {2} className={classes.grid}>
          
          {comics.map(comic=>
          <Grid item xs={12} md={12} lg={12}  key={comic.id} className={classes.paperList}>
            
              <Comic grid={false} list={true} comic ={comic}/>           
            
          </Grid>
        )}
        </Grid>
        </div>
      }
      
    }                
  }
}
export default withStyles(useStyles)(Comics)