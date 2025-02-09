import React from 'react';
import { Participant as ParticipantType } from '../types';

interface ParticipantProps {
  participant: ParticipantType;
  angle: number;
  radius: number;
  isSelected: boolean;
  onClick: () => void;
}

export const Participant: React.FC<ParticipantProps> = ({
  participant,
  angle,
  radius,
  isSelected,
  onClick,
}) => {
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <button
      onClick={onClick}
      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
        isSelected ? 'scale-110' : 'hover:scale-105'
      }`}
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
      }}
    >
      <div className={`w-20 h-20 rounded-full overflow-hidden ring-2 ${
        isSelected ? 'ring-[#FFFF00]' : 'ring-[#FFFF00]/50'
      } transition-all duration-300`}>
        <img
          src={participant.image}
          alt={participant.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap">
        <span className="text-white text-sm font-medium bg-black/75 px-2 py-1 rounded">
          {participant.name}
        </span>
      </div>
    </button>
  );
};