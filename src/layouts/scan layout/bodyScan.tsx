import { Box, Button, Chip, IconButton } from "@mui/material";
import CheckSearch from "../../components/componentBase/checkSearch";
import DataGridRusible from "../../components/componentBase/dataGridRusible";

import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';
import { GridColDef } from "@mui/x-data-grid";

const option1 = [
  { value: "all", label: "All" },
  { value: "starting", label: "Starting" },
  { value: "running", label: "Running" },
  { value: "finished", label: "Finished" },
  { value: "stoped", label: "Stoped" },
  { value: "failed", label: "Failed" },
];

const option2 = [
  { value: "all", label: "All" },
  { value: "starting", label: "Starting" },
  { value: "running", label: "Running" },
  { value: "finished", label: "Finished" },
  { value: "failed", label: "Failed" },
  { value: "uploaded", label: "Uploaded" },
];

// data grid
const columns: GridColDef[] = [
    {
      field: 'scanName',
      headerName: 'SCAN NAME',
      width: 200,
      editable: false,
      renderCell: (params) => (
        <Box display="flex" alignItems="center">
          <CheckCircleIcon sx={{ color: 'green', mr: 1 }} /> {/* آیکون تیک سبز */}
          {params.value}
        </Box>
      ),
    },
    {
      field: 'SEVERITYbREAKDOWN',
      headerName: 'SEVERITY BREAKDOWN',
      width: 450,
      editable: false,
      renderCell: (params) => (
        <>
            <Button variant="outlined" disabled size="small" sx={{bgcolor: '#170B0F'}}>0</Button>
            <Button variant="outlined" disabled size="small" sx={{bgcolor: '#170E0C'}}>0</Button>
            <Button variant="outlined" disabled size="small" sx={{bgcolor: '#15110B'}}>0</Button>
            <Button variant="outlined" disabled size="small" sx={{bgcolor: '#0E0E18'}}>0</Button>
            <Button variant="outlined" sx={{bgcolor: '#0E2E1C'}}>421</Button>
            <Button variant="outlined" disabled size="small" sx={{bgcolor: '#0D0D0F'}}>0</Button>
        </>
      ),
    },
    {
      field: 'templates',
      headerName: 'TEMPLATES',
      type: 'string',
      width: 130,
      editable: false,
      renderCell: (params) => (
        <p style={{margin: 'auto'}}>{params.value} templates</p>
      ),
    },
    {
      field: 'assets',
      headerName: 'ASSETS',
      width: 110,
      align: 'left'
    },
    {
      field: 'duratioin',
      headerName: 'DURATION',
      type: 'string',
      width: 110,
      editable: false,
      align: 'center'
    },
    {
        field: 'lastUpdates',
        headerName: 'LAST UPDATES',
        type: 'string',
        width: 110,
        editable: false,
        align: 'center'
      },
    {
      field: 'actions', // نام جدید برای ستون منو
      headerName: '',
      width: 80,
      sortable: false,
      renderCell: () => (
        <IconButton>
          <MoreVertIcon /> {/* آیکون سه نقطه */}
        </IconButton>
      ),
      align: 'center'
    }
  ];
  
  const rows = [
    { id: 1, SEVERITYbREAKDOWN: 'uploaded', scanName: 'twilight-mountain', templates: 0, assets: '24 assets', duratioin: '13m 4s', lastUpdates: '2d ago' },
    { id: 2, SEVERITYbREAKDOWN: 'uploaded', scanName: 'small-water', templates: 51, assets: '24 assets', duratioin: '13m 4s', lastUpdates: '2d ago' },
    { id: 3, SEVERITYbREAKDOWN: 'Auto Discovery', scanName: 'Auto Discovery', templates: 31, assets: '24 assets', duratioin: '13m 4s', lastUpdates: '2d ago' },
    { id: 4, SEVERITYbREAKDOWN: 'Auto Discovery', scanName: 'Arya', templates: 11, assets: '24 assets', duratioin: '13m 4s', lastUpdates: '2d ago' },
    { id: 5, SEVERITYbREAKDOWN: 'Auto Discovery', scanName: 'Daenerys', templates: null, assets: '24 assets', duratioin: '13m 4s', lastUpdates: '2d ago' },
    { id: 6, SEVERITYbREAKDOWN: 'Auto Discovery', scanName: 'Jons-primary', templates: 150, assets: '24 assets', duratioin: '13m 4s', lastUpdates: '2d ago' },
    { id: 7, SEVERITYbREAKDOWN: 'Auto Discovery', scanName: 'Ferrara', templates: 44, assets: '24 assets', duratioin: '13m 4s', lastUpdates: '2d ago' },
    { id: 8, SEVERITYbREAKDOWN: 'Auto Discovery', scanName: 'Rossini', templates: 36, assets: '24 assets', duratioin: '13m 4s', lastUpdates: '2d ago' },
    { id: 9, SEVERITYbREAKDOWN: 'Auto Discovery', scanName: 'Harvey', templates: 65, assets: '24 assets', duratioin: '13m 4s', lastUpdates: '2d ago' },
  ];

function BodyScan() {
  return (
    <>
      <Box sx={{ mt: 3 }}>
        <CheckSearch option1={option1} option2={option2} />
        <DataGridRusible rows={rows} columns={columns} />
      </Box>
    </>
  );
}
export default BodyScan;
