import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LandingContent = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/registration');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md">
        <Stack
          spacing={4}
          alignItems="center"
          textAlign="center"
          sx={{ py: 8 }}
        >
          <Typography variant="h2" component="h1" fontWeight="bold">
            Welcome!
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Start your journey by completing a quick and easy registration
            process.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={handleStart}
            sx={{ px: 4, py: 1.5, fontSize: '1rem' }}
          >
            Get Started
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default LandingContent;
