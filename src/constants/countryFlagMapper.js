import { ReactComponent as Ausi } from "../assets/icons/australia.svg";
import { ReactComponent as NZ } from "../assets/icons/nzd.svg";
import { ReactComponent as US } from "../assets/icons/us.svg";
import { ReactComponent as UK } from "../assets/icons/uk.svg";
import { ReactComponent as CAN } from "../assets/icons/canada.svg";


const iconMap = {
  AUS: <Ausi />,
  US: <US />,
  NZ: <NZ />,
  UK: <UK />,
  UAE: <UK />,
  CAN: <CAN />
};

export function getCountryIcon(label) {
  return iconMap[label] || null; // returns null if not found
}