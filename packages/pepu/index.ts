import type { App } from "vue";
import Pepu from "./src/index";

export default {
    install: (app: App) => {
        // @ts-ignore
        app.use(Pepu)
    }
}