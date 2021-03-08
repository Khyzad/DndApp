import React from 'react';
import TextInput from './TextInput';
import { Checkbox } from '@material-ui/core';

interface IProps {

}

export const SavingThrowContainer: React.FC<IProps> = (props: IProps) => {
   const attributeOrder = ['STR', 'INT', 'DEX', 'WIS', 'CON', 'CHA'];
   return (
      <>
         <div id="saving-throw-container">
            {attributeOrder.map((attribute) => (
               <div id="saving-throw" key={attribute}>
                  <Checkbox
                     value="checkedA"
                     inputProps={{ 'aria-label': 'Checkbox A' }}
                  />
                  <span className="center">{attribute}</span>
                  <span><TextInput text="" isNumber={true} length={2}></TextInput></span>
               </div>
            ))}
            <span id="saving-throw-label" className="center">Saving Throws</span>

         </div>
      </>
   );
};