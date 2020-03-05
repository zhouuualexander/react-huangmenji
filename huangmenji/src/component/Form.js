import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import "../Cal.css"
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      
    },
    
  },
  
}));

export default function ComposedTextField(props) {
  const classes = useStyles();

  return (
      <div >
          <p1 className="鸡腿">请输入🍗的克数</p1>
          <div>
              <br/>
              <br/>
          </div>
          <div>
    <TextField id="standard-uncontrolled" label="鸡腿" defaultValue="" value={props.value} onChange={(e)=>{props.onChange(e.target.value)}}/>
    
    </div>
    
    </div>
  );
}
