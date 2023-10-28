import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';

function CustomToolbar() {
  return (
    <GridToolbarContainer sx={{ justifyContent: "flex-end" }}>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const columns = [
  {
    field: 'sno', // Serial Number Field
    headerName: 'S.No',
    headerClassName: 'super-app-theme--header',
    flex: 0
  },
  {
    field: 'project_name',
    headerName: 'Project Name',
    headerClassName: 'super-app-theme--header',
    flex: 1
  },
  {
    field: 'project_description',
    headerName: 'Project Description',
    headerClassName: 'super-app-theme--header',
    flex: 1
  },
  {
    field: 'project_create_date',
    headerName: 'Project Created Date',
    headerClassName: 'super-app-theme--header',
    flex: 1
  },
  {
    field: 'actions',
    headerName: 'Actions',
    headerClassName: 'super-app-theme--header',
    sortable: false,
    flex: 1,
    renderCell: (params) => (
      <div>
        <button className="bg-secondary text-primary p-2 border rounded-lg" onClick={() => handleViewClick(params.row.id)}>View</button>
      </div>
    ),
  },
];

const handleViewClick = (id) => {
  console.log(`View action for row with ID ${id}`);
};

export default function StylingHeaderGrid() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Replace this URL with your API endpoint
    const apiUrl = 'http://localhost:3002/api/user/653a4123c98014cfffeac505';

    axios.get(apiUrl)
      .then(response => {
        const dashboardData = response.data.dashboard;

        // Add a serial number to each item in the data
        const formattedData = dashboardData.map((item, index) => ({
          ...item,
          sno: index + 1,
        }));

        setData(formattedData);
        console.log(formattedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Box
      sx={{
        height: 300,
        width: '100%',
        '& .super-app-theme--header': {
          backgroundColor: '#DCF9F4',
        },
      }}
    >
      <DataGrid
        rows={data}
        getRowId={(data) => data._id}
        columns={columns}
        slots={{
          toolbar: CustomToolbar,
        }}
        initialState={{
          ...data.initialState,
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 25]}
      />
    </Box>
  );
}
