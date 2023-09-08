import React, { FC, FormEvent } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { register } from "api/auth-api";
import * as styles from "./RegisterPage.styles";
import { useMutation } from "react-query";
import { AppInput } from "components/app-input/AppInput";
import { toast } from 'react-toastify';

export const RegisterPage: FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { mutate } = useMutation({
    mutationFn: register,
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
    <Box sx={styles.registerPage}>
      <form onSubmit={handleRegisterClick}>
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
            type="submit"
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
      </form>
    </Box>
  );
};
