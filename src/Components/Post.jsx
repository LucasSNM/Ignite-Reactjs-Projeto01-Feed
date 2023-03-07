
import {format, formatDistanceToNow} from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

import styles from "./Post.module.css";

import { React, useRef, useState } from "react";

import { Comment } from './Comment'

const commentsArray = [
  {
    id:1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO Rocketseat'
    },
    content: [
      { type:'paragraph',content:'Fala galera ✌'},
    ],
    publishedAt: new Date('2023-03-05 20:00:00'),
    likesNumber: 2
  },
  {
    id:2,
    author: {
      avatarUrl: 'https://github.com/LucasSNM.png',
      name: 'Lucas Moreira',
      role: 'Software Developer'
    },
    content : [
      { type:'paragraph',content:'Adorei o post!!'}
    ],
    publishedAt: new Date('2023-05-03 20:00:00'),
    likesNumber: 0
  }
] 

export function Post({author, publishedAt, content}) {
  
  const publishedAtFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBr})
  const publishedAtRelative = formatDistanceToNow(publishedAt, {locale: ptBr, addSuffix: true})

  const [comments, setComments] = useState(commentsArray);
  const [newCommentText, setnewCommentText] = useState('');


  function handleCreateNewComment() {

    // if (newCommentText.length > 0){
      // let array = commentsArray.push()
      setComments([...comments, {
        id:comments.length + 1,
        author: {
          avatarUrl: 'https://github.com/maykbrito.png',
          name: 'Mayk Brito',
          role: 'Educador'
        },
        content : [
          { type: 'paragraph',content: newCommentText}
        ],
        publishedAt: new Date(),
        likesNumber: 0
      }])

    // }
    setnewCommentText('')
  }

  function handleNewCommentChange() {
    setnewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete) {
    console.log(commentToDelete)

    const commentsWithourDeletedOne = comments.filter(e => {
      return e.publishedAt !== commentToDelete
    })

    setComments(commentsWithourDeletedOne)
  }
    
  return (
    <div className={styles.post}>
      <header>
        <div className={styles.description}>
            <img src={author.avatarUrl} className={styles.avatar}/>
            <div>
                <h4>{author.name}</h4>
                <p>{author.role}</p>
            </div>
        </div>
        <time className={styles.publish} title={publishedAtFormatted}>
          {publishedAtRelative}
        </time>
      </header>
      <div>
        {
          content.map( e => {
            if(e.type === 'link') return <p><a href="">{e.content}</a></p>
            if(e.type === 'paragraph') return <p>{e.content}</p>
          })
        }
      </div>
      <footer>
        <strong>Deixe seu feedback!</strong>
        <textarea 
          name='commentTyped' 
          onChange={handleNewCommentChange} 
          value={newCommentText}
          required
        />
        <button onClick={handleCreateNewComment} disabled={newCommentText.length===0}>
          Comentar
        </button>
      </footer>

      <div>
        {
          comments.map( e => {
            return <Comment 
              author={e.author}
              content={e.content}
              publishedAt={e.publishedAt}
              likesNumber={e.likesNumber}
              onDeleteComment={deleteComment}
            />
          })
        }

      </div>
    </div>
  );

}
