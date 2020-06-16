import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import modal from '@store/modal/actions';
import LayoutPage from '@components/layouts/layout-page';
import HeaderContainer from '@containers/header-container';
import LayoutContent from '@components/layouts/layout-content';
import Button from '@components/elements/button';
import Accordion from '@components/elements/accordion';

function Main() {
  const callbacks = {
    showInfo: useCallback(async () => {
      const result = await modal.open('info', {
        overflowTransparent: false,
        overflowClose: true,
      });
    }, []),
  };

  return (
    <LayoutPage header={<HeaderContainer />}>
      <LayoutContent>
        <h1>Home page</h1>
        <p>
          <Link to="/private">Private area</Link>
        </p>
        <p>
          <Button onClick={callbacks.showInfo}>Show modal</Button>
        </p>
        <Accordion title={'Title'}>
          text for accordion, with other components, ex. <Button>Button</Button>
        </Accordion>
      </LayoutContent>
    </LayoutPage>
  );
}

export default React.memo(Main);
