import { RiImageEditFill } from "react-icons/ri";
import ActionButtons from "./ActionButtons";

const Header = () => {
  

  return (
    <>
      <div className="header">
        <h2>
          <RiImageEditFill className="logo" /> Image Editor
        </h2>
        <div className="button-section">
          <ActionButtons downClass="btn-outline" upClass="btn-filled" iconClass="btn-icon" />
        </div>
      </div>
    </>
  );
};

export default Header;
