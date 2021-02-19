import React, { useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import NavBar from "./components/NavBar";
import DetailsCard from "./components/DetailsCard";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import { getDataByTypeAsync } from "./redux/slices/ByTypeSlice";
import { useDispatch } from "react-redux";
import { getDataOverTimeAsync } from "./redux/slices/OverTimeSlice";
import { getDataByCityAsync } from "./redux/slices/ByCitySlice";
import { getDataByStateAsync } from "./redux/slices/ByStateSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataByTypeAsync());
    dispatch(getDataOverTimeAsync());
    dispatch(getDataByCityAsync());
    dispatch(getDataByStateAsync());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <div className="wrapper">
          <NavBar />
          <Container maxWidth="lg" className="content">
            <DetailsCard />
          </Container>
          <Footer />
        </div>
        <Popup />
      </div>
    </ThemeProvider>
  );
}

export default App;
