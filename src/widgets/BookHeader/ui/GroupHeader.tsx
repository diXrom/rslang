import { memo } from 'react';
import { ElectricBolt, Audiotrack } from '@mui/icons-material';
import { Stack, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { fadeAnimation } from 'shared/lib/styles';
import { ROUTE_PATH } from 'shared/constants';
import { groupData } from '../model/constants';
import { useQueryParams } from '../model/hooks/useQuery';

type IGroupHeader = { isLearning?: boolean };

const GroupHeader = ({ isLearning }: IGroupHeader) => {
  const { group, page } = useQueryParams();

  return (
    <Stack direction="row">
      <Stack sx={{ ml: 1, flexGrow: 1 }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold' }}
          component={motion.h4}
          variants={fadeAnimation}
        >
          Учебник
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          component={motion.div}
          variants={fadeAnimation}
        >
          Градация сложности
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ mr: 1 }}>
        <NavLink to={`/${ROUTE_PATH.SPRINT}`} className="navLink" state={{ group, page }}>
          <Button
            color={groupData[Number(group)].color}
            variant="contained"
            component={motion.button}
            variants={fadeAnimation}
            custom={3}
            sx={{ height: '50px', mr: 2 }}
            disabled={isLearning}
          >
            <ElectricBolt color="primary" />
            <Typography variant="subtitle2" sx={{ fontSize: 20 }}>
              Спринт
            </Typography>
          </Button>
        </NavLink>
        <NavLink to={`/${ROUTE_PATH.AUDIOCALL}`} className="navLink" state={{ group, page }}>
          <Button
            color={groupData[Number(group)].color}
            variant="contained"
            component={motion.button}
            variants={fadeAnimation}
            custom={3.3}
            sx={{ height: '50px', mr: 2 }}
            disabled={isLearning}
          >
            <Audiotrack color="primary" />
            <Typography variant="subtitle2" sx={{ fontSize: 20 }}>
              Аудиовызов
            </Typography>
          </Button>
        </NavLink>
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold' }}
          component={motion.h4}
          variants={fadeAnimation}
          custom={3.6}
        >
          Игры
        </Typography>
      </Stack>
    </Stack>
  );
};

export default memo(GroupHeader);