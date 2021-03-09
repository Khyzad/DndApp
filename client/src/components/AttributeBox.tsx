import React from 'react';
import TextInput from './TextInput';

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
         <span>{props.text}</span>
         <TextInput text="" length={2} isNumber={true} placeholder={props.text} className="center"></TextInput>
         <div className="modifier">{props.modifier}</div>
      </div>
   );
};

export default AttributeBox;