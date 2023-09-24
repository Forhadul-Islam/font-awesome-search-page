import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import IconLoader from "./pages/IconLoader";
import Search from "./pages/Search";
import { FilterProvider } from "./store/contextProvider/filterContextProvide";
function App() {
  return (
    <FilterProvider>
      <Navbar />
      <Search />
      <Footer />
      <IconLoader iconName="star" />
    </FilterProvider>
  );
}

export default App;
