// src/App.jsx
import { useState } from "react";
import Menu from "./components/Menu/Menu.jsx";
import DropdownList from "./components/DropdownList/DropdownList.jsx";
import "./App.css";


function App() {
  const [openCategory, setOpenCategory] = useState(null);

  /* FUNCION PARA ABRIR/CERRAR DROPDOWN */
  const toggleCategory = (categoria) => {
    setOpenCategory((prev) => (prev === categoria ? null : categoria));
  };

  return (
    <div className="app-container">
      <Menu toggleCategory={toggleCategory} />

      
      <DropdownList
        categoria="Alojamiento"
        isOpen={openCategory === "Alojamiento"}
        toggleCategory={toggleCategory}
      />
      <DropdownList
        categoria="Gastronomia"
        isOpen={openCategory === "Gastronomia"}
        toggleCategory={toggleCategory}
      />
      <DropdownList
        categoria="Tours"
        isOpen={openCategory === "Tours"}
        toggleCategory={toggleCategory}
      />
       <DropdownList
        categoria="Transporte"
        isOpen={openCategory === "Transporte"}
        toggleCategory={toggleCategory}
      />
       <DropdownList
        categoria="Presupuesto"
        isOpen={openCategory === "Presupuesto"}
        toggleCategory={toggleCategory}
      />
      
    </div>
  );
}

export default App;
