import './App.css';
import Column from './Column';
import '@atlaskit/css-reset';
import { DragDropContext } from 'react-beautiful-dnd'
import { useState, onClick } from 'react'
import WIP_MultiChoice from './components/WIP_MultiChoice';

function App() {
  // Create question number counter.
  const [count, setCount] = useState(0);
  const [wasClicked, setClicked] = useState(false);
  const numDNDQuestions = 3;  // Number of drag-and-drop questions.
  const numRadioQuestions = 3; // Number of radio button questions.
  const numTotalQuestions = numDNDQuestions + numRadioQuestions;  // Total number of questions.
  const [wipAnswers, setAnswers] = useState([]);    // Store drag-and-drop answers.
  const [ rbAnswers, setRBAnswers ] = useState([]); // Store radio button answers.

  // Reorder function.
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  // Check if the questions are still drag-and-drop.
  const [isDND, setDND] = useState(true);

  // Check if the questions are done.
  const [isDone, setDone] = useState(false);

  // Create title for the column.
  const title = 'Drag and drop to rank options.';

  // Initialize order.
  const [order, setOrder] = useState([0, 1, 2, 3, 4]);

  // Set dnd state after each element is dragged and dropped.
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

      // Reorder 'order' to match the new drag-and-drop position for this question and set the state.
      const newOrder = reorder(order, result.source.index, result.destination.index);
      setOrder(newOrder);
  };

  // Monitor changes in the radio button questions.
  const [ radioValue, setValue ] = useState('Yes');

  const handleChange = event => {
    setValue(event.target.value); // Change 'radioValue' based on which radio option is selected.
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    setClicked(true);
  }

  // If count = numDNDQuestions - 1, set isDND to false.
  if (count < numDNDQuestions && wasClicked === true) {
    // Save 'order' for this question so we know what the answers were.
    // Has to be check against the 'options' array. For example, an indexed array
    // in wipAnswers may read [1, 3, 0, 2, 4]. This means the 0th element of
    // 'options' at this particular index is in the third position, etc.
    setAnswers([
      ...wipAnswers,
      {
        id: wipAnswers.length,
        values: order
      }
    ]);
    // Reset order.
    const originalOrder = [0,1,2,3,4];
    setOrder(originalOrder);
    setClicked(false);
    if (count === numDNDQuestions-1) {
      setDND(false);
    }
    setCount(count => count + 1);
  } else if (count >= numDNDQuestions && count < numTotalQuestions && isDone === false && wasClicked === true) {
    // Store radio button answers. Either 'Yes' or 'No'.
    setRBAnswers([
      ...rbAnswers,
      {
        id: rbAnswers.length,
        values: radioValue
      }
    ]);
    setClicked(false);
    if (count === numTotalQuestions-1) {
      setDone(true);
    } else {
      setCount(count => count + 1);
    }
  } else if (isDone === true && wasClicked === true) {
    setClicked(false);
    console.log('Hi');
  }

  // Do calculations on data. (Probably should pass it to a different component in the full version.)

  return (
    <div>
      {
        isDone ?
          <div>
            Go to home page.
          </div> :
          isDND ?
            <DragDropContext onDragEnd={onDragEnd}>
              <div>
                  {<Column droppableId={title} count={count} order={order} />}
              </div>
            </DragDropContext> :
            <div>
              {<WIP_MultiChoice numDNDQuestions={numDNDQuestions} count={count} onChange={handleChange} value={radioValue} />}
            </div>
      }
      <form style={{ float: 'right' }}>
        <label className="numbers">{count+1}/{numTotalQuestions}</label>
        <button className="button" onClick={handleIncrement}>Next Question</button>
      </form>
    </div>
  );
}

export default App;
