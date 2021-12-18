import { useState } from "react";
import { debounce } from "lodash";
export const Debounce = () => {
    const [search, setSearch] = useState("");
   
    const handleSearch =debounce((text)=>{
         setSearch(text);
     }, 300)


    return <>
        <input onChange={(e) =>handleSearch(e.target.value) } type="text" placeholder="Search hwere"/>
    </>
}