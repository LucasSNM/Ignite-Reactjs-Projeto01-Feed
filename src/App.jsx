import { useState } from 'react'

import styles from './Components/App.module.css'

import './global.css'

import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'
import { Post } from './Components/Post'


const posts = [
  {
    id:1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO Rocketseat'
    },
    content: [
      { type:'paragraph',content:'Fala galera ✌'},
      { type:'paragraph',content:'Acabei de subir um novo projeto no meu portifolio.'},
      { type:'link',content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-03-05 20:00:00'),
  },
  {
    id:2,
    author: {
      avatarUrl: 'https://github.com/LucasSNM.png',
      name: 'Lucas Moreira',
      role: 'Software Developer'
    },
    content : [
      { type:'paragraph',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, magnam ratione ab, quod officiis recusandae laudantium cupiditate inventore porro nesciunt enim praesentium, quia maiores modi! Numquam earum doloremque tempore eum?'}
    ],
    publishedAt: new Date('2023-05-03 20:00:00'),
  },
  {
    id:3,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educador'
    },
    content: [
      { type:'paragraph',content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, magnam ratione ab, quod officiis recusandae laudantium cupiditate inventore porro nesciunt enim praesentium, quia maiores modi! Numquam earum doloremque tempore eum?'},
    ],
    publishedAt: new Date('2023-03-05 20:00:00'),
  }
] 

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar 
          profile="Lcs"
          prof="Developer"
        />
        <main>
          {posts.map(post => {
            return <Post 
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                    />
          })}

        </main>
      </div>
    </div>
  )
}

export default App
