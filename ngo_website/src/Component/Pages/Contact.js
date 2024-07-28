import { Box, Button, Paper, TextareaAutosize, TextField, Typography } from "@mui/material";
import React from "react";

const Contact = () => {

    return <>
        <Box
         sx={{
            // width: '30%',
            // padding: '20px',
            // margin: '5% auto',
            // borderRadius: '20px',
            // boxShadow: '2px 2px 2px 2px grey',
            // height:'90vh'
        }}
        >
            <Box
                component={Paper}
                sx={{
                    width: {lg:'30%',md:'40%',sm:'50%',xs:'90%'},
                    padding: '20px',
                    margin: '5% auto',
                    borderRadius: '20px',
                    boxShadow: '2px 2px 2px 2px grey',
                    // height: '100vh'
                }}
            >
                <Typography>Contact us:</Typography>
                <Box>
                    <TextField
                        sx={{ width: '100%' }}
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                    //   onChange={(e) => setEventHeading(e?.target?.value)}
                    />

                </Box>
                <Box>
                    <TextareaAutosize
                        // sx={{ width: '100%'}}
                        style={{
                            width: '100%',
                            margin: '20px 0 0 0'
                        }}
                        // onChange={(e) => setEventPara(e?.target?.value)}
                        placeholder="Enter the query, if any!!"
                        id="outlined-basic"
                        label="Outlined"
                        variant="outlined"
                        minRows={12}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'end',
                        // p: 1,
                        // fontWeight: 700, 
                        // width: '20%'
                    }}
                >
                    <Button variant="contained"
                        sx={{
                            // display: 'flex', 
                            // justifyContent: 'end',
                            p: 1,
                            fontWeight: 700,
                            // width: '20%'
                        }}
                    >Submit</Button>
                </Box>

            </Box>
        </Box>
    </>
}

export default Contact