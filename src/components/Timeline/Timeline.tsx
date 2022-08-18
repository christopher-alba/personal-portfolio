import React, { Children, FC, ReactNode } from "react";
import { TimelineItem, TimelineLine, TimelineMain } from "./styled";
const Timeline: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <TimelineMain>
      <TimelineLine>
        {Children.map(children, (child) => {
          return <TimelineItem>{child}</TimelineItem>;
        })}
      </TimelineLine>
    </TimelineMain>
  );
};

export default Timeline;
