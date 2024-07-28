import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import moment from 'moment'
import MoreVertIcon from '@mui/icons-material/MoreVert';
const SliderImage = (props) => {
    const { img1, img2, img3, img4, eventData } = props
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return <>


        <Carousel
            swipeable={false}
            draggable={false}
            showDots={!true}
            responsive={responsive}
            // ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            dotListClass=""
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
        >
            {/* <Grid container>
                <Grid item xs={4} sm={12} md={12} lg={12}>
                    {eventData?.map((item, i) => {
                        return <div key={i}>
                            <Card
                                className="crousel-card"
                                key={i}
                            >
                                <CardHeader
                                    avatar={
                                        <Avatar
                                            // sx={{ bgcolor: red[500] }} 
                                            aria-label="recipe">
                                            R
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings">
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title="Shrimp and Chorizo Paella"
                                    subheader="September 14, 2016, 10:00 AM"
                                />
                                <CardMedia
                                    component="img"
                                    height="194"
                                    // image="/static/images/cards/paella.jpg"
                                    image={img1}
                                    alt="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                                        if you like.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <IconButton aria-label="add to favorites">
                                        favorites
                                    </IconButton>
                                    <IconButton aria-label="share">
                                    </IconButton>
                                </CardActions>

                            </Card>
                        </div>
                    })}
                </Grid>
            </Grid> */}
            <div>
                {
                    eventData?.map((item, index) => {
                        console.log('it', item)
                        return <Card
                            className="crousel-card"
                            key={index}
                        >
                            <CardHeader
                                avatar={
                                    <Avatar
                                        // sx={{ bgcolor: red[500] }} 
                                        aria-label="recipe">
                                        As
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={item?.name}
                                subheader={moment(item?.eventDateTime).format('YYYY-MM-DD HH:MM')}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                // image="/static/images/cards/paella.jpg"
                                image={img2}
                                alt="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    This impressive paella is a perfect party dish and a fun meal to cook
                                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                                    if you like.
                                </Typography>
                            </CardContent>

                        </Card>
                    })
                }
                {/* <Card
                    className="crousel-card"

                >
                    <CardHeader
                        avatar={
                            <Avatar
                                // sx={{ bgcolor: red[500] }} 
                                aria-label="recipe">
                                As
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016, 10:00 AM"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        // image="/static/images/cards/paella.jpg"
                        image={img2}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>

                </Card> */}

            </div>
            {/* <div>
                <Card
                    className="crousel-card"

                >
                    <CardHeader
                        avatar={
                            <Avatar
                                // sx={{ bgcolor: red[500] }} 
                                aria-label="recipe">
                                Ra
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016, 10:00 AM"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        // image="/static/images/cards/paella.jpg"
                        image={img3}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>

                </Card>

            </div>
            <div>
                <Card
                    className="crousel-card"

                >
                    <CardHeader
                        avatar={
                            <Avatar
                                // sx={{ bgcolor: red[500] }} 
                                aria-label="recipe">
                                Ap
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016, 10:00 AM"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        // image="/static/images/cards/paella.jpg"
                        image={img4}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>

                </Card>

            </div> */}
        </Carousel>
        {/* </Grid> */}

    </>
}

export default SliderImage