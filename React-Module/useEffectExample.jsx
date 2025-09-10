import { useState, useEffect } from "react";
import '../Modules/index.css'
import { useCountStore } from "../my-react-trial/src/countStore/CountStore";

export  function Counter() {
  let count;
  const [count1, setCount] = useState(0);
  useEffect(() => {
    console.log(`Count is now: ${count}`);
  },[count1]); // only re-run when count changes

  const { decrease, count2} = useCountStore()
count = count2 + count1;
  return (
    <div className="start">
      <p>{count}</p>
      <button onClick={() => setCount(count1 + 1)}>Increase</button>
      <input type="button" onClick={decrease} value={"Decrease"} />
    </div>
  );
}

// export  function Users() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // runs only once on mount
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => res.json())
//       .then(data => setUsers(data));
//   }, []);

//   return (
//     <ul>
//       {users.map(user => <li key={user.id}>{user.name}</li>)}
//     </ul>
//   );
// }
export function CollectData(){
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false)
     useEffect( ()=>{
        async function fetchData(){
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        let resbody =  await response.json();
        setData(resbody);
        console.log(data);
        console.log(resbody);
    };
    fetchData();
    },[]);
    const handleClick =()=>{
       setShow(!show)
    }
    return(
        <>
        <button onClick={handleClick}>Click to show data</button>
         <ul className="start">
            
            {
            show
            ?data.map(d=> <li key={d.id}>{d.name}</li> )
            :[]
            }
        </ul>
        </>
       
    )

}