import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "#233",
        height: "100%",
    },
    cardContainer: {
        width: "100px",
        height: "100px",
        padding: "5px",
        margin: "3rem auto",
        '&:hover': {
            backgroundColor: 'tan'
        }

    },
    text: {
        marginTop: "3px",
        textAlign: "center",
        color: 'tomato'
    },
    heading: {
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase",
    },

}));

const languages = [
    {
        name: "HTML 5",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
        code_source: ''
    },
    {
        name: "CSS 3",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
    },
    {
        name: "Javascript",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        code_source: ''
    },
    {
        name: "React.js",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
        code_source: ''
    },
    {
        name: "Material UI",
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
    },

    {
        name: "JAVA",
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg',
    },
    {
        name: "Wordpress",
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
    },
    {
        name: "PHP",
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    },
    {
        name: "Node.js",
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
    },
    {
        name: "Express.js",
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg',
    },
    {
        name: "Mongo DB",
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg',
    },
    {
        name: "MySql",
        image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg',
    },
];

const Competences = () => {

    const classes = useStyles();


    return (
        <Box component="div" className={classes.mainContainer}>
            <Typography variant="h4" align="center" className={classes.heading}>
                Compétences
            </Typography>
            <Grid container justifyContent="center">
                {/* languages */}
                {languages.map((languages, i) => (
                    <Grid item xs={12} sm={8} md={4} key={i}>
                        <Paper className={classes.cardContainer}>
                            <img alt="" src={languages.image} />
                            <Typography className={classes.text}>{languages.name}</Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Competences;
