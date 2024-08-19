"use client";
export default function Home() {
  const redirectToMap = () => {
    window.location.href = "/map";
  };
  return (
    <button onClick={redirectToMap} className="underline">
      Click here
    </button>
  );
}
