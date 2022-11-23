import { useRef } from "react";
import { MdFileDownload, MdFileUpload } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";
import { commonActions } from "../../Store/Reducers/CommonReducer";
import { getTransparentImage } from "../../api/api";

const ActionButtons = ({ downClass, upClass, iconClass }) => {
  const hiddenFileInputRef = useRef(null);
  const dispatch = useDispatch();

  const uploadedImageFile = useSelector(
    (state) => state?.commonData?.selectedFile
  );

  // Triggering hidden file input using useRef hook.
  const handleUploadClick = () => hiddenFileInputRef.current.click();

  // Storing uploaded image on redux state whenever onChange event happens on file input.
  const handleUploadChange = async (event) => {
    const formData = new FormData();
    formData.append("size", "auto");
    formData.append("image_file", event.target.files[0]);
    const blobUrl = await getTransparentImage(formData)
    console.log("blobUrl",blobUrl);
    dispatch(commonActions.setSelectedFile(blobUrl));
    dispatch(commonActions.setSelectedBackgroungColor("#ffffff"));
  };

  const handleCaptureClick = async () => {
    const canvas = await html2canvas(document.querySelector("#capture"));
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, "download.png", "image/png");
  };
  return (
    <>
      <button className={downClass} onClick={handleUploadClick}>
        <MdFileUpload className={iconClass} />
        Upload Image
      </button>
      <input
        type="file"
        ref={hiddenFileInputRef}
        onChange={handleUploadChange}
        style={{ display: "none" }}
        accept="image/png,image/jpeg"
        onClick={(event) => {
          event.target.value = null;
        }}
      />
      <button
        style={{
          cursor: uploadedImageFile ? "pointer" : "not-allowed",
          backgroundColor: uploadedImageFile ? "#9073f1" : "#bcbcbc",
        }}
        className={upClass}
        onClick={handleCaptureClick}
        disabled={uploadedImageFile === ""}
      >
        <MdFileDownload className={iconClass} />
        Download Image
      </button>
    </>
  );
};

export default ActionButtons;
