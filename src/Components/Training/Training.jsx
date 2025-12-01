import React, { useState } from 'react';

const Training = ({ onAdd, trainings, onDelete }) => {
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
    <div className="training-container">
      <form className="training-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="date">Дата (ДД.ММ.ГГГГ):</label>
          <input
            type="text"
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

      {trainings.length > 0 && (
        <table className="training-table">
          <thead>
            <tr>
              <th>Дата (ДД.ММ.ГГГГ)</th>
              <th>Пройдено км</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {trainings.map((training) => (
              <tr key={training.date}>
                <td>{training.date}</td>
                <td>{training.distance.toFixed(1)} км</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => onDelete(training.date)}
                    title="Удалить запись"
                  >
                    ✘
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Training;