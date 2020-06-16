import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import LayoutContent from '@components/layouts/layout-content';
import { Helmet } from 'react-helmet';

function NotFound() {
  return (
    <Fragment>
      <Helmet>
        <title>404</title>
        <meta name="status" content="404" />
      </Helmet>
      <LayoutContent>
        <h1>404</h1>
        <p>Page not found</p>
        <Link to="/">Home</Link>
      </LayoutContent>
    </Fragment>
  );
}

export default React.memo(NotFound);
