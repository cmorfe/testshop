import React, {Component} from 'react'
import {Button, Card, CardBody, Collapse} from 'reactstrap';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {collapse: false};
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle} style={{marginBottom: '1rem'}}>
                    {this.props.category.name}
                </Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            {this.props.category.sublevels ?
                                (
                                    <ul>
                                        {this.props.category.sublevels.map(cat => (
                                            <li key={cat.id}><Menu category={cat}/></li>))}
                                    </ul>
                                ) : null
                            }
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        )
    }
}