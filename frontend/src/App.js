import React from 'react';
import './App.css';

import { useAuth0 } from "./services/react-auth0-spa";
import Routes from './routes';



function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <Routes />
    </React.Fragment>
  );
}

export default App;
