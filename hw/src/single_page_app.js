import PubSub from "./helpers/pub_sub";

export default class SinglePageApp {
    constructor(App){
        this.root = document.getElementById('root');
        document.body.appendChild(this.root);
        this.app = new App({parent: this.root});
        this.root.appendChild(this.app.getParent());
        this.render();
    };

    render(){
        this.app.render();
    };

};