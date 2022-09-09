import { FunctionComponent, SVGAttributes, SVGAElement } from 'react';

declare module '*.svg' {
  const content: FunctionComponent<SVGAttributes<SVGAElement>>;
  export default content;
}
