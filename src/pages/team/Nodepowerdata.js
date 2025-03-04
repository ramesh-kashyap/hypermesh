import { ChartArea } from 'lucide-react'
// import React from 'react'
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';
import Api from "../../Requests/Api";



export default function Nodepowerdata() {
  const [roiArray, setRoiArray] = useState([]);
  const [dayArray, setDayArray] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await Api.get("auth/roi");
      console.log("API Response:", response.data);

      const tempRoiArray = [];
      const tempDayArray = [];

      for (let i = 0; i < response.data.length; i++) {
        tempRoiArray.push(response.data[i].roi);
        tempDayArray.push(response.data[i].day);
      }

      // Store the arrays in state
      setRoiArray(tempRoiArray);
      setDayArray(tempDayArray);

// console.log(dayArray);
    } catch (err) {
      setError(err.response?.data?.error || "Error fetching ROI data");
    }
  };

  return (


    <div className="flex-1 overflow-y-auto px-4 md:px-10 lg:px-10 xl:px-20 pt-5 pb-[88px] md:pb-[20px] bg-[#F1F1F1]">

    <div className='contaniner-fluid mb-5'>

<Chart
type="bar"
width={800}
height={400}


series={[


    {
     name:"Day",
     data:[10,30,100,50,60,70,80,90,]

    }
]}

options={{


  xaxis:{
 categories:roiArray,
  }

}}



>




</Chart>

    </div>
    </div>

  )
}