import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import NgoImage from '../../Assets/ngo_about.jpeg'
const About = () => {

    return <>
        <Box
            // component={Paper}
            elevation={5}
            sx={{
                margin: '40px auto',
                width: '60%', borderRadius: '10px'
            }}
        >
            <Box

                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                <Typography
                    sx={{
                        fontSize: '50px',
                        textShadow: '0px 2px #0b81f5',
                        mb: 4
                    }}
                >About Ngo</Typography>

            </Box>
            <Grid container spacing={2}>
                <Grid
                    sx={{ display: 'flex', justifyContent: 'center' }}
                    item
                    xs={12} lg={6} md={6} sm={6}>
                    {/* IMAGE PART */}
                    <img src={NgoImage} alt='about ngo image' />
                </Grid>
                <Grid item xs={12} lg={6} md={6} sm={6}>
                    <Box>
                        <Typography>
                            <Typography variant="h5">
                                What Is a Non-Governmental Organization (NGO)?
                            </Typography>
                            A non-governmental organization (NGO) is a group that functions
                            independently of any government with the objective of improving social
                            conditions. NGOs are typically non-profit institutions.
                            They are sometimes called civil society organizations and are
                            established on community, national, and international levels to
                            serve a social or political goal such as a humanitarian cause or
                            the protection of the environment.

                            For example, NGOs might focus on activities in
                            areas involving health or health emergencies, education, infrastructure, advocacy of minority rights, support of the poor, and the reduction of crime.
                        </Typography>
                        <Typography>
                            A non-governmental organization, or NGO,
                            typically is established to work toward public or social welfare goals.
                            For instance, an NGO could focus on human rights, voters' rights, healthcare, helping the poor, and
                            preventing cruelty to animals. NGOs can be funded by donations and grants.
                        </Typography>

                    </Box>
                </Grid>

            </Grid>



        </Box >
    </>
}

export default About