import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export const Episodes = () => {
    const classes = useStyles();

    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        fetchEpisodes();
    }, []);

    const fetchEpisodes = async () => {
        const data = await fetch("https://rickandmortyapi.com/api/episode/");
        const episodes = await data.json();
        setEpisodes(episodes.results);
        console.log(episodes);
    };

    function FormRow() {
        return (
            <React.Fragment>
               { episodes.map((episode) => (
                   <Grid item xs={4} key = {episode.id}>
                       <Paper className={classes.paper}>{episode.name}</Paper>
                   </Grid>
               ))}
            </React.Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow />
                </Grid>
            </Grid>
        </div>
    );
}
