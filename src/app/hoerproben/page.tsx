import { Suspense } from "react";
import { getMusicData, MusicCategory, MusicItem } from "../services/audioService";

import MusicCard from "./MusicCard";

export default function HoerprobePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<Loading />}>
        <MusicContent />
      </Suspense>
    </div>
  );
}

function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Hörproben werden geladen...</h1>
    </div>
  );
}

async function MusicContent() {
  const musicData = await getMusicData();

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Hörproben</h1>
      <p className="mb-8 text-lg">
        Hier können Sie in ausgewählte Stücke unseres Repertoires hineinhören. Viel Spaß beim Entdecken!
      </p>

      {musicData.map((category: MusicCategory, index: number) => (
        <div key={index} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.items.map((item: MusicItem, idx: number) => (
              <MusicCard key={idx} item={item} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
