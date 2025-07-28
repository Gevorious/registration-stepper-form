import { Box, Container, Typography, Stack, Button } from '@mui/material';
import type { StepperFormProps } from './types';

const StepperForm = ({
  title,
  children,
  onSubmit,
  onBack,
  backLabel = 'Back',
  nextLabel = 'Next',
  backDisabled = false,
  nextDisabled = false,
}: StepperFormProps) => {
  return (
    <Container maxWidth="sm" sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        {title}
      </Typography>

      <Box component="form" onSubmit={onSubmit} noValidate autoComplete="off">
        {children}

        <Stack direction="row" spacing={2} justifyContent="flex-end" mt={4}>
          {onBack && (
            <Button onClick={onBack} variant="outlined" disabled={backDisabled}>
              {backLabel}
            </Button>
          )}
          <Button type="submit" variant="contained" disabled={nextDisabled}>
            {nextLabel}
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default StepperForm;
