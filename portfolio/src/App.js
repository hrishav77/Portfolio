import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import { ChakraProvider,extendTheme } from '@chakra-ui/react'
import Navbar from "./Components/Navbar";

function App() {

  const theme = extendTheme({
    styles: {
      global: () => ({
        body: {
          bg: ""
        }
      })
    }
  });

  return (
    <ChakraProvider theme={theme}>
    <div className="routes">
    <Router>
        
        <Routes>
          <Route path="/" element={<><Navbar/><Home/></>} />
        </Routes>
      </Router>
    </div>
    </ChakraProvider>
  );
}

export default App;
