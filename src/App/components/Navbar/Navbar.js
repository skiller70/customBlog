import React from "react";
import RegisterForm from "../Form/Register/RegisterForm";
import Control from "../ReuseComponents/Control";
import { makeStyles } from "@mui/styles";
import { Button, Grid, Toolbar } from "@mui/material";
import Login from "../Form/login/Login";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    [theme.breakpoints.only("md")]: {
      display: "none",
    },
  },
}));


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderColor: 'grey.500',
  borderRadius: theme.shape.borderRadius,
  color:"grey",

  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));





function Navbar(props) {
  const dispatch = useDispatch();
  const POPUP = useSelector((state) => state.popup);
  const USER_STATUS = useSelector((state) => state.userProfile.PROFILE.id);


  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" elevation={2}>
        <Toolbar className={classes.root}>
          <Grid alignItems="center" justifyContent="center" container>
            <Grid xs={2} sx={{ display: { xs: "block", md: "none" } }} item>
              <Control.IconButton
                onClick={() => {
                  dispatch({ type: "setDrawerPop", payload: { isOpen: true } });
                }}
              >
                <MenuIcon color="primary" fontSize="large" />
              </Control.IconButton>
            </Grid>
            <Grid item sm></Grid>
            <Grid item md={5} xs={10}>



            <Search sx={{ border: 1 }}  >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        
            
             
            </Grid> 
            <Grid sx={{ display: { xs: "none", md: "block" } }} item>
              {USER_STATUS ? null : (
                <Control.Button
                  onClick={() =>
                    dispatch({ type: "setLoginPop", payload: { isOpen: true } })
                  }
                  sx={{ margin: "6px" }}
                  variant="outlined"
                  text="Login"
                />
              )}





            

              {USER_STATUS ? (
                <Control.Button
                  onClick={() => {
                    localStorage.removeItem("token");
                    dispatch({ type: "LOGOUT_USER" });
                  }}
                  sx={{ margin: "6px" }}
                  variant="outlined"
                  text="Logout"
                />
              ) : (
                <Control.Button
                  text="  Sign Up"
                  onClick={() =>
                    dispatch({
                      type: "setRegisterPop",
                      payload: { isOpen: true },
                    })
                  }
                  variant="outlined"
                />
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Control.Popup
        maxWidth="sm"
        title="Login"
        isOpen={POPUP.LOGIN_POP}
        setIsOpen="setLoginPop"
      >
        <Login />
      </Control.Popup>

      <Control.Popup
        title="Sign Up"
        isOpen={POPUP.REGISTER_POP}
        setIsOpen="setRegisterPop"
      >
        <RegisterForm />
      </Control.Popup>

      <Control.Drawer
        setOpenDrawer="setDrawerPop"
        openDrawer={POPUP.DRAWER_POP}
      >

        <Button onClick={()=>{ 
          dispatch({type:"setDrawerPop",payload : {isOpen:false}})
          if(USER_STATUS){
            dispatch({type:"setUploadPop",payload : {isOpen:true}})
          }else{
            dispatch({type:"setLoginPop",payload : {isOpen:true}})
          }
        }} variant="contained" color="success">
          create Post
        </Button>

        <br/>
        {USER_STATUS ? null : (
          <Control.Button
            onClick={() =>
              dispatch({ type: "setLoginPop", payload: { isOpen: true } })
            }
            sx={{ margin: "6px" }}
            variant="outlined"
            text="Login"
          />
        )}

        <br />

        {USER_STATUS ? (
          <Control.Button
            onClick={() => {
              localStorage.removeItem("token");
              dispatch({ type: "LOGOUT_USER" });
            }}
            sx={{ margin: "6px" }}
            variant="outlined"
            text="Logout"
          />
        ) : (
          <Control.Button
            text="  Sign Up"
            onClick={() =>
              dispatch({ type: "setRegisterPop", payload: { isOpen: true } })
            }
            variant="outlined"
          />
        )}
        <br />
      </Control.Drawer>
    </>
  );
}

export default Navbar;
