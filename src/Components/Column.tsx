import React, { useState } from "react"
import Task from "./task"
import { Droppable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd'
import initialState, { IInitialStateViewModel } from "../initial-data"
type IProps = {
    column: {
        id: string;
        title: string;
        taskIds: string[];
    },
    tasks: ITasks[],
    initialData: IInitialStateViewModel,
    setInitialData: React.Dispatch<React.SetStateAction<IInitialStateViewModel>>
}

type ITasks = {
    id: string;
    content: string;
}




const Column = ({column, tasks, initialData, setInitialData}: IProps) => {
    const [inputValue, setInputValue] = useState<string>('') 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    console.log(initialData)
    const findNum = (str: string) => {
        return Number(str.slice(str.lastIndexOf('-')+1, str.length))
    }

    const findBiggestNum = (tasksIds: string[]) => {
        const taskIdsNum = tasksIds.map(e => findNum(e))
        const sortedArry = taskIdsNum.sort((a , b) =>  a - b )
        if (sortedArry.length > 0) {
            const biggestNum = sortedArry[sortedArry.length - 1]
            return `task-${biggestNum + 1}`;
        } else {
            return 'task-1'            
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const newTasksIds = Array.from(column.taskIds)
            newTasksIds.unshift(findBiggestNum(Object.keys(initialData.tasks)))
            const updateColumn = {
                ...column,
                taskIds: newTasksIds
            }
            const newTasks = {
                ...initialData,
                columns: {  
                    ...initialData.columns,
                    [column.id]: updateColumn
                },
                tasks : {
                    ...initialData.tasks,
                    [findBiggestNum(Object.keys(initialData.tasks))]: {id: findBiggestNum(Object.keys(initialData.tasks)), content: inputValue}
                }
            }
            setInitialData(newTasks)
            setInputValue('')
        }
    }

    return (
        <div className="container">
            <div style={{ margin:'8px'}}>
                <input 
                    onChange={handleChange}
                    style={{padding: '8px', width: '95%'}}
                    placeholder="Create Task"
                    onKeyDown={handleKeyDown}
                />
            </div>
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