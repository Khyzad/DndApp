import React from 'react';
import TextInput from './TextInput';

interface IProps {
   text: string,
   value?: number,
}

const DataBox: React.FC<IProps> = (props: IProps) => {
   const value: number = props.value ?? 0;
   return(
      <div className="attribute-box">
         <TextInput text="" length={2} isNumber={true}></TextInput>
         <span>{props.text}</span>
      </div>
   );
};

export default DataBox;