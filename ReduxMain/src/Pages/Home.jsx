// Shree Ganeshay namah 
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { AddUser } from '../Redux/Features/UserSlice'
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
const Home = () => {

    const { handleSubmit, register} = useForm()
    const dispatch = useDispatch()
    const redirect = useNavigate()
    const user = useSelector((state)=>state.user.userlist)
    console.log(user)
    function submit(data){
        // console.log(data)
        // console.log(uuidv4())
        console.log({...data,id : uuidv4()})
        dispatch(AddUser({...data,id : uuidv4()}))
        redirect('/view')
    }

  return (
    <>
        <form action="" method='post' onSubmit={handleSubmit(submit)} className='col-6  mx-auto m-5 p-5 shadow'>
            <div  className='mb-4'>
                <input className="form-control" placeholder='Enter Your UserName' {...register('username')} type="text" />
            </div>

            <div  className='mb-4'>
                <input className="form-control" placeholder='Enter Your Email' {...register('email')} type="text" />
            </div>

            <div  className='mb-4'>
                <input className="form-control" placeholder='Enter Your MobilNumber' {...register('mobilnumber')} type="text" />
            </div>

            <div>
                <button className='btn btn-success'>Submit</button>
            </div>
        </form>
    </>
  )
}

export default Home