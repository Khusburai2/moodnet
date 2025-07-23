import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PenTool, BookOpen, Save, ArrowLeft } from 'lucide-react';
import './journal.css';

const Journal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [entry, setEntry] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [savedEntries, setSavedEntries] = useState([]);
  const [viewMode, setViewMode] = useState('write'); // 'write' or 'view'

  // Load saved entries from localStorage on component mount
  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    setSavedEntries(storedEntries);
  }, []);

  const handleSaveEntry = () => {
    if (!title.trim() || !entry.trim()) {
      alert('Please add both a title and journal content');
      return;
    }

    const newEntry = {
      id: Date.now(),
      title,
      content: entry,
      date,
      mood: location.state?.mood || 'neutral' // Get mood from tracker if available
    };

    const updatedEntries = [newEntry, ...savedEntries];
    setSavedEntries(updatedEntries);
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
    
    setEntry('');
    setTitle('');
    alert('Journal entry saved successfully!');
  };

  const handleBackToTracker = () => {
    navigate('/tracker');
  };

  return (
    <div className="journal-container">
      {/* Header */}
      <div className="journal-header">
        <button onClick={handleBackToTracker} className="back-button">
          <ArrowLeft size={20} /> Back to Tracker
        </button>
        <h1>My Journal</h1>
        <div className="journal-actions">
          <button 
            onClick={() => setViewMode(viewMode === 'write' ? 'view' : 'write')}
            className="view-toggle-button"
          >
            {viewMode === 'write' ? (
              <>
                <BookOpen size={18} /> View Entries
              </>
            ) : (
              <>
                <PenTool size={18} /> Write New
              </>
            )}
          </button>
        </div>
      </div>

      {viewMode === 'write' ? (
        /* Writing Mode */
        <div className="journal-write-mode">
          <div className="journal-metadata">
            <input
              type="text"
              placeholder="Journal Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="journal-title-input"
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="journal-date-input"
            />
          </div>
          
          <textarea
            placeholder="Write your thoughts here..."
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            className="journal-textarea"
          />
          
          <button onClick={handleSaveEntry} className="save-button">
            <Save size={18} /> Save Entry
          </button>
        </div>
      ) : (
        /* Viewing Mode */
        <div className="journal-view-mode">
          {savedEntries.length === 0 ? (
            <div className="no-entries">
              <p>No journal entries yet. Start writing!</p>
              <button 
                onClick={() => setViewMode('write')}
                className="write-first-button"
              >
                <PenTool size={16} /> Write First Entry
              </button>
            </div>
          ) : (
            <div className="entries-list">
              {savedEntries.map((item) => (
                <div key={item.id} className="journal-entry-card">
                  <div className="entry-header">
                    <h3>{item.title}</h3>
                    <div className="entry-meta">
                      <span className="entry-date">{item.date}</span>
                      {item.mood && (
                        <span className={`entry-mood mood-${item.mood}`}>
                          {item.mood}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="entry-content">{item.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Journal;