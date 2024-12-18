import React, { useState } from "react";
import "../styles/FilterSection.css";

const FilterSection = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const categories = {
    Hardware: [
      "Teclado",
      "Mouse",
      "Auriculares",
      "Monitor",
      "Silla",
      "MousePad",
      "Cargadores",
      "Cables",
      "Accesorios",
    ],
    Geek: [
      "Figuras",
      "Ropa",
      "Tazas",
      "Rompecabezas",
      "Cuaderno",
      "Luces",
      "Alfombra",
      "Reloj",
      "Mochila",
    ],
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    const updatedFilters = checked
      ? [...selectedFilters, value]
      : selectedFilters.filter((filter) => filter !== value);

    setSelectedFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <div className="filter-section">
        <button className="filter-toggle" onClick={toggleMenu}>
          Filtros
        </button>
        <div className={`filter-menu ${isMenuVisible ? "visible" : ""}`}>
          {Object.entries(categories).map(([category, options]) => (
            <div key={category} className="filter-category">
              <h3>{category}</h3>
              {options.map((option) => (
                <div key={option} className="filter-option">
                  <input
                    type="checkbox"
                    id={option}
                    value={option}
                    onChange={handleCheckboxChange}
                    checked={selectedFilters.includes(option)}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterSection;
