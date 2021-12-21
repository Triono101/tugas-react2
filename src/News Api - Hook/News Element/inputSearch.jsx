import React from "react"

const Search = () => {

    return(
        <div className="container-fluid">
            <div className="form-group has-search">
                <span className="fa fa-search form-search"></span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Pencarian"
                />
            </div>
        </div>
    )
}

export default Search;