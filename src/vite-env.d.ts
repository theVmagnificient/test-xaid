/// <reference types="vite/client" />

// Custom elements (Spline)
// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & { url?: string },
      HTMLElement
    >;
  }
}
