"use client";

import { useState } from 'react';
import Image from 'next/image';

interface MemberImageProps {
  name: string;
  section: string;
  alt?: string;
  size: number;
  filename?: string; // Option to provide full filename if needed
}

export default function MemberImage({ name, section, alt, size, filename }: MemberImageProps) {
  const [hasError, setHasError] = useState(false);
  const [currentExtension, setCurrentExtension] = useState('.jpg');
  
  // Map section names to folder names in the public/mitglieder directory
  const sectionMap: Record<string, string> = {
    "Obmann": "obmann",
    "Kapellmeister": "kapellmeister",
    "Stabführer": "stabfuehrer",
    "MarketenderInnen": "marketender",
    "Querflöte": "quersfloete",
    "Oboe": "oboe",
    "Klarinette": "klarinette",
    "Fagott": "fagott",
    "Saxophon": "saxophon",
    "Trompete": "trompete",
    "Flügelhorn": "fluegelhorn",
    "Horn": "horn",
    "Tenorhorn": "tenorhorn",
    "Posaune": "posaune",
    "Tuba": "tuba",
    "Schlagwerk": "schlagwerk"
  };
  
  // Get the folder name for the section
  const folderName = sectionMap[section] || section.toLowerCase();
  
  // Use provided filename or just the name
  const imageFilename = filename || name;
  
  // Create image URL path from the public directory
  const imagePath = `/mitglieder/${folderName}/${imageFilename}${currentExtension}`;
  
  // Placeholder for missing images (create a generic avatar)
  const initials = name.split(' ').map(part => part[0]).join('');
  
  const handleError = () => {
    // Try PNG if JPG fails, and if PNG fails use a placeholder
    if (currentExtension === '.jpg') {
      setCurrentExtension('.png');
    } else {
      setHasError(true);
    }
  };
  
  return (
    <div className={`h-${size} w-${size} rounded-full overflow-hidden shadow-md flex-shrink-0 relative`}>
      {hasError ? (
        // Show stylish placeholder with initials when image is not found
        <div 
          className={`h-full w-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-300 font-bold`}
        >
          {initials}
        </div>
      ) : (
        <Image 
          src={imagePath}
          alt={alt || name}
          width={size * 4} // Higher resolution for better quality
          height={size * 4}
          className="object-cover h-full w-full"
          onError={handleError}
        />
      )}
    </div>
  );
}