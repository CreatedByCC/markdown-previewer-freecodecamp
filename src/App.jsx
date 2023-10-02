import React,{ useState } from 'react';

import { DEFAULT_MARKDOWN } from './assets/constants';
import Editor from './Editor';
import Previewer from './Previewer';

import './App.css';

function App() {
  const [markdown, setMarkdown] = useState(DEFAULT_MARKDOWN);

  function handleChange(e) {
    setMarkdown(e.target.value);
  }

  return (
    <div className='container'>
      <h1 id='title' className='text-center'>Welcome to my React Markdown Previewer!</h1>
      <div className='row'>
        <Editor markdown={markdown} onChange={handleChange}/>
        <Previewer markdown={markdown}/>
      </div>
    </div>
  )
}

export default App;
