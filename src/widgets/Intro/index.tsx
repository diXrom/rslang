import { memo } from 'react';
import { Image } from 'mui-image';
import { Box, Button, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import { NavLink } from 'react-router-dom';
import { fadeAnimation, motionSettings } from 'shared/lib/styles';
import { ROUTE_PATH } from 'shared/constants';
import learnEnglish from './assets/learn_english.png';

const Intro = () => {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={{ xs: 3, md: 0, lg: 4 }}
      sx={{
        height: '90vh',
        mb: 4,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      component={motion.section}
      {...motionSettings}
    >
      <Stack
        spacing={{ xs: 1, md: 2 }}
        sx={{ maxWidth: '360px', alignItems: { xs: 'center', md: 'start' } }}
      >
        <Typography
          variant="h3"
          component={motion.h3}
          variants={fadeAnimation}
          custom={1}
          sx={{ fontWeight: 'bold', fontSize: { xs: 35, md: 40, lg: 55 } }}
        >
          RSLang
        </Typography>
        <Typography
          variant="body1"
          component={motion.div}
          variants={fadeAnimation}
          custom={2}
          sx={{ fontSize: { xs: 15, md: 17, lg: 20 }, textAlign: { xs: 'center', md: 'start' } }}
        >
          Бесплатный, веселый и эффективный способ выучить язык, скорее же присоединяйтесь к нам.
        </Typography>
        <NavLink to={`/${ROUTE_PATH.BOOK}`} className="navLink">
          <Button
            variant="contained"
            sx={{ color: '#fffdff' }}
            component={motion.button}
            variants={fadeAnimation}
            custom={3}
          >
            Начать
          </Button>
        </NavLink>
      </Stack>
      <Box
        component={motion.div}
        variants={fadeAnimation}
        custom={1}
        sx={{ maxWidth: { xs: '450px', lg: '100%' } }}
      >
        <Image src={learnEnglish} alt="img" duration={0} height="100%" width="100%" />
      </Box>
    </Stack>
  );
};

export default memo(Intro);
