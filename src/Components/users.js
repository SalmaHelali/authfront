import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
function Users({user}) {
  return (
    <div> 
 <h2 style={{color:"#7aa7c7"}}>Users </h2>

<Card sx={{ minWidth: 275 }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       {user.email}
      </Typography>
    
      
      <Typography variant="body2">
      
        <br />
        
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small"> Delete user </Button>
    </CardActions>
  </Card> 
    </div>
  )
}

export default Users