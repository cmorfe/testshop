import React, {Component} from 'react';
import './App.css';

class App extends Component {
    renderCategories(category) {
        if (category.sublevels) {
            return (
                <div>
                    <strong>{category.name}</strong>
                    <ul>
                        {category.sublevels.map(s => (<li key={s.id}>{this.renderCategories(s)} </li>))}
                    </ul>
                </div>
            );
        }
        else {
            return <p>{category.name}</p>;
        }
    };

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">Bienvenido a TestShop</h1>
        </header>
        <p className="App-intro">
            Conoce los productos que tenemos para ti:
        </p>
          {this.renderCategories(this.props.root)}
      </div>
    );
  }
}

export default App;
