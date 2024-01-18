import { DeleteOutlined } from '@mui/icons-material';
import {  Avatar, Card, CardContent, CardHeader, Container, IconButton, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import { yellow, green, pink, blue } from '@mui/material/colors';



export default function NoteCard({ note, handleDelete }) {

  const useStyles = {
    avatar: {
      backgroundColor: () => {
        if (note.category == 'work') {
          return yellow[700]
        }
        if (note.category == 'money') {
          return green[500]
        }
        if (note.category == 'todos') {
          return pink[500]
        }
        return blue[500]
      }},
    };

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar sx = {useStyles.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>}
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            { note.details }
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}