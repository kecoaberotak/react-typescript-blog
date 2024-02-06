import blogData from '../../blog.json'
import Card from './Card';

type Blog = {
  id: number,
  title: string,
  cover: string,
  author: string
}

const Blog = () => {
  return (
    <div className="container">
      <div className='blog'>
        {blogData.map((blog: Blog) => 
          <Card key={blog.id} image={blog.cover} title={blog.title} author={blog.author}/>
        )}
      </div>
    </div>
  )
};

export default Blog;