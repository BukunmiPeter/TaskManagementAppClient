import React, { FC, ReactElement } from 'react';
import { Grid, Box } from '@mui/material';
import format from 'date-fns/format';
import { TaskCounter } from '../TaskCounter/TaskCounter';
import PropTypes from 'prop-types';
import { Status } from '../CreateTaskForm/enums/Status';
import { Task } from '../task/task';
export const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>
          Status of Your Tasks As On{' '}
          {format(new Date(), 'PPPP')}
        </h2>
      </Box>
      <Grid
        container
        display="flex"
        justifyContent="center"
      >
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <Box>
            <TaskCounter />
          </Box>
          <Box>
            <TaskCounter />
          </Box>
          <Box>
            <TaskCounter />
          </Box>
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          md={8}
          xs={10}
        >
          <Task />
          <Task />
          <Task />
        </Grid>
      </Grid>
    </Grid>
  );
};

TaskCounter.propTypes = {
  count: PropTypes.number,
  status: PropTypes.oneOf([
    Status.todo,
    Status.inProgress,
    Status.completed,
  ]),
};
