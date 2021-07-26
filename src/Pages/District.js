import axios from 'axios';
import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';

export default class District extends Component {
    constructor(props){
        super(props);

        this.state={
            districtNames:{},
            inputName:'',
                chartData:{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [
                        {
                            label: 'Covid cases in District',
                            data: [65, 59, 80, 81, 56, 55, 40],
                            backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(201, 203, 207, 0.2)'
                            ]
                        }
                    ]
                    
                }
            }      


        }
    // async getDistrictData(){

    //         const res= await axios.get('https://api.covid19india.org/state_district_wise.json');

    //         console.log(res.data.inputName);
    // }

    // componentDidMount(){
    //     this.getDistrictData();
    // }

    render() {
        return (
            <div>
                <h1>District details here</h1>
                <Bar data={this.state.chartData}
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
}
