import { useState } from 'react'

export default function App() {
 const [users,setUsers]=useState([])

 const loadUsers = async ()=>{
   const res = await fetch('/api/users')
   const data = await res.json()
   setUsers(data)
 }

 return (
  <div>
   <h1>React Frontend + Node.js Backend</h1>
   <button onClick={loadUsers}>Get Users</button>
   <ul>
    {users.map(u => <li key={u.id}>{u.name}</li>)}
   </ul>
  </div>
 )
}
