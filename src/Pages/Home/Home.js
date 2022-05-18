import React from "react";
import InputForm from "./InputForm/InputForm";
import Tasks from "./Tasks/Tasks";

const Home = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center text-purple-600 underline font-bold uppercase">
        Add Your Task List
      </h1>
      <InputForm></InputForm>
      <Tasks />
    </div>
  );
};

export default Home;
