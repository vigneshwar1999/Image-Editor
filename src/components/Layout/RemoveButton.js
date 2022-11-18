import { useSelector, useDispatch } from "react-redux";
import { commonActions } from "../../Store/Reducers/CommonReducer";
import { RiDeleteBin5Fill } from "react-icons/ri";
const RemoveButton = ({ btnClass }) => {
  const dispatch = useDispatch();
  const uploadedImageFile = useSelector(
    (state) => state?.commonData?.selectedFile
  );

  const handleRemoveUplodedImage = () => {
    dispatch(commonActions.setSelectedFile(""));
    dispatch(commonActions.setSelectedBackgroungColor("#ffffff"));
  };
  return (
    <>
      <button
        className={btnClass}
        onClick={handleRemoveUplodedImage}
        style={{
          cursor: uploadedImageFile ? "pointer" : "not-allowed",
          backgroundColor: uploadedImageFile ? "#ff0000" : "#bcbcbc",
        }}
      >
        <RiDeleteBin5Fill className="btn-icon" />
        Remove Image
      </button>
    </>
  );
};

export default RemoveButton;
