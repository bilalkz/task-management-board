const initialData: IInitialStateViewModel = {
    tasks: {
        'task-1': { id: 'task-1', content: 'take out the garbage'},
        'task-2': { id: 'task-2', content: 'Watch out my favorite show'},
        'task-3': { id: 'task-3', content: 'Charge my phone'},
        'task-4': { id: 'task-4', content: 'Cook dinner'},
    },
    users: {
        'user-1': { id: 'user-1', name: 'john doe'},
    },
    positions: {
        {id: '1', name: "Administratore"},
        {id: '2', name: "Advising Partner"},
        {id: '3', name: "Analyst"},
        {id: '4', name: "Analyst Private Equity Fund Of Funds"},
        {id: '5', name: "Analyste financier"},
        {id: '6', name: "analyste senior"},
        {id: '7', name: "Assistant"},
        {id: '8', name: "Associate"},
        {id: '9', name: "Associé"},
        {id: '10', name: "Associé Gérant"},
        {id: '11', name: "Associée"},
        {id: '12', name: "Attorney"},
        {id: '13', name: "Avocar à la Cour"},
        {id: '14', name: "Avocat à la cour"},
        {id: '15', name: "Avocat associé"}
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
    users: IUser,
    columns: IColumn,
    columnOrder: IColumnOrder,
    positions: IPosition
}

export type ITask = {
    [key: string]: {id :string, content: string}
}

export type IUser = {
    [key: string]: {id :string, name: string}
}

export type IPosition = {
    [key: string]: {id :string, name: string}
}

export type IColumn = {
    [key: string]: {id: string, title: string, taskIds: string[]}
}

type IColumnOrder= string[]



export default initialData;
