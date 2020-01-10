import React, { useState } from 'react';
import './App.css';
import initialState, { IInitialStateViewModel } from './initial-data'
import Column from './Components/Column'

const App: React.FC = () => {
  const [initialData, setInitialData] = useState<IInitialStateViewModel>(initialState) 
  return (
    <div>
      {
        initialData.columnOrder.map(columnId => {
          const column = initialData.columns[columnId]
          const tasks = column.taskIds.map(taskId => initialData.tasks[taskId])
          return <Column key={column.id} column={column} tasks={tasks} />
        })
      }
    </div>
   
  );
}

export default App;
