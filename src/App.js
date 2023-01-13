import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
//Import pages
import Nav from "./Components/NavBar/Nav";
import LandingPage from "./LandingPage";
import HomePage2 from "./HomePage2";
import HomePage from "./HomePage";
import HomePage3 from "./HomePage3";
import HomePage4 from "./HomePage4";
import SignIn from "./SignIn";
import Footer from "./Components/Footer/Footer";
import PostOffer from "./PostOffer";
import SelectRequest from "./SelectRequest";
import Select from "./Select";
import WorkerProfile from "./WorkerProfile";
import ClientProfile from "./ClientProfile";
import DocumentForm from "./DocumentForm";
import CallForm from "./CallForm";
import TransaltionForm from "./TransaltionForm";
import Category from "./Category";
import Category2 from "./Category2";
import About from "./About";
import TeamSection from "./Components/About/TeamSection";
import Privacy from "./Components/PrivacyPolicy/Privacy";
import Checkout from "./Checkout";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Messages from "./Messages";
//Module for various cookie settings
import { CookiesProvider, useCookies } from "react-cookie";
//Notification Toasts
import { ToastContainer } from "react-toastify";
import { UserContext } from "./utils/UserContext";
import { client } from "./utils/client.mjs";
import toastMessage from "./Components/notification/toastMessage";
import DashBoard from "./Components/DashBoard/DashBoard";
import PostRequest from "./PostRequest";
function App() {
  //Cookies
  const [cookies, setCookie] = useCookies(["token"]);
  //authetication of user for the whole app
  const [jwttoken, setJwttoken] = useState(
    cookies.token || localStorage.getItem("token")
  );
  const [user, setUser] = useState();
  const [authorized, setAuthorized] = useState(false);
  //Context we will user Through out the App
  const contextValue = {
    token: jwttoken,
    setJwttoken: setJwttoken,
    user: user,
    setUser: setUser,
    authorized: authorized,
    setAuthorized: setAuthorized,
  };
  //Checks if token in localStorage is still valid
  async function checkToken() {
    try {
      const response = await client(jwttoken).get("/user/Profile");
      const { status } = response;
      console.log(status);
      if (status === 200) {
        toastMessage("success", "Logged In");
        //Sets the user to the data from the server
        setUser(response.data[0]);
        // Authorize the user if token still valid
        setAuthorized(true);
      }
    } catch (error) {
      toastMessage("info", "Your Session is expired. Please login again.");
    }
  }
  useEffect(() => {
    // Check if the user has visited before
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      // Run the initial function
      checkToken();

      // Set a flag in local storage so that we don't run the function again
      localStorage.setItem("hasVisited", true);
    }
  });

  useEffect(() => {
    // Add the beforeunload event listener
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Return a cleanup function to remove the event listener
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  // This is the event handler for the beforeunload event
  function handleBeforeUnload() {
    localStorage.removeItem("hasVisited");
  }
  return (
    <>
      <CookiesProvider>
        <UserContext.Provider value={contextValue}>
          <ToastContainer />
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route index element={<LandingPage />} />
              <Route path="/HomePage" element={<HomePage />} />
              <Route path="/HomePage2" element={<HomePage2 />} />
              <Route path="/HomePage3" element={<HomePage3 />} />
              <Route path="/HomePage4" element={<HomePage4 />} />
              <Route path="/Category/:category" element={<Category />} />
              <Route path="/Category2/:category" element={<Category2 />} />
              <Route path="/About" element={<About />} />
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/WorkerPorfile" element={<WorkerProfile />} />
              <Route path="/Profile" element={<ClientProfile />} />
              <Route path="Post" element={<PostRequest />} />
              {/* SELECT IS THE MAIN ROUTE */}
              <Route path="Select" element={<Select />}>
                {/* Request is the Outlet of select  */}
                <Route path="Request" element={<SelectRequest />}>
                  {/* :type is also the outlet of request */}
                  <Route path=":type" element={<PostRequest />} />
                </Route>
                <Route path="Offer" element={<PostOffer />} />
              </Route>
              <Route path="/DocumentForm" element={<DocumentForm />} />
              <Route path="/CallForm" element={<CallForm />} />
              <Route path="/TransaltionForm" element={<TransaltionForm />} />
              <Route path="/Privacy" element={<Privacy />} />
              <Route path="/TeamSection" element={<TeamSection />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/Dashboard" element={<DashBoard />} />
              <Route path="/ProductDetails/:id" element={<ProductDetails />} />
              <Route path="/messages" element={<Messages />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </UserContext.Provider>
      </CookiesProvider>
    </>
  );
}

export default App;
