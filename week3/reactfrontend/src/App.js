import React, { useState,useEffect } from 'react';
import api from './api';
import './App.css';
import PostView from './Components/PostView'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default () =>  {
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
   const _results = await api.getAllPosts()
   console.log(_results)
   setResult(_results.data)
  }

  const handlingSubmit = async (event) => {
    event.preventDefault()
    let result = await api.createPost({title:title, content:content})
    setTitle('')
    setContent('')
    getPosts()
  }

  const handlingDelete = async (id) => {
    await api.deletePost(id)
    getPosts()
  }

    return (
      <div className="App">
        <Container maxWidth="lg">
        <div className="PostingSection">
        <Paper className="PostingPaper">
          <h2>대나무 숲 글 작성하기</h2>
          <form className="PostingForm" onSubmit={handlingSubmit}>
           <TextField
          id="outlined-textarea"
          label="Title"
          name="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value)
          }}
          variant="outlined"
        />
          <TextField
          id="outlined-multiline-static"
          label="Content"
          multiline
          rows={4}
          name = "content"
          variant="outlined"
          value={content}
          onChange={(event) => {
            setContent(event.target.value)
          }}
        />
        <Button type="submit" variant="outlined">제출하기</Button>
          </form>
          </Paper>
        </div>
        <div className="ViewSection">
          {
            result.map((post)=>
            <Card className="card" variant="outlined">
            <CardContent>
              <Typography className="card-title" color="textSecondary" gutterBottom>
              <PostView key={post.id} id={post.id} title={post.title} content={post.content} />
              </Typography>
              <Typography variant="h5" component="h2">
              </Typography>
            </CardContent>
            <CardActions>
              <Button color="secondary" value={post.id} onClick={ (e) => {handlingDelete(post.id)} } size="small">삭제하기</Button>
            </CardActions>
          </Card>
            )
          }
          
  
        </div>
        </Container>
      </div>
    );
  }
