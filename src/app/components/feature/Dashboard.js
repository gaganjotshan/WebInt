import React from 'react';

// hoc
import withHead from '../hocHead';

//components
import Main from '../Main';

function Dashboard(props) {
  return (
    <Main>
      <div className="text-center">
        <h1 className="display-3">Dashboard</h1>
        <p className="lead"></p>
      </div>
    </Main>
  );
}

export default withHead(Dashboard, "Dashboard");