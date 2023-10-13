import React, { useEffect } from "react";
import { useState } from "react";
import Filters from "./Filters";

    

    export default function Searchbar(props) {
        
//         let count = 1;
// const changeCount = () => {
//     count++;
//     alert(count)
// }
        let sno = 1;
        let [count, setCount] = useState(1)
        useEffect(()=>{console.log("Hello world")},[count])
        return (
            <>
                <div >
                    <div className="searchbars">

                        <input type="text" className="search" placeholder=" Search" />

                        <div className="searchb"><i class="fa-solid fa-magnifying-glass"></i></div>
                        <div className="mic"><i class="fa-solid fa-microphone"></i></div>
                        <div className="vid "><i class="fa-solid fa-video"></i></div>
                        <div className="bell"><i class="fa-solid fa-bell"></i></div>
                        <div className="krd"><img className="kr" src="https://yt3.ggpht.com/yti/ADpuP3P2bTweoZlgTgEhYv80cJTEjo7ekgIF4l389Q=s88-c-k-c0x00ffffff-no-rj-mo" /></div>
                    </div>
                    <Filters/>


                    <table className="table table-bordered">
                        <thead><tr><td>slno</td><td>name</td><td>rollno</td><td>branch</td></tr></thead>
                        <tbody>
                            {props.name.map((e, i) => {
                                return (
                                    <tr>
                                        <td>{sno++}</td>
                                        <td>{e.name}</td>
                                        <td>{e.roll}</td>
                                        <td>{e.branch}</td>
                                    </tr>

                                )
                            })
                            }
                        </tbody>
                    </table>
                    <div class="col-md-12 ifr">

                    <iframe    src="https://www.youtube.com/embed/iuuyMTPTtpw?si=7QbQ_fiISIrlbPCq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe  src="https://www.youtube.com/embed/iuuyMTPTtpw?si=7QbQ_fiISIrlbPCq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <iframe  src="https://www.youtube.com/embed/iuuyMTPTtpw?si=7QbQ_fiISIrlbPCq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                
                
                <>
                    <h1>{count}</h1>
                    <button onClick={() => setCount(count + 1)} className='btn btn-danger' >Click</button>
                </>
                
                
            </>
        )
    }
