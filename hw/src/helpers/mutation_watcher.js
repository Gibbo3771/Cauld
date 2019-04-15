import { publish, subscribe } from "./pub_sub";

// DEPRECIATED
export default class MutationWatcher {
    constructor(target){
        const config = { attributes: true, childList: true, subtree: true };
        this.observer = new MutationObserver(() => this.notify());
        this.observer.observe(target, config);
    }

    notify = () => {
        publish("APP:UPDATE");
    }

    disconnect = () => {
        this.observer.disconnect();
    }
}