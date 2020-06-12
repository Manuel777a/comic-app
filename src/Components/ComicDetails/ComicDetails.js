import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import Detail from '../Details/Detail'
import './ComicDetails.css'

export default function ComicDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [details,setComicDetails] = React.useState();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
    showDetails();
    
  };

  const handleClose = () => {
    setOpen(false);
  };



  const urlDetail= props.comicDetail.api_detail_url;
  const apikey ="?api_key=6f7e42c1a04a1903ca5c2a635e441781e12a537b&format=json";


  
  const showDetails= async () =>
    { 
      const response = await fetch(urlDetail+apikey)
      const json = await response.json()
      setComicDetails(json.results)
     
    }

  

  

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Info
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        
      >
        <DialogTitle id="responsive-dialog-title">{<p className='comictitle'>{props.comicDetail.name}</p>}</DialogTitle>
        
       
        <DialogContent>
            <div className="infoDialog">
                <div className="details">
                  <Detail title="Characters" content={details?.characters} ></Detail>
                  <Detail title="Concepts" content={details?.concepts} ></Detail>
                </div>
                
                <div className="image">
                  <img className="imageLimits" src={props.comicDetail.image.original_url}></img>
                </div>
            </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}