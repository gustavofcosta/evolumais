import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { motion, useScroll } from "framer-motion";
import Header from "../components/landpage/Header";
import Main from "../components/landpage/Main";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
