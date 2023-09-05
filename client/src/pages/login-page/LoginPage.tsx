import React, { FC } from 'react';
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AppInput } from "../../components/app-input/AppInput";

import * as styles from './LoginPage.styles';

export const LoginPage: FC = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleRegisterClick = () => {
    // Логіка для реєстрації користувача
    // Ви можете викликати API для реєстрації тут
  };
  return (
    <Box sx={styles.loginPage}>
      <Box sx={styles.loginForm}>
        <Typography variant="h4">Sign In</Typography>
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
          sx={styles.loginButton}
        >
          Sign In
        </Button>
        <Typography sx={styles.signUp}>
          Don't have an account?
          <Link to="/register">
            <Typography sx={styles.signUpLink}>
              Sign Up
            </Typography>
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};
