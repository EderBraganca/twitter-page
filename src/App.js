import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCSA6oNCHF-FzwA4HZAudFUoiAmqEckXfY",
  authDomain: "switter-page.firebaseapp.com",
  projectId: "switter-page",
  storageBucket: "switter-page.appspot.com",
  messagingSenderId: "27872657601",
  appId: "1:27872657601:web:08382d6510e9087faa5440",
  measurementId: "G-HCPFCVYSPK"
};

const App = () => {  
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);    
  }, []); 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" exact component={About} />
      </Routes>
    </Router>
  );
};
export default App;