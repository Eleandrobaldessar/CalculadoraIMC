import React, { useState } from "react";
import styles from './Calculo.module.css';

export const CalculoIMC = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calcularImc = () => {
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);

        if (pesoNum > 0 && alturaNum > 0) {
            const imc = pesoNum / (alturaNum * alturaNum);
            const formattedImc = imc.toFixed(2);
            setResultado(formattedImc);

            // Classificação do IMC
            let classif = '';
            if (imc < 18.5) {
                classif = 'Abaixo do peso';
            } else if (imc >= 18.5 && imc < 24.9) {
                classif = 'Peso normal';
            } else if (imc >= 25 && imc < 29.9) {
                classif = 'Sobrepeso';
            } else {
                classif = 'Obesidade';
            }
            setClassificacao(classif);
        } else {
            setResultado('Entrada inválida');
            setClassificacao('');
        }
    };

    return (
        <div className={styles.campos}>
            <input
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                placeholder="Peso (Kg)"
            />
            <input
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                placeholder="Altura (m)"
            />
            <button onClick={calcularImc}>Calcular</button>

            {resultado !== null && (
                <div className={styles.resultado}>
                    <h1>IMC: {resultado}</h1>
                    <p>Classificação: {classificacao}</p>
                </div>
            )}
        </div>
    );
};
