// Shree Ganeshay namah 
import React from 'react'
import { useForm } from 'react-hook-form'
import auth from './FireBase'
import { signInWithEmailAndPassword } from 'firebase/auth'
const SignIn = () => {
   const { register,handleSubmit } = useForm()
  
       function submit(data){
          console.log(data)
          const {email,password} = data
           signInWithEmailAndPassword(auth,email,password).then(res=>{
            console.log(res)
              console.log(res.user.email)
          }) .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
      }
  return (
    <>
    <h1>Sign In</h1>
    <form action="" method='post' className=' col-6 shadow mx-auto m-5 p-5' onSubmit={handleSubmit(submit)}>
            <div className=' mb-4'>
                <input type="text" {...register('email')} placeholder='Enter Your Email'  className=' form-control'/>
            </div>

            <div className=' mb-4'>
                <input type="text" {...register('password')} placeholder='Enter Your Password'  className=' form-control'/>
            </div>
            <button className=' btn btn-success'>Submite</button>
        </form>
    </>
  )
}

export default SignIn