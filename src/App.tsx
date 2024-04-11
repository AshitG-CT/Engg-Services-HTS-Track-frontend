import "./App.css";
import HTSTable from "./components/HTSTable/HTSTable";
import NavBar from "./components/NavBar/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <NavBar />

      <HTSTable />
    </>
  );
}

export default App;
