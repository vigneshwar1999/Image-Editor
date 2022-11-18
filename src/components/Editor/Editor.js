import { useSelector, useDispatch } from "react-redux";
import DEFAULT_PIC from "../../assets/default-pic.jpg";
import { commonActions } from "../../Store/Reducers/CommonReducer";
import Grid from "@material-ui/core/Grid";
import ActionButtons from "../Layout/ActionButtons";
import RemoveButton from "../Layout/RemoveButton";

const Editor = () => {
  const dispatch = useDispatch();
  const uploadedImageFile = useSelector(
    (state) => state?.commonData?.selectedFile
  );

  const colorCode = useSelector(
    (state) => state?.commonData?.selectedBackgroungColor
  );

  
  return (
    <>
      <div className="editor-section">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <div style={{ border: "1px solid #000", width: "250px" }}>
              <div
                id="capture"
                style={{ backgroundColor: colorCode }}
                className="image-section"
              >
                <img
                  src={uploadedImageFile ? uploadedImageFile : DEFAULT_PIC}
                  alt="uploaded"
                  className="uploded-img"
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <div className="image-action-section">
              <div>
                <p>
                  <strong>Choose Background Color</strong> :
                </p>
                <input
                  className="color-picker"
                  type="color"
                  id="favcolor"
                  style={{
                    cursor: uploadedImageFile ? "pointer" : "not-allowed",
                  }}
                  name="favcolor"
                  value={colorCode}
                  disabled={uploadedImageFile === ""}
                  onChange={(e) =>
                    dispatch(
                      commonActions.setSelectedBackgroungColor(e.target.value)
                    )
                  }
                ></input>
              </div>
              <div className="mobile-btn-section">
                <ActionButtons
                  downClass="btn-mob-outline"
                  upClass="btn-mob-filled"
                  iconClass="btn-mob-icon"
                />
                <RemoveButton btnClass="btn-delete-filled" />
              </div>
              <div className="delete-btn-section">
                <RemoveButton btnClass="btn-delete-filled" />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={4}></Grid>
        </Grid>
      </div>
    </>
  );
};

export default Editor;
