export class AeHello {
    render() {
        return (h("div", null,
            h("header", null,
                h("h1", null, "Hekkjhoiuoius"))));
    }
    static get is() { return "ae-hello"; }
}
