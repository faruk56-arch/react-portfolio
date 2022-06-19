import * as React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// useTheme
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import ScreenRotation from "@material-ui/icons/ScreenRotation";

import project1 from "../images/projectsImages/linked-image.png";
import project4 from "../images/projectsImages/VCS-app-image.png";

import P1site_images from "../images/projectsImages/linkedImages/linkedImages.js";
import P4site_images from "../images/projectsImages/vcsImages/vcsImages.js";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
  modalStyle: {
    width: 400,
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    backgroundColor: "rgba(255, 255, 255,)",
    "@media (max-height: 400px)": {
      alignItems: "center",
      justifyContent: "center",
    },
  },
  swipeableBox: {
    alignItems: "center",
    width: "800px",
    "@media (max-width: 800px)": { width: "90%" },
    "@media (max-height: 420px)": { width: "80%" },
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
  swipeapbleIMG: {
    "@media (max-height: 420px)": { height: "300px" },
    "@media (max-height: 300px)": { height: "260px" },
    width: "100%",
    height: "450px",
  },
  stepper: {
    "@media (max-height: 420px)": { height: "0", padding: "0" },
  },
  swipeableBtn: {
    "@media (max-height: 420px)": { visibility: "hidden" },
  },
  screenRotationBox: {
    position: "relative",
    animation: "$rotation 4s ",
  },
  "@keyframes rotation": {
    "0%": { transform: "rotate(-45deg)" },
    "25%": { transform: "rotate(90deg)" },
    "50%": { transform: "rotate(-45deg)" },
    "100%": { transform: "rotate(0)" },
  },

  screenRotationMain: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  imgNameModal: {
    textAlign: "center",
    color: "tomato",
    backgroundColor: "rgb(34 51 51)",
    fontWeight: "bold",
  },
}));

const projects = [
  {
    name: "Linkidin-clone",
    description: ` This is a clone of Linkedin website. It is a simple website that allows you to create your profile and share it with your friends and colleagues to share your knowledge and your work .`,
    image: project1,
    code_source: "https://github.com/faruk56-arch/linkdin-clone",
    site_images: P1site_images(),
  },

  {
    name: "Vcs-app",
    description: `Application mobile demo de surveillance à domicile.\
    L'application dispose de 6 interface : interface de connection, d'inscription,\
    l'incerface d'utilisateur, \
    Telesurveillance, Action d'urgence et Outils connectées.`,
    image: project4,
    code_source: "https://github.com/faruk56-arch/vcs.app",
    site_images: P4site_images(),
  },
];

// Swipeable

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Portfolio = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const [projectIMG, setProjectIMG] = React.useState([]);
  const [activeStep, setActiveStep] = React.useState(0);
  const [openScreenR, setOpenScreenR] = React.useState(false);

  // Modal

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // screen rotation modal

  const handleScreenROpen = () => setOpenScreenR(true);
  const handleScreenRClose = () => setOpenScreenR(false);

  // swipeable images

  const imageDemo = (images) => {
    if (window.matchMedia("(max-width: 620px)").matches) {
      handleScreenROpen();
    } else {
      handleOpen();
    }

    setProjectIMG(images);

    setActiveStep(0);
  };

  // Swipeable

  const maxSteps = projectIMG.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  // swipeable label

  const label = () => {
    if (projectIMG.length !== 0) {
      return projectIMG[activeStep].label.toUpperCase();
    } else {
      return [];
    }
  };

  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justifyContent="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  target="_blank"
                  href={project.code_source}
                >
                  Code source
                </Button>

                <Button
                  onClick={() => imageDemo(project.site_images)}
                  size="small"
                  color="primary"
                >
                  Images Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // className={classes.modalStyle}
      >
        {/* <div>ciaooooo</div> */}
        <Box className={classes.swipeableBox}>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 800,
              pl: 2,
              bgcolor: "background.default",
            }}
          >
            <Typography className={classes.imgNameModal}>{label()}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {projectIMG.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    className={classes.swipeapbleIMG}
                    sx={{
                      display: "block",
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            className={classes.stepper}
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                className={classes.swipeableBtn}
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                className={classes.swipeableBtn}
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </Modal>
      <Modal
        open={openScreenR}
        onClose={handleScreenRClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          onClick={handleScreenRClose}
          className={classes.screenRotationMain}
        >
          <Box className={classes.screenRotationBox}>
            <ScreenRotation
              style={{ height: "100px", width: "100px", color: "tomato" }}
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Portfolio;
