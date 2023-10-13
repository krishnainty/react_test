import React from 'react'
import { useContext } from 'react'
import {store} from '../App'


export default function Home() {
  let sno = 1
  const [data1, setData] = useContext(store)
  return (
    <>
      <h1>Home</h1>
      <table className='table table-bordered'>
        <thead><tr><td>slno</td><td>name</td><td>rollno</td><td>branch</td></tr></thead>
        <tbody>
          {
            data1.map((e, index)=>{
          return(
          <>
            <tr>
              <td>{sno++}</td>
              <td>{e.name}</td>
              <td>{e.roll}</td>
              <td>{e.branch}</td>
            </tr>
          </>
          )
        })
      }
        </tbody>
      </table>
    </>
  )
}
