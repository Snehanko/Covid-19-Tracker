import React, { useContext} from 'react'
import { Bar } from 'react-chartjs-2';
import {DataContext} from './Home Components/Context';

export default function District(props) {

        const districtName = props.match.params.district;
        const stateName = props.match.params.state
        const [stateData] = useContext(DataContext);
        const {active,confirmed,deceased,recovered} = stateData[stateName].districtData[districtName];
        
        const chartConfig={
                chartData:{
                    labels: ['Active', 'Confirmed', 'Deceased', 'Recovered'],
                    datasets: [
                        {
                            label: 'Covid cases distribution',
                            data: [active,confirmed,deceased,recovered],
                            backgroundColor: [
                            'red',
                            'green',
                            'black',
                            'yellow'
                            ]
                        }
                    ]
                    
                }
            } 
    
        return (
            <div>
                <h2>{`State : ${stateName}`}</h2>
                <h3>{`District : ${districtName}`}</h3>
                <Bar data={chartConfig.chartData}
                    options={{
                        title:{
                            display:true,
                            text:'Temporary Dataset',
                            fontSize:25
                        },
                        legend:{
                            display:true,
                            position:'right'
                        },
                    }} 
                    />
            </div>
        )
}
