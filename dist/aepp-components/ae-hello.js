/*! Built with http://stenciljs.com */
const { h } = window.AeppComponents;

class AeHello {
    render() {
        return (h("div", null,
            h("header", null,
                h("h1", null, "Hekkjhoiuoius"))));
    }
    static get is() { return "ae-hello"; }
}

export { AeHello };
