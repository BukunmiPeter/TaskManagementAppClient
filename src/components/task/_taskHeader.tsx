import React, { FC, ReactElement } from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { ITaskHeader } from './interfaces/ITaskHeader';

export const TaskHeader: FC<ITaskHeader> = (
  props
): ReactElement => {
  const { title = 'Default Title', date = new Date() } =
    props;
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      mb={4}
    >
      <Box>
        {' '}
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip variant="outlined" label={`${date}`} />
      </Box>
    </Box>
  );
};
