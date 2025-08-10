// Include DOM lib types for client-only plugins
/// <reference lib="dom" />

// Locomotive Scroll has no bundled types in v4
declare module 'locomotive-scroll' {
  export default class LocomotiveScroll {
    constructor(options: any)
    update(): void
    destroy(): void
  }
}


