import { Header } from './Components/Header';
import { Post } from './Post'
import { Sidebar } from './Components/Sidebar';


import styles from './App.module.css';

import './global.css';


export function App() {

  return (

    <div>

      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>

          <Post
            author="Anderson Francisco"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorem amet, maiores nihil quod veritatis doloribus sequi praesentium provident, eos quas dolorum, hic ratione voluptatibus? Ducimus, molestias? Aliquid, voluptatem inventore."
          />

          <Post
            author="Francisco"
            content="Novo Post"
          />

        </main>

      </div>


    </div>

  )
}