import "./App.css";
import { useState } from "react";
import Layout from "./components/Layout/Layout";
import Editor from "./components/Editor/Editor";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function App() {
  const classes = useStyles();

  const [showLoader, setShowLoader] = useState(false);
  axios.interceptors.request.use(
    function (config) {
      // spinning start to show
      setShowLoader(true)
      return config;
    },
    function (error) {
      setShowLoader(false)
      return Promise.reject(error);
    }
  );
  
  axios.interceptors.response.use(
    function (response) {
      // spinning hide
      setShowLoader(false)
      return response;
    },
    function (error) {
      setShowLoader(false)
      return Promise.reject(error);
    }
  );
  return (
    <>
      <Layout>
        <Editor />
      </Layout>
      <Backdrop className={classes.backdrop} open={showLoader}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default App;
