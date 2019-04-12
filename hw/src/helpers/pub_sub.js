export default class PubSub {

    static publish(channel, payload = null){
        let e = new CustomEvent(channel, { 
            detail: payload 
        });
        document.dispatchEvent(e);

        // Send message out to low level stuff
        e = new CustomEvent("APP:UPDATE", null);
        document.dispatchEvent(e);
    };

    static subcribe(channel, callback){
        document.addEventListener(channel, callback);
    };
}