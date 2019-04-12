import PubSub from "./helpers/pub_sub";

export default class SinglePageApp {
    constructor(app){
        this.root = document.createElement('div');
        this.components = [];
        this.init(app);
    };

    // Setup code, keep constructor cleanish
    init(app){
        PubSub.subcribe("APP:UPDATE", this.update);
        PubSub.subcribe("APP:COMPONENT_ADDED", this.addComponent);
        PubSub.subcribe("APP:COMPONENT_REMOVED", this.destroyComponent);
        this.root.appendChild(app.getParent());
        PubSub.publish("APP:CREATED");
    }

    update(){
        this.components.forEach((c) => {
            c.update();
        });
    };

    addComponent(payload){
        this.components.push(payload.component)
    };

    destroyComponent(payload){
        this.components = this.components.filter((component) => {
            return component !== payload.component;
        });
    };

};