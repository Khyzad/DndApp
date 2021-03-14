import React from 'react';
import { Attribute } from '../types/Attribute';
import ITrait, { Traits } from '../types/ITrait';
import AttributeBox from './AttributeBox';
import Card from '@material-ui/core/Card';

interface IProps {

}

const AttributeContainer: React.FC<IProps> = (props: IProps) => {
   return (
      <Card id="attribute-container">
         {Traits.map((trait: ITrait) => (
            <AttributeBox
              key={trait.name}
              text={trait.attributeType}
              value={0}
              modifier={0}
            />
         ))}
      </Card>
   );
};

export default AttributeContainer;