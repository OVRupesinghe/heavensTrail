import {
  UilPlaneDeparture,
  UilTicket,
  UilUtensils,
  UilBedDouble,
  UilBuilding,
  UilMountains,
  UilShoppingCartAlt,
  UilUserCheck,
  UilGlassMartini,
  UilCarSideview,
  UilDiceFive ,
  UilSchedule  
} from "@iconscout/react-unicons";
import { BiSolidBinoculars } from "react-icons/bi";
import { ReactComponent as LiBeach } from "../assets/icons/li_beach.svg";

export const iconMappings = {
  car: <UilCarSideview className="hover-icon" />,
  plane: <UilPlaneDeparture className="hover-icon" />,
  building: <UilBuilding className="hover-icon" />,
  mountain: <UilMountains className="hover-icon" />,
  cart: <UilShoppingCartAlt className="hover-icon" />,
  guide: <UilUserCheck className="hover-icon" />,
  binocular: <BiSolidBinoculars className="hover-icon" />,
  ticket: <UilTicket className="hover-icon" />,
  calendar: <UilSchedule className="hover-icon" />,
  drink: <UilGlassMartini className="hover-icon" />,
  restaurant: <UilUtensils className="hover-icon" />,
  beds: <UilBedDouble className="hover-icon" />,
  dice: <UilDiceFive className="hover-icon" />,
  beach: <LiBeach className="hover-svg" sx={{ transition: "stroke 0.3s ease" }} />,
};
