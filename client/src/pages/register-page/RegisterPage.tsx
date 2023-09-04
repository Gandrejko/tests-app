import React, { ChangeEventHandler, FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AppInput } from "../../components/app-input/AppInput";

import * as styles from './RegisterPage.styles';

export const RegisterPage: FC = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleRegisterClick = () => {
    // Логіка для реєстрації користувача
    // Ви можете викликати API для реєстрації тут
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
        />
        <AppInput
          placeholder="Password"
          fullWidth
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
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
