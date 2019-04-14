import PubSub from "../helpers/pub_sub";
import MutationWatcher from "../helpers/mutation_watcher";

export default class View {
    constructor(props){
        this.parent = document.createElement('div');
        this.state = {};
        this.prevState = null;
        this.props = props;
    };
    
    render() {
        return null;
    };

    destroy = () => {
        while(this.parent.firstChild){
            this.parent.removeChild(this.parent.firstChild)
        };
    };

    getParent = () => {
        return this.parent;
    };

    stateDidChange = () => {
        return JSON.stringify(this.state) !== JSON.stringify(this.prevState);
    };

    setState = (state) => {
        this.prevState = this.state;
        this.state = state;
        PubSub.publish("APP:UPDATE");
    };
}