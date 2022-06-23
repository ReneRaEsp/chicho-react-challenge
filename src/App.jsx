import { Fragment } from "react";
import Header from "./components/Header.jsx";
import FirstChallenge from "./containers/FirstChallenge";
import SecondChallenge from "./containers/SecondChallenge";
import ThirdChallenge from "./containers/ThirdChallenge";
import FourthChallenge from "./containers/FourthChallenge.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="first" element={<FirstChallenge />} />
          <Route path="second" element={<SecondChallenge />} />
          <Route path="third" element={<ThirdChallenge />} />
          <Route path="fourth" element={<FourthChallenge />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
