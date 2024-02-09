import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, mx: 10 }}>
        <Typography variant="h4" gutterBottom>
          Contact MyScheme Replica
        </Typography>
        <Typography variant="body1" paragraph>
          For any inquiries or assistance, please feel free to reach out to us using the contact details provided below.
        </Typography>
      </Box>

      <Box sx={{ m: 3, width: "100%", maxWidth: 600, mx: "auto" }}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red" }} />{" "}
                  <Typography variant="body1">
                    790-333-9726 (Mobile Number)
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue" }} />{" "}
                  <Typography variant="body1">
                    rahulkrprasad18@gmail.com
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green" }} />{" "}
                  <Typography variant="body1">91 7903339726</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
