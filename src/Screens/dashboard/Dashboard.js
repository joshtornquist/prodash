import React, { useEffect, useState } from 'react';
import "./Dashboard.css";
import {getChartData} from '../../functions/FirebaseData';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import { BounceLoader } from 'react-spinners';
import { colors } from '../../constants/Colors';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);


const client = "Center For Digital Humanities"

function Dashboard(props) {
  const [data, setData] = useState({});
  function bubbleData() {

    var fetchedData = getChartData(client).then((res) => {
    let i = 0
    const chartData = {
      labels: [],
      datasets: []
    };

    for (let team in res) {
      if (team !== "undefined") {
        var teamTotalUpdates = 0
        var totalMembers = new Set()
        for (let name in res[team]) {
          if (name !== "undefined") {
            teamTotalUpdates += (res[team][name])
            totalMembers.add(name)
            
          }
        }
        if (totalMembers.size === 1 && teamTotalUpdates === 1) {
          totalMembers.clear()
        }
        // console.log(totalMembers.size)
        // console.log(teamTotalUpdates + ": " + team)
        chartData.datasets.push({
          label: team,
          backgroundColor: colors[i],
          borderColor: "transparent",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(245, 244, 228, .2)",
          hoverBorderColor: "transparent",
          data: [{
            x: teamTotalUpdates,
            y: teamTotalUpdates,
            r: (totalMembers.size / (teamTotalUpdates)) * (window.innerWidth * .05),
          }]
        });
        i++
      }
    }
      setData(chartData)   
      })
    }

  useEffect(() => {
    const intervalId = setInterval(() => {
      bubbleData()
    }, 10000);
    return () => clearInterval(intervalId);
  });

      
    return (
          <>
              <div className="dashboard-access-container">
                  {Object.keys(data).length !== 0  ? <Bubble data={data}  /> : <div className="dashboard-access-loading"><BounceLoader color="#438695" /></div>}
              </div> 

          </>
      )
  }


export default Dashboard;
