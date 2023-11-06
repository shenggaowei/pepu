import * as components from "./index";

declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        SumButton: typeof components.Button;
    }
}
export { };

