import { Stack, CircularProgress } from '@mui/material';

const StatisticsProgress = () => {
  return (
    <Stack
      sx={{
        pt: '250px',
        alignItems: 'center',
        height: { xs: '90vh', md: 'auto' },
      }}
    >
      <CircularProgress color="info" size={60} />
    </Stack>
  );
};

export default StatisticsProgress;
