import React from 'react';
import AttributeContainer from './AttributeContainer';
import FaceContainer from './FaceContainer';
import TabContainer from './Tabs/TabContainer';
import { Paper } from '@material-ui/core';



interface IProps {

}
const CharacterSheet: React.FC<IProps> = (props: IProps) => {
  return (
    <Paper id="sheet">
      <FaceContainer />
      <AttributeContainer />
      <hr />
      <div id="main-stage">
        <TabContainer />
      </div>
    </Paper>
  );
}

export default CharacterSheet;