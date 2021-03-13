import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const useStyles = makeStyles(({ spacing }: Theme) => createStyles({
  appBar: {
    padding: spacing(1),
  },
}));
interface IProps {

}
export const NavBar: React.FC<IProps> = (props: IProps) => {
  const classes = useStyles();
  return(
    <AppBar className={classes.appBar}>
      <Typography variant="h5" align="center">
        Khyzad - Half-orc
      </Typography>
    </AppBar>
  );
}