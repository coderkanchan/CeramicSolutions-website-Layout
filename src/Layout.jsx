import { AnimatePresence, motion } from "framer-motion"
import Navbar from "./Components/Navbar"
import { Outlet, useLocation } from "react-router-dom"
import Footer from './Components/Footer.jsx';
import BCrumbs from './Components/BCrumbs.jsx';



export default function Layout() {
  const location = useLocation();
  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">

      <Navbar />

      <div className="absolute top-[150px] z-10 w-full">
        <BCrumbs />
      </div>

      <main className="flex-grow">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

    </div>
  )
}