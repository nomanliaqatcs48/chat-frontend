import * as React from "react";
import { Link } from "gatsby";
import { AppBar, Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Button, Container, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../Assets/images/Header_logo.svg";
import "../../styles/common/Header.scss";

const navItems = ["About Us", "Pricing", "Features", "Blogs", "Contact us"];

function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [aboutActive, setaboutActive] = React.useState("fw_500");
    const [priceActive, setpriceActive] = React.useState("fw_500");
    const [featureActive, setfeatureActive] = React.useState("fw_500");
    const [blogActive, setblogActive] = React.useState("fw_500");
    const [contactActive, setcontactActive] = React.useState("fw_500");

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const aboutClicked = () => {
        setaboutActive("fw_700");
        setpriceActive("fw_500");
        setblogActive("fw_500");
        setfeatureActive("fw_500");
        setcontactActive("fw_500");
    };
    const priceClicked = () => {
        setpriceActive("fw_700");
        setaboutActive("fw_500");
        setblogActive("fw_500");
        setfeatureActive("fw_500");
        setcontactActive("fw_500");
    };
    const featureClicked = () => {
        setfeatureActive("fw_700");
        setpriceActive("fw_500");
        setblogActive("fw_500");
        setaboutActive("fw_500");
        setcontactActive("fw_500");
    };
    const blogClicked = () => {
        setblogActive("fw_700");
        setpriceActive("fw_500");
        setaboutActive("fw_500");
        setfeatureActive("fw_500");
        setcontactActive("fw_500");
    };
    const contactClicked = () => {
        setcontactActive("fw_700");
        setpriceActive("fw_500");
        setblogActive("fw_500");
        setfeatureActive("fw_500");
        setaboutActive("fw_500");
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Box sx={{ py: { xs: 2, lg: 0 } }}>
            <Link to="/">
                <img src={Logo} alt="Logo_picture" />
                </Link>
            </Box>
            <Divider />
            <List>
                <Box sx={{ display: "flex", flexDirection: "column", pt: 3 }}>
                    <Link to="/about">
                    <Button onClick={() => aboutClicked()} className={`${"header_items"} ${aboutActive}`} sx={{ my: 1.5 }}>
                        About Us
                    </Button>
                    </Link>
                    <Link to="/pricing">
                    <Button onClick={() => priceClicked()} className={`${"header_items"} ${priceActive}`} sx={{ my: 1.5 }}>
                        Pricing
                    </Button>
                    </Link>
                    <Link to="/features">
                    <Button onClick={() => featureClicked()} className={`${"header_items"} ${featureActive}`} sx={{ my: 1.5 }}>
                        Features
                    </Button>
                    </Link>
                    <Link to="/">
                    <Button onClick={() => blogClicked()} className={`${"header_items"} ${blogActive}`} sx={{ my: 2 }}>
                        Blogs
                    </Button>
                    </Link>
                    <Link to="/contact-us">
                    <Button onClick={() => contactClicked()} className={`${"header_items"} ${contactActive}`} sx={{ my: 1.5 }}>
                        Contact Us
                    </Button>
                    </Link>
                </Box>
            </List>
            <Grid className="header_button" item xs={2} sx={{ display: { xs: "block", sm: "none", md: "block", lg: "none" } }}>
                <Button className="header_btn_t">Sign In</Button>
            </Grid>
            <Grid className="header_button" item xs={2} sx={{ display: { xs: "block", sm: "none", md: "block", lg: "none" } }}>
                <Button className="header_btn_p">FREE TRIAL</Button>
            </Grid>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box className="header">
            <AppBar className="appBar" component="nav">
                <Container>
                    <Toolbar className="toolBar">
                        <Grid item xs={2}>
                          <Link to="/">
                            <img src={Logo} className="logo" alt="Logo_picture" />
                          </Link>
                        </Grid>
                        <Grid item xs={6} sx={{ mx: "auto" }}>
                            <Box sx={{ display: { xs: "none", md: "block" } }}>
                                <Link to = "/about">
                                <Button onClick={() => aboutClicked()} className={`${"header_items"} ${aboutActive}`} sx={{ px: { md: 3.5, lg: 3 } }}>
                                    About Us
                                </Button>
                                </Link>
                                <Link to ='/pricing'>
                                <Button onClick={() => priceClicked()} className={`${"header_items"} ${priceActive}`} sx={{ px: { md: 3.5, lg: 3 } }}>
                                    Pricing
                                </Button>
                                </Link>
                                <Link to="/features">
                                <Button onClick={() => featureClicked()} className={`${"header_items"} ${featureActive}`} sx={{ px: { md: 3.5, lg: 3 } }}>
                                    Features
                                </Button>
                                </Link>
                                <Link to="/">
                                <Button onClick={() => blogClicked()} className={`${"header_items"} ${blogActive}`} sx={{ px: { md: 3.5, lg: 3 } }}>
                                    Blogs
                                </Button>
                                </Link>
                                <Link to="/contact-us">
                                <Button onClick={() => contactClicked()} className={`${"header_items"} ${contactActive}`} sx={{ px: { md: 3.5, lg: 3 } }}>
                                    Contact Us
                                </Button>
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={2} sx={{ display: { xs: "none", sm: "block", md: "none", lg: "block" }, mr: { sm: 2, md: 3 } }}>
                            <Button className="header_btn_t">Sign In</Button>
                        </Grid>
                        <Grid item xs={2} sx={{ display: { xs: "none", sm: "block", md: "none", lg: "block" }, mr: { sm: 2, md: 0 } }}>
                            <Button className="header_btn_p">FREE TRIAL</Button>
                        </Grid>
                        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ display: { lg: "none" } }}>
                            <MenuIcon></MenuIcon>
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    anchor="top"
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", lg: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: "auto", height: "100vh" },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default Header;