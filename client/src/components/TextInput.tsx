import React, { ChangeEvent, CSSProperties, useState } from 'react';
import { TextField } from '@material-ui/core';

interface IProps {
   text: string,
   length?: number,
   isNumber?: boolean,
   center?: boolean,
   placeholder?: string,
   className?: string,
   height?: string,
   width?: string,
   fontSize?: string,
}

const TextInput: React.FC<IProps> = (props: IProps) => {
   const className: string = props.className ?? 'center';
   const placeholder: string = props.placeholder ?? '';
   const length: number = props.length ?? 2;
   const height: string = props.height ?? '10px';
   const width: string = props.width ?? '16px';
   const fontSize: string = props.fontSize ?? '14px';
   const [text, setText] = useState<string>(props.text);

   const updateText = (event: ChangeEvent<HTMLInputElement>) => {
      let { value } = event.target;


      if (props.isNumber) {
         if (value.match(/^\d*$/)) {
            setText(value);
         }
      } else {
         setText(value);
      }

   };

   return (      
      <TextField
         //label={placeholder}
         variant="outlined"         
         className={`${className}`}
         onChange={updateText}
         placeholder={placeholder}
         value={text}
         size="small"
         inputProps={{
            maxLength: length,
            size: length,    
            className: `${className}`,
            style: {
               fontSize: `${fontSize}`,
               height: `${height}`,
               width: `${width}`,
            }            
         }}      
      />      
   );
};

const containerStyle: CSSProperties = {

}

export default TextInput;