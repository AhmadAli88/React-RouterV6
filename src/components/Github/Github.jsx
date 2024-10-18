import React from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white text-3xl p-4">
      Github Followers: {data?.followers || "No data"}
      <img
        src={data?.avatar_url}
        alt="git-profile"
        height={300}
        width={300}
        style={{ display: "flex", justifyContent: "center" }}
      />
    </div>
  );
};

export default Github;

// Define the loader function
export const githubInfoLoader = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/AhmadAli88`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    return null;
  }
};
