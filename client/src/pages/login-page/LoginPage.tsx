import { AxiosError } from "axios";
import React, { FC, FormEvent } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { login } from "api/auth-api";
import { AppInput } from "components/app-input/AppInput";
import { toast } from 'react-toastify';

import * as styles from "./LoginPage.styles";

export const LoginPage: FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { mutate, error } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      navigate("/tests");
    },
    onError: () => {
      toast.error("Invalid username or password");
    }
  });

  const handleRegisterClick = (e: FormEvent) => {
    e.preventDefault();
    mutate({ username, password });
  };
  return (
    <Box sx={styles.loginPage}>
      <form onSubmit={handleRegisterClick}>
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
            type="submit"
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
      </form>
    </Box>
  );
};
