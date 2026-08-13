import { useEffect, useState } from "react";

function Splash() {
  const [text, setText] = useState("");
  const [leaving, setLeaving] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const message = "Welcome!";
    let index = 0;

    const typingTimer = setInterval(() => {
      index += 1;
      setText(message.slice(0, index));

      if (index === message.length) {
        clearInterval(typingTimer);

        setTimeout(() => {
          setLeaving(true);
        }, 1600);
      }
    }, 130);

    return () => clearInterval(typingTimer);
  }, []);

  if (!mounted) return null;

  return (
    <div
      onTransitionEnd={() => leaving && setMounted(false)}
      className={`fixed inset-0 z-50 grid place-items-center bg-page transition-opacity duration-700 ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="min-w-55 animate-card-in rounded-2xl bg-ink px-12 py-9 text-center text-page">
        <h2 className="font-serif text-3xl font-semibold">
          {text}
          <span className="ml-1 inline-block h-7 w-1 animate-blink bg-accent align-middle" />
        </h2>
      </div>
    </div>
  );
}

export default Splash;