export type Slide = {
  id: string,
  slideName: string,
  type: string,
  content: ContentItem,
  slideOrder: number,
  className?: string,
}

export type ContentItem = {
  id: string,

  type: ContentType,
  name: string,

  content: ContentItem[] | string | string[] | string[][],
  initialRows?: number,
  initialColumns?: number,
  restrictToDrop?: boolean,
  columns?: number,
  placeholder?: string,
  className?: string,
  alt?: string,
  callOutType?: 'success' | 'warning' | 'info' | 'question' | 'cautin',
  link?: string,
  code?: string,
  language?: string,
  bgColor?: string,
  isTransparent?: boolean,
}

export type ContentType =
  'text' |
  'image' |
  'table' |
  'code' |
  'callout' |
  'link' |
  'video' |
  'audio' |
  'embed' |
  'column' |
  'resizeble-column' |
  'paragraph' |
  'multi-column' |
  'blank' |
  'imageAndText' |
  'heading1' |
  'heading2' |
  'heading3' |
  'heading4' |
  'title' |
  'blockquote' |
  'numberedList' |
  'bulletedList' |
  'quote' |
  'divider' |
  'calloutBox' |
  'todoList' |
  'bulletList' |
  'codeBlock' |
  'costomButton' |
  'tableOfContents'

export type Theme = {
  name: string;
  fontFamily: string;
  fontColor: string;
  backgroundColor: string;
  slideBackgroundColor: string;
  accentColor: string;
  gradientBackground?: string;
  sidebarColor?: string;
  navbarColor?: string;
  type: 'light' | 'dark'
}