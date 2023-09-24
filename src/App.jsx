import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { FilterProvider } from "./context/FilterContextProvider";
import Search from "./pages/Search";
function App() {
  return (
    <FilterProvider>
      <Navbar />
      <Search />
    </FilterProvider>
  );
}

export default App;
