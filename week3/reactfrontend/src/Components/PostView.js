import React, { Component } from 'react'

const dummy_prop = {
    title: '테스트용 타이틀입니다',
    content: '테스트용 글입니다.'
}

export default class PostView extends Component {
    render() {
        const {title, content, id} = this.props
        return (
            <div>
                <h3>{id}</h3>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        )
    }
}
