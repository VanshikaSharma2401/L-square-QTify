import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { fetchGenereData } from "../Api/api";

const TabComponent = ({setSelectedGenere,selectedGenere}) => {
//  const [value, setValue] = useState("All");
 const [genereData, setGenereData] = useState();
 const fetchGeneresData=async()=>{
    const data=await fetchGenereData()
    setGenereData(data?.data)
 }
   // Define state for current active tab
useEffect(()=>{
    fetchGeneresData()
},[])
  const handleChange = (event, newValue) => {
    setSelectedGenere(newValue); // Update state when tab is changed
  };

  return (
    <div>
      <Tabs
        value={selectedGenere}
        onChange={handleChange}
        textColor="secondary"
        sx={{ indicator: { backgroundColor: '#34C94B' } }}
        aria-label="secondary tabs example"
      >
        <Tab value={"All"} label={"All"} key={"All"}  style={{ color: 'white' }} />
        {genereData?.map((genere)=>(
            <Tab value={genere?.label} label={genere?.label} key={genere?.key}  style={{ color: 'white' }} />
        ))}
      </Tabs>
    </div>
  );
};

export default TabComponent;
