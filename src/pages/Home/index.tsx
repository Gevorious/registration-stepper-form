import { useRegistrationStore } from '../../store/registrationStore';
import type { RegistrationFields } from '../../types/registration';
import LandingContent from './partials/LandingContent';
import RegistrationInfo from './partials/RegistrationInfo';

const Home = () => {
  const { data } = useRegistrationStore();

  return data.completed ? (
    <RegistrationInfo {...(data as RegistrationFields)} />
  ) : (
    <LandingContent />
  );
};

export default Home;
