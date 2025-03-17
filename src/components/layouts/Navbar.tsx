import { AppBar, Toolbar, Typography, Drawer, List, ListItem, 
  ListItemText, Button, IconButton, useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
import { Link } from 'react-router'

function Navbar() {
  const token = localStorage.getItem('token')
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const navItems = [
    { text: 'Home Page', path: '/' },
    { text: 'Add New Patient', path: '/new_patient' },
    { text: 'Login', path: '/Login' },
    { text: 'Logout', path: '/Logout' },
  ];

  if(token === null) {
    navItems.splice(3, 1)
  } else {
    navItems.splice(2, 1)
  }

  const drawer = (
    <div>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} component={Link} to={item.path}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );


  return (
    <>
    <AppBar position="static">
        <Toolbar>
        <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
            Patient Monitor
          </Typography>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <div>
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  component={Link}
                  to={item.path}
                >
                  {item.text}
                </Button>
              ))}
            </div>
          )}
      </Toolbar>
    </AppBar>
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: 240 } }}
    >
      {drawer}
    </Drawer>
  </>
  )
}

export default Navbar