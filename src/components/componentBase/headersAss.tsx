import { Button, Stack, SxProps, Theme, Typography } from "@mui/material";
import HeaderParts from "./headerParts";
import theme from "../../components/theme";
import AddIcon from '@mui/icons-material/Add';

interface ItemProps {
  title: string;
  description: string;
  dataBtn1: string;
  dataBtn2: string;
  styleBtn1: SxProps<Theme>;
  styleBtn2: SxProps<Theme>;
}

const HeaderAss: React.FC<{ item: ItemProps }> = ({ item }) => {
  return (
    <>
      <HeaderParts name={item.title} />
      <Stack direction={{xs: 'column', sm: 'row'}} alignItems='start' spacing={2}>
        <Typography
          variant="caption"
          sx={{ color: theme.palette.secondary.main}}
        >
          {item.description}
        </Typography>
        <Button variant="contained" size="small" sx={item.styleBtn1}>
          {item.dataBtn1}
          <AddIcon />
        </Button>
        <Button
          variant="outlined"
          sx={item.styleBtn2}
          size="small"
        >
          {item.dataBtn2}
        </Button>
      </Stack>
    </>
  );
};

export default HeaderAss;
