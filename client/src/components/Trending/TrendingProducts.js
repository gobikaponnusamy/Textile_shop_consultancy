import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
const TrendingProducts = () => {
    const [keyword, setKeyword] = useState();
    let history = useHistory();

    const[List, setList] = useState([])
    // const[serachedList, setSearchedList] = useState([])
    // const[search, setSearch] = useState('')
    // useEffect(() => {
    //         axios.get('https://localhost:5000')
    //         .then((response) => {setList(response.data)})
    //         .catch((error) => console.log(error))    
    //     },[]
    // )
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(keyword)
        if (keyword.trim()) {
          history.push(`/search/${keyword}`);
        } else {
          history.push("/");
        }
      };
  return (
    <div>
         <div className="col-5 d-flex flex-row-reverse align-items-center m-4" style={{display:"flex",justifyContent:"flex-end"}}>
                <form onSubmit={submitHandler} className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Search"
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                  <button type="submit" className="search-button bg-black">
                    search
                  </button>
                </form>
              </div>
              <div className="col">

              </div>
              
              

    </div>
  )
}

export default TrendingProducts