import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data => {
        // console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
            if(res.data.insertedId){
                alert('added Successfully');
                reset();
            }
        })
    }
    return (
        <div className='border p-5 mx-auto mt-5'  style={{boxShadow:'10px 10px 8px 10px #888888',borderRadius:'5px',width:'50%'}}>
            
        <h6 className='text-center'>Add Service For Admin Only</h6>
        
        <form className='form_control' onSubmit={handleSubmit(onSubmit)}>
            <input className='w-100 p-1 my-2' type="text" {...register("image")} placeholder='ImageLink'/>
            <input className='w-100 p-1 my-2' {...register("nameProduct")} placeholder='NameProduct' />
            <input className='w-100 p-1 my-2' {...register("price")} placeholder='Price' />
            {/* <input className='w-100 p-1 my-2' {...register("email")}  placeholder='Email'/> */}
            <textarea className='w-100 p-1 my-2' type="text" {...register("details")} placeholder='details'/>
            <input style={{backgroundColor: '#000050'}} className='btn btn-outline-light text-light  w-100' type="submit" />
        </form>
      
</div>
    );
};

export default AddService;