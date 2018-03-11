export class AeHello {
    constructor() {
        this.isVisible = true;
    }
    render() {
        return (h("p", null,
            "Hello, my name is ",
            this.first,
            " ",
            this.last));
    }
    static get is() { return "ae-hello"; }
    static get properties() { return { "first": { "type": String, "attr": "first" }, "isVisible": { "state": true }, "last": { "type": String, "attr": "last" } }; }
}
