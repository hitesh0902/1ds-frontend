import React from "react";
// import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";

interface SignInProps {}

const SignIn: React.FC<SignInProps> = () => {
  return (
    <Container maxWidth="xs">
      <Grid container spacing={3}>
        {/* Header */}
        <Grid item container justify="center">
          <Typography variant="h6">Tableau</Typography>
        </Grid>
        {/* Input fields */}
        <Grid item container spacing={1}>
          <Grid item xs={12}>
            <TextField label="Email" type="email" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type="password" fullWidth />
          </Grid>
          <Grid item container alignItems="center">
            <Checkbox color="primary" />
            <Typography variant="body2">Keep me signed in</Typography>
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
            >
              Sign In
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="center" color="primary">
              Forgot your password?
            </Typography>
          </Grid>
        </Grid>
        {/* Footer */}
        <Grid item container>
          <Grid item xs={12}>
            <Typography variant="body2" align="center">
              Don't have a profile yet?
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="center" color="primary">
              Create one now for free
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignIn;
