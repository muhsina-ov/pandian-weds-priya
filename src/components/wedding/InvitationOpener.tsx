import { useEffect, useState } from "react";
import invitationCover from "@/assets/invitation-cover.jpg";
import { couple } from "@/lib/wedding";

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
    }, 900);
  }

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[150] flex items-center justify-center bg-[#1e0310] transition-opacity duration-700 ${
        opened ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      role="dialog"
      aria-label="Open Maharaja Pandian and Sathiya Priya's wedding invitation"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(112,8,54,0.7)_0%,rgba(20,2,10,0.95)_100%)]" />

      <div
        className={`relative z-10 flex flex-col items-center max-w-sm px-6 text-center transition-all duration-700 ${
          opened ? "scale-105 -translate-y-6 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <div className="mb-4 inline-flex items-center gap-2 border-b border-[#d4af37]/60 pb-1 text-[#e5c158]">
          <span className="text-sm">ॐ</span>
          <span className="text-xs uppercase tracking-[0.28em] font-semibold text-[#f5dca3]">
            Wedding Invitation
          </span>
          <span className="text-sm">ॐ</span>
        </div>

        {/* Card Mockup with physical cover */}
        <div
          onClick={handleOpen}
          className="group relative cursor-pointer overflow-hidden rounded-xl border-2 border-[#d4af37] shadow-[0_15px_45px_rgba(0,0,0,0.7)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
        >
          <img
            src={invitationCover}
            alt="Wedding Invitation Cover"
            className="h-[390px] w-[270px] object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

          {/* Golden Seal Button in center */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-7 px-4">
            <span className="script text-2xl text-[#faecc5] drop-shadow-md">
              {couple.groomShort} &amp; {couple.brideShort}
            </span>
            <span className="mt-1 text-[0.65rem] uppercase tracking-widest text-[#d4af37]">
              16 &amp; 17 September 2026
            </span>

            <div className="mt-5 flex items-center justify-center gap-2 rounded-full border border-[#d4af37] bg-[#420623]/95 px-6 py-2.5 shadow-lg backdrop-blur-sm transition-colors group-hover:bg-[#59082f]">
              <span className="text-sm text-[#faecc5]">✉</span>
              <span className="text-[0.68rem] font-bold uppercase tracking-widest text-[#faecc5]">
                Tap to Open
              </span>
            </div>
          </div>
        </div>

        <p className="mt-4 text-[0.65rem] uppercase tracking-[0.2em] text-[#d4af37]/80">
          Click the card to open invitation
        </p>
      </div>
    </div>
  );
}
