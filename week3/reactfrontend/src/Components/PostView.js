import React, { Component } from 'react'

const dummy_prop = {
    title: '테스트용 타이틀입니다',
    content: '테스트용 글입니다.'
}

function PostView(props) {
    
        const {title, content, id} = props
        return (
            <div>
                <h3>{id}</h3>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        )
    
}

export default PostView;