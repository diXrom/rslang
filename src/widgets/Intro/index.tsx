import { memo } from 'react';
import { Image } from 'mui-image';
import { Box, Button, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import { fadeAnimation } from 'shared/lib/styles';

const Intro = () => {
  return (
    <Stack
      direction={{ xs: 'column', lg: 'row' }}
      spacing={4}
      sx={{ height: '90vh', mb: 4, justifyContent: 'center', alignItems: 'center' }}
      component={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Stack spacing={2} sx={{ maxWidth: '360px', alignItems: 'start' }}>
        <Typography
          variant="h3"
          component={motion.h3}
          variants={fadeAnimation}
          custom={1}
          sx={{ fontWeight: 'bold' }}
        >
          RSLang
        </Typography>
        <Typography variant="body1" component={motion.div} variants={fadeAnimation} custom={2}>
          Бесплатный, веселый и эффективный способ выучить язык, скорее же присоединяйтесь к нам.
        </Typography>
        <Button
          variant="contained"
          sx={{ color: '#FDF500' }}
          component={motion.button}
          variants={fadeAnimation}
          custom={3}
        >
          Начать
        </Button>
      </Stack>
      <Box component={motion.div} variants={fadeAnimation} custom={1}>
        <Image
          src={`https://via.placeholder.com/500`}
          alt="img"
          duration={0}
          height="100%"
          width="100%"
        />
      </Box>
    </Stack>
  );
};

export default memo(Intro);
