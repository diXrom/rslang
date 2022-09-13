import { Fragment } from 'react';
import { Container } from '@mui/material';

import WrapperBackground from './WrapperBackground';

const Wrapper = (props: { children: JSX.Element | JSX.Element[]; fullHeight?: boolean }) => {
  const { children, fullHeight = false } = props;

  return (
    <Fragment>
      {!fullHeight && <WrapperBackground />}
      <Container maxWidth="xl" sx={{ paddingY: 3, paddingX: { xs: 1, md: 3 }, flex: '1 1 auto' }}>
        {children}
      </Container>
    </Fragment>
  );
};

export default Wrapper;
