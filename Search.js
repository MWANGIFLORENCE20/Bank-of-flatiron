import React from "react";

function Search({handleSearch}){
    return(
        <div className="ui large fluid icon input">
            <input
            type="text"
            placeholder="search your recent transactions"
            onChange={handleSearch}/>
            <div className="circular search link icon"></div>
        </div >

        )
}

export default Search;