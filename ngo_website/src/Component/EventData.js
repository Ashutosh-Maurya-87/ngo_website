import Img1 from '../../Assets/event_img.jpeg'
import Img2 from '../../Assets/event_img2.jpeg'
import Img3 from '../../Assets/event_img3.jpeg'
import Img4 from '../../Assets/event_img4.jpeg'
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

// export const EventData