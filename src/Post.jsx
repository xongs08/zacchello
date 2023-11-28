import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const Post = () => {
    const [markdown, setMarkdown] = useState(null);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/xongs08/zacchello.dev.markdown/main/readme_.md')
            .then(resp => resp.text())
            .then(data => {
                setMarkdown(data);
            })
            .catch(err => console.error(`Error: ${err}`));
    }, []);

    return (
        <div id="markdown">
            {markdown && <ReactMarkdown children={markdown} />}
        </div>
    );
};

export default Post;
