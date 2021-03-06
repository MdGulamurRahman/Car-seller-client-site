import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button} from '@mui/material';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import Pay from '../Pay/Pay';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import useAuth from "../../../hooks/useAuth";
// import AdminRoute from '../AdminRoute/AdminRoute';

const drawerWidth = 200;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const {admin, logOut, user} = useAuth()

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Our Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        
       {admin ? 
       <Box>
           <List>
                <Link style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}} to="/home" >
                <Button color="inherit">Home</Button>
                </Link> <br/>
            </List>
            <Divider />
           <List>
                <Link style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}} to={`${url}/makeAdmin`} >
                <Button color="inherit">Make Admin</Button>
                </Link> <br/>
            </List>
            <Divider />
           <List>
                <Link style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}} to={`${url}`} >
                <Button color="inherit">Manage All Orders</Button>
                </Link> <br/>
            </List>
            <Divider />
           <List>
                <Link style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}} to={`${url}/addProducts`} >
                <Button color="inherit">Add Products</Button>
                </Link> <br/>
            </List>
            <Divider />
           <List>
                <Link style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}} to={`${url}/manageProducts`} >
                <Button color="inherit">Manage Products</Button>
                </Link> <br/>
            </List>
            <Divider />
            <List>
                {user.email && <Button onClick={logOut} variant="contained">Logout</Button>}
            </List>
            <Divider />
       </Box>
         :
         <Box>
            <List>
                <Link style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}} to="/home" >
                <Button color="inherit">Home</Button>
                </Link> <br/>
            </List>
            <Divider />
            <List>
                <Link style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}} to={`${url}`} >
                <Button color="inherit">My Orders</Button>
                </Link> <br/>
            </List>
            <Divider />
            <List>
                <Link style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}} to={`${url}/review`} >
                <Button color="inherit">Review</Button>
                </Link> <br/>
            </List>
            <Divider />
            <List>
                <Link style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}} to={`${url}/pay`} >
                <Button color="inherit">Payment</Button>
                </Link> <br/>
            </List>
            <Divider />
            <List>
                {user.email && <Button onClick={logOut} variant="contained">Logout</Button>}
            </List>
            <Divider />
        </Box>
       }
      </Drawer>
      <Main open={open} sx={{padding:0}}>
        <DrawerHeader />
        <Box>
      {admin ?<Switch>
        <Route path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route exact path={`${path}`}>
          <ManageAllOrders></ManageAllOrders>
        </Route>
        <Route path={`${path}/addProducts`}>
          <AddProduct></AddProduct>
        </Route>
        <Route path={`${path}/manageProducts`}>
          <ManageProducts></ManageProducts>
        </Route> 
      </Switch> : 
      <Switch>
      <Route exact path={`${path}`}>
        <MyOrders></MyOrders>
      </Route>
      <Route path={`${path}/review`}>
        <Review/>
      </Route>
      <Route path={`${path}/pay`}>
        <Pay></Pay>
      </Route>
    </Switch>
      }
        </Box>
        
      </Main>
    </Box>
  );
}
