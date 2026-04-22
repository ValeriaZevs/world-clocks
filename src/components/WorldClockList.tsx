import React from 'react';
import WorldClock from './WorldClock';

interface ClockData {
  id: string;
  name: string;
  timezone: number;
}

interface Props {
  clocks: ClockData[];
  onRemove: (id: string) => void;
}

const WorldClockList: React.FC<Props> = ({ clocks, onRemove }) => {
  return (
    <div className="clocks-grid">
      {clocks.map((clock) => (
        <WorldClock key={clock.id} clock={clock} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default WorldClockList;