import React from 'react';
import { Attribute } from '../types/Attribute';
import ITrait, { Traits } from '../types/ITrait';
import AttributeBox from './AttributeBox';

interface IProps {

}
const AttributeContainer: React.FC<IProps> = (props: IProps) => {
   return (
      <section id="attribute-container">
         {Traits.map((trait: ITrait) => {
            return <AttributeBox text={trait.attributeType} value={0} modifier={0}></AttributeBox>
         })}
      </section>
   );
};

export default AttributeContainer;