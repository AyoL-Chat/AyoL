import WelcomeScreen from "./screens/WelcomeScreen/WelcomeScreen";
import MainScreen from "./screens/MainScreen/MainScreen"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <WelcomeScreen/>
      {/* <MainScreen/> */}
      {/* <Router>
        <Routes>
          <Route path='/' element={<WelcomeScreen />}></Route>
          <Route path="/chat" element={<MainScreen />}></Route>
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
