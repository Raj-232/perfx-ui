import * as React from 'react';
import Table from '../componants/Table'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AssignmentIcon from '@mui/icons-material/Assignment';
import UpdateIcon from '@mui/icons-material/Update';
import Summary from '../componants/Summary';
import Realtime from '../componants/Realtime';
const ProjectView = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="w-full">
      <div className="flex items-center space-x-2 p-2 w-full">

        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 16 16" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M7.99993 14.8836C8.30802 14.8836 8.55807 15.1336 8.55807 15.4417C8.55807 15.7498 8.30802 15.9999 7.99993 15.9999H2.04649C1.50399 15.9999 0.983061 15.7841 0.599065 15.4008C0.215812 15.0168 0 14.4959 0 13.9534V2.04649C0 1.50399 0.215812 0.983061 0.599065 0.599065C0.983061 0.215812 1.50399 0 2.04649 0H8.43602C8.78132 0 9.11248 0.136929 9.35657 0.381764L12.6414 3.66657C12.8862 3.91066 13.0231 4.24182 13.0231 4.58712V7.25575C13.0231 7.56384 12.7731 7.81389 12.465 7.81389C12.1569 7.81389 11.9069 7.56384 11.9069 7.25575V4.58712C11.9069 4.53801 11.8875 4.49038 11.8526 4.4554L8.56774 1.17059C8.53276 1.13562 8.48514 1.11627 8.43602 1.11627H2.04649C1.79943 1.11627 1.56352 1.2145 1.38864 1.38864C1.2145 1.56352 1.11627 1.79943 1.11627 2.04649V13.9534C1.11627 14.2004 1.2145 14.4363 1.38864 14.6112C1.56352 14.7854 1.79943 14.8836 2.04649 14.8836H7.99993Z" fill="currentColor" />
          <path fillRule="evenodd" clipRule="evenodd" d="M8.18555 0.930205C8.18555 0.622115 8.43559 0.37207 8.74368 0.37207C9.05177 0.37207 9.30182 0.622115 9.30182 0.930205V3.53483C9.30182 3.63753 9.38516 3.72088 9.48786 3.72088H12.0925C12.4006 3.72088 12.6506 3.97092 12.6506 4.27901C12.6506 4.5871 12.4006 4.83715 12.0925 4.83715H9.48786C8.76824 4.83715 8.18555 4.25446 8.18555 3.53483V0.930205Z" fill="currentColor" />
          <path fillRule="evenodd" clipRule="evenodd" d="M3.5347 7.44171C3.22661 7.44171 2.97656 7.19166 2.97656 6.88357C2.97656 6.57548 3.22661 6.32544 3.5347 6.32544H9.48814C9.79623 6.32544 10.0463 6.57548 10.0463 6.88357C10.0463 7.19166 9.79623 7.44171 9.48814 7.44171H3.5347Z" fill="currentColor" />
          <path fillRule="evenodd" clipRule="evenodd" d="M3.5347 10.0464C3.22661 10.0464 2.97656 9.7964 2.97656 9.48831C2.97656 9.18022 3.22661 8.93018 3.5347 8.93018H6.88351C7.1916 8.93018 7.44164 9.18022 7.44164 9.48831C7.44164 9.7964 7.1916 10.0464 6.88351 10.0464H3.5347Z" fill="currentColor" />
          <path fillRule="evenodd" clipRule="evenodd" d="M3.5347 12.6509C3.22661 12.6509 2.97656 12.4009 2.97656 12.0928C2.97656 11.7847 3.22661 11.5347 3.5347 11.5347H6.88351C7.1916 11.5347 7.44164 11.7847 7.44164 12.0928C7.44164 12.4009 7.1916 12.6509 6.88351 12.6509H3.5347Z" fill="currentColor" />
          <path d="M12.3614 13.3021C12.9779 13.3021 13.4777 12.8023 13.4777 12.1858C13.4777 11.5694 12.9779 11.0696 12.3614 11.0696C11.7449 11.0696 11.2451 11.5694 11.2451 12.1858C11.2451 12.8023 11.7449 13.3021 12.3614 13.3021Z" fill="currentColor" />
          <path fillRule="evenodd" clipRule="evenodd" d="M13.5034 8.7769C13.5034 8.7769 13.7676 9.41318 13.7669 9.41318C13.8673 9.46378 13.9648 9.52034 14.0593 9.58136L14.7425 9.49206C14.927 9.46825 15.1123 9.5382 15.2351 9.67885C15.5596 10.0509 15.8089 10.4833 15.9696 10.9507C16.0299 11.127 15.9979 11.3227 15.8841 11.4708C15.8841 11.4708 15.4658 12.0178 15.4658 12.0171C15.4718 12.1294 15.4718 12.2425 15.4658 12.3542L15.8841 12.9011C15.9979 13.0492 16.0299 13.245 15.9696 13.4213C15.8089 13.8887 15.5596 14.321 15.2351 14.6931C15.1123 14.8338 14.927 14.9037 14.7425 14.8799C14.7425 14.8799 14.0593 14.7906 14.0601 14.7899C13.9656 14.8516 13.8673 14.9082 13.7676 14.9588L13.5034 15.5951C13.432 15.7677 13.2787 15.8927 13.0956 15.9285C12.6104 16.0237 12.1118 16.0237 11.6266 15.9285C11.4435 15.8927 11.2902 15.7677 11.2188 15.5951C11.2188 15.5951 10.9546 14.9588 10.9554 14.9588C10.8549 14.9082 10.7567 14.8516 10.6629 14.7906L9.97974 14.8799C9.79444 14.9037 9.60988 14.8338 9.48709 14.6931C9.16189 14.321 8.91259 13.8887 8.75259 13.4213C8.69231 13.245 8.72431 13.0492 8.83743 12.9011C8.83743 12.9011 9.2564 12.3542 9.2564 12.3549C9.25045 12.2425 9.25045 12.1294 9.2564 12.0178L8.83743 11.4708C8.72431 11.3227 8.69231 11.127 8.75259 10.9507C8.91259 10.4833 9.16189 10.0509 9.48709 9.67885C9.60988 9.5382 9.79444 9.46825 9.97974 9.49206C9.97974 9.49206 10.6629 9.58136 10.6622 9.58211C10.7567 9.52034 10.8542 9.46378 10.9546 9.41318L11.2188 8.7769C11.2902 8.60425 11.4435 8.47923 11.6266 8.44351C12.1118 8.34826 12.6104 8.34826 13.0956 8.44351C13.2787 8.47923 13.432 8.60425 13.5034 8.7769ZM12.594 9.49876C12.4393 9.48536 12.283 9.48462 12.1282 9.49876L11.902 10.0428C11.8454 10.1789 11.7367 10.2876 11.5998 10.3441C11.4376 10.4111 11.2858 10.4989 11.1466 10.6061C11.0298 10.6961 10.8809 10.7356 10.7343 10.717L10.1502 10.6403C10.0609 10.7683 9.98272 10.903 9.91723 11.0444L10.2752 11.5118C10.3652 11.6293 10.4047 11.7782 10.3853 11.9248C10.3622 12.0982 10.3622 12.2738 10.3853 12.4472C10.4047 12.5938 10.3652 12.7426 10.2752 12.8602C10.2752 12.8602 9.91723 13.3276 9.91723 13.3283C9.98272 13.469 10.0609 13.6044 10.1502 13.7317L10.7343 13.655C10.8809 13.6364 11.0298 13.6758 11.1466 13.7659C11.2858 13.873 11.4376 13.9609 11.5998 14.0278C11.7367 14.0844 11.8454 14.193 11.902 14.3292L12.1282 14.8732C12.283 14.8874 12.4393 14.8874 12.594 14.8732L12.8203 14.3292C12.8768 14.193 12.9855 14.0844 13.1224 14.0278C13.2839 13.9609 13.4365 13.873 13.5756 13.7659C13.6925 13.6758 13.8413 13.6364 13.9879 13.655L14.5721 13.7317C14.6614 13.6037 14.7395 13.469 14.805 13.3276L14.4471 12.8602C14.357 12.7426 14.3176 12.5938 14.3369 12.4472C14.3592 12.2738 14.3592 12.0982 14.3369 11.9248C14.3176 11.7782 14.357 11.6293 14.4471 11.5118C14.4471 11.5118 14.805 11.0444 14.805 11.0437C14.7388 10.903 14.6614 10.7676 14.5721 10.6403L13.9879 10.717C13.8413 10.7356 13.6925 10.6961 13.5756 10.6061C13.4365 10.4989 13.2839 10.4111 13.1224 10.3441C12.9855 10.2876 12.8768 10.1789 12.8203 10.0428L12.594 9.49876Z" fill="currentColor" />
        </svg>

        <div>
          Project view
        </div>

        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
        </svg>

        <div className="text-primary">
          Project Reports
        </div>
        <div>
          <select id="Test" name="Test" className="block w-full px-4 py-2 mt-2 border rounded-lg bg-white outline-none">
            <option className="border rounded-lg" value="Load Test">Load Test</option>
            <option className="border rounded-lg" value="Performance Test">Performance Test</option>
            <option className="border rounded-lg" value="Stres Test">Stres Test</option>
            <option className="border rounded-lg" value="Spike Test">Spike Test</option>
          </select>
        </div>
      </div>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab  icon={<UpdateIcon/>} iconPosition="start" label="Realtime" value="1" />
              <Tab icon={<AssignmentIcon/>} iconPosition="start"  label="Summary" value="2" />
              <Tab icon={<FormatListBulletedIcon/>} iconPosition="start"  label="Logs" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1"><Realtime/></TabPanel>
          <TabPanel value="2"><Summary/></TabPanel>
          <TabPanel value="3" ><Table /></TabPanel>
        </TabContext>
      </Box>
    </div>
  )
}

export default ProjectView