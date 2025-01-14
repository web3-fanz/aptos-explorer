import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {useState} from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import {IconButton, Stack, useTheme} from "@mui/material";
import {grey} from "../../themes/colors/aptosColorPalette";
import {TooltipTransactionType} from "../TransactionType";

export default function TransactionTypeTooltip() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton onClick={handleOpen} sx={{padding: 0.5}}>
        <InfoOutlinedIcon sx={{fontSize: 15, color: "inherit"}} />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: {xs: 300, md: 400, lg: 500},
            boxShadow: 24,
          }}
        >
          <Box
            sx={{
              bgcolor: theme.palette.mode === "dark" ? grey[600] : grey[200],
              borderRadius: "10px 10px 0 0",
              paddingX: 3,
              paddingTop: 2,
              paddingBottom: 2,
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6" marginLeft={4.3}>
                Transaction Types
              </Typography>
              <IconButton onClick={handleClose} sx={{padding: 0.5}}>
                <CloseOutlinedIcon color="secondary" />
              </IconButton>
            </Stack>
          </Box>
          <Box
            sx={{
              bgcolor: "background.paper",
              borderRadius: "0 0 10px 10px",
              paddingX: 3,
              paddingTop: 2,
              paddingBottom: 3,
            }}
          >
            <Stack spacing={2}>
              <TooltipTransactionType type="user_transaction" />
              <TooltipTransactionType type="block_metadata_transaction" />
              <TooltipTransactionType type="state_checkpoint_transaction" />
            </Stack>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
