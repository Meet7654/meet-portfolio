declare module "gsap/SplitText" {
  export class SplitText {
    constructor(target: string | Element | string[], vars?: Record<string, any>);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
    split(vars?: Record<string, any>): void;
  }
}

declare module "gsap/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars?: Record<string, any>): ScrollSmoother;
    static refresh(safe?: boolean): void;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    scrollTop(value?: number): number;
    paused(value?: boolean): boolean;
  }
}
