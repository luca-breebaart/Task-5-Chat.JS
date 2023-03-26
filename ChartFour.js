import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import './App.css'
import { Link } from "react-router-dom";
import { Pie } from 'react-chartjs-2';
import { Chart } from "chart.js/auto";
import { NavLink } from 'react-router-dom';

function App() {
    const [carData, setCarData] = useState([]);

    useEffect(() => {

        axios
            .get('https://car-api2.p.rapidapi.com/api/engines?offset=0&limit=5', {
                params: { verbose: 'yes', direction: 'asc', sort: 'id' },
                headers: {
                    'X-RapidAPI-Key': '838240ee49msh00f26afb964ce26p16bf13jsndbbb7923308a',
                    'X-RapidAPI-Host': 'car-api2.p.rapidapi.com',
                },
            })
            .then((response) => {
                setCarData(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error);
                console.log('error');
            });
    }, []);

    // 
    const data = {
        labels: carData.map((data) => data.id),
        datasets: [
            {
                label: 'Horsepower RPM',
                data: carData.map((data) => data.horsepower_rpm), //array 
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderWidth: 1,
            },
        ],
    };

    //   console.log(carData.id);

    return (


        <div className="App">

            <nav className="topnav">
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/ChartTwo" activeClassName="active">ChartTwo</NavLink>
                <NavLink to="/ChartThree" activeClassName="active">ChartThree</NavLink>
                <NavLink to="/ChartThree" activeClassName="active">ChartFour</NavLink>



            </nav>
            <Pie data={data} />
        </div>
    );
}

export default App;





