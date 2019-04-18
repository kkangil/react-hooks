import React, { useState, useEffect } from "react";

const User = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("completed render", name);
    return () => {
      console.log("unmount", name);
    };
  }, [name]);

  return <input value={name} onChange={e => setName(e.target.value)} />;
};

export default User;
