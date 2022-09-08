import { StaticImageData } from 'next/image';
import { FunctionComponent, SVGAttributes } from 'react';

declare module '*.svg' {
  const content: FunctionComponent<SVGAttributes<SVGAElement>>;
  export default content;
}

// this file is conditionally added/removed to next-env.d.ts
// if the static image import handling is enabled

declare module '*.png' {
  const content: StaticImageData;

  export default content;
}

declare module '*.jpg' {
  const content: StaticImageData;

  export default content;
}

declare module '*.jpeg' {
  const content: StaticImageData;

  export default content;
}

declare module '*.gif' {
  const content: StaticImageData;

  export default content;
}

declare module '*.webp' {
  const content: StaticImageData;

  export default content;
}

declare module '*.avif' {
  const content: StaticImageData;

  export default content;
}

declare module '*.ico' {
  const content: StaticImageData;

  export default content;
}

declare module '*.bmp' {
  const content: StaticImageData;

  export default content;
}
