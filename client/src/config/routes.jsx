import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Home, NotFound, Profile, SignIn, SignUp } from "../pages";
import  Header  from "../components/Header.jsx";


const AppRouter = () => {
  return (
    <>
      <Router>
        {/* header */}
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
