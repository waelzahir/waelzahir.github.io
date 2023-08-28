import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AppContent = (props) => {
 
    const [what, setWhat] = useState(0);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await axios.get('http://localhost:3001/data/' + props.project);
                setWhat(results.data);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, [props.project]);

    return (
        !error ?
        (
        <div>
            <h1>{props.project}</h1>
            <h2>{what}</h2>
        </div>
        )
        :
        <h1>back err</h1>

    );
};

const Welcome = () => {
    const [what, setWhat] = useState(0);
    const [index, setIndex] = useState(0);

    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await axios.get('http://localhost:3001/data');
                setWhat(results.data);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, []);

    const next = ()=>{setIndex((index+1) % what)}
    return (

            !error ? 
            (
                <>
                    <AppContent project={index} />
                    <button onClick={next}>next {what}</button>
                </>
            )
            :
            <h1>Backend error</h1>

    );
};

export default Welcome;