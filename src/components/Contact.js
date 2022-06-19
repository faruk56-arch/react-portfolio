import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Send from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);

const Contact = () => {

  const classes = useStyles();

  const [formName, setFormName] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const [formEmail, setFormEmail] = useState('')

  const sendEmail = (event) => {
    event.preventDefault();

    if (formEmail === '' || formMessage === '' || formName === '') {

      window.alert('All fields are required.')
      window.location.reload();

    } else {

      emailjs.send('service_fhvphpd', 'template_oty3k4z', {
        from_name: formName,
        message: formMessage,
        email: formEmail
      }, 'user_xxoeEUzppUfPrFlGcOgaW')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });

    }
    alert('Email sent!')
    window.location.reload();

  }

  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justifyContent="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h5" className={classes.heading}>
            Contactez-moi !
          </Typography>
          <InputField
            fullWidth={true}
            onChange={(e) => setFormName(e.target.value)}
            label="Nom"
            type="text"
            name="from_name"
            variant="outlined"
            inputProps={{ className: classes.input }}
          />
          <InputField
            fullWidth={true}
            onChange={(e) => setFormEmail(e.target.value)}
            label="Email"
            type="email"
            name="email"
            variant="outlined"
            inputProps={{ className: classes.input }}
            className={classes.field}
          />
          <InputField
            fullWidth={true}
            onChange={(e) => setFormMessage(e.target.value)}
            label="Message"
            type="text"
            name="message"
            variant="outlined"
            multiline
            rows={4}
            inputProps={{ className: classes.input }}
          />
          <Button
            variant="outlined"
            type="submit"
            fullWidth={true}
            endIcon={<Send />}
            className={classes.button}
            onClick={sendEmail}
          >
            Envoyer
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
