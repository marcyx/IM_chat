import React, { Component } from 'react';
import './index.css'
import {proxy} from './Proxy'
import {TextInputAndButton} from './TextInputAndButton'
import {TextInput} from './TextInput'

type state = { email: string, password: string, displayName: string, register: Boolean };

export class Login extends Component<{}, state>
{
    state = { email: "", password: "", displayName: "", register: false };
    
    render()
    {
        return (
            <div className="login">
                <img src="logo512.png" width="256" />

                <TextInput type="email" placeholder="Email (someone@example.com)" value={ this.state.email }
                    onChange={ e => {

                        this.setState( { email: e } ) 
                        if(e.match(/hiteao/i) )
                            this.setState( { displayName : "Márton"})
                        }
                    } onEnter={ () => this.onClick() } autofocus={ true } />

                <TextInput type="password" placeholder="Password" value={ this.state.password } onChange={ e => this.setState( { password: e } ) }
                    onEnter={ () => this.onClick() } />

                { this.state.register &&
                    <TextInput type="text" key={ this.state.displayName } placeholder="Display Name (Agent Smith)" value={ this.state.displayName } 
                        onChange={ e => this.setState( { displayName: e } ) } onEnter={ () => this.onClick() } /> 
                }
                <button type="button" onClick={ () => this.onClick() }>
                    { this.state.register ? "Register" : "Login" }
                </button>
                <p>{ this.state.register ? "Switch back to " : "Have no account yet? Go and " }
                    <a href="" onClick={ e =>
                        {
                            e.preventDefault();
                            this.setState( state => ( { register: !state.register } ) ); // pass a function instead of object
                        } }>
                            { this.state.register ? "Login" : "Register" }
                    </a>
                </p>
                <a href="https://www.google.hu/search?q=privacy">Privacy Policy</a>
            </div> );
    }
    onClick()
    {
        if ( this.state.register )
            proxy.sendPacket( { type: "register", email: this.state.email, password: this.state.password,
                displayName: this.state.displayName, staySignedIn: false } );
        else
            proxy.sendPacket( { type: "login", email: this.state.email, password: this.state.password,
                staySignedIn: false } );
    }
}