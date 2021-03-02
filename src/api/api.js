import React from 'react';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async ()=> {
    const response = await fetch(url);
    const data = response.json();
    return data;
}

