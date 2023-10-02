function Editor(props) {
    return (
        <div className="card border-dark text-bg-light col-sm-10 offset-sm-1 col-lg-5 offset-lg-0" id="editor-card">
            <div className="card-header">
                Editor
            </div>
            <div className="card-body">
                <textarea name="editor" id="editor" type="text" value={props.markdown} onChange={props.onChange} style={{height: "100%", width: "100%", backgroundColor: 'black', color: 'white'}}></textarea>
            </div>
        </div>
    )
}

export default Editor;