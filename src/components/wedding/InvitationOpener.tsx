import { useEffect, useState } from "react";
import invitationCover from "@/assets/invitation-cover.jpg";

const SESSION_KEY = "pandian-priya-wedding-opened";

export function InvitationOpener() {
  const [visible, setVisible] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const alreadyOpened = sessionStorage.getItem(SESSION_KEY) === "true";
    if (alreadyOpened) return;

    setVisible(true);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  function handleOpen() {
    setOpened(true);
    sessionStorage.setItem(SESSION_KEY, "true");
    window.dispatchEvent(new Event("start-wedding-music"));
    setTimeout(() => {
      document.body.style.overflow = "";
      setVisible(false);
    }, 800);
  }

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[150] flex flex-col items-center justify-center bg-[#1e0310] px-4 transition-opacity duration-700 ${
        opened ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      role="dialog"
      aria-label="Open wedding invitation"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(112,8,54,0.7)_0%,rgba(18,2,9,0.98)_100%)]" />

      <div
        className={`relative z-10 flex flex-col items-center max-w-sm w-full transition-all duration-700 ${
          opened ? "scale-105 -translate-y-6 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {/* Top Auspicious Header */}
        <div className="mb-3 inline-flex items-center gap-2 border-b border-[#d4af37]/50 pb-1 text-[#e5c158]">
          <span className="text-sm">ॐ</span>
          <span className="text-xs uppercase tracking-[0.26em] font-semibold text-[#f5dca3]">
            Wedding Invitation
          </span>
          <span className="text-sm">ॐ</span>
        </div>

        {/* The Card - Clean, with NO overlapping text */}
        <div
          onClick={handleOpen}
          className="group relative cursor-pointer overflow-hidden rounded-xl border-2 border-[#d4af37] shadow-[0_18px_50px_rgba(0,0,0,0.75)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(212,175,55,0.45)]"
        >
          <img
            src={invitationCover}
            alt="Physical Wedding Invitation Card for R. Maharaja Pandian & S. Sathiya Priya"
            className="max-h-[62vh] w-auto rounded-lg object-contain"
          />
        </div>

        {/* Tap to open button below the card */}
        <button
          type="button"
          onClick={handleOpen}
          className="press mt-5 flex items-center justify-center gap-2.5 rounded-full border border-[#d4af37] bg-gradient-to-r from-[#8a0d45] via-[#5c082e] to-[#8a0d45] px-7 py-3 text-xs font-bold uppercase tracking-[0.22em] text-[#faecc5] shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 hover:border-[#f6e29f] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
        >
          <span className="text-sm">✉</span>
          <span>Tap to Open</span>
        </button>

        <p className="mt-2 text-[0.62rem] uppercase tracking-[0.2em] text-[#d4af37]/75">
          Click the card or button to enter
        </p>
      </div>
    </div>
  );
}
