import React from 'react';
import {Box, Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css'
import CountUp from 'react-countup';
import cx from "classnames";
const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed)
    {
        return 'Loading....'
    }
    return (
        <Box component={"div"} className={styles.container}>
            <Grid container spacing={3} justify={"center"}>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color={"textSecondary"} gutterBottom>
                          Cas confirmés
                        </Typography>
                        <Typography variant={"h5"} >
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator={","}

                            />
                        </Typography>
                        <Typography color={"textSecondary"}>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant={"body2"}>
                            Nombre de cas confirmés de COVID-19
                        </Typography>
                    </CardContent>

                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color={"textSecondary"} gutterBottom>
                            Guérisons
                        </Typography>
                        <Typography variant={"h5"} >
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator={","}

                            />
                        </Typography>
                        <Typography color={"textSecondary"}>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant={"body2"}>
                            Nombre de personnes ayant guéris du COVID-19
                        </Typography>
                    </CardContent>

                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>

                <CardContent>
                        <Typography color={"textSecondary"} gutterBottom>
                           Décès
                        </Typography>
                        <Typography variant={"h5"} >
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator={","}

                            />
                        </Typography>
                        <Typography color={"textSecondary"}>
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant={"body2"}>
                            Nombre de décès dû au COVID-19
                        </Typography>
                    </CardContent>

                </Grid>
            </Grid>
        </Box>
    )
}

export default Cards;