import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import ListAlt from '@material-ui/icons/ListAlt';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ListAlt />
      </ListItemIcon>
      <ListItemText primary="Courses" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SupervisorAccount />
      </ListItemIcon>
      <ListItemText primary="Teachers" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Students" />
    </ListItem>
  </div>
);