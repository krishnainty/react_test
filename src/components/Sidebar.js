import React from "react";
import youl from '../images/youtube2png.png';
import { Link} from 'react-router-dom';
function Sidebar(){
    return(
        <>
        
            <div className="col-md-2 float-start">
                <div className="sidebar">
                <i class="fa-solid fa-bars menu "></i><img src={youl} width="150px" />
                    <div >
                    <ul>
                    <Link to="Home"><li><i class="fa-solid fa-house " ></i>Home</li></Link> 
                    <Link to="Shorts"><li><i class="fa-solid fa-bolt"></i>Shorts</li></Link>
                    <Link to="Users"><li><i class="fa-solid fa-house " ></i>Users</li></Link> 
                    <Link to="Products"><li><i class="fa-solid fa-house " ></i>Products</li></Link> 

                    <li><i class="fa-solid fa-clapperboard"></i>Subscriptions</li>
                    <hr/>
                    <li><i class="fa-solid fa-photo-film"></i>Library</li>
                    <li><i class="fa-solid fa-clock-rotate-left"></i>History</li>
                    <li><i class="fa-regular fa-clock"></i>Watch later</li>
                    <li><i class="fa-regular fa-thumbs-up"></i>Liked videos</li>
                    <li><i class="fa-brands fa-youtube"></i>Your videos</li>
                    <li><i class="fa-solid fa-chevron-down"></i>Show more</li>
                    <hr/>
                    <li>Subscriptions</li>
                    <li><img src="https://yt3.googleusercontent.com/ytc/APkrFKZ8T1bls5xMCUG0I5rhBC3e-QuIbc7Lh8y4CwtoEg=s176-c-k-c0x00ffffff-no-rj-mo"/>Prasad Tech...</li>
                    <li><img src="https://yt3.googleusercontent.com/ytc/APkrFKY455xp16s2AIHalRjK60zas-DitxAHmRjQsXPE2A=s176-c-k-c0x00ffffff-no-rj-mo"/>MrBeast</li>
                    <li><img src="https://yt3.googleusercontent.com/ytc/APkrFKY7CcZAfc6dhMF54O28cQO3BUum13LtKnQLlMlnDw=s176-c-k-c0x00ffffff-no-rj"/>Aditya Music...</li>
                    <li><img src="https://yt3.ggpht.com/OAbmQ0zVhm4BbBGjQNj02_TY2SDONvjc-Qv1trs2VZUUkjFAwU-hwHj2eBoJvjuppKFa5zLt=s176-c-k-c0x00ffffff-no-rj-mo"/>Harsha Sai...</li>
                    <li><img src="https://yt3.ggpht.com/o4MZVi2qdNgx0K7vpEl7DT2PefjROdisZTD7is6TMimF1_DTM49O1ld3iQzTpE5MCj86c-vzav8=s176-c-k-c0x00ffffff-no-rj-mo"/>Telusko</li>
                    <hr/>
                    <li>Explore</li>
                    <li><i class="fa-solid fa-fire"></i>Trending</li>
                    <li><i class="fa-solid fa-music"></i>Music</li>
                    </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sidebar;