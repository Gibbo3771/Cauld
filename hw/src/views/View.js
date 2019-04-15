import MutationWatcher from "../helpers/mutation_watcher";

export default class View {
    constructor(props){
        this.props = props;
        this.parent = this.props.parent;
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

    appendChild = (child) => {
        this.parent.appendChild(child);
    };
}