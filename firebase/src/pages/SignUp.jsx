// Shree Ganeshay namah 
import React from 'react'
import {useForm} from 'react-hook-form'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth from './FireBase'
const SignUp = () => {

    const { register,handleSubmit } = useForm()

    async function submit(data){
        console.log(data)
        const {email,password} = data
        
        await createUserWithEmailAndPassword(auth,email,password).then(res=>{
            console.log(res.user.email)
        })
    }

  return (
    <>  
    <h1 className=' text-center mt-2'> Sign Up</h1>
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

export default SignUp