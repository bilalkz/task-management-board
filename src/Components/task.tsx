import React from "react"
import { Draggable, DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd"

type IProps = {
   task: ITasks,
   index: number
}

type ITasks = {
    id: string;
    content: string;
}

const Task = ({task, index}: IProps) => {
    console.log(index);
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                <div 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className={`task-container ${snapshot.isDragging ? 'lightGreen-color': 'white-color'}`}

                >
                    {task.content}
                </div>
            )}
        </Draggable>
    )
}

export default Task