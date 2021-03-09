import React, { CSSProperties, useState } from 'react';
import { IItem } from '../../types/IItem';
import { ITabProps } from './ITabProps';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import { IWealth } from '../../types/IWealth';
import Collapse from '@material-ui/core/Collapse';
import TextInput from '../TextInput';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core';

const rowStyle: CSSProperties = {
   display: 'flex',
   flexDirection: 'row',
   textAlign: 'center',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '100%',
}

const useStyles = makeStyles({
  table: {
    marginTop: '10px',
  }
});

interface IRowProps {
   item: IItem,
}
const InventoryRow: React.FC<IRowProps> = (props: IRowProps) => {
   const { name, description, quantity, rarity, tags } = props.item;
   const [open, setOpen] = useState(false);
   const classes = useStyles();

   const handleOpen = (event: any) => {
      console.log(open);
      setOpen(!open);
   }

   return (
      <>
         <TableRow onClick={handleOpen}>
            <TableCell><Button>X</Button></TableCell>
            <TableCell colSpan={3}>{name}</TableCell>
            <TableCell>{quantity}</TableCell>
            <TableCell colSpan={2}>{rarity}</TableCell>
            <TableCell colSpan={2}>{tags}</TableCell>
         </TableRow>
         <TableRow hidden={!open}>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
               <Collapse in={open} timeout="auto" unmountOnExit>
                  {description}
               </Collapse>
            </TableCell>
         </TableRow>
      </>
   );
}

interface IWeightProps {

}
const Weight: React.FC<IWeightProps> = (props: IWeightProps) => {
   return (
      <div>
         <div><span>Carrying Capacity</span></div>
         <div><span>Carrying Capacity</span></div>
      </div>
   );
}

interface IWealthProps {
   wealth: IWealth,
}
const Wealth: React.FC<IWealthProps> = (props: IWealthProps) => {
   const { copper, silver, gold, electrum, platinum } = props.wealth;

   const wealthStyle: CSSProperties = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
   }

   const currencyStyle: CSSProperties = {

   }

   return (
      <div className="wealth" style={wealthStyle}>
         <div style={wealthStyle}>
            <span>Copper</span>
            <TextInput text={`${copper}`} placeholder="0" length={3} width='24px' />
         </div>
         <div style={wealthStyle}>
            <span>Silver</span>
            <TextInput text={`${silver}`} placeholder="0" length={3} width='24px' />
         </div>
         <div style={wealthStyle}>
            <span>Gold</span>
            <TextInput text={`${gold}`} placeholder="0" length={3} width='24px' />
         </div>
         <div style={wealthStyle}>
            <span>Electrum</span>
            <TextInput text={`${electrum}`} placeholder="0" length={3} width='24px' />
         </div>
         <div style={wealthStyle}>
            <span>Platinum</span>
            <TextInput text={`${platinum}`} placeholder="0" length={3} width='24px' />
         </div>
      </div>
   );
}

const tableStyle: CSSProperties = {
   width: '100%'
}
export const InventoryTab: React.FC<ITabProps> = (props: ITabProps) => {
   const { value, index } = props;
   const items: IItem[] = [];

   const wealth: IWealth = {
      copper: 0,
      silver: 0,
      gold: 0,
      electrum: 0,
      platinum: 0,
   }
   const item1: IItem = {
      name: 'Rune Scimitar',
      quantity: 1,
      description: 'A scimitar made from a rare metal. Its vicious blade is powerful to cut through steel',
      actions: [],
      attuned: false,
      rarity: 'common',
      weight: 1,
      tags: ['weapon', 'metal'],
      cost: '20k'
   }

   items.push(item1);
   return (
      <div className="tab" hidden={value !== index}>

         <Wealth wealth={wealth} />
         <TableContainer style={tableStyle}>
            <Table>
               <TableHead style={tableStyle}>
                  <TableRow>
                     <TableCell >Delete</TableCell>
                     <TableCell colSpan={3}>Name</TableCell>
                     <TableCell >Qty</TableCell>
                     <TableCell colSpan={2} >Rarity</TableCell>
                     <TableCell colSpan={2} align="left">Tags</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {
                     items.map((item: IItem, i: number) => (
                        <InventoryRow item={item} key={i} />
                     ))
                  }
               </TableBody>
            </Table>
         </TableContainer>
      </div>
   );
}