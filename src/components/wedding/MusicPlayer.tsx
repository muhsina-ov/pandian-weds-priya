import { useEffect, useRef, useState } from "react";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio("/wedding-music.mp3");
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;

    // Handle play state sync
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    // Auto-play when user interacts with "Tap to Open"
    const handleStartMusic = () => {
      audio.play().catch(() => {
        // Browser policy fallback
      });
    };

    window.addEventListener("start-wedding-music", handleStartMusic);

    // Also attempt autoplay on first click anywhere if not already playing
    const handleFirstInteraction = () => {
      if (audio.paused && sessionStorage.getItem("pandian-priya-wedding-opened") === "true") {
        audio.play().catch(() => {});
      }
    };
    window.addEventListener("click", handleFirstInteraction, { once: true });

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      window.removeEventListener("start-wedding-music", handleStartMusic);
      window.removeEventListener("click", handleFirstInteraction);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90]">
      <button
        type="button"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d4af37] bg-[#420623]/95 shadow-[0_4px_20px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_22px_rgba(212,175,55,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
      >
        {/* Animated aura ring when playing */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full border border-[#d4af37] animate-ping opacity-35" />
        )}

        {/* Icon & Soundwaves */}
        <div className="flex items-center justify-center text-[#faecc5]">
          {isPlaying ? (
            <div className="flex items-end gap-[2.5px] h-4">
              <span className="w-[3px] bg-[#faecc5] rounded-full animate-[soundwave_0.8s_ease-in-out_infinite]" />
              <span className="w-[3px] bg-[#faecc5] rounded-full animate-[soundwave_0.8s_ease-in-out_0.2s_infinite] h-full" />
              <span className="w-[3px] bg-[#faecc5] rounded-full animate-[soundwave_0.8s_ease-in-out_0.4s_infinite] h-2/3" />
              <span className="w-[3px] bg-[#faecc5] rounded-full animate-[soundwave_0.8s_ease-in-out_0.1s_infinite] h-4/5" />
            </div>
          ) : (
            <span className="text-lg">🎵</span>
          )}
        </div>

        {/* Tooltip on hover */}
        <span className="pointer-events-none absolute -top-8 right-0 whitespace-nowrap rounded bg-black/85 px-2 py-0.5 text-[0.62rem] font-medium text-[#faecc5] opacity-0 shadow transition-opacity group-hover:opacity-100">
          {isPlaying ? "Pause Music" : "Play Wedding Song"}
        </span>
      </button>
    </div>
  );
}
