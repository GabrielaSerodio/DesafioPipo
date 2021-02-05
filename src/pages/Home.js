import React, {Component} from 'react'
import Button from '../components/Button'
import Header from '../components/Header'
import './style.css'

export class Home extends Component {
    render() {
        return (
            <section>
                <Header /> 
                <h4>Boas vindas, escolha abaixo a empresa que deseja incluir novos funcionários nos planos de benefícios.</h4>
                <div className="div-btn-home">
                <Button className="btn"
                        title="AMCE CO"
                        onClick={console.log('funfando amce co')}/>
                <Button className="btn"
                        title="Tio Patinhas Bank"
                        onClick={console.log('funfando tio patinhas bank')}/>
                </div>
                <div className="div-footer">
                <img src="https://global-uploads.webflow.com/5ee0d13e1d0466f2353dcb99/5fabf05493973c5e5d17cfc7_Menina%20%E2%80%93%C2%A0Pipo%20Sau%CC%81de.svg" 
                     alt="mulher-desenho"
                     className="img img-woman" />
                </div>     
            </section>
        )
    }
}

export default Home

