const initialData: IInitialStateViewModel = {
    tasks: {
        'task-1': { id: 'task-1', content: 'take out the garbage'},
        'task-2': { id: 'task-2', content: 'Watch out my favorite show'},
        'task-3': { id: 'task-3', content: 'Charge my phone'},
        'task-4': { id: 'task-4', content: 'Cook dinner'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
        'column-2': {
            id: 'column-2',
            title: 'In progress',
            taskIds: [],
        },
        'column-3': {
            id: 'column-3',
            title: 'Done',
            taskIds: [],
        },
    },

    // Facilitate reordering of the columns
    columnOrder: ['column-1', 'column-2', 'column-3']
}

export interface IInitialStateViewModel {
    tasks: ITask,
    columns: IColumn,
    columnOrder: IColumnOrder
}

export type ITask = {
    [key: string]: {id :string, content: string}
}

export type IColumn = {
    [key: string]: {id: string, title: string, taskIds: string[]}
}

type IColumnOrder= string[]



export default initialData;
