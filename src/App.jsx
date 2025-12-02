import React, { useState } from 'react';
import TrainingForm from './Components/Training/TrainingForm';
import TrainingTable from './Components/Training/TrainingTable';
import './Components/Training/Training.css';

function App() {
  const [trainings, setTrainings] = useState([]);

  const addTraining = (newTraining) => {
    setTrainings((prevTrainings) => {
      // Ищем запись с такой же датой
      // console.log('Добавляем:', newTraining);
      // console.log('Текущее состояние:', prevTrainings);

      const existingIndex = prevTrainings.findIndex(
        (t) => t.date === newTraining.date
      );

      if (existingIndex !== -1) {
        // Корректное преобразование в числа
        const currentDistance = parseFloat(prevTrainings[existingIndex].distance);
        const newDistance = parseFloat(newTraining.distance);

        // Проверяем, что оба значения — валидные числа
        if (isNaN(currentDistance) || isNaN(newDistance)) {
          console.warn('Некорректное значение дистанции:', { currentDistance, newDistance });
          return prevTrainings; // Не меняем состояние
        }

        const updatedTrainings = [...prevTrainings];
        updatedTrainings[existingIndex].distance = currentDistance + newDistance;
        return updatedTrainings;
      } else {
        // Добавляем новую запись и сортируем по дате (от новых к старым)
        return [...prevTrainings, newTraining].sort((a, b) => {
          // Преобразуем строки ДД.ММ.ГГГГ в объекты Date
          const [dayA, monthA, yearA] = a.date.split('.').map(Number);
          const [dayB, monthB, yearB] = b.date.split('.').map(Number);

          const dateA = new Date(yearA, monthA - 1, dayA); // Месяц -1 (0-11)
          const dateB = new Date(yearB, monthB - 1, dayB);

          return dateB - dateA;

        });
      }
    });
  };

  const deleteTraining = (date) => {
    setTrainings((prevTrainings) =>
      prevTrainings.filter((t) => t.date !== date)
    );
  };

  return (
    <div className="app">
      <h1>Учёт тренировок</h1>
      <TrainingForm onAdd={addTraining} />
      <TrainingTable trainings={trainings} onDelete={deleteTraining} />
    </div>
  );
}

export default App;
