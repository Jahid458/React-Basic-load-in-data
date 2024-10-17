import './post.css'
export default function Post({post}){
  const { title, body, id, userId  } = post; 
  return(
    <div className='post'>
       <h5>Post Title: {title} </h5>
       <p><small>user Id: {userId} </small></p>
       <p><small>post Id:{id} </small></p>
       <p>{body}</p>
    </div>
  )
}