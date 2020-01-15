import React, {Component} from 'react';
import './styles.css';
import Button from '../components/Button/index';
import Display from '../components/Display/index';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0
}
export default class Calculator extends Component {
    
    state = {...initialState};

    constructor (props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this); 
        this.setOperation = this.setOperation.bind(this); 
        this.addDigit = this.addDigit.bind(this); 
    }

    clearMemory(){
        this.setState({...initialState});
    }

    setOperation(operation){

    }

    addDigit(n){
        //Se eu receber um dígito que é um ponto e já tiver um ponto no display, ignore.
        if(n === '.' && this.state.displayValue.includes('.')) return;
        
        //clearDisplay vai funcionar quando o valor no display for zero ou quando o método clearDisplay for true.
        //Ele evita o zero à esquerda
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
        
        //Variável do valor atual. Se clearDisplay for true, ele retorna vazio
        //se não, ele retorna o valor do display lá do state.
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        
        //O valor do display será ele mesmo mais o valor clicado pelo usuário
        const displayValue = currentValue + n;


        this.setState({displayValue, clearDisplay: false})

        if (n !== '.') {
            //Armazenando no i qual o índice dentro do array
            const i = this.state.current;
            //Pega a string que é armazenada em displayValue, transforma em um número 
            //e armaneza nessa variável.
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState({values});

        }

    }
    
    render() {
       
        return (
            <div className="calculator">
                <Display value={this.state.displayValue}/>
                <Button label='AC' click={this.clearMemory} triple/>
                <Button label='/' click={this.setOperation} operation/>
                <Button label='7' click={this.addDigit}/>
                <Button label='8'click={this.addDigit}/>
                <Button label='9'click={this.addDigit}/>
                <Button label='*' click={this.setOperation} operation/>
                <Button label='4'click={this.addDigit}/>
                <Button label='5'click={this.addDigit}/>
                <Button label='6'click={this.addDigit}/>
                <Button label='-' click={this.setOperation} operation/>
                <Button label='1'click={this.addDigit}/>
                <Button label='2'click={this.addDigit}/>
                <Button label='3'click={this.addDigit}/>
                <Button label='+' click={this.setOperation} operation/>
                <Button label='0'click={this.addDigit} double/>
                <Button label='.'click={this.addDigit}/>
                <Button label='=' click={this.setOperation} operation/>
            </div>
        );
    }
}