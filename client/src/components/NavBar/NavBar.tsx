import React from 'react';
import { AppBar, Typography } from '@material-ui/core';

interface IProps {

}
export const NavBar: React.FC<IProps> = (props: IProps) => {
   return(
      <AppBar>
        <Typography variant="h6">
          Khyzad - Half-orc
        </Typography>
      </AppBar>
   );
}