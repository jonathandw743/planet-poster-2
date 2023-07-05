
"use client";

const CopyFullURL = () => {
  return (
    <button onClick={() => {
        navigator.clipboard.writeText(window.location.href);
    }}>copy full URL</button>
  )
}

export default CopyFullURL;