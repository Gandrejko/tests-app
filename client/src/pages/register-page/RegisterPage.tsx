import React, { FC, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { register } from "api/auth-api";

import * as styles from './RegisterPage.styles';
import { useMutation } from "react-query";
import { AppInput } from "components/app-input/AppInput";

export const RegisterPage: FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {mutate, isSuccess, data: token} = useMutation({
    mutationFn: register,
    onSuccess: () => {
      navigate('/tests');
    }
  });

  const handleRegisterClick = () => {
    mutate({ username, password })
  };

  return (
    <Box sx={styles.registerPage}>
      <Box sx={styles.registerForm}>
        <Typography variant="h4">Sign Up</Typography>
        <AppInput
          placeholder="Username"
          fullWidth
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <AppInput
          placeholder="Password"
          fullWidth
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleRegisterClick}
          sx={styles.registerButton}
        >
          Sign Up
        </Button>
        <Typography sx={styles.signIn}>
          Already have an account?
          <Link to="/login">
            <Typography sx={styles.signInLink}>
              Sign In
            </Typography>
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};
