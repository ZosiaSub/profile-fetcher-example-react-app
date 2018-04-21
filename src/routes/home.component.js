import React, { Component } from 'react';
import { Container } from "./home.style";

class Home extends Component {
    state = {
        toggleBackground: true,
    };

    componentDidUpdate() {
        console.log(this.state);
    }

    toggleBackground = () => {
        this.setState({
            toggleBackground: !this.state.toggleBackground,
        })
    }

    render() {
        return (
            <Container onClick={this.toggleBackground} active={this.state.toggleBackground}>
                home
            </Container>
        );
    }
}

export default Home;