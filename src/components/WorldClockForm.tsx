import React, { useState } from 'react';

interface Props {
  onAdd: (name: string, timezone: number) => void;
}

const WorldClockForm: React.FC<Props> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [timezone, setTimezone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || timezone === '') return;
    const tzNumber = Number(timezone);
    if (Number.isNaN(tzNumber)) return;

    onAdd(name.trim(), tzNumber);
    
    setName('');
    setTimezone('');
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="name">Название</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="timezone">Временная зона</label>
        <input
          id="timezone"
          type="number"
          step="0.1" 
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn-add">Добавить</button>
    </form>
  );
};

export default WorldClockForm;