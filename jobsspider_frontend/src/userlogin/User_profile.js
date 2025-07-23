import React from "react";
import {
  Box,
  Typography,
  Divider,
  Paper,
  Avatar,
  useTheme,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import userlogin from "../assets/userlogin.png";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ProfileContactInfo = () => {
  let location = useSelector((state) => state.user);
  let dispatch = useDispatch();
  let homeUser = localStorage.getItem("USER");

  if (homeUser != null) {
    location = JSON.parse(homeUser);
  }

  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${userlogin})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        p: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.01 }}
      >
        <Paper
          elevation={6}
          sx={{
            position: "relative",
            zIndex: 2,
            p: 4,
            maxWidth: 600,
            width: "100%",
            borderRadius: 4,
            backdropFilter: "blur(12px)",
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          }}
        >
          {/* Avatar with bounce animation */}
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}
          >
            <Avatar sx={{ bgcolor: "#6a1b9a", width: 72, height: 72 }}>
              <PersonIcon sx={{ fontSize: 40 }} />
            </Avatar>
          </motion.div>

          <Typography
            variant="h5"
            align="center"
            fontWeight="bold"
            color="primary"
          >
            {location?.username || "Your Name"}
          </Typography>

          {/* Info Note */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={2}
            mb={3}
          >
            <InfoOutlinedIcon sx={{ mr: 1, color: theme.palette.info.main }} />
            <Typography variant="body2" color="text.secondary" align="center">
              This is your JobsSpider profile. Changes made here will update your
              info across the site.
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>
            Contact Information
          </Typography>

          {/* Email */}
          <motion.div
            whileHover={{ scale: 1.02, backgroundColor: "#f0f4ff" }}
            transition={{ duration: 0.3 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px",
              borderRadius: "12px",
              marginBottom: "8px",
            }}
          >
            <EmailIcon color="action" />
            <Typography>{location?.emailaddress || "example@mail.com"}</Typography>
          </motion.div>

          {/* Phone */}
          <motion.div
            whileHover={{ scale: 1.02, backgroundColor: "#f0f4ff" }}
            transition={{ duration: 0.3 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px",
              borderRadius: "12px",
            }}
          >
            <PhoneIcon color="action" />
            <Typography>{location?.emailMobile || "+91 9876543210"}</Typography>
          </motion.div>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default ProfileContactInfo;
