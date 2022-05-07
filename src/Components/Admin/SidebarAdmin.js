import React from "react";
import {
  Drawer,
  ListItemIcon,
  List,
  ListItem,
  Typography,
  ListItemText,
  Tab,
} from "@mui/material";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AssignmentIcon from "@mui/icons-material/Assignment";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getusers } from "../../redux/actions/authAction";
import { GetAdoptAnimal } from '../../redux/actions/Adopt';
function SidebarAdmin({ el }) {
  const dispatch = useDispatch();
  const drawerWidth = 250;

  return (
    <div>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <div className="container">
          <div>
            {" "}
            <header>
              <Typography style={{ marginLeft: "30px" }} variant="h5">
                Dashboard
              </Typography>
            </header>
          </div>
          <div className="side-drawer">
            <List style={{ marginTop: "50px" }}>
            
                
        
              <ListItem>
                <AssessmentIcon
                  sx={{ fontSize: 30 }}
                  color="primary"
                ></AssessmentIcon>
             
              </ListItem>
              <ListItem>
                <SupervisedUserCircleIcon
                  sx={{ fontSize: 30 }}
                  color="primary"
                ></SupervisedUserCircleIcon>
                <Link to="/users">
                  <Button
                    variant="outlined"
                    onClick={() => dispatch(getusers())}
                    style={{
                      color: "gray",
                      fontSize: "18px",
                      marginLeft: "8px",
                    }}
                  >
                    Users
                  </Button>
                </Link>
                {/*<ListItemText primary={item.text} />*/}
              </ListItem>

              <ListItem>
                <SupervisedUserCircleIcon
                  sx={{ fontSize: 30 }}
                  color="primary"
                ></SupervisedUserCircleIcon>
                <Link to="/Adopt">
                  <Button
                    variant="outlined"
                    onClick={() => dispatch(GetAdoptAnimal())}
                    style={{
                      color: "gray",
                      fontSize: "18px",
                      marginLeft: "8px",
                    }}
                  >
                    Adopt
                  </Button>
                </Link>
                {/*<ListItemText primary={item.text} />*/}
              </ListItem>

            </List>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default SidebarAdmin;