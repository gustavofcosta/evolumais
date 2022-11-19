import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { motion, useScroll } from "framer-motion";
import Header from "../components/landpage/Header";
import Main from "../components/landpage/Main";

const Home = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-hidden"
    >
      <motion.div
        className="fixed z-50 top-0 left-0 right-0 h-2 bg-secondary_500 origin-left "
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />

      <Header />
      <Main />
      <Footer />
    </motion.div>
  );
};

export default Home;
