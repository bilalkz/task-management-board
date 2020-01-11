import React from "react"
import Task from "./task"
import { Droppable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd'
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

const Column = ({column, tasks}: IProps) => {

    return (
        <div className="container">
            <h3 className="title">{column.title}</h3>
            <Droppable droppableId={column.id}>
               {
                (provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (

                    <div 
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`take-list ${snapshot.isDraggingOver ? 'skyBlue-color' : 'white-color'}`}
                    >
                        {tasks.map((task, i) => <Task key={task.id} task={task} index={i}/>)}
                        {provided.placeholder}
                    </div>
                )
               }

            </Droppable>
        </div>
    )
}

export default Column