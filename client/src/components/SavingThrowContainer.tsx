import React from 'react';
import TextInput from './TextInput';
import {
  Checkbox,
  Typography,
  makeStyles,
  Card,
} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles({
  root: {
    marginRight: 0,
  },
});
interface IProps {

}

export const SavingThrowContainer: React.FC<IProps> = (props: IProps) => {
  const classes = useStyles();
  const attributeOrder = ['STR', 'INT', 'DEX', 'WIS', 'CON', 'CHA'];
  return (
    <>
      <Card id="saving-throw-container">
        {attributeOrder.map((attribute) => (
          <>
            <FormControlLabel
              classes={{
                root: classes.root,
              }}
              control={
                <Checkbox
                    value="checkedA"
                    inputProps={{ 'aria-label': 'Checkbox A' }}
                />
              }
              checked={false}
              key={attribute}
              label={attribute}
            />
            <TextInput text="" isNumber={true} length={2} />
          </>
        ))}
        <Typography
          id="saving-throw-label"
          align="center"
          variant="h6"
        >
          Saving Throws
        </Typography>
      </Card>
    </>
  );
};