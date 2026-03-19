declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(target: string | Element | string[], vars?: Record<string, any>);
    chars: Element[];
    words: Element[];
    lines: Element[];
    revert(): void;
    split(vars?: Record<string, any>): void;
  }
}
