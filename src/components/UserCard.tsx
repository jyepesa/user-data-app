import CakeIcon from "@mui/icons-material/Cake";
import WcIcon from "@mui/icons-material/Wc";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { type UserData } from "../types/userType";
import "../styles/UserCard.scss";

const UserCard = ({
  username,
  birthday,
  gender,
  email,
  address,
  phone,
  website,
}: UserData) => {
  return (
    <div className="usercard">
      <div className="usercard__picframe">
        <img
          src="./dumbbells.jpg"
          alt="manly dumbbells!"
          className="usercard__picture"
        />
      </div>
      <div className="usercard__info">
        <h2 className="usercard__username">Juan</h2>
        <div className="usercard__data">
          <div className="usercard__column">
            <p className="usercard__piece">
              <CakeIcon /> 12.11.1998
            </p>
            <p className="usercard__piece">
              <WcIcon /> Male
            </p>
            <p className="usercard__piece">
              <EmailIcon /> jas@hot.com
            </p>
          </div>
          <div className="usercard__column">
            <p className="usercard__piece">
              <HomeIcon /> xstreet 45, 53525 neverland
            </p>
            <p className="usercard__piece">
              <PhoneIcon /> 234523632
            </p>
            <p className="usercard__piece">
              <LanguageIcon /> ergo.com
            </p>
          </div>
        </div>
        <button className="usercard__delete">
          <HighlightOffIcon />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
