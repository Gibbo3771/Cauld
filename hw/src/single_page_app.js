import PubSub from "./helpers/pub_sub";

export default class SinglePageApp {
    constructor(App){
        this.root = document.getElementById('root');
        document.body.appendChild(this.root);
        this.children = new Array();
        PubSub.subcribe("APP:UPDATE", this.update);
        PubSub.subcribe("APP:COMPONENT_ADDED", (evt) => this.addComponent(evt));
        PubSub.subcribe("APP:COMPONENT_REMOVED", this.destroyComponent);
        this.app = new App(this.createDefaultProps());
        this.root.appendChild(this.app.getParent());
    };

    update = () => {
        this.children.forEach((c) => {
         console.log("Checking if component needs updated:", c);
            c.update();
        });
    };

    addComponent = (payload) => {
        console.log("Adding component")
        this.children.push(payload.detail.component)
    };

    destroyComponent = (payload) => {
        this.children = this.children.filter((component) => {
            return component !== payload.component;
        });
    };

    createDefaultProps = () => {
        return {
            root: this.root,
            children: this.children
        };
    }

};