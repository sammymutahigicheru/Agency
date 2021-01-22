import React, {Component} from 'react';
import './assets/css/admin.css';

//Material Ui imports
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import  Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';

//Drawer imports
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import Sidebar from './common/Sidebar';

const drawerWidth = 240;

const styles = theme => ({
    toolbar: {
        paddingRight: 24
    },
    appBar: {
       zIndex: theme.zIndex.drawer + 1,
       transition: theme.transitions.create([
           'width','margin'
       ],{
           easing: theme.transitions.easing.sharp,
           duration: theme.transitions.duration.leavingScreen
       }) 
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create([
            'width','margin'
        ],{
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }) 
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'noWrap',
        width: drawerWidth,
        transition: theme.transitions.create('width',{
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerPaperClose: {
        overflowx: 'hidden',
        width: theme.spacing.unit * 7,
        transition: theme.transitions.create('width',{
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar
    }
})

class AdminWrapper extends Component{

    constructor(props){
        super(props)
        this.state = {
            open: true
        }
        
    }
    handleDrawerClose = (e) =>{
        this.setState({open:false})
    }
    handleDrawerOpen =(e)=> {
        this.setState({open:true})
    }

    render(){
        const {classes} = this.props;
        return(
            <div id="admin-page">
                <AppBar className={classNames(classes.appBar,this.state.open && classes.appBarShift)}>
                    <Toolbar className= {classes.toolbar} >
                        <IconButton onClick = {this.handleDrawerOpen}>
                            <MenuIcon>

                            </MenuIcon>
                        </IconButton>
                        <Typography 
                        component = "h1"
                        variant = "h6"
                        color = "inherit"
                        noWrap>Admin</Typography>
                    </Toolbar>
                </AppBar>
                <Drawer classes = {
                {
                    paper: classNames(classes.drawerPaper,!this.state.open && classes.drawerPaperClose)
                }
                }
                variant = "permanent"
                open = {true}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon  />
                        </IconButton>
                    </div>
                    <Divider />
                    <Sidebar />
                </Drawer>
                {this.props.children}
            </div>
        )
    }
}
export default withStyles(styles)(AdminWrapper);