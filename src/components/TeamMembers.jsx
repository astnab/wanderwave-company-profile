import React, { useEffect, useState } from "react";
import { jobDescriptions, position } from "../sources/teamdata";

function TeamMember() {
  const [teamMember, setTeamMember] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userAPI = "https://randomuser.me/api/?results=8";
      const response = await fetch(userAPI);
      const responseData = await response.json();
      setTeamMember(responseData.results);
    } catch (error) {
      console.log("Error fetching data ", error);
    }
  };

  return (
    <div className=" bg-[#C9D7DD] rounded-t-[60px]">

      <div className="flex flex-row flex-wrap justify-center items-center lg:gap-6 gap-6 p-12">
        {teamMember.map((member, index) => (

          <div key={index} className="w-48 h-48 flex flex-col items-center text-center gap-1 tracking-tight">

            <img src={member.picture.large} alt="" className="rounded-full saturate-0 brightness-110 w-24 h-24" />
            
            <h1 className="font-black">{`${member.name.first} ${member.name.last}`}</h1>
            <h2 className="font-semibold text-xs text-zinc-600">{position[index+1]}</h2>
            <h2 className="font-semibold text-sm">{jobDescriptions[index+1]}</h2>
          </div>
        ))}
      </div>

    </div>
  );
}

export default TeamMember;
