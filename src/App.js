import React, { useState } from 'react';
import WorkoutList from './WorkoutList';


function App() {
  const [workout, setWorkout] = useState('');
  const [workouts, setWorkouts] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState(''); 

  const handleInputChange = (event) => {
    setWorkout(event.target.value);
  };

  const handleAddWorkout = () => {
    // Perform any validation checks here before adding the workout
    const newWorkout = {
      name: workout,
      description:'sample description',
      duration:'30 minutes',
      sets:3,
    };
    setWorkouts([...workouts, newWorkout]);
    setWorkout('');
  };
  const handleDeleteWorkout = (index)=>{
    const updatedWorkouts = [...workouts];
    const deletedWorkout = updatedWorkouts.splice(index, 1);
    setWorkouts(updatedWorkouts);
    setDeleteMessage(alert());
    
    setTimeout(()=>{
      setDeleteMessage('');
    },3000);
  };
  

  return (
    <div className="App">
      <h1>Workout Planner</h1>
      <input
        type="text"
        value={workout}
        onChange={handleInputChange}
        placeholder="Enter your workout"
      />
      <button onClick={handleAddWorkout}>Add Workout</button>
      {deleteMessage &&  <p>{deleteMessage}</p>}
      <WorkoutList workouts={workouts} onDelete={handleDeleteWorkout}/>
    </div>
  );
}

export default App;
