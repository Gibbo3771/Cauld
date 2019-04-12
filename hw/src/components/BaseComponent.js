import PubSub from "../helpers/pub_sub";
import MutationWatcher from "../helpers/mutation_watcher";

export default class BaseComponent {
    constructor(props){
        console.log("Base component created");
        this.parent = document.createElement('div');
        PubSub.publish("APP:COMPONENT_ADDED", {component: this});
        this.state = {};
        this.prevState = this.state;
        this.props = props;
        this.watcher = new MutationWatcher(this.parent);
    };
    
    render() {
        return null;
    };

    destroy = () => {
        while(this.parent.firstChild) this.parent.removeChild(this.parent.firstChild);
    };

    update = () => {
        if(this.stateDidChange()){
            console.log("Component is updating", this)
            this.prevState = this.state;
            this.destroy();
            const div = document.createElement('div');
            div.innerHTML = this.render();
            this.parent.appendChild(div);
        }
    };

    getParent = () => {
        return this.parent;
    };

    stateDidChange = () => {
        return JSON.stringify(this.state) !== JSON.stringify(this.prevState);
    }

    setState = (state) => {
        this.prevState = this.state;
        this.state = state;
        PubSub.publish("APP:UPDATE");

    }

    getState = () => {
        return this.state;
    }

}