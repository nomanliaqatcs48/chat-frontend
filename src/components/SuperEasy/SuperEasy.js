import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import ImageOne from "../../Assets/images/super_img_1.svg";
import ImageTwo from "../../Assets/images/super_img_2.svg";
import ImageThree from "../../Assets/images/super_img_3.svg";
import ImageFour from "../../Assets/images/super_img_4.svg";
import BgLayerFour from "../../Assets/images/bg_4.svg";
import "../../components/SuperEasy/SuperEasy.scss";
import { Container } from "@mui/system";

const SuperEasy = () => {
    return (
        <Box className="super_easy" sx={{ pt: { xs: 7, md: 9 } }}>
            <Box className="super_heading" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box>
                    <Typography sx={{ textAlign: "center" }} variant="h1">
                        Super Easy to Start
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", pt: 4 }}>
                        <Button className="super_btn">FREE SIGN UP</Button>
                    </Box>
                </Box>
            </Box>
            <Container className="custom_container">
                <Box sx={{ pt: { xs: 5, md: 8 } }}>
                    <Grid container sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" } }}>
                        <Grid item xs={12} md={6} sx={{ pt: { xs: 2, md: 0 } }}>
                            <Box>
                                <img src={ImageOne} alt="picture_of_mobile" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Box sx={{ display: "flex", pl: { xs: 3, lg: 6 } }}>
                                <Typography variant="h2">Make company-wide communication trouble-free through instant file sharing</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center", pt: { xs: 6, md: 0 } }}>
                            <Box sx={{ display: "flex", justifyContent: { xs: "flex-end", md: "flex-start" } }}>
                                <Typography sx={{ pr: { sm: 3, md: 0 }, pl: { xs: 3, sm: 0 } }} variant="h2">
                                    Simplify problem solving & decision making with topic specific chat rooms
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ pt: { xs: 3.5, md: 0 } }}>
                            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                <img src={ImageTwo} alt="picture_of_mobile" />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ display: "flex", flexDirection: { xs: "column-reverse", md: "row" } }}>
                        <Grid item xs={12} md={6} sx={{ pt: { xs: 2, md: 0 } }}>
                            <Box>
                                <img src={ImageThree} alt="picture_of_mobile" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center", pt: { xs: 5, md: 0 } }}>
                            <Box sx={{ display: "flex", pl: { xs: 3, lg: 6 } }}>
                                <Typography variant="h2">Personalized notifications that matter to you with custom options to stay focused</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center", pt: { xs: 5, md: 0 } }}>
                            <Box sx={{ display: "flex", justifyContent: { xs: "flex-end", md: "flex-start" } }}>
                                <Typography sx={{ pr: { xs: 3, md: 0 }, pl: { xs: 3, sm: 0 } }} variant="h2">
                                    Enable instant and direct communication through 1:1 chat with your team members
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ pt: { xs: 3, md: 0 } }}>
                            <Box sx={{ display: "flex", justifyContent: { xs: "flex-end", md: "flex-start" } }}>
                                <img src={ImageFour} alt="picture_of_mobile" />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Box className="bg_1">
                <img src={BgLayerFour} alt="random_Circle_like_picture" />
            </Box>
        </Box>
    );
};

export default SuperEasy;