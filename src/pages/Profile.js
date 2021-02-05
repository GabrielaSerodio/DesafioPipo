import React, {Component} from 'react'
import Button from '../components/Button/index.js'
import Input from '../components/Input.js/index.js'



// function Profile() {

//     const [name, setName] = useState("");
//     const [cpf, setCpf] = useState(null);
//     const [adDate, setAdDate] = useState("");
//     const [email, setEmail] = useState("");
//     const [weight, setWeight] = useState(null);
//     const [height, setHeight] = useState(null);
// }


export class Profile extends Component {
    render() {
        return (
            <div>
                <h1>
                Olá AMCE CO
                Para incluir um novo funcionário nos benefícios ​Norte Europa e Dental Sorriso, 
                preencher o formulário com todas as informações.
                </h1>
                <form>
                    <Input  className="input" 
                            type="text"  
                            placeholder=" Nome" 
                    />
                    <Button className="btn"
                            title="Incluir"
                            onClick={console.log('funfando')}/>
                </form>
            </div>
        )
    }
}

export default Profile