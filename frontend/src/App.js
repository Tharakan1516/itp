import React, { useState, useEffect } from "react";
import Axios from "axios";


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Login from "./account management/pages/Login";
import MainDashboard from "./shared/pages/MainDashboard";
import AddGenInventory from "./Inventory management/AddGenInventory";
import AddSurInventory from "./Inventory management/AddSurInventory";
import ViewGeneralInventory from "./Inventory management/ViewGeneralInventory";
import ViewSurgicalInventory from "./Inventory management/ViewSurgicalInventory";
import Head from './Inventory management/Navbar'
import Inventory from "./Inventory management/Inventory";
import UpdateSurgicalInventory from "./Inventory management/UpdateSurgicalInventory"

import UpdateGeneralInventory from "./Inventory management/UpdateGeneralInventory"
import UserContext from "./context/UserContext";
import ViewInventory from "./Inventory management/Inventory";

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/api/users/tokenIsValid",
        {},
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/api/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Switch>

         <Route path="/updategen/:id" exact component={UpdateGeneralInventory} />  
        <Route path="/" exact component={ViewInventory} />

        <Route path="/addgen" exact component={AddGenInventory} />

          <Route path="/addsurg" exact component={AddSurInventory} />

          <Route path="/Surgtable" exact component={ViewSurgicalInventory} />

          <Route path="/Surgical" exact component={ViewSurgicalInventory} />

          <Route path="/General" exact component={ViewGeneralInventory} />

          <Route path="/updateSurgical/:id" exact component={UpdateSurgicalInventory} />
          

          <Route path="/gentable" exact component={ViewGeneralInventory} />

          <Route path="/addsurg" exact component={AddSurInventory} />
          <Route path="/addgen" exact component={AddGenInventory} />

      
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};

export default App;

