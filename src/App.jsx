
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Landing/login";
import Home from "./components/Landing/Home";
import Register from './components/Landing/register';
import AccountType from './components/Landing/account-type';
import PropertyForm from './components/Landing/propertyform';
import Dashboard from './components/Landing/dashboard';
// import DashboardLayout from './components/Landing/layout';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page route */}
        <Route path="/login" element={<Login />} /> {/* Login page route */}
        <Route path="/register" element={<Register />} /> {/* Login page route */}
        <Route path="/accounttype" element={<AccountType />} /> {/* Account type page route */}
        <Route path="/getproperty" element={<PropertyForm />} /> {/*Get property page route */}
        <Route path="/mydashboard" element={<Dashboard />} /> {/*Get dashboard page route*/}
        {/* <Route path="/dashboard" element={<DashboardLayout />} /> Get property page route */}
      </Routes>
    </Router>
  );
};

export default App;
