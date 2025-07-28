import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Registration from './pages/Registration';
import Home from './pages/Home';
import Layout from './components/Layout';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/registration/*" element={<Registration />} />
            <Route
              path="*"
              element={<Navigate to="/registration/step-1" replace />}
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
