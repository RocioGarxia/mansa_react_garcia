import { AppBar, Toolbar, Button, Typography } from "@material-ui/core";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
    
<AppBar position="static">
  <Toolbar>
    <CartWidget/>
    <Typography variant="h6">
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
    );

    };

export default Navbar;