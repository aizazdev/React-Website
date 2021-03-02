import React, { useEffect, useState, createContext } from 'react';
import Cards from './Components/Cards/Cards';
import Chart from './Components/Charts/Chart';
import CountryPicker from './Components/CountryPicker/CountryPicker';
import {fetchData} from './api/api';


const App = ()=> {

    const context = createContext('silver');

    return(
        <>
        <createContext.Provider value={context}>
            <div>
                <center>
                    <Cards />
                    <Chart />
                    <CountryPicker />
                </center>
            </div>
        </createContext.Provider>
        </>
    )
}

export default App;