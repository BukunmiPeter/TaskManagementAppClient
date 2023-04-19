import React, { FC, ReactElement } from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from '../CreateTaskForm/enums/Status';
import { emitCorrectBorderColor } from './helpers/emitCorrectBorderColor';
import { emitCorrectLabel } from './helpers/emitCorrectLabel';

export const TaskCounter: FC<ITaskCounter> = (
  props
): ReactElement => {
  const { status = Status.todo, count = 0 } = props;
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '5px solid',
            width: '96px',
            height: '96px',
            marginBottom: '16px',
            borderColor: `${emitCorrectBorderColor(
              status
            )}`,
          }}
        >
          <Typography variant="h4" color="#ffffff">
            {count}
          </Typography>
        </Avatar>
        <Typography
          color="ffffff"
          fontWeight="bold"
          fontSize="20px"
          variant="h5"
        >
          {emitCorrectLabel(status)}
        </Typography>
      </Box>
    </>
  );
};
