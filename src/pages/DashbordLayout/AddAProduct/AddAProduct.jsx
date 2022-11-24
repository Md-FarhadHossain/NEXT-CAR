import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from "yup";

const AddAProduct = () => {
  const {register, handleSubmit,formState: { errors },} = useForm({
    resolver: yupResolver()
  })

  return (
    <div>
      <form className='w-[60%] mx-auto'>
      <div className="form-control">
        {/*  */}
                <label className="label">
                  <span className="label-text">Car Name</span>
                </label>
                <input
                  type="text"
                  {...register("carName")}
                  placeholder="Name"
                  className={`input input-bordered ${
                    errors.name ? "input-error" : "input-accent"
                  }`}
                />
              </div>
      </form>
    </div>
  )
}

export default AddAProduct