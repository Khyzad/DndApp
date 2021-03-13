import React, { CSSProperties, useState, ChangeEvent } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import { InventoryTab } from './InventoryTab';
import { ActionTab } from './ActionTab';

interface IProps {

}
const TabContainer: React.FC<IProps> = (props: IProps) => {
  const tabs: string[] = [
      'Inventory', 'Actions'//, 'Spells', 'Features', 'Background', 'Notes', 'Journal', 'Pets', 'Roll Statistics'
   ]

   const [currentTab, setCurrentTab] = useState(0);

   const handleChange = (event: ChangeEvent<{}>, selectedTab: number) => {
      setCurrentTab(selectedTab);
   }

   return (
      <section style={containerStyle}>
         <Tabs
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            onChange={handleChange}
            value={currentTab}
         >
            {
               tabs.map((tab: string, i: number) => (<Tab label={tab} value={i} key={i}>{tab}</Tab>))
            }
         </Tabs>
         <InventoryTab value={currentTab} index={0}></InventoryTab>
         <ActionTab value={currentTab} index={1}></ActionTab>
      </section>
   );
};

const containerStyle: CSSProperties = {
   width: '650px'
}

export default TabContainer;