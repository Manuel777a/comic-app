import React,  {Component} from 'react';
import {Button,AppBar,Toolbar,Typography} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles';

const useStyles = theme=>({
    viewBar:
    {
        background: 'linear-gradient(0deg, rgba(207,217,217,1) 0%, rgba(120,116,107,1) 100%)',
    border: 0,
    borderRadius: 1,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '0 30px',
    },
    lastIssues:
    {
        width:'85%',
        position:'relative'
    }
});

class ViewBar extends Component
{
    clickHandlerGrid()
    {
        this.setState({
            grid:true
        })
    }
    
    clickHandlerList()
    {
        this.setState({
            grid:false
        })
    }

    render()
    {
        const {classes} =this.props;
        return(
            <div>
                <AppBar className={classes.viewBar} position="static">
                    <Toolbar>
                        <Typography variant="h5" className={classes.lastIssues  }>
                            Latest Issues
                        </Typography>
                        <Button onClick={this.clickHandlerGrid}>
                            Grid
                        </Button>
                        <Button onClick={this.clickHandlerList}>
                            List
                        </Button>
                    
                </Toolbar>
                </AppBar>
            </div>
        )
    }
}
export default withStyles(useStyles)(ViewBar)