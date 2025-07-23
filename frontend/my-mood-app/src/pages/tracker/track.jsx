import React, { useState } from 'react';
import { PenTool } from 'lucide-react';

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState('');
  const [moodIntensity, setMoodIntensity] = useState(5);
  const [moodDescription, setMoodDescription] = useState('');
  const [yesterdayMood, setYesterdayMood] = useState("Yesterday's Mood: Calm (6/10)");

  const moodOptions = [
    { value: 'happy', label: 'Happy', color: '#FFD700', emoji: '😊' },
    { value: 'calm', label: 'Calm', color: '#87CEEB', emoji: '😌' },
    { value: 'anxious', label: 'Anxious', color: '#FFA500', emoji: '😰' },
    { value: 'sad', label: 'Sad', color: '#87CEFA', emoji: '😢' },
    { value: 'angry', label: 'Angry', color: '#FF6B6B', emoji: '😠' },
    { value: 'excited', label: 'Excited', color: '#FF69B4', emoji: '🤗' },
    { value: 'tired', label: 'Tired', color: '#D3D3D3', emoji: '😴' },
    { value: 'neutral', label: 'Neutral', color: '#E0E0E0', emoji: '😐' }
  ];

  const handleSaveMood = () => {
    if (selectedMood) {
      const selectedMoodData = moodOptions.find(mood => mood.value === selectedMood);
      alert(`Mood saved: ${selectedMoodData.label} (${moodIntensity}/10)`);
    } else {
      alert('Please select a mood first');
    }
  };

  const handleAddJournalEntry = () => {
    alert('Journal entry feature would open here');
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem',
      backgroundColor: '#fafafa',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: '600',
          color: '#333',
          marginBottom: '0.5rem'
        }}>
          How are you feeling today?
        </h1>
      </div>

      {/* Mood Selection Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        {/* Select Your Mood */}
        <div>
          <h3 style={{
            fontSize: '1.1rem',
            fontWeight: '500',
            color: '#666',
            marginBottom: '1rem'
          }}>
            Select your mood
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0.75rem'
          }}>
            {moodOptions.map((mood) => (
              <button
                key={mood.value}
                onClick={() => setSelectedMood(mood.value)}
                style={{
                  padding: '1rem 0.5rem',
                  backgroundColor: selectedMood === mood.value ? mood.color : '#fff',
                  border: selectedMood === mood.value ? `2px solid ${mood.color}` : '2px solid #e0e0e0',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.25rem',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  color: selectedMood === mood.value ? '#fff' : '#666',
                  boxShadow: selectedMood === mood.value ? `0 4px 12px ${mood.color}40` : '0 2px 4px rgba(0,0,0,0.1)'
                }}
                onMouseOver={(e) => {
                  if (selectedMood !== mood.value) {
                    e.target.style.backgroundColor = '#f8f8f8';
                  }
                }}
                onMouseOut={(e) => {
                  if (selectedMood !== mood.value) {
                    e.target.style.backgroundColor = '#fff';
                  }
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>{mood.emoji}</span>
                <span>{mood.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mood Intensity */}
        <div>
          <h3 style={{
            fontSize: '1.1rem',
            fontWeight: '500',
            color: '#666',
            marginBottom: '1rem'
          }}>
            Mood Intensity (1-10)
          </h3>
          <div style={{
            backgroundColor: '#fff',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <input
              type="range"
              min="1"
              max="10"
              value={moodIntensity}
              onChange={(e) => setMoodIntensity(parseInt(e.target.value))}
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '4px',
                background: `linear-gradient(to right, #ff6b6b 0%, #ffa500 50%, #4ecdc4 100%)`,
                outline: 'none',
                cursor: 'pointer'
              }}
            />
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '1rem'
            }}>
              <span style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#e91e63',
                backgroundColor: '#fff',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                border: '2px solid #e91e63'
              }}>
                {moodIntensity}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Mood Log */}
      <div style={{
        marginBottom: '3rem'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: '#333',
          marginBottom: '1rem'
        }}>
          Daily Mood Log
        </h2>
        
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '1.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          marginBottom: '1rem'
        }}>
          <input
            type="text"
            value={yesterdayMood}
            readOnly
            style={{
              width: '100%',
              padding: '0.75rem',
              border: 'none',
              backgroundColor: '#f8f8f8',
              borderRadius: '8px',
              color: '#e91e63',
              fontWeight: '500',
              fontSize: '0.95rem'
            }}
          />
        </div>

        <textarea
          placeholder="Describe how you're feeling..."
          value={moodDescription}
          onChange={(e) => setMoodDescription(e.target.value)}
          style={{
            width: '100%',
            minHeight: '120px',
            padding: '1rem',
            border: '2px solid #e0e0e0',
            borderRadius: '12px',
            fontSize: '1rem',
            resize: 'vertical',
            fontFamily: 'inherit',
            backgroundColor: '#fff',
            color: '#666'
          }}
        />

        <div style={{
          textAlign: 'center',
          marginTop: '2rem'
        }}>
          <button
            onClick={handleSaveMood}
            style={{
              backgroundColor: '#6366f1',
              color: 'white',
              border: 'none',
              padding: '1rem 2.5rem',
              borderRadius: '25px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#5b5bf6';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#6366f1';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Save Mood
          </button>
        </div>
      </div>

      {/* Journal Section */}
      <div style={{
        textAlign: 'center',
        padding: '3rem 0'
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: '#333',
          marginBottom: '0.5rem'
        }}>
          Want to write more?
        </h2>
        
        <p style={{
          color: '#666',
          fontSize: '1rem',
          marginBottom: '2rem'
        }}>
          Express yourself freely in your personal journal
        </p>

        <button
          onClick={handleAddJournalEntry}
          style={{
            backgroundColor: '#fce7f3',
            color: '#e91e63',
            border: '2px solid #fce7f3',
            padding: '1rem 2rem',
            borderRadius: '25px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#e91e63';
            e.target.style.color = 'white';
            e.target.style.borderColor = '#e91e63';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#fce7f3';
            e.target.style.color = '#e91e63';
            e.target.style.borderColor = '#fce7f3';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          <PenTool size={18} />
          Add Journal Entry
        </button>
      </div>
    </div>
  );
};

export default MoodTracker;