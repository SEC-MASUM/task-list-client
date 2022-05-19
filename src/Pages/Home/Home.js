import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../Firebase/Firebase.init";
import Navbar from "../Shared/Navbar/Navbar";
import InputForm from "./InputForm/InputForm";
import Tasks from "./Tasks/Tasks";

const Home = () => {
  const [user] = useAuthState(auth);
  const {
    data: tasks,
    isLoading,
    refetch,
  } = useQuery("tasks", () =>
    fetch(`http://localhost:5000/task/${user.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="container mx-auto">
      <Navbar />
      <h1 className="text-3xl text-center text-purple-600 underline font-bold uppercase">
        Add Your Task List
      </h1>
      <InputForm refetch={refetch}></InputForm>
      <Tasks refetch={refetch} tasks={tasks} />
    </div>
  );
};

export default Home;
