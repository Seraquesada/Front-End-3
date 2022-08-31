import React from 'react'
import { Input } from "./searchEngine.style"
import { BiSearch } from "react-icons/bi";
const SearchEngine = () => {
    return (
        <div style={divStyles}>
            <Input
                placeholder='Tarea'
            />
                        <div>
            </div>
            <BiSearch
                size={26}
                style={{ cursor: "pointer" }}
            />
        </div>
    )
}

const divStyles = {
    padding: "10px 10px",
    borderBottom: "1px dotted black",
    display: "flex",
    justifyContent: "flex-start",
    textAlign: "center",
    alignItem: "center",
    gap: "5px"
}

export default SearchEngine