import React, { useState } from 'react';
import Image from 'next/image';

type MemberImageProps = {
  name: string;
  section?: string;
  alt?: string;
  size?: number;
  filename?: string;
};

const MemberImage: React.FC<MemberImageProps> = ({ 
  name, 
  section = "", 
  alt = "", 
  size = 40, 
  filename 
}) => {
  const [isError, setIsError] = useState(false);

  // Create a sanitized filename from the name or use provided filename
  const sanitizedName = filename || name.replace(/[^\w\s]/gi, '');
  
  // Create initials from name for fallback display
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('');

  // Map section names to folder names
  const getFolderName = (sectionName: string): string => {
    const folderMap: {[key: string]: string} = {
      "Obmann": "obmann",
      "Kapellmeister": "kapellmeister",
      "Stabführer": "stabfuehrer",
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
      "Schlagwerk": "schlagwerk",
      "MarketenderInnen": "marketenderinnen"
    };
    
    return folderMap[sectionName] || sectionName.toLowerCase().replace(/[^\w]/g, "");
  };

  // Show initials circle if image fails to load
  if (isError) {
    return (
      <div 
        style={{ 
          width: size, 
          height: size,
          borderRadius: '50%',
          backgroundColor: 'var(--primary)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: Math.max(size * 0.4, 12),
          fontWeight: 'bold'
        }}
      >
        {initials}
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: size, height: size, borderRadius: '50%', overflow: 'hidden' }}>
      <Image
        src={`/mitglieder/${getFolderName(section)}/${sanitizedName}.jpg`}
        alt={alt || `${name} - ${section}`}
        fill
        sizes={`${size}px`}
        style={{
          objectFit: 'cover',
        }}
        onLoadingComplete={(result) => {
          if (result.naturalWidth === 0) {
            // Image failed to load
            setIsError(true);
          }
        }}
        onError={() => {
          setIsError(true);
        }}
        // Add unoptimized to bypass Image Optimization for local images
        unoptimized={true}
      />
    </div>
  );
};

export default MemberImage;