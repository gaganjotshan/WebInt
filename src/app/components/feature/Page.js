import React from 'react';

// hoc
import withHead from '../hocHead';

//components
import Main from '../Main';

function Page(props) {
  return (
    <Main>
        <h1>{props.title}</h1>
        <p className="lead"></p>
    </Main>
  );
}

export default withHead(Page);