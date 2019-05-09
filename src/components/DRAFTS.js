constructor(props) {
    super(props);
    this.state = {
        value: 0
    }
    this.makeRegister = this.makeRegister.bind(this);
}


makeRegister() {
    this.setState({value: 'register'})
}

makeLogin() {
    this.setState({value: 'login'})
}