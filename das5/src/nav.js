import React from "react";

function Nav() {

const [burgerBull,setBurgerBull ] = React.useState(true)

    return (
        <div className="Nav">
            <h1><a href="#">yellow co.</a></h1>
            <div className="Nav_div">
               <div className="menu_burger"  onClick={()=>{
                   setBurgerBull(!burgerBull)
               }}>
                    <div className={burgerBull?"burger1":"burger1_false"}></div>
                    <div className={burgerBull?"burger2":"burger2_false"}></div>
                    <div className={burgerBull?"burger3":"burger3_false"}></div>
               </div>
                <ul className={burgerBull?"list":"list_false"}>
                    <li className={burgerBull?"li1":"li1_false"}><a href=" ">Events</a></li>
                    <li className={burgerBull?"li1":"li1_false"}><a href=" ">GUIDANCE GROUPR</a></li>
                    <li className={burgerBull?"li1":"li1_false"}><a href=" ">SBECOME A MEMBE</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;