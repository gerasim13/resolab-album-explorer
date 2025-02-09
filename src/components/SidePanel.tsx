import React from 'react';
import { Album, Participant } from '../types';
import { X } from 'lucide-react';

interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem: Album | Participant | null;
}

export const SidePanel: React.FC<SidePanelProps> = ({ isOpen, onClose, selectedItem }) => {
  if (!isOpen || !selectedItem) return null;

  const isAlbum = 'participants' in selectedItem;

  return (
    <div 
      className={`fixed left-0 top-0 h-full w-96 bg-[#101010]/95 text-white transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } overflow-y-auto`}
    >
      <div className="p-6">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={24} />
        </button>

        <img 
          src={selectedItem.image} 
          alt={selectedItem.title || selectedItem.name}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h2 className="text-2xl font-bold mb-4 text-yellow-500">
          {isAlbum ? selectedItem.title : selectedItem.name}
        </h2>

        {!isAlbum && (
          <div className="mb-4">
            <span className="text-orange-500 font-semibold">{selectedItem.role}</span>
          </div>
        )}

        <p className="text-gray-300 mb-6">{selectedItem.description}</p>

        {selectedItem.audio && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-red-500">Audio Sample</h3>
            <audio controls className="w-full">
              <source src={selectedItem.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}

        {!isAlbum && selectedItem.projects.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Другие проекты</h3>
            <div className="space-y-4">
              {selectedItem.projects.map((project) => (
                <div key={project.title} className="border border-gray-700 rounded-lg p-4">
                  <h4 className="text-yellow-500 font-semibold">{project.title} ({project.year})</h4>
                  <p className="text-gray-400 text-sm mt-2">{project.description}</p>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block"
                  >
                    Узнать больше →
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        <a 
          href={selectedItem.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 text-blue-400 hover:text-blue-300"
        >
          Узнать больше →
        </a>
      </div>
    </div>
  );
};