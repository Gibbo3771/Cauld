import PubSub from "../helpers/pub_sub";

export default class BaseComponent {
    constructor(){
        this.parent = document.createElement('div');
        this.snapshot = null;
        PubSub.publish("APP:COMPONENT_ADDED", {component: this});
    }
    
    render() {

    };

    destroy() {
        while(parent.firstChild) parent.removeChild(parent.firstChild);
    };

    update() {
        if(this.parent.innerHTML !== this.snapshot){
            this.destroy();
            this.parent.appendChild(this.render());
            this.snapshot = this.parent.innerHTML;
        };
    };

    getParent() {
        return this.parent;
    }

}