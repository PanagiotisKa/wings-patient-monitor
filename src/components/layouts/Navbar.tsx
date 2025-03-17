import { AppBar, Toolbar, Typography, Drawer, List, ListItem, 
  ListItemText, Button, IconButton, useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useContext } from 'react'
import { Link } from 'react-router'
import TokenContext from '../../services/tokenContext';

function Navbar() {
  // memoryToken from memory to enable/disable login/logout
  const memoryToken = useContext(TokenContext)
  // drawer for mobile view
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // nav items
  const navItems = [
    { text: 'Αρχική Σελίδα', path: '/' },
    { text: 'Προσθήκη Νέου Ασθενή', path: '/new_patient' },
    { text: 'Σύνδεση', path: '/Login' },
    { text: 'Αποσύδεση', path: '/Logout' },
  ];
 
  // logic to enable/disable login/logout
  if(memoryToken.memoryToken.length == 0) {
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
                  sx={{fontSize: '1.1rem', textTransform: 'none', pr:3}}
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