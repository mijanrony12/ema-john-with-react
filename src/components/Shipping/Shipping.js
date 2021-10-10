import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {user}=useAuth()
  const onSubmit = data => console.log(data);
    return (
        <div className="shipping-form ">
             <form  onSubmit={handleSubmit(onSubmit)}>
    
      <input placeholder="your name" defaultValue={user.displayName}{...register("name")} />
      <input placeholder="your Email" defaultValue={user.email} { ...register("email", { required: true }) } />
      <input placeholder="your phone" defaultValue="" {...register("phone")} />    
      <input placeholder="your address" defaultValue="" {...register("address")} />    
     
      {errors.email && <span className="error">This field is required</span>}
      
      <input  type="submit" />
    </form>
        </div>
    );
};

export default Shipping;