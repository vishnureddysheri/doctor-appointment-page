//STEP 1 -- IMPORT REACT
import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Home.css';
//STEP 2 -- CREATE FUNCTIONAL COMPONENT

    function Navbar() {
        let usertp = sessionStorage.getItem('Usertype')
        //let usertp = localStorage.getItem('Usertype')
    
       if(usertp === 'Doctor') {
            return(
            <nav className='App2'>
            {/* <Link to="/doctorafterlogin" className='App1'>DOCTOR HOME</Link>  */}
            <Link to="/Patient" className='App1'> </Link> 
            <Link to="/Logout" className='App1' style={{float:"right"}}>LOGOUT </Link>
            
        </nav>)
        }
        else if(usertp==="USER")
        {  return( 
            <nav className='App2'>
            {/* <Link to="/userafterlogin" className='App1'>USER HOME</Link> */}
            <Link to="/Viewall" className='App1'></Link> 
            <Link to="/Logout" className='App1' style={{float:"right"}}>LOGOUT </Link>
            </nav>
        )
        }
        else {
            return (
                <>
                   
                 
                <nav className="App2">
                
                
                <Link to="/registration" className="App10" >REGISTRATION </Link>
                <Link to="/login" className="App11">USER LOGIN </Link> 
                <Link to="/DoctorReg" className='App1'>DOCTOR REGISTRATION</Link>
                <Link to="/doctorlogin" className="App1">DOCTOR LOGIN</Link>
                <Link to="/contactus" className="App1">CONTACT US </Link> 
            </nav>
                  
                </>)
        }
    }

//STEP 3 -- EXPORT IT TO USE IT
export default Navbar