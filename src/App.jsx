import { Header } from './Components/Header';
import { Post } from './Components/Post'
import { Sidebar } from './Components/Sidebar';
import styles from './App.module.css';

import './global.css';



const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/andersonigfrancisco.png',
      name: 'Anderson Francisco',
      role: 'CEO @Ekanda-Code'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/derciosinione.png',
      name: 'Dercio Sinione',
      role: 'CEO @Kiari-Code'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];


export function App() {

  return (

    <div>

      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>

          {
            posts.map(post => {
              return (
                <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }

        </main>

      </div>

    </div>

  )
}