import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import './App.css'
import { Link } from "react-router-dom";
import { Radar } from 'react-chartjs-2';
import { Chart } from "chart.js/auto";
import { NavLink } from 'react-router-dom';

function App() {
    const [carData, setCarData] = useState({});

    useEffect(() => {
        axios
            .get('https://car-specs.p.rapidapi.com/v2/cars/trims/144759', {
                headers: {
                    'X-RapidAPI-Key': '838240ee49msh00f26afb964ce26p16bf13jsndbbb7923308a',
                    'X-RapidAPI-Host': 'car-specs.p.rapidapi.com'
                },
            })
            .then((response) => {
                setCarData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const data = {
        labels: ['Width mm', 'wheelbase mm', 'wheelbase mm'],
        datasets: [{
            data: [
                parseFloat(carData?.widthMm?.replace(",", ".")),
                parseFloat(carData?.wheelbaseMm?.replace(",", ".")),
                parseFloat(carData?.wheelbaseMm?.replace(",", "."))
                
            ],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
          
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
          
            ]
        }],
    };

    console.log(carData.cityFuelPer100KmL);
    console.log(parseFloat(carData.cityFuelPer100KmL));


    return (
        <div className="App">

            <nav className="topnav">
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/ChartTwo" activeClassName="active">ChartTwo</NavLink>
                <NavLink to="/ChartThree" activeClassName="active">ChartThree</NavLink>

            </nav>
            {carData.cityFuelPer100KmL && carData.highwayFuelPer100KmL && carData.mixedFuelConsumptionPer100KmL ? (
                <Radar data={data} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;



