import React from "react";
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
  return (
    <Container maxWidth="xs">
      <Grid container spacing={3}>
        {/* Header */}
        <Grid item container justify="center">
          <Typography variant="h6">Create Your Profile</Typography>
        </Grid>
        {/* Input fields */}
        <Grid item container spacing={1}>
          <Grid item xs={12}>
            <TextField label="Name" type="text" fullWidth />
            <Typography variant="caption" color="textSecondary">
              Real names are important to us and build a sense of community.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" type="email" fullWidth />
            <Typography variant="caption" color="textSecondary">
              Use your email to sign in to Tableau Public. Nobody sees this but
              us. We promise never to rent, sell, or barter your personal
              information to anyone.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type="password" fullWidth />
            <Typography variant="caption" color="textSecondary">
              Must be a minimum of 8 characters and contain alphabetic, numeric
              and special characters.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Confirm Password" type="password" fullWidth />
          </Grid>
          <Grid item container alignItems="center">
            <Checkbox color="primary" />
            <Typography variant="body2">
              I've read and agree to the Terms of Service
            </Typography>
          </Grid>
        </Grid>
        {/* Buttons/Actions */}
        <Grid item container>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              fullWidth
              disabled
            >
              Create My Profile
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;
