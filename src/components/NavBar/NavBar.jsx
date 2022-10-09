import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import "./navbar.css";

import CardWidget from './CardWidget';
import { Link } from "react-router-dom";


// import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#FF5733" }}>
        <Toolbar>
          <div className="nav-bar">
            <ul className="nav-menu">
              <Link to="/">
                <Typography variant="h6" component="div" className='styleLinkText' sx={{
                  flexGrow: 1, fontSize: '20px',
                  fontWeight: ' 600'
                }}>Inicio </Typography>
              </Link>
              <Link to="/diseño3d"><Typography variant="h6" component="div" className='styleLinkText' sx={{
                flexGrow: 1, fontSize: '20px',
                fontWeight: ' 600'
              }}>Diseños 3D 🖌</Typography></Link>
              <Link to="/category/cuadro">
                <Typography variant="h6" component="div" className='styleLinkText' sx={{
                  flexGrow: 1, fontSize: '20px',
                  fontWeight: ' 600'
                }}> Cuadros </Typography>
              </Link>
              <Link to="/category/figura"><Typography variant="h6" component="div" className='styleLinkText' sx={{
                flexGrow: 1, fontSize: '20px',
                fontWeight: ' 600'
              }}>Figuras </Typography></Link>
              <Button color="inherit"> <CardWidget /> </Button>
            </ul>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;