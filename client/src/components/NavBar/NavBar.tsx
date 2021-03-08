import React from 'react';
import {AppBar} from '@material-ui/core';

interface IProps {

}
export const NavBar: React.FC<IProps> = (props: IProps) => {
   return(
      <AppBar>
         <div>Khyzad</div>
         <div>Half-orc</div>                  
      </AppBar>
   );
}