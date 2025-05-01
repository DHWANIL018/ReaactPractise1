// Shree Ganeshay namah 
import React, { useEffect } from 'react'
import { GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut } from '@firebase/auth'
import auth from './FireBase'
import { useState } from 'react'
const GoogleAuth = () => {

    const [data,SetData] = useState(null)

    const provider = new GoogleAuthProvider()
    function GoogleLogin(){
        signInWithPopup(auth,provider).then(res=>{
            // console.log(res)
            // console.log(res.user)
            // console.log(res.user.displayName)
            // console.log(res.user.email)
            // console.log(res.user.photoURL)
        })
    }

    function GoogleOut(){
        signOut(auth).then(res=>{
            console.log('SignOut Successful')
        })
    }


    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                SetData(user)
                console.log(user)
                console.log(user.email)
                console.log(user.displayName)
                console.log(user.photoURL)
            }
            
        }
    )},[])

  return (
    <>
        <h1 className=' text-center'>Google Auth</h1>
    <div className=' text-center'>


        {
            data ?
            <>
                <h1>{data.displayName}</h1>
                <h1>{data.email}</h1>
                <img src={data.photoURL} alt="" />
              

            <button className=' btn btn-danger d-block' onClick={GoogleOut}>SignOut</button>
            </>

            :
            <button className=' btn btn-primary' onClick={GoogleLogin}>SignIn</button>


        }

         {/* <button onClick={GoogleLogin} className=' btn btn-danger'>Google</button> */}

         
    </div>
    </>
  )
}

export default GoogleAuth