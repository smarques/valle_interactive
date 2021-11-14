declare module "*.svg" {
  const svg: string;
  export default svg;
}

declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";

declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module '*.mp3';