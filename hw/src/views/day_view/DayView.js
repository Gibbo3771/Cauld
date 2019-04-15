import PubSub from "../../helpers/pub_sub";
import View from "../View";

export default class DayView extends View {
    constructor(props){
        super({...props, parent: document.getElementById('current-day')});
    };

    render(){
        
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