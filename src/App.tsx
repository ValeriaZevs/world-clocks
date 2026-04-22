import { useState } from 'react';
import WorldClockForm from './components/WorldClockForm';
import WorldClockList from './components/WorldClockList';
import './App.css';


interface ClockData {
  id: string;
  name: string;
  timezone: number;
}

function App() {
  const [clocks, setClocks] = useState<ClockData[]>([]);

  const handleAddClock = (name: string, timezone: number) => {
    const newClock: ClockData = {
      id: Date.now().toString(), 
      name,
      timezone,
    };
    setClocks((prev) => [...prev, newClock]);
  };

  const handleRemoveClock = (id: string) => {
    setClocks((prev) => prev.filter((clock) => clock.id !== id));
  };

  return (
    <div className="app-container">
      <WorldClockForm onAdd={handleAddClock} />
      <WorldClockList clocks={clocks} onRemove={handleRemoveClock} />
    </div>
  );
}

export default App;