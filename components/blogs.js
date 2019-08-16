import Article from './article'


class Blogs extends React.Component {

    renderArticle(post){

        
        return (<Article content = {post.fields.content}
                         title = {post.fields.title}/>
                         );
    }


    render(){
        return(
        <div>
            {this.props.posts.map(key =>(
                <div>{this.renderArticle(key)}</div>
            ))}
        </div>
        );
    }
    



}

export default Blogs ;