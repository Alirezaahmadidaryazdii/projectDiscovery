import { Box, Button, Divider, Stack, TextField } from "@mui/material";

// mui icon import
import DownloadingIcon from "@mui/icons-material/Downloading";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PublicIcon from '@mui/icons-material/Public';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GitHubIcon from '@mui/icons-material/GitHub';
import CardPardRusible from "../componentBase/cardPardsRusible";

const data=[
    {icon: <AccountCircleIcon />, title: 'My templates'},
    {icon: <PublicIcon />, title: 'publick templates'},
    {icon: <AutoAwesomeIcon />, title: 'Early Templates'},
    {icon: <GitHubIcon />, title: 'Github Templates'},
]

const HalfGridOne = () => {
  return (
    <>
      <Stack direction="row">
        <Button variant="contained" sx={{mx: 1}}>Create New Template</Button>
        <Button variant="outlined">
          <DownloadingIcon />
        </Button>
      </Stack>
      <Box sx={{p: 1, mt: 1}}>
      <TextField
        label="Search..."
        variant="outlined" 
        fullWidth
        size="small"
      />
      <Divider sx={{my: 2}} />
      </Box>
      <Box display='flex' flexDirection='column'>
      {data.map((item, index)=>{
        return <CardPardRusible icon={item.icon} title={item.title} key={index} />
      })}
      </Box>
    </>
  );
};
export default HalfGridOne;
