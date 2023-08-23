import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { NavLink } from 'react-router-dom'

const Home = () => {
    const [first, setfirst] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setfirst(res.data))
        console.log(first)
    }, [])
    
  return (
    first.map( (temp,index) => {
    let{id,name,username} = temp
        return (
                <table border= '1px'>
                    <tr>
                        <td className='listItems'>{id}</td>
                        <td className='listItems'>{name}</td>
                        <td className='listItems'>{username}</td>
                    </tr>
                </table>
        )
    })
  )
}

export default Home
