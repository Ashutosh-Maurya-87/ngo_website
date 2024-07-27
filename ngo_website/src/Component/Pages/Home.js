import React from "react";
import Navbar from "../Navbar";
import { Box, Typography } from "@mui/material";
import SliderImage from "../SliderImage";
import Img1 from '../../Assets/event_img.jpeg'
import Img2 from '../../Assets/event_img2.jpeg'
import Img3 from '../../Assets/event_img3.jpeg'
import Img4 from '../../Assets/event_img4.jpeg'
const Home = () => {
    return <>
        <Box
        >
            {/* <SliderImage
                img1={Img1}
                img2={Img2}
                img3={Img3}
                img4={Img4}
            /> */}
            <Box
                className="homePageMain"

            >
                <Typography
                    sx={{
                        fontSize: '50px',
                        color: 'white',
                        fontWeight: 700,
                        display: 'flex',
                        margin: 'auto',
                        /* width: 100%, */
                        padding: '16%',
                        justifyContent: 'center',
                        textShadow: '0px 3px #090909'
                    }}
                >

                    Helping the Poor People
                </Typography>

            </Box>
        </Box >
        {/* <SliderImage /> */}
        {/* <Navbar /> */}
    </>
}

export default Home