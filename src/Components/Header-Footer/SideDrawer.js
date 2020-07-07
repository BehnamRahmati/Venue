import React from 'react'

import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"

export default function SideDrawer({ open, close }) {
  return (
    <Drawer anchor="right" open={open} onClose={close}>
      <List component="nav">
        <ListItem style={listItem} button onClick={() => console.log("hello")}> Events Starts In </ListItem>
        <ListItem style={listItem} button onClick={() => console.log("hello")}> Venue NFO </ListItem>
        <ListItem style={listItem} button onClick={() => console.log("hello")}> highlights </ListItem>
        <ListItem style={listItem} button onClick={() => console.log("hello")}> pricing</ListItem>
        <ListItem style={listItem} button onClick={() => console.log("hello")}> location</ListItem>
      </List>
    </Drawer>
  )
}

const listItem = {
  width: "15rem",
  padding: "0.5rem ",
  textTransform: "capitalize"
}