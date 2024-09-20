import { Box, Chip, IconButton } from "@mui/material";
import CheckSearch from "../../components/componentBase/checkSearch";
import DataGridRusible from "../../components/componentBase/dataGridRusible";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';
import { GridColDef } from "@mui/x-data-grid";

function BodyAssets(){
  // options 
    const option1 = [
        { value: 'all', label: 'All' },
        { value: 'upload', label: 'Upload' },
        { value: 'discovery', label: 'Discovery' },
        { value: 'indesition', label: 'Indesition' },
      ];
    
      const option2 = [
        { value: 'all', label: 'All' },
        { value: 'starting', label: 'Starting' },
        { value: 'running', label: 'Running' },
        { value: 'finished', label: 'Finished' },
        { value: 'failed', label: 'Failed' },
        { value: 'uploaded', label: 'Uploaded' },
      ];

      // data grid
      const columns: GridColDef[] = [
        {
          field: 'assetsName',
          headerName: 'Assets name',
          width: 200,
          editable: true,
          renderCell: (params) => (
            <Box display="flex" alignItems="center">
              <CheckCircleIcon sx={{ color: 'green', mr: 1 }} /> {/* آیکون تیک سبز */}
              {params.value}
            </Box>
          ),
        },
        {
          field: 'source',
          headerName: 'Source',
          width: 200,
          editable: true,
          renderCell: (params) => (
            <Box display="flex" alignItems="center">
              <SearchIcon sx={{ color: 'blue', mr: 1 }} /> {/* آیکون جستجوی آبی */}
              {params.value}
            </Box>
          ),
        },
        {
          field: 'totalAssets',
          headerName: 'Total Assets',
          type: 'string',
          width: 150,
          editable: true,
          renderCell: (params) => (
            <Box display="flex" alignItems="center">
              <Chip label={`${params.value} assets`} sx={{ ml: 1, mt: 1 }} /> {/* نمایش متن assets در Chip */}
            </Box>
          ),
        },
        {
          field: 'duratioin',
          headerName: 'DURATION',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 180,
          align: 'left'
        },
        {
          field: 'lastUpdated',
          headerName: 'LAST UPDATED',
          type: 'string',
          width: 110,
          editable: true,
          align: 'center'
        },
        {
          field: 'actions', // نام جدید برای ستون منو
          headerName: '',
          width: 100,
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
        { id: 1, source: 'uploaded', assetsName: 'twilight-mountain', totalAssets: 0, duratioin: '--', lastUpdated: '2d ago' },
        { id: 2, source: 'uploaded', assetsName: 'small-water', totalAssets: 51, duratioin: '--', lastUpdated: '2d ago' },
        { id: 3, source: 'Auto Discovery', assetsName: 'Auto Discovery', totalAssets: 31, duratioin: '--', lastUpdated: '2d ago' },
        { id: 4, source: 'Auto Discovery', assetsName: 'Arya', totalAssets: 11, duratioin: '--', lastUpdated: '2d ago' },
        { id: 5, source: 'Auto Discovery', assetsName: 'Daenerys', totalAssets: null, duratioin: '--', lastUpdated: '2d ago' },
        { id: 6, source: 'Auto Discovery', assetsName: 'Jons-primary', totalAssets: 150, duratioin: '--', lastUpdated: '2d ago' },
        { id: 7, source: 'Auto Discovery', assetsName: 'Ferrara', totalAssets: 44, duratioin: '--', lastUpdated: '2d ago' },
        { id: 8, source: 'Auto Discovery', assetsName: 'Rossini', totalAssets: 36, duratioin: '--', lastUpdated: '2d ago' },
        { id: 9, source: 'Auto Discovery', assetsName: 'Harvey', totalAssets: 65, duratioin: '--', lastUpdated: '2d ago' },
      ];
    return(
        <Box sx={{mt: 3}}>
          <CheckSearch option1={option1} option2={option2} />
          <DataGridRusible rows={rows} columns={columns} />
        </Box>
    )
}
export default BodyAssets;