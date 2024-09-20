import { Box, Button, InputBase, TextField, Typography } from "@mui/material";
import theme from "../components/theme";
import { Link } from "react-router-dom";
import { useRef } from "react";

interface items {
  title: string;
  caption: string;
  accounts: string[];
}

function BodySign(props: items) {
  const emailRef = useRef<HTMLInputElement>(null);

  const handleEmailData = ()=>{
    localStorage.setItem('email', JSON.stringify(emailRef.current?.value));
  }
  return (
    <Box
      sx={{
        maxWidth: "380px",
        margin: "150px auto",
        height: "100vh",
        "& > *": {
          mb: 2, // margin-bottom for all direct children
        },
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {props.title}
      </Typography>
      <Typography
        variant="caption"
        sx={{ color: theme.palette.secondary.main }}
      >
        {props.caption}
      </Typography>
      {props.accounts.map((item, index) => {
        return (
          <Button
            key={index}
            variant="contained"
            sx={{
              background: theme.palette.background.default,
              color: theme.palette.primary.main,
              border: "1px solid white",
              borderRadius: "15px",
              width: "100%",
              textTransform: "none",
              mb: 1,
            }}
          >
            {item}
          </Button>
        );
      })}
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        or
      </Typography>
      <TextField
      inputRef={emailRef}
        sx={{
          ml: 1,
          flex: 1,
          width: "100%",
          background: theme.palette.background.default,
          color: theme.palette.primary.main,
          p: 0,
          borderRadius: 2,
          m: "10px auto",
        }}
        fullWidth
        placeholder="Enter email"
        type="email"
        inputProps={{ "aria-label": "enter email" }}
      />
      <Button
        variant="contained"
        component={Link}
        to="/"
        sx={{ width: "100%", textTransform: "none" }}
        onClick={handleEmailData}
      >
        continue
      </Button>
    </Box>
  );
}
export default BodySign;
