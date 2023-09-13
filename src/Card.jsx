import React from "react"
import Logo from "../public/assets/jordan.png"

export default function Card(promps) {
    let badgeText
    if(promps.openSpots === 0){ badgeText= "SOLD OUT"}
    else if ( promps.location==="Online"){ badgeText= "ONLINE"}
       
    return (
        <div key={promps.id} className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={promps.coverImg} className="card--image" />
            
            <div className="card--stats">
                <img src={Logo} className="card--star" />
                <span>{promps.stats.rating}</span>
                <span className="gray">({promps.stats.reviewCount}) • </span>
                <span className="gray">{promps.location}</span>
            </div>
            <p className="card--title">{promps.title}</p>
            <p className="card--price"><span className="bold">From ${promps.price}</span> / person</p>
        </div>
    )
}

// return (
//     <div className="card">
//         <img src={`../images/${props.img}`} className="card--image" />
//         <div className="card--stats">
//             <img src="../images/star.png" className="card--star" />
//             <span>{props.rating}</span>
//             <span className="gray">({props.reviewCount}) • </span>
//             <span className="gray">{props.location}</span>
//         </div>
//         <p>{props.title}</p>
//         <p><span className="bold">From ${props.price}</span> / person</p>
//     </div>
// )