import { Box, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
    return <>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'aliceblue',
                padding: '20px'
            }}
        >

            <Typography
                sx={{ fontSize: { lg: "16px", md: "16px", sm: "12px", xs: '10px' } }}
            >
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