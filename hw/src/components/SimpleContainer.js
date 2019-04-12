import BaseComponent from "./BaseComponent";
import SimpleParagraph from "./SimpleParagraph";

export default class SimpleContainer extends BaseComponent {
    constructor(props){
        super(props);
        this.state = {
            number: 1
        };
        
        this.getParent().addEventListener("click", () => {
            console.log(this.state);
            const { number } = this.state;
            this.setState({number: number + 1});
        });
    }

    render(){
        const p = new SimpleParagraph({number: this.state.number});
        return `<div></div>`;
    };

};