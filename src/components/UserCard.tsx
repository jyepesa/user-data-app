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
  user,
  handleDelete,
  handleEditPage,
}: {
  user: UserData;
  handleDelete: (user: UserData) => void;
  handleEditPage: (id: string) => void;
}) => {
  const picDetails = { src: "", alt: "" };
  if (user.gender === "male") {
    picDetails.src = "./dumbbells.jpg";
    picDetails.alt = "dumbbells";
  } else if (user.gender === "female") {
    picDetails.src = "./makeup.jpg";
    picDetails.alt = "makeup";
  } else {
    picDetails.src = "./book.jpg";
    picDetails.alt = "book";
  }
  return (
    <div className="usercard" onClick={() => handleEditPage(user.id)}>
      <div className="usercard__picframe">
        <img
          src={picDetails.src}
          alt={picDetails.alt}
          className="usercard__picture"
        />
      </div>
      <div className="usercard__info">
        <h2 className="usercard__username">{user.username}</h2>
        <div className="usercard__data">
          <div className="usercard__column">
            <p className="usercard__piece">
              <CakeIcon /> {user.birthday}
            </p>
            <p className="usercard__piece">
              <WcIcon /> {user.gender}
            </p>
            <p className="usercard__piece">
              <EmailIcon /> {user.email}
            </p>
          </div>
          <div className="usercard__column">
            <p className="usercard__piece">
              <HomeIcon /> {user.address}
            </p>
            <p className="usercard__piece">
              <PhoneIcon /> {user.phone}
            </p>
            <p className="usercard__piece">
              <LanguageIcon /> {user.website}
            </p>
          </div>
        </div>
        <button className="usercard__delete" onClick={() => handleDelete(user)}>
          {" "}
          <HighlightOffIcon />
        </button>
      </div>
    </div>
  );
};

export default UserCard;
