import {documentToHtmlString} from '@contentful/rich-text-html-renderer';
import renderHTML from 'react-render-html';
class Article extends React.Component {


    render(){
        return(
        
        <div>
            <a>{this.props.title}</a>
            <div> 
            {renderHTML(
                documentToHtmlString(this.props.content))
            }
                
            </div>
        </div>

        );
    }
}

export default Article;