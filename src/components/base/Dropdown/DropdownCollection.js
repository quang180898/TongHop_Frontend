import React from "react";

const DropdownCollection = () => {

    const [value, setValue] = React.useState()

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return (
        <select className="dropdown-collection" value={value} onChange={handleChange}>
          <option value="1">Mới nhất</option>
          <option value="2">từ A-Z</option>
          <option value="3">từ Z-A</option>
        </select>
    )
}

export default DropdownCollection;