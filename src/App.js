import React, {Component} from 'react';
import {Col, Container, Row} from 'reactstrap';
import './App.css';
import Header from "./components/Header";
import Menu from "./components/Menu";
import ProductsContainer from './containers/ProductsContainer'
import CartContainer from './containers/CartContainer'
import categories from './data/categories.json';

class App extends Component {
    render() {
        let menu = {
            id: 0,
            name: 'Categorias:',
            sublevels: categories
        };

        return (
            <div>
                <Header/>
                <Container>
                    <Row>
                        <Col xs={12} md={4}>
                            <Menu category={menu}/>
                        </Col>
                        <Col xs={12} md={4}>
                            <ProductsContainer/>
                        </Col>
                        <Col xs={12} md={4}>
                            <CartContainer/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
/**
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
 **/