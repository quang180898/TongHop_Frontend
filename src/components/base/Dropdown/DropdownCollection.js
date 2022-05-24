import React from "react";

const DropdownCollection = () => {

    const [value, setValue] = React.useState()

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <select className="dropdown-collection" value={value} onChange={handleChange}>
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="meat">Meat</option>
        </select>
    )
}

export default DropdownCollection;