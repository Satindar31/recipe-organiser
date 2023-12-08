import localFont from "next/font/local";

const azonix = localFont({
  src: "../../app/fonts/Azonix.otf",
});

export default function HeroH1() {
  return (
    <h1
      className={`${azonix.className} sm:text-9xl text-6xl`}
    >
      SavorSync
    </h1>
  );
}
