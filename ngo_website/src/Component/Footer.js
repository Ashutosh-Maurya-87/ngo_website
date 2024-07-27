import { Box, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
    return <>
        <Box
            sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                backgroundColor:'aliceblue'
             }}
        >

            <Typography>
                © copyright 2024 Ayodhya - NGO created by ashutosh &nbsp;&nbsp;&nbsp;
                <Link href='#' underline="none">
                    Privacy Policy
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link href='#' underline="none">
                    Cookie Prefences
                </Link>
            </Typography>
        </Box>
    </>
}

export default Footer