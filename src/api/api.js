import axios from "axios";
import getBlobUrl from "../utils/getBlobUrl";

export const getTransparentImage = (payload) => {
  return axios({
    method: "post",
    url: "https://api.remove.bg/v1.0/removebg",
    data: payload,
    headers: {
      "Content-Type": "multipart/form-data",
      "X-Api-Key": "vRLi6HtCtKNLfNNfbVj49ijg",
      Accept: "application/json",
    },
  })
    .then((response) => {
      const b64Data = response?.data?.data?.result_b64;
      const blobUrl = getBlobUrl(b64Data);
      return blobUrl;
    })
    .catch((error) => {
      console.log("handleUploadChange error", error);
      return error
    });
};
