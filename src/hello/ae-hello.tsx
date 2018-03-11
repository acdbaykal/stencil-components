import { Component, Prop, State } from '@stencil/core';
@Component({
    tag: 'ae-hello',
    // styleUrl: 'my-app.css'
})
export class AeHello {
// Indicate that name should be a property on our new component
    @Prop() first: string;

    @Prop() last: string;

    @State() isVisible: boolean = true;

    render() {
        return (
            <p>
                Hello, my name is {this.first} {this.last}
            </p>
        );
    }
}