import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

import {
  Form,
  FormInput,
  LoginContainer,
  Image,
  InputContainer,
  SubmitButton,
  ShowContainer,
  ShowPassword,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  changeInput = event => {
    console.log(event.target.value)
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    console.log(event.target.value)
    this.setState({password: event.target.value})
  }

  changeShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {
      username,
      password,
      showSubmitError,
      errorMsg,
      showPassword,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <Header />
        <Form>
          <InputContainer>
            <Image src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
          </InputContainer>
          <InputContainer>
            <label htmlFor="username">Username</label>
            <FormInput
              type="text"
              value={username}
              id="username"
              placeholder="Username"
              onChange={this.changeInput}
            />
            <label htmlFor="password">Password</label>
            <FormInput
              type={showPassword ? 'text' : 'password'}
              value={password}
              id="password"
              placeholder="Password"
              onChange={this.changePassword}
            />
            <ShowContainer>
              <ShowPassword
                type="checkbox"
                value={showPassword}
                id="showPassword"
                onClick={this.changeShowPassword}
              />
              <label htmlFor="showPassword">Show Password</label>
            </ShowContainer>
            {showSubmitError && <p>{errorMsg}</p>}
            <SubmitButton onClick={this.submitForm}>Submit</SubmitButton>
          </InputContainer>
        </Form>
      </LoginContainer>
    )
  }
}

export default Login
