import { Box, Chip, IconButton } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface DataGridProps {
  rows: GridRowsProp;
  columns: GridColDef[];
}

function DataGridRusible({ rows, columns }: DataGridProps) {
  return (
    <Box sx={{ height: 600, width: "100%", px: 2, mt: 2 }} className="custom-scroll">
      <DataGrid
        rows={rows}
        columns={columns}
        paginationModel={{ page: 0, pageSize: 9 }}
        pageSizeOptions={[9]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default DataGridRusible;
