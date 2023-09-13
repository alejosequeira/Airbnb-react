// import React from "react"

// export default function Contact(props) {
//     /**
//      * Challenge: Fix the code below to use the `props`
//      * object values in place of the hardcoded values below
//      */
//     return (
//         <div className="contact-card">
//             <img src={props.img}/>
//             <h3>{props.name}</h3>
//             <div className="info-group">
//                 <img src="./images/phone-icon.png" />
//                 <p>{props.phone}</p>
//             </div>
//             {/*             <div class="info-group"> */}
            


//             <div className="info-group" >
//                 <img src="./images/mail-icon.png" />
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     )
// }
import React from "react"
import Logo from "../public/assets/Airbnb_Logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={Logo} className="nav--logo"/>
        </nav>
    )
}