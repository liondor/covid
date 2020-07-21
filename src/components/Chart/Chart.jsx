import React, {useState, useEffect} from 'react';
import {fetchDailyData} from "../../api";
import {Line, Bar} from 'react-chartjs-2';
import styles from'./Chart.module.css';
import {Box} from '@material-ui/core'

const Chart = ({data: {confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const fetchAPI = async()=> {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
        }, [setDailyData]);

    const lineChart = (
        dailyData.length ? (<Line
            data={{
                labels:dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({confirmed})=>confirmed),
                    label:'Cas confirmés',
                    borderColor:'#3333FF',
                    fill:true,
                },
                    {
                    data: dailyData.map(({deaths})=>deaths),
                    label:'Décès',
                    borderColor:'red',
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill:true,
                }]
            }}
        />):null
    );
    const barChar = (
        confirmed
            ? (
            <Bar
            data={{
                labels:['Cas confirmés', "Guérisons", "Décès"],
                datasets: [{
                    label:'Victimes',
                    backgroundColor: [
                        'rgba(0,0,255,0.5)',
                        'rgba(0,255,0,0.5)',
                        'rgba(255,0,0,0.5)'
                    ],
                    data:[confirmed.value, recovered.value, deaths.value]
                }]
            }}
            options={{
                legend:{display:false},
                title:{display:true, text:` Situation en ${country}`},
            }}
            />
            ): null


    );
    return (

        <Box className={styles.container}>
            {country? barChar:lineChart}
        </Box>
    )
};

export default Chart;