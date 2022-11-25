import { async } from "@firebase/util";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { UserContext } from "../../../context/AuthContext";

const AddAProduct = () => {
  const [categories, setCategories] = useState([]);
  const { user } = useContext(UserContext);
  const navigation = useNavigate()

  const url = "http://localhost:5000/category-brand";
  useEffect(() => {
    axios(url).then((data) => {
      setCategories(data.data);
    });
  }, []);

  const schema = yup.object().shape({
    carName: yup.string().required(),
    originalPrice: yup.number().positive().required(),
    resalePrice: yup.number().positive().required(),
    yearsOfUse: yup.number(),
    brand: yup.string().required(),
    conditionType: yup.string().required(),
    mobileNumber: yup.number().required(),
    location: yup.string().required(),
    // image: yup.string().required(),
    createdOn: yup.date().default(function () {
      return new Date();
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSumbit = async (data) => {
    data.email = user?.email;
    data.sellerName = user?.displayName;
    // data.image = data.image[0]

    console.log(data.createdOn);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    console.log(formData);

    
    const imagRes = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`, {
      method: "POST",
      body: formData,
    });
    const result = await imagRes.json();

    data.image = result?.data?.url;
    console.log(data);
    console.log(result);

    const postRes = await fetch(`http://localhost:5000/add-a-car`, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    const postData = await postRes.json();
    console.log(postData)

    if(postData.acknowledged){

      const postCar = await fetch(`http://localhost:5000/category-car`, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    const postCarData = await postCar.json();
    console.log(postCarData)

      toast.success('Car Added Successfully!')
      navigation('/dashbord/my-product')
    }

  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSumbit)} className="w-[60%] mx-auto">
        {/* Car Name */}
        <div className="form-control">
          <input
            type="text"
            {...register("carName")}
            placeholder="Car Name"
            className={`input input-bordered ${
              errors.carName ? "input-error" : "input-accent"
            }`}
          />
        </div>
        {/* Original Price */}
        <div className="form-control">
          <input
            type="text"
            {...register("originalPrice")}
            placeholder="Original Price"
            className={`input input-bordered ${
              errors.originalPrice ? "input-error" : "input-accent"
            }`}
          />
        </div>
        {/* Resale Price */}
        <div className="form-control">
          <input
            type="text"
            {...register("resalePrice")}
            placeholder="Resale Price"
            className={`input input-bordered ${
              errors.resalePrice ? "input-error" : "input-accent"
            }`}
          />
        </div>
        {/* Years Of Use */}
        <div className="form-control">
          <input
            type="text"
            {...register("yearsOfUse")}
            placeholder="Years Of Use"
            className={`input input-bordered ${
              errors.yearsOfUse ? "input-error" : "input-accent"
            }`}
          />
        </div>
        {/* Condition Type */}
        <div className="form-control">
          <select
            {...register("conditionType")}
            className={`select select-bordered w-full ${
              errors.conditionType ? "select-error" : "select-bordered"
            }`}
          >
            <option disabled defaultValue="Car Condition">
              Car Condition
            </option>
            <option>Excellent</option>
            <option>Good</option>
            <option>Fair</option>
          </select>
        </div>
        {/* Product Category */}
        <div className="form-control">
          <select
            {...register("brand")}
            className={`select select-bordered w-full ${
              errors.brand ? "select-error" : "select-bordered"
            }`}
          >
            <option key="1" disabled defaultValue="Car Brand Name">
              Car Brand Name
            </option>
            {categories.map((category) => (
              <option key={category._id}>{category.brand}</option>
            ))}
          </select>
        </div>
        {/* Mobile Number */}
        <div className="form-control">
          <input
            type="text"
            {...register("mobileNumber")}
            placeholder="Mobile Number"
            className={`input input-bordered ${
              errors.mobileNumber ? "input-error" : "input-accent"
            }`}
          />
        </div>
        {/* Location */}
        <div className="form-control">
          <input
            type="text"
            {...register("location")}
            placeholder="Location"
            className={`input input-bordered ${
              errors.location ? "input-error" : "input-accent"
            }`}
          />
        </div>
        {/* Description */}
        <div className="form-control">
          <textarea
            type="text"
            {...register("description")}
            placeholder="Description"
            className={`textarea textarea-bordered ${
              errors.description ? "textarea-error" : "textarea-bordered"
            }`}
          ></textarea>

          <div>
            <input
              type="file"
              required
              name="image"
              {...register("image")}
              className={`file-input file-input-bordered w-full max-w-xs ${
                errors.image ? "file-input-error" : "file-input-bordered"
              }`}
            />
          </div>
        </div>

        <div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAProduct;
