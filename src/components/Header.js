import React, {Component} from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Bienvenido a TestShop</h1>
                </header>

                <p className="App-intro">
                    Conoce los productos que tenemos para ti:
                </p>
            </div>
        )
    }
}
