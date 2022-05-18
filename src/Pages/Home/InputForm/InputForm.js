import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const InputForm = ({ refetch }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/task`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
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
