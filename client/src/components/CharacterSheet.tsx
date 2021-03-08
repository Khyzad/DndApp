import React from 'react';
import AttributeContainer from './AttributeContainer';
import FaceContainer from './FaceContainer';
import TabContainer from './Tabs/TabContainer';

interface IProps {

}
const CharacterSheet: React.FC<IProps> = (props: IProps) => {
   return (
      <section id="sheet">
         <FaceContainer />
         <hr />
         <div id="main-stage">
            <AttributeContainer />
            <TabContainer />
         </div>
      </section>
   );
}

export default CharacterSheet;