import { useState } from "react"

const Search = () => {
    const [searchData, setSearchData] = useState('hello')
    return (
        <div className="container">
            <label>Search: </label>
            <input 
            type="text"
            placeholder="Search.."
            value={searchData}
            onChange={e => setSearchData(e.target.value)}
            />
            <p>{searchData}</p>
        </div>
    )
}

export default Search;