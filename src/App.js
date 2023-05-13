import React, { useState } from 'react';
import WorkoutList from './WorkoutList';

function App() {
  const [workout, setWorkout] = useState('');
  const [workouts, setWorkouts] = useState([]);

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
      <WorkoutList workouts={workouts}/>
    </div>
  );
}

export default App;
