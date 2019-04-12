import BaseComponent from "./BaseComponent";

export default class SimpleParagraph extends BaseComponent {
    constructor(props){
        super(props);

    };

    render(){
        return `<p>${this.props.number}</p>`;
    }
}