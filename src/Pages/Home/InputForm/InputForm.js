import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../Firebase/Firebase.init";

const InputForm = ({ refetch }) => {
  const [user] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const task = {
      user: user.email,
      title: data.title,
      description: data.description,
    };
    // const url = `https://task-list-001.herokuapp.com/task/`;
    const url = `https://task-list-001.herokuapp.com/task/`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          reset();
          refetch();
          toast.success("Task added successfully");
        }
        console.log(result);
      });
  };

  return (
    <div className="my-3 px-12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 justify-items-center"
      >
        <div className="form-control w-full max-w-xs">
          <input
            {...register("title", { required: true })}
            name="title"
            type="text"
            placeholder="Title"
            className="input input-sm input-bordered input-primary w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text-alt">
              {errors.title && <span>This field is required</span>}
            </span>
          </label>
        </div>

        <div className="form-control w-full max-w-xs">
          <textarea
            {...register("description", { required: true })}
            name="description"
            className="textarea w-full md:max-w-lg  textarea-secondary"
            placeholder="Description"
          ></textarea>
          <label className="label">
            <span className="label-text-alt">
              {errors.description && <span>This field is required</span>}
            </span>
          </label>
        </div>

        <input
          type="submit"
          value="Add Task"
          className="btn btn-sm btn-secondary"
        />
      </form>
    </div>
  );
};

export default InputForm;
