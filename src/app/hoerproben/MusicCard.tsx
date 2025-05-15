"use client";

import { useState } from "react";
import AudioPlayer from "../components/AudioPlayer";
import { MusicItem } from "../services/audioService";

export default function MusicCard({ item }: { item: MusicItem }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
        <AudioPlayer src={item.path} title={item.title} />
      </div>
    </div>
  );
}
