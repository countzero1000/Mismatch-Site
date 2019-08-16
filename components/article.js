import {documentToHtmlString} from '@contentful/rich-text-html-renderer';
import renderHTML from 'react-render-html';
class Article extends React.Component {


    render(){
        return(
        
        <div class= "card border-primary mb-3" >
            <div class = "card-header">{this.props.title}</div>

            <div class = "card-body"> 
            {renderHTML(
                documentToHtmlString(this.props.content))
            }       
            </div>

        </div>

        );
    }
}

export default Article;