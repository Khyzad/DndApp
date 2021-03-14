import React from 'react';
import TextInput from './TextInput';
import { Paper } from '@material-ui/core';
interface IProps {
   text: string,
   value: number,
   modifier: number,
}

const AttributeBox: React.FC<IProps> = (props: IProps) => {
   const calculateModifier = () => {

   }
   return(
      <div className="attribute-box">
         <span className="attribute-name">{props.text}</span>
         <TextInput text="" length={2} isNumber={true} placeholder={props.text} className="textbox center"></TextInput>
         <Paper className="modifier">{props.modifier}</Paper>
      </div>
   );
};

export default AttributeBox;