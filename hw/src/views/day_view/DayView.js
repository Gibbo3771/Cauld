import PubSub from "../../helpers/pub_sub";
import View from "../View";

export default class DayView extends View {
    constructor(props){
        super(props);
    };

    render(){
        const { root } = this.props;
        const { temp_c, feelslike_c, wind_dir, wind_mph } = this.props.current;
        const { name } = this.props.location;
        const { icon, text } = this.props.current.condition;
        console.log(icon);
        this.appendChild(this.createImage(`${icon}`));
        // this.appendChild(this.createElement(`${name}`, 'h2'));
        this.appendChild(this.createElement(`${temp_c}c`, 'p'));
        // this.appendChild(this.createElement(`${feelslike_c}c`, 'p'));
        this.appendChild(this.createElement(`${wind_mph}mph`, 'p'));
        this.appendChild(this.createElement(`${wind_dir}`, 'p'));
        root.appendChild(this.parent);
        root.classList.add("container");
    };

    createElement = (text, type) => {
        const e = document.createElement(type);
        e.textContent = text;
        return e;
    };

    createImage = (src) => {
        const img = document.createElement('img');
        img.src = `http://${src}`;
        return img;
    }
}