import "./App.css";
import React from "react";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import Login from "./components/student/login";
import SignUp from "./components/student/register";
import EmployerSignup from "./components/employer/employerSignup";
import EmployerSignin from "./components/employer/employerSignin";
import ContactUs from "./components/contact-us/contact-us";
import AboutUs from "./components/about-us/about-us";
import PrivacyPolicy from "./components/privacy-policy/privacy-policy";
import TermsCondition from "./components/terms-condition/terms-condition";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Error from "./components/Error/Error";
import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "./reducers/userReducer";
import NewInternship from "./components/CreateNew/CreateInternship";
import NewJob from "./components/CreateNew/CreateJob";

import Profile from "./components/student-profile/Profile";

import AllInternships from "./components/Internships/AllInternships";
import AllJobs from "./components/Jobs/AllJobs";
import NewFreshersJob from "./components/CreateNew/CreatFreshersJob";
import AllFreshersJobs from "./components/FreshersJob/AllFresherJob";
import UpdateInternship from "./components/UpdateForm/InternshipUpdate";
import UpdateJob from "./components/UpdateForm/JobUpdate";
import UpdateFresherJob from "./components/UpdateForm/FresherJobUpdate";
import welcomeSignup from "./components/welcomeSignup/welcomeSignup";
import welcomeSignupEmployer from "./components/welcomeSignup/welcomeSignupEmployer";
import InternshipsByLocation from "./components/Internships/InternshipByLocation";
import InternshipsByIndustry from "./components/Internships/InternshipByIndustry";
import InternshipsByStream from "./components/Internships/InternshipByStream";
import InternshipsByCompany from "./components/Internships/InternshipByCompany";
import InternshipsGroupedByLocation from "./components/Internships/InternshipsGroupedByLoction";
import InternshipsGroupedByStream from "./components/Internships/InternshipGroupedByStream";
import InternshipsGroupedByIndustry from "./components/Internships/InternshipsGroupedByIndustry";
import JobsGroupedByLocation from "./components/Jobs/JobsGroupedByLocation";
import JobsGroupedByStream from "./components/Jobs/JobsGroupedByStream";
import JobsGroupedByIndustry from "./components/Jobs/JobsGroupedByIndustry";
import FresherJobsGroupedByIndustry from "./components/FreshersJob/FresherJobsGroupedByIndustry";
import JobsByCompanyName from "./components/Jobs/JobsByCompanyName";
import FresherJobsGroupedByLocation from "./components/FreshersJob/FresherJobsGroupedByLocation";
import FresherJobsGroupedByStream from "./components/FreshersJob/FresherJobsGroupedByStream";
import FreshersJobByCompanyName from "./components/FreshersJob/FreshersJobByCompanyName";
import InternshipCompanyName from "./components/Internships/InternshipCompanyNames";
import JobCompanyName from "./components/Jobs/JobCompanyName";
import FreshersJobCompanyName from "./components/FreshersJob/FreshersJobCompanyName";



export const UserContext = createContext();

