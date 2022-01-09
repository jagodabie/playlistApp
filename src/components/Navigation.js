import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HighlightIcon from "@mui/icons-material/Highlight";

import  logo  from '../assents/logo192.png';

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#e77224f0" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, width:"20px",height:"2rem"}}>
          <img src={logo} alt="pic"/>
          </Typography>
          <Button color="inherit">
            <HighlightIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navigation;
