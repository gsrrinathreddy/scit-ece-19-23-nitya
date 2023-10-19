import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar> 
          <Avatar alt="Sree Chaitanya" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVLq3bWGKgwuPOhgXP1I6F7v8-W4Ts3PAeZFmAVXBXlQ&s" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya Institutes of Technological Sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                60% CGPA
              </Typography>
              {" — BTech(ECE)"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Sri Gayatri" src="https://scontent.fhyd5-1.fna.fbcdn.net/v/t39.30808-6/327447358_1801403226899977_2096168360173936731_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jRY6egDuOXsAX9YAII_&_nc_ht=scontent.fhyd5-1.fna&oh=00_AfBVtHh7HfhsdaqOTwT7KYyMbg049ltdz3lYy5IE5Ebibg&oe=6424AC84" />
        </ListItemAvatar>
        <ListItemText
          primary="Sri Gayatri Junior College"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                72% CGPA
              </Typography>
              {" — MPC"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Scholars" src="https://scontent.fhyd5-1.fna.fbcdn.net/v/t39.30808-6/292143773_550909500068303_563307185802771192_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=Sdfll6SCSPEAX-yP1tN&_nc_ht=scontent.fhyd5-1.fna&oh=00_AfAUU5ksZuH81nUKbSWjjlPFPY98DwboIeQMQoKUN5CuzA&oe=6424B4DE" />
        </ListItemAvatar>
        <ListItemText
          primary="Scholars English Medium High School"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                90% CGPA
              </Typography>
              {' — Higher Secondory Education '}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
