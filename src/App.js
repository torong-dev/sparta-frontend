import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Outlet /> {/*index.js에 있는 children을 보여줌 */}
      <Footer />
    </>
  );
}

export default App;
