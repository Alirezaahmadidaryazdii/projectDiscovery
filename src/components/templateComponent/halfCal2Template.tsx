import { Box, Button, Chip, InputBase, Stack, TextField } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
const HalfGridTwo = () => {
  return (
    <>
      <Stack direction={{ xs: "column", sm: "row" }}>
        <Box display="flex" sx={{ border: "1px solid #888", p: 1 }}>
          <Chip label="Target" size="small" sx={{ borderRadius: "5px" }}></Chip>
          <Chip
            label="Target list"
            variant="outlined"
            size="small"
            sx={{ borderRadius: "5px", border: "none" }}
          ></Chip>
        </Box>
        <InputBase
          sx={{
            mr: 1,
            ml: 0,
            flex: 1,
            border: "1px solid #888",
            maxWidth: 500,
          }}
          placeholder="https://example.com"
          inputProps={{ "aria-label": "search" }}
        />
        <Stack direction="row" justifyContent="center" my={{xs: 2, sm:0}} >
          <Button variant="contained" sx={{ mx: 1 }}>
            Scan now
          </Button>
          <Button variant="outlined" sx={{ mx: 1 }}>
            Shere
          </Button>
          <GitHubIcon fontSize="large" sx={{ mx: 2 }} />
        </Stack>
      </Stack>
      <Box sx={{ my: 2, mx: 0 }}>
        <TextField
          label="Code Editor"
          multiline
          fullWidth
          rows={10}
          variant="outlined"
          InputProps={{
            style: {
              fontFamily: "monospace", // استفاده از فونت مخصوص کد
              whiteSpace: "pre", // نمایش خطوط به درستی
            },
          }}
        />
      </Box>
    </>
  );
};
export default HalfGridTwo;
