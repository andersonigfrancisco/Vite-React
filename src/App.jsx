import { Post } from './Post'

export function App() {

  return (
    <div>
      <Post 
        author="Anderson Francisco"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorem amet, maiores nihil quod veritatis doloribus sequi praesentium provident, eos quas dolorum, hic ratione voluptatibus? Ducimus, molestias? Aliquid, voluptatem inventore."
      />

      <Post 
        author="Francisco"
        content="Novo Post"
      />
    </div>
  )
}