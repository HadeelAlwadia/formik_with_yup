import React from 'react';
import Select from "react-select";


function ReactSelectComponent({setFieldTouched,value, setFieldValue ,name ,options ,placeholder }) {
    return (
        <Select
           placeholder={placeholder}
            onClick={()=>setFieldTouched(`${name}`, true)}
            className="basic-single"
            classNamePrefix="select"
            defaultValue={null}
            isSearchable={true}
            name={name}
            options={options}
            inputValue={value.value}
            onChange={(value)=>setFieldValue(`${name}`, value.value)}
        />
    );
}

export default ReactSelectComponent;