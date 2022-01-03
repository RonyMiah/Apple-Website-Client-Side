import React from 'react';

import { useForm } from "react-hook-form";

const BookingFrom = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
     
    return (
        <div className='border p-5 ms-3' style={{boxShadow:'10px 10px 8px 10px #888888',borderRadius:'5px'}}>
            
                <h6 className='text-center'>Fill the form below</h6>
                
                <form className='form_control' onSubmit={handleSubmit(onSubmit)}>
                    <input className='w-100 p-1 my-2' {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
                    <input className='w-100 p-1 my-2' {...register("email")}  placeholder='Email'/>
                    <input className='w-100 p-1 my-2' type="text" {...register("address")} placeholder='address'/>
                    <input className='w-100 p-1 my-2' type="text" {...register("city")} placeholder='City'/>
                    <input className='w-100 p-1 my-2' type="text" {...register("state")} placeholder='State'/>
                    <input style={{backgroundColor: '#000050'}} className='btn btn-outline-light text-light  w-100' type="submit" value="Book Now" />
                </form>
              
        </div>
    );
};

export default BookingFrom;