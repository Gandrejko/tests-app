import React, { FC, useState } from "react";
import { Box, Button, IconButton, Popover, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';

import * as styles from "./Header.styles";

type HeaderProps = {
  pageName: string;
};

export const Header: FC<HeaderProps> = ({ pageName }) => {
  const isLogin = true;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleIconClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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
          {isLogin ? (
            <>
              <Link to="/">
                <Button sx={styles.button}>
                  My Tests
                </Button>
              </Link>
              <Link to="/login">
                <Button sx={styles.button}>
                  Log Out
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button sx={styles.button}>
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button sx={styles.button}>
                  Register
                </Button>
              </Link>
            </>
          )}
        </Box>
      </Popover>
    </Box>
  );
};