const Routing = () => {
  const { state, dispatch } = useContext(UserContext);

  let routes;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const type = JSON.parse(localStorage.getItem("type"));
    console.log(type);
    if (user) {
      dispatch({ type: "USER", payload: { user: user, userType: type } });
    }
  }, [dispatch]);

  // return (
  //   <Switch>
  //     <Route path="/" exact compo>
  //       <Home />
  //     </Route>
  //     <Route path="/student-login" exact>
  //       <Login />
  //     </Route>
  //     <Route path="/student-signup" exact>
  //       <SignUp />
  //     </Route>
  //     <Route path="/employer-signup" exact>
  //       <EmployerSignup />
  //     </Route>
  //     <Route path="/employer-login" exact>
  //       <EmployerSignin />
  //     </Route>
  //     <Route path="/create-internship" exact>
  //       <NewInternship />
  //     </Route>
  //     <Route path="/create-job" exact>
  //       <NewJob />
  //     </Route>
  //     <Route path="/about-us" exact>
  //       <AboutUs />
  //     </Route>
  //     <Route path="/contact-us" exact>
  //       <ContactUs />
  //     </Route>
  //     <Route path="/privacy-policy" exact>
  //       <PrivacyPolicy />
  //     </Route>
  //     <Route path="/terms-conditions" exact>
  //       <TermsCondition />
  //     </Route>
  //     <Route exact path="/login/student-profile">
  //       <Profile/>
  //     </Route>
  //     <Route component={Error} />
  //   </Switch>
  // );

  console.log(state);

  if (state) {
    if (state.userType === "employee") {
      routes = (
        <Switch>
          <Route path="/" exact compo>
            <Home />
          </Route>
          <Route path="/create-internship" exact>
            <NewInternship />
          </Route>
          <Route path="/create-job" exact>
            <NewJob />
          </Route>
          <Route path="/create-freshersjob" exact>
            <NewFreshersJob />
          </Route>
          <Route path="/update-internship/:id">
            <UpdateInternship />
          </Route>
          <Route path="/update-job/:id">
            <UpdateJob />
          </Route>
          <Route path="/update-fresher/:id">
            <UpdateFresherJob />
          </Route>
          <Route path="/all-internships" exact>
            <AllInternships />
          </Route>
          <Route path="/all-jobs" exact>
            <AllJobs />
          </Route>
          <Route path="/all-freshersjobs" exact>
            <AllFreshersJobs />
          </Route>
          <Route path="/internship/location">
            <InternshipsGroupedByLocation />
          </Route>
          <Route path="/internship/stream">
            <InternshipsGroupedByStream />
          </Route>
          <Route path="/internship/industry">
            <InternshipsGroupedByIndustry />
          </Route>
          <Route path="/jobs/location">
            <JobsGroupedByLocation />
          </Route>
          <Route path="/jobs/stream">
            <JobsGroupedByStream />
          </Route>
          <Route path="/location-internship/:location">
            <InternshipsByLocation />
          </Route>
          <Route path="/industry-internship/:industry">
            <InternshipsByIndustry />
          </Route>
          <Route path="/stream-internship/:stream">
            <InternshipsByStream />
          </Route>
          <Route path="/companyName-internship/:companyName">
            <InternshipsByCompany />
          </Route>
          <Route path="/jobs/industry">
            <JobsGroupedByIndustry />
          </Route>
          <Route path="/freshers/companyName/:companyName">
            <FreshersJobByCompanyName />
          </Route>
          <Route path="/internship/companyName">
            <InternshipCompanyName />
          </Route>
          <Route path="/job/companyName">
            <JobCompanyName />
          </Route>
          <Route path="/companyName/freshersjob">
            <FreshersJobCompanyName />
          </Route>
          <Route path="/job/companyName/:companyName">
            <JobsByCompanyName />
          </Route>
          <Route path="/freshersjobs/industry">
            <FresherJobsGroupedByIndustry />
          </Route>
          <Route path="/freshersjobs/location">
            <FresherJobsGroupedByLocation />
          </Route>
          <Route path="/freshersjobs/stream">
            <FresherJobsGroupedByStream />
          </Route>
          <Route path="/about-us" exact>
            <AboutUs />
          </Route>
          <Route path="/contact-us" exact>
            <ContactUs />
          </Route>
          <Route path="/privacy-policy" exact>
            <PrivacyPolicy />
          </Route>
          <Route path="/terms-conditions" exact>
            <TermsCondition />
          </Route>
          <Route component={Error} />
        </Switch>
      );
    } else {
      routes = (
        <Switch>
          <Route path="/" exact compo>
            <Home />
          </Route>
          <Route path="/about-us" exact>
            <AboutUs />
          </Route>
          <Route path="/contact-us" exact>
            <ContactUs />
          </Route>
          <Route path="/privacy-policy" exact>
            <PrivacyPolicy />
          </Route>
          <Route path="/terms-conditions" exact>
            <TermsCondition />
          </Route>
          <Route path="/all-internships" exact>
            <AllInternships />
          </Route>
          <Route path="/all-jobs" exact>
            <AllJobs />
          </Route>
          <Route exact path="/login/student-profile">
            <Profile />
          </Route>
          <Route path="/all-freshersjobs" exact>
            <AllFreshersJobs />
          </Route>
          <Route path="/location-internship/:location">
            <InternshipsByLocation />
          </Route>
          <Route path="/industry-internship/:industry">
            <InternshipsByIndustry />
          </Route>
          <Route path="/stream-internship/:stream">
            <InternshipsByStream />
          </Route>
          <Route component={Error} />
        </Switch>
      );
    }
  } else {
    routes = (
      <Switch>
        <Route path="/" exact compo>
          <Home />
        </Route>
        <Route path="/student-login" exact>
          <Login />
        </Route>
        <Route path="/student-signup" exact>
          <SignUp />
        </Route>
        <Route path="/employer-signup" exact>
          <EmployerSignup />
        </Route>
        <Route path="/employer-login" exact>
          <EmployerSignin />
        </Route>
        <Route path="/about-us" exact>
          <AboutUs />
        </Route>
        <Route path="/contact-us" exact>
          <ContactUs />
        </Route>
        <Route path="/privacy-policy" exact>
          <PrivacyPolicy />
        </Route>
        <Route path="/terms-conditions" exact>
          <TermsCondition />
        </Route>
        <Route path="/location-internship/:location">
          <InternshipsByLocation />
        </Route>
        <Route path="/industry-internship/:industry">
          <InternshipsByIndustry />
        </Route>
        <Route path="/stream-internship/:stream">
          <InternshipsByStream />
        </Route>
        <Route
          path="/confirm/employer/:confirmationCode"
          component={welcomeSignupEmployer}
          exact
        />
        <Route
          path="/confirm/:confirmationCode"
          component={welcomeSignup}
          exact
        />
        <Route component={Error} />
      </Switch>
    );
  }

  return routes;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <main>
            <Routing />
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
