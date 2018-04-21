import React, { Component } from 'react';

//style
import { Container } from "./footer.style";
import { Wrapper } from '../../utils/styles/global.style';

class Footer extends Component {

    render() {
        return (
            <Container>
                <Wrapper>
                    Copyright 04/2018 - Zofia Subocz
                </Wrapper>
            </Container>
        );
    }
}

export default Footer;