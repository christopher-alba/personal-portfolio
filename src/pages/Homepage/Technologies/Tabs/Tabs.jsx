import React, { Children } from "react";

const Tabs = ({ children }) => {
  return (
    <div>
      {Children.map(children, (child) => {
        console.log(child);
        return <button>{child.props.className}</button>;
      })}
      {children}
    </div>
  );
};

export default Tabs;
