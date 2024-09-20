import { Typography } from "@mui/material";


const HeaderParts = ({name}: {name: string})=>{

    return(
        <Typography variant="h6" gutterBottom>
        {name}
      </Typography>
    )
}
export default HeaderParts;