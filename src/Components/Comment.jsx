
import {format, formatDistanceToNow} from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

import { ThumbsUp, Trash } from "phosphor-react";

import { React, useState } from "react";

import styles from "./Comment.module.css";

// github.com\diego3g.png

export function Comment({author, content, publishedAt, likesNumber, onDeleteComment}) {
  const [likes, setLikes] = useState(Number(likesNumber));

  const increase = () => {
    setLikes((i) => i + 1);
  };

  // const deleteComment = (e) => {
  //   e.remove()
  // }

  function handleDeleteComment(){
    onDeleteComment(publishedAt)
  }

  const publishedAtRelative = formatDistanceToNow(publishedAt, {locale: ptBr, addSuffix: true})

  return (
    <div className={styles.comment}>
      <img src={author.avatarUrl} />
      {/* <img src="https://github.com/diego3g.png" /> */}
      <div className={styles.commentBody}>
        <div>
          <strong>{author.name}</strong>
          <small>{publishedAtRelative}</small>
          {
            content.map( e => {
              if(e.type === 'link') return <p><a href="">{e.content}</a></p>
              if(e.type === 'paragraph') return <p>{e.content}</p>
            })
          }
          <Trash size={20} className={styles.deletar} onClick={handleDeleteComment} />
        </div>
        <p onClick={() => increase()} className={styles.like}>
          <ThumbsUp size={20} />
          {"\u00A0"} Aplaudir • {likes}{" "}
        </p>
      </div>
    </div>
  );
}
