declare module "*.svg" {
  import React = require("react");
  const content: any;
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}
