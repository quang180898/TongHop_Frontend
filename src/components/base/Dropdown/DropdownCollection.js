import React from "react";

const DropdownCollection = ({onChange}) => {

    const [value, setValue] = React.useState()

    const handleChange = (e) => {
        onChange(e.target.value)
        setValue(e.target.value)
    }

    return (
        <select className="dropdown-collection" value={value} onChange={handleChange}>
          <option value="">Mới nhất</option>
          <option value="0">Giá tiền từ thấp-cao</option>
          <option value="1">Giá tiền từ cao-thấp</option>
        </select>
    )
}

export default DropdownCollection;