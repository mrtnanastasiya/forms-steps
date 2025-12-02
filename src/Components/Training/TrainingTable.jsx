
import React from 'react';

const TrainingTable = ({ trainings, onDelete }) => {
  return (
    trainings.length > 0 && (
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
    )
  );
};

export default TrainingTable;
