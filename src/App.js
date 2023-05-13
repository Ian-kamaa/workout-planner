import React, { useState } from 'react';

function App() {
  const [workout, setWorkout] = useState('');

  const handleInputChange = (event) => {
    setWorkout(event.target.value);
  };

  const handleAddWorkout = () => {
    // Perform any validation checks here before adding the workout
    console.log(`Adding workout: ${workout}`);
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
    </div>
  );
}

export default App;
