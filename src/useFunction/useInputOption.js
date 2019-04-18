import React, { useState } from "react";

export default props => {
  const [value, setValue] = useState(props || "");
  const onChange = e => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange
  };
};
