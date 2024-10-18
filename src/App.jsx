// App.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github, { githubInfoLoader } from "./components/Github/Github";

// Define your routes with loaders
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Header />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/user/:userId",
    element: (
      <>
        <Header />
        <User />
        <Footer />
      </>
    ),
  },
  {
    path: "/github",
    element: (
      <>
        <Header />
        <Github />
        <Footer />
      </>
    ),
    loader: githubInfoLoader, // Define the loader here
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;







// // App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, useLoaderData } from "react-router-dom";
// import Header from "./components/Header/Header";
// import Home from "./components/Home/Home";
// import Footer from "./components/Footer/Footer";
// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";
// import User from "./components/User/User";
// import Github,{githubInfoLoader} from "./components/Github/Github";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/user/:userId" element={<User />} />
//         <Route loader={githubInfoLoader} path="/github" element={<Github />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
