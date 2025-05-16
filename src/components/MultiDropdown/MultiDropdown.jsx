import React from "react";
import DropdownList from "../DropdownList/DropdownList";

const categorias = [
  "Alojamiento",
  "Gastronomía",
  "Tours",
  "Transporte",
  "Presupuesto",
];

function MultiDropdown() {
  const [openCategory, setOpenCategory] = useState(null);
  const toggleCategory = (category) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="multi-dropdown-container">
      {categorias.map((categoria) => (
        <DropdownList key={categoria} categoria={categoria} />
      ))}
    </div>
  );
}

export default MultiDropdown;
