import React from 'react';
import TextInput from './TextInput';
import { Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
interface IProps {

}

export const SavingThrowContainer: React.FC<IProps> = (props: IProps) => {
   const attributeOrder = ['STR', 'INT', 'DEX', 'WIS', 'CON', 'CHA'];
   return (
      <>
         <div id="saving-throw-container">
            {attributeOrder.map((attribute) => (
               <div id="saving-throw" key={attribute}>
                 <FormControlLabel
                    control={
                      <Checkbox
                         value="checkedA"
                         inputProps={{ 'aria-label': 'Checkbox A' }}
                      />
                    }
                    label={attribute}
                  />
                  <TextInput text="" isNumber={true} length={2} />
               </div>
            ))}
            <span id="saving-throw-label" className="center">Saving Throws</span>
         </div>
      </>
   );
};