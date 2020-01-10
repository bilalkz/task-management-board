import React from "react"

type IProps = {
    column: {
        id: string;
        title: string;
        taskIds: string[];
    },
    tasks: ITasks[]
}

type ITasks = {
    id: string;
    content: string;
}

const Column = ({column}: IProps) => {

    return (
        <div className="container">
            <h3 className="title">{column.title}</h3>
            <div className="take-list">Tasks go here</div>
        </div>
    )
}

export default Column