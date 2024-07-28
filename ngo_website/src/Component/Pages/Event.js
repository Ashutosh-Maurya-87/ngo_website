import React, { useState } from "react";
import { Box, Button, Modal, TextareaAutosize, TextField, Typography } from "@mui/material";
import SliderImage from "../SliderImage";
import Img1 from '../../Assets/event_img.jpeg'
import Img2 from '../../Assets/event_img2.jpeg'
import Img3 from '../../Assets/event_img3.jpeg'
import Img4 from '../../Assets/event_img4.jpeg'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px'
};
const name = localStorage.getItem('registrationFormData')
const adminName = JSON.parse(name)
const EventData = [
    {
        'id': 10001,
        'name': adminName?.name,
        'dateTime': 'September 14, 2023',
        'eventHeading': 'Lorem Ipsum',
        'eventPara': " This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels, if you like.",
        'eventImage': Img1
    },
    {
        'id': 10001,
        'name': adminName?.name,
        'dateTime': 'September 19, 2023',
        'eventHeading': 'Lorem Ipsum',
        'eventPara': " This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels, if you like.",
        'eventImage': Img2
    },
    {
        'id': 10001,
        'name': adminName?.name,
        'dateTime': 'September 10, 2023',
        'eventHeading': 'Lorem Ipsum',
        'eventPara': " This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels, if you like.",
        'eventImage': Img3
    },
    {
        'id': 10001,
        'name': adminName?.name,
        'dateTime': 'September 04, 2023',
        'eventHeading': 'Lorem Ipsum',
        'eventPara': " This impressive paella is a perfect party dish and a fun meal to cook together with your guests.Add 1 cup of frozen peas along with the mussels, if you like.",
        'eventImage': Img4
    }

]
const Event = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [eventHeading, setEventHeading] = useState('')
    const [eventDateTime, setEventDateTime] = useState(new Date())
    const [eventPara, setEventPara] = useState('')
    const handleSubmit = () => {
        const userName = localStorage.getItem('registrationFormData')
        const name = JSON.parse(userName)
        console.log('nnnn',name)
        localStorage.setItem('eventData', JSON.stringify([{
            'name': name?.name,
            'eventHeading': eventHeading,
            'eventDateTime': eventDateTime,
            'eventPara': eventPara
        }]))
        alert('Event created successfully')
        setOpen(false)
        console.log('sub', eventHeading, eventDateTime, eventPara)

    }
    const eventData = localStorage.getItem('eventData')
    const dataEvent = JSON.parse(eventData)
    console.log('event data',JSON.parse(eventData))
    return <>
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: "space-around",
                    m: 3
                }}
            >
                <Typography variant="h3" sx={{ fontWeight: 700 }}>Events</Typography>
                <Button variant="contained" onClick={handleOpen}>Create New Event</Button>


            </Box>


            <Box>
                <Typography
                    sx={{
                        fontSize: '25px',
                        fontWeight: 700,
                        padding: '2% 8%',
                        backgroundColor: 'aliceblue'
                    }}
                >Up-Coming Event-</Typography>
                <SliderImage
                    eventData={dataEvent}
                    img1={Img1}
                    img2={Img2}
                    img3={Img3}
                    img4={Img4}
                />

            </Box>

            {/* <Box>
                <Typography
                    sx={{
                        fontSize: '25px',
                        fontWeight: 700,
                        padding: '2% 8%',
                        backgroundColor: 'aliceblue'
                    }}
                >Some examples of events:</Typography>
                <SliderImage
                    img1={Img1}
                    img2={Img2}
                    img3={Img3}
                    img4={Img4}
                />
            </Box> */}
        </Box>

        {/* Modal -------- */}
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ margin: '0px 0 20px 0' }}>
                        <Typography sx={{ fontSize: '20px',fontWeight:600 }}>Create Event</Typography>
                    </Box>
                    <Box>

                        <TextField
                            sx={{ width: '100%' }}
                            id="outlined-basic"
                            label="Event Heading"
                            variant="outlined"
                            onChange={(e) => setEventHeading(e?.target?.value)}
                        />
                    </Box>
                    <Box sx={{ margin: '10px 0' }}>
                        <input
                            type="datetime-local"
                            style={{ width: '100%', padding: '20px' }}
                            onChange={(e) => { setEventDateTime(e?.target?.value) }}
                        />
                    </Box>
                    <Box>
                        <TextareaAutosize
                            // sx={{ width: '100%'}}
                            style={{
                                width: '100%',
                                margin: '20px 0 0 0'
                            }}
                            onChange={(e) => setEventPara(e?.target?.value)}
                            placeholder="Brief intro about the event"
                            id="outlined-basic"
                            label="Outlined"
                            variant="outlined"
                            minRows={12}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: "space-around",
                            m: 3
                        }}
                    >
                        <Button variant="contained" onClick={handleClose}>Cancle</Button>
                        <Button variant="contained" onClick={() => handleSubmit()}>Submit</Button>
                    </Box>

                </Box>
            </Modal>
        </div>
    </>
}

export default Event