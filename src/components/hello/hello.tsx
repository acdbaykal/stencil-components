import { Component } from '@stencil/core';


@Component({
    tag: 'ae-hello',
    // styleUrl: 'my-app.css'
})
export class Hello {

    render() {
        return (
            <div>
                <header>
                    <h1>Hello</h1>
                </header>
            </div>
        );
    }
}
