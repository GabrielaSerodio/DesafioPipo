import React, {Component} from 'react'
import Button from '../components/Button.js'
import Header from '../components/Header'

export class Home extends Component {
    render() {
        return (
            <section>
                <Header /> 
                <h3>Boas vindas, escolha abaixo a emppresa que deseja incluir novos funcionários nos benefícios dos planos.</h3>
                <div className="div-btn-home">
                <Button className="btn"
                        title="AMCE CO"
                        onClick={console.log('funfando amce co')}/>
                <Button className="btn"
                        title="Tio Patinhas Bank"
                        onClick={console.log('funfando tio patinhas bank')}/>
                </div>
            </section>
        )
    }
}

export default Home