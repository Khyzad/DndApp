import React from 'react';
import {ITabProps} from './ITabProps';

export const ActionTab: React.FC<ITabProps> = (props: ITabProps) => {
   const {value, index} = props;

   return(
      <div hidden={value !== index}>
         Action
      </div>
   );
}