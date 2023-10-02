import Markdown from 'marked-react';

function Previewer(props) {
    return (
        <div className="card border-dark text-bg-light col-sm-12 col-lg-7" id="preview-card"> 
          <div className="card-header">
            Previewer
          </div>
          <div className="card-body">
            <Markdown id="preview">{props.markdown}</Markdown>
          </div>
        </div>
    )
}

export default Previewer