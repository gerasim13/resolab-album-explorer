import React, { useState, useRef, useEffect } from 'react';
import { Album, Participant as ParticipantType } from './types';
import { albumData } from './data';
import { SidePanel } from './components/SidePanel';
import { Participant } from './components/Participant';
import { Move } from 'lucide-react';

function App() {
  const [selectedItem, setSelectedItem] = useState<Album | ParticipantType | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCentralClick = () => {
    setSelectedItem(albumData);
    setIsPanelOpen(true);
  };

  const handleParticipantClick = (participant: ParticipantType) => {
    if (selectedItem === participant) {
      setIsPanelOpen(false);
      setSelectedItem(null);
    } else {
      setSelectedItem(participant);
      setIsPanelOpen(true);
    }
  };

  const handlePanelClose = () => {
    setIsPanelOpen(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.001;
    const newScale = Math.min(Math.max(0.5, scale + delta), 2);
    setScale(newScale);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 0) { // Left click only
      setIsDragging(true);
      setStartPosition({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - startPosition.x,
        y: e.clientY - startPosition.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, []);

  const radius = Math.min(window.innerWidth, window.innerHeight) * 0.3;

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="fixed top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white text-sm flex items-center gap-2">
        <Move size={16} />
        <span>Drag to pan, scroll to zoom</span>
      </div>
      
      <div
        ref={containerRef}
        className={`relative w-full h-screen ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div
          className="absolute left-1/2 top-1/2 transform origin-center transition-transform duration-100"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`
          }}
        >
          {/* Central Album Node */}
          <div className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <button
              onClick={handleCentralClick}
              className="transition-transform hover:scale-105 mb-4"
            >
              <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-red-600">
                <img
                  src={albumData.image}
                  alt={albumData.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </button>
            <h1 className="absolute top-full text-[#FFFFFF] text-sm font-medium text-center max-w-[300px] whitespace-normal">
              {albumData.title}
            </h1>
          </div>

          {/* Participant Nodes */}
          {albumData.participants.map((participant, index) => {
            const angle = (index * 2 * Math.PI) / albumData.participants.length;
            return (
              <Participant
                key={participant.id}
                participant={participant}
                angle={angle}
                radius={radius}
                isSelected={selectedItem === participant}
                onClick={() => handleParticipantClick(participant)}
              />
            );
          })}
        </div>

        {/* Side Panel */}
        <SidePanel
          isOpen={isPanelOpen}
          onClose={handlePanelClose}
          selectedItem={selectedItem}
        />
      </div>
    </div>
  );
}

export default App;