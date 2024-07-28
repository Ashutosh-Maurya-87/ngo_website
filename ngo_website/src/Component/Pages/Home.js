import React, { useEffect, useMemo } from "react";
import { Box, Typography } from "@mui/material";

const Home = ({ isLogin }) => {
    useMemo(() => {
        if (!isLogin) {
            document.location.reload()
        }
    }, [])
    return <>
        <Box
        >
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
    </>
}

export default Home