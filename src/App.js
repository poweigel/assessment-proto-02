import './App.css';
import Column from './Column';
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd'
import initialData from './initialData';
import { useState } from 'react'

function App() {
    const state1 = initialData;      // Initial state of the data.
    const [state, setState] = useState({initialData});    // Maybe this works?
    // Pull the column out of state.
    const columnId = 'column-1';
    const column = state.initialData.columns[columnId];
    // Get tasks associated with that column.
    const taskIds = column.taskIds;
    const tasks = taskIds.map(taskId => state.initialData.tasks[taskId]);

    // // Function to reorder list based on user drag-and-drop positioning.
    // const reorder = (list, startIndex, endIndex) => {
    //   const result = Array.from(list);
    //   const [removed] = result.splice(startIndex, 1);
    //   result.splice(endIndex, 0, removed);
    
    //   return result;
    // };

    // console.log(tasks);  // My 'tasks' is their 'list'.

    const onDragEnd = result => {
        const { destination, source, draggableId } = result;

        // If there is no destination, do nothing.
        if (!result.destination) {
          return;
        }

        // If the draggable ends in the same place that it started, do nothing.
        if (
          result.destination.droppableId === result.source.droppableId &&
          result.destination.index === result.source.index
        ) {
          return;
        }

        const column2 = state.initialData.columns.[source.droppableId];
        const newTaskIds = column2.taskIds;
        newTaskIds.splice(source.index, 1); // From this index we want to remove one item.
        newTaskIds.splice(destination.index, 0, draggableId); // Remove nothing and insert draggableId (which is the taskId).

        const newColumn = {
          ...column2,
          taskIds: newTaskIds,
        };

        const newState = {
          ...state,
          columns: {
            ...state.columns2,
            [newColumn.id]: newColumn,
          },
        };

        setState(newState);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                {/* <Column key={column.id} column={column} tasks={tasks} type="TASK" /> */}
                <Column droppableId={column.title} column={column} tasks={tasks} type="TASK" />
            </div>
        </DragDropContext>
    );
}

export default App;
