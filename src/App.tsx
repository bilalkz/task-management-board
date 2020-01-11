import React, { useState } from 'react';
import './App.css';
import initialState, { IInitialStateViewModel } from './initial-data'
import Column from './Components/column'
import { DragDropContext, DropResult, ResponderProvided} from 'react-beautiful-dnd'

const App: React.FC = () => {
  const [initialData, setInitialData] = useState<IInitialStateViewModel>(initialState) 

  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
   const { destination, source, draggableId } = result
   console.log(destination)
   console.log(source)
   console.log(draggableId)
   if (!destination) {
     return
   }
   if (destination.droppableId === source.droppableId && destination.index === source.index) {
     return
   } 

   const column = initialData.columns[source.droppableId]
   console.log(column)
   const newTaskIds = Array.from(column.taskIds)
   console.log(newTaskIds)
   newTaskIds.splice(source.index, 1)
   console.log(newTaskIds)
   newTaskIds.splice(destination.index, 0,draggableId)
   console.log(newTaskIds)

   const newColumn = {
     ...column,
     taskIds: newTaskIds
   }

   const newState = {
     ...initialData,
     columns: {
       ...initialData.columns,
       [newColumn.id]: newColumn
     }
   }
   setInitialData(newState)

  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {
        initialData.columnOrder.map(columnId => {
          const column = initialData.columns[columnId]
          const tasks = column.taskIds.map(taskId => initialData.tasks[taskId])
          return <Column key={column.id} column={column} tasks={tasks} />
        })
      }
    </DragDropContext>
   
  );
}

export default App;
