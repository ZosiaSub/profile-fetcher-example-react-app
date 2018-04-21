import React, { Component } from 'react';

//styles
import { Container, UserLoginBox, UserInput, UserButton, UsersList } from "./home.style";
import { Wrapper } from "../../utils/styles/global.style";

//components
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

class Home extends Component {
    state = {
        users: [],
        userValue: "",
    };

    componentDidMount() {
        console.log('state component mount :', this.state)
    };

    componentDidUpdate() {
        console.log('state component mount :', this.state)
    };

    addNewUser = () => {
        this.setState({
            users: [...this.state.users, this.state.userValue],
            userValue: "",
        })
    };

    userOnChange = (event) => {
        this.setState({userValue: event.target.value});
    };

    renderUsers = () => this.state.users.map((item) => <div>{item}</div>);



    render() {
        return (
            <Container>
                <Header />
                <Wrapper>
                    <UserLoginBox>
                        <div>Please add GitHub user name to observable.</div>
                        <UserInput value={this.state.userValue} onChange={this.userOnChange}/>
                        <UserButton
                            onClick={this.addNewUser}>
                            Add user
                        </UserButton>
                    </UserLoginBox>
                    <UsersList>{this.renderUsers()}</UsersList>
                </Wrapper>
                <Footer />
            </Container>
        );
    }
}

export default Home;