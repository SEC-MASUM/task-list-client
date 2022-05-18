import React from "react";
import { useQuery } from "react-query";
import InputForm from "./InputForm/InputForm";
import Tasks from "./Tasks/Tasks";

const Home = () => {
  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery("tasks", () =>
    fetch("http://localhost:5000/task").then((res) => res.json())
  );

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl text-center text-purple-600 underline font-bold uppercase">
        Add Your Task List
      </h1>
      <InputForm refetch={refetch}></InputForm>
      <Tasks refetch={refetch} tasks={tasks} />
    </div>
  );
};

export default Home;
