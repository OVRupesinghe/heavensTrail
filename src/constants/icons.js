import {UilPlaneDeparture, UilTicket, UilUtensils, UilBedDouble} from '@iconscout/react-unicons'
import { ReactComponent as LiBeach } from "../assets/icons/li_beach.svg";

export const iconMappings = {
    "car": <UilPlaneDeparture className="hover-icon" />,
    "calendar": <UilTicket className="hover-icon" />,
    "drink": <UilUtensils className="hover-icon" />,
    "beds": <UilBedDouble className="hover-icon" />,
    "dice": <UilBedDouble className="hover-icon" />,
    "restaurant": (
      <LiBeach className="hover-svg" sx={{ transition: "stroke 0.3s ease" }} />
    ),
}


