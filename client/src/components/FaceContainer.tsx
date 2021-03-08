import React from 'react';
import DataBox from './DataBox';
import { SavingThrowContainer } from './SavingThrowContainer';
import TextInput from './TextInput';

interface IProps {

}

const FaceContainer: React.FC<IProps> = (props: IProps) => {
   return (
      <section id="face-container">
         <div id="portrait">
         </div>

         <div id="hud-container">
            {/* <div id="name-container">
               <TextInput text="" placeholder="Character name..." length={35} className="left"></TextInput>
               <div>
                  <TextInput text="" placeholder="Sub race..." length={10} className="left"></TextInput>
                  <TextInput text="" placeholder="Race..." length={10} className="left"></TextInput>
               </div>
               <div>
                  { <TextInput text="" placeholder="Class..." length={11} className="left"></TextInput>
                  <TextInput text="" placeholder="Level..." length={2} className="left"></TextInput> }
               </div>
            </div> */}
            <div id="data-container">
               <div id="passive-container">
                  <DataBox text="PROF" />
                  <DataBox text="SPEED" />
                  <DataBox text="INIT" />
                  <DataBox text="AC" />
               </div>

               <SavingThrowContainer></SavingThrowContainer>

            </div>
         </div>
      </section>
   );
};

export default FaceContainer

/*
artificier
sorceror
wizard
barbarian
rogue
fighter
warlock
bard
druid

*/