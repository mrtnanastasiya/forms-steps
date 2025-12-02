
import React, { useState } from 'react';

const TrainingForm = ({ onAdd }) => {
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date && distance && !isNaN(parseFloat(distance))) {
      onAdd({ date, distance: parseFloat(distance) });
      setDate('');
      setDistance('');
    }
  };

  return (
    <form className="training-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="date">Дата (ДД.ММ.ГГГГ):</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder="01.01.2025"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="distance">Пройдено км:</label>
        <input
          type="number"
          id="distance"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          step="0.1"
          min="0"
          required
        />
      </div>
      <button type="submit">ОК</button>
    </form>
  );
};

export default TrainingForm;
