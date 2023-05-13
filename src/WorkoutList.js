import React from 'react';

const WorkoutList = ({ workouts }) => {
  return (
    <div className="workout-list">
      <h2>Workout List</h2>
      {workouts.map((workout, index) => (
        <div key={index} className="workout-item">
          <h3>{workout.name}</h3>
          <p>Description: {workout.description}</p>
          <p>Duration: {workout.duration}</p>
          <p>Sets: {workout.sets}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkoutList;
