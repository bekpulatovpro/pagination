import axios from "axios";
import { useEffect, useState } from "react";
import User from "./component/user";
import Pagination from './component/Pagination'
import { USER_PER_PAGE } from "./utils/constants";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page,setPage]=useState(1)
  const [totalPage,setTotalPage]=useState(0)
 
  

  useEffect(() => {
    const getStart = () => {
      setLoading(true);
      axios
        .get("https://randomuser.me/api/?page=1&results=50&nat=us")
        .then((response) => {
          const bnma = response.data.results;
          setUsers(response.data.results);
          setLoading(false);
          setTotalPage(Math.ceil(response.data.results.length/USER_PER_PAGE))
         
        });
    };
    getStart();
    
  },[]);
  const handleClick=(num)=>{
    setPage(num)
  }

  return <div>
    {
      loading ? <h1>Loading...</h1> :<>
      <p>Data</p>
      <p>Page {page}</p>
      <User users={users} page={page} /> 
      <Pagination totalPage={totalPage} handleClick={handleClick} />
     
      </>
    }
  </div>;
};
export default App;

// IIF
