import React, { useState } from 'react';
import './App.css';
import initialState, { IInitialStateViewModel } from './initial-data'
import Column from './Components/column'
import { DragDropContext, DropResult, ResponderProvided} from 'react-beautiful-dnd'

const App: React.FC = () => {
  const [initialData, setInitialData] = useState<IInitialStateViewModel>(initialState) 

  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
   const { destination, source, draggableId } = result
   if (!destination) {
     return
   }
   if (destination.droppableId === source.droppableId && destination.index === source.index) {
     return
   } 

   const start = initialData.columns[source.droppableId]
   const finish = initialData.columns[destination.droppableId]

   if (start === finish) {
     const newTaskIds = Array.from(start.taskIds)
     newTaskIds.splice(source.index, 1)
     newTaskIds.splice(destination.index, 0,draggableId)
  
     const newColumn = {
       ...start,
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
     return
   }

   //Moving from one list to another
   const startTaskIds = Array.from(start.taskIds)
   startTaskIds.splice(source.index, 1)

   const newStart = {
     ...start,
     taskIds: startTaskIds
   }

   const finishTaskIds = Array.from(finish.taskIds)

   finishTaskIds.splice(destination.index, 0, draggableId)

   const newFinish = {
     ...finish,
     taskIds: finishTaskIds
   }


   const newState = {
     ...initialData,
    columns: {
      ...initialData.columns,
      [newStart.id]: newStart,
      [newFinish.id]: newFinish
    }
   }
   setInitialData(newState)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="parent-container">
      {
        initialData.columnOrder.map(columnId => {
          const column = initialData.columns[columnId]
          const tasks = column.taskIds.map(taskId => initialData.tasks[taskId])
          return <Column key={column.id} column={column} tasks={tasks} initialData={initialData} setInitialData={setInitialData} />
        })
      }
      </div>
    </DragDropContext>
   
  );
}

export default App;
