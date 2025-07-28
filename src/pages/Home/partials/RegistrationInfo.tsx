import {
  CardContent,
  Container,
  Card,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import type { RegistrationFields } from '../../../types/registration';

const RegistrationInfo = ({
  email,
  yourRole,
  industry,
  experienceInYears,
  aboutUs,
}: RegistrationFields) => {
  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Registration Info
          </Typography>

          <List disablePadding>
            <ListItem>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Industry" secondary={industry} />
            </ListItem>
            <Divider />

            <ListItem>
              <ListItemText
                primary="Experience in Years"
                secondary={experienceInYears}
              />
            </ListItem>
            <Divider />

            <ListItem>
              <ListItemText primary="Role" secondary={yourRole} />
            </ListItem>
            <Divider />

            <ListItem>
              <ListItemText primary="About You" secondary={aboutUs || 'N/A'} />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RegistrationInfo;
