import Article from './article'


class Blogs extends React.Component {

    renderArticle(post){

        console.log(post.fields.title,"here");
        return (<Article content = {post.fields.content}
                         title = {post.fields.title}/>
                         );
    }


    render(){
        return(
        <ul>
            {this.props.posts.map(key =>(
                <li>{this.renderArticle(key)}</li>
            ))}
        </ul>
        );
    }
    



}

export default Blogs ;