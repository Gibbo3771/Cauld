
export const publish = (channel, payload) => {
    let e = new CustomEvent(channel, { 
        detail: payload 
    });
    document.dispatchEvent(e);
};

export const subscribe = (channel, callback) => {
    document.addEventListener(channel, callback);
};

// export default { publish, subscribe };