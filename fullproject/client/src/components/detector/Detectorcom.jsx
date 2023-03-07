import React, { useEffect, useState } from "react";

const Detectorcom = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleStatusChange);

    window.addEventListener("offline", handleStatusChange);

    return () => {
      window.removeEventListener("online", handleStatusChange);
      window.removeEventListener("offline", handleStatusChange);
    };
  }, [isOnline]);
  return (
    <div className="detector">
      {isOnline ? (
        <h6 className="online">online</h6>
      ) : (
        <h6 className="offline">offline</h6>
      )}
    </div>
  );
};

export default Detectorcom;
