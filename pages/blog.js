
import Layout from '../components/layout';
import  Blogs from '../components/blogs';


const contentful = require('contentful');


const SPACE_ID = 'eka71p7qj5up'
const ACCESS_TOKEN = '0vOG06sqf6rjakf9NBkTaOMDYOBoRO8dc2yCF2uMwSU'

const client = contentful.createClient({
 
  space: SPACE_ID,

  accessToken: ACCESS_TOKEN
})


const Blog = (props) => (

    <Layout>
        <div>
            
            <h1>
                Follow The Dev Story
            </h1>

            <Blogs posts = {props.blogPosts}/>

        </div>

    </Layout>
);


Blog.getInitialProps =  async function(){

    var posts = [];
    
   await client.getEntries({
        'content_type':  'blogPost'
    })
    .then((response) => ( 
        response.items.forEach(element => {
            
            posts.push(element);
          
        })
    ))
    
    
    

    return{
        blogPosts : posts
    }

    


}

export default Blog;