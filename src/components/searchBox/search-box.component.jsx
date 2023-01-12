import React from "react";

export const SearchBox = ({placeholder, changeHandler}) => (

    <input 
    className="search"
    type="text"
    onChange={changeHandler}
    placeholder={placeholder}
    />
)