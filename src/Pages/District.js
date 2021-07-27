import React, { useContext} from 'react'
import { Bar } from 'react-chartjs-2';
import {DataContext} from './Home Components/Context';
import './Chart.css';
import {Redirect} from "react-router-dom";

export default function District(props) {

        const districtName = props.match.params.district;
        const stateName = props.match.params.state
        const [stateData] = useContext(DataContext);
        if(stateData.length === 0){ // If user is trying to refresh the page redirect him to the home page
            return <Redirect to="/" />
        }
        const {active,confirmed,deceased,recovered} = stateData[stateName].districtData[districtName];
        
        const chartConfig={
                chartData:{
                    labels: ['Active', 'Confirmed', 'Deceased', 'Recovered'],
                    datasets: [
                        {
                            data: [active,confirmed,deceased,recovered],
                            backgroundColor: [
                            'red',
                            'green',
                            'white',
                            'yellow'
                            ],
                            color : "#fff"
                        }
                    ]
                    
                }
            } 
    
        return (
            <div>
                <h2>{`State : ${stateName}`}</h2>
                <h3>{`District : ${districtName}`}</h3>
                <Bar className="bar-plot" 
                    data={chartConfig.chartData}
                    options={{
                        title:{
                            display:true,
                            fontSize:25,
                            text :'Covid Cases Distribution'
                        },
                        responsive: true,
                            plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            xAxes: [{
                              display: true,
                              gridLines: {
                                display: false,
                                color: "#FFFFFF",
                                zeroLineColor: "#FFFFFF"
                              }
                            }],
                            yAxes: [{
                              display: true,
                              gridLines: {
                                display: false,
                                color: "#FFFFFF",
                                zeroLineColor: "#FFFFFF"
                              }
                            }]
                          }
                    }} 
                    />
            </div>
        )
}
