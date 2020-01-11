import React from "react"
import { Draggable, DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd"
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import CompanyMultiSearchAdapter from './TEMP_multiSuggest'

type IProps = {
   task: ITasks,
   index: number
}

type ITasks = {
    id: string;
    content: string;
}

const Task = ({task, index}: IProps) => {

    const handleChange = (arr: string[]) => {
        console.log(arr)
    }

    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                <div 
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className={`task-container ${snapshot.isDragging ? 'lightGreen-color': 'white-color'}`}

                >
                    Task: {task.content}
                    <div style={{height: '150px'}}>
                        <CompanyMultiSearchAdapter 
                            handleChangeSelect={handleChange}
                            label="Positions"
                        />
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default Task