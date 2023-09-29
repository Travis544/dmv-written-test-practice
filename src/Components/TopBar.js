import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

export default function TopBar() {
  let date = new Date()
  return (
    <Box sx={{ flexGrow: 1 }}>
     <AppBar position="static">
            <Toolbar>
           
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                美国加州驾照考试练习{date.getFullYear()}版
            </Typography>
            </Toolbar>
      </AppBar>
    </Box>
  )
}