import React, { FC, useState } from "react";
import { Box, Button, IconButton, Popover, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';

import * as styles from "./Header.styles";

type HeaderProps = {
  pageName: string;
};

export const Header: FC<HeaderProps> = ({ pageName }) => {
  const navigate = useNavigate();
  const isLogin = !!localStorage.getItem("token");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleIconClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleLogOut = () => {
    navigate("/login");
    localStorage.removeItem("token");
  }

  return (
    <Box sx={styles.header}>
      <Typography component="h1" sx={styles.pageName}>
        {pageName}
      </Typography>
      <IconButton
        aria-owns={open ? 'user-menu' : undefined}
        aria-haspopup="true"
        onClick={handleIconClick} // Змінено подію на onClick
      >
        <PersonIcon />
      </IconButton>
      <Popover
        id="user-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box sx={styles.buttons}>
          <Button sx={styles.button} onClick={() => navigate("/")}>
            All Tests
          </Button>
          {isLogin ? (
            <>
              <Button sx={styles.button} onClick={() => navigate("/user-tests")}>
                My Tests
              </Button>
              <Button sx={styles.button} onClick={handleLogOut}>
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button sx={styles.button} onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button sx={styles.button} onClick={() => navigate("/register")}>
                Register
              </Button>
            </>
          )}
        </Box>
      </Popover>
    </Box>
  );
};
