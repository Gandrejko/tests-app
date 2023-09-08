import { Modal, ModalClose, ModalDialog } from "@mui/joy";
import { Box, Button, Typography } from "@mui/material";
import { deleteTest } from "api/tests-api";
import React, { FC, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { Test } from "types/tests";

import * as styles from "./UserTestCard.styles";

type TestCardProps = {
  test: Test;
};

export const UserTestCard: FC<TestCardProps> = ({ test }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [showModal, setShowModal] = useState(false);

  const {mutate} = useMutation({
    mutationFn: deleteTest,
    onSuccess: () => {
      setShowModal(false);
      queryClient.invalidateQueries({ queryKey: ['user-tests'] });
    }
  });

  const handleDelete = () => {
    mutate(test._id);
  };

  return (
    <Box sx={styles.card} onClick={() => navigate(`/test-info/${test._id}`)}>
      <Box sx={styles.info}>
        <Box sx={styles.name}>{test.name}</Box>
        <Box sx={styles.description}>{test.description}</Box>
      </Box>
      <Box sx={styles.buttons}>
        <Button
          variant="contained"
          size="small"
          onClick={() => navigate(`/tests/edit/${test._id}`)}
        >Edit</Button>
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={() => setShowModal(true)}
        >Delete</Button>
      </Box>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-title"
      >
        <ModalDialog>
          <ModalClose
          />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure?
          </Typography>
          <Button variant="contained" onClick={handleDelete} sx={styles.deleteButton}>Delete test</Button>
        </ModalDialog>
      </Modal>
    </Box>
  );
};
