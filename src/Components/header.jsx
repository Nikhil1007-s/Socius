// import React from 'react'
// import {LogOut} from 'react-feather'
// import {useAuth} from '../Utils/AuthContext'

// const header = () => {
//     const {user} = useAuth
//   return (
//     <div id="header--wrapper"> 
//         {user ? (
//             <>
//                 Welcome {user.name}
//                 <LogOut class="header--link"/>
//             </>
//         ):(
//             <button>Login</button>
//         )}
//     </div>
//   )
// }

// export default header

import React from 'react'
import {useAuth} from '../Utils/AuthContext'
import { Link } from 'react-router-dom'
import { LogOut, LogIn } from 'react-feather'

const Header = () => {
    const {user, handleUserLogout} = useAuth()
  return (
    <div id="header--wrapper">
        {user ? (
            <>
                Welcome {user.name}
                <LogOut className="header--link" onClick={handleUserLogout}/>
            </>
        ): (
            <>
                <Link to="/">
                    <LogIn className="header--link"/>
                </Link>
            </>
        )}
    </div>
  )
}

export default Header