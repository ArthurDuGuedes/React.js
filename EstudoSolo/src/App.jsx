import ReactDOM from "react-dom/client";
import React from "react";

// Componente que exibe o resultado da soma de dois números recebidos via props
const Resultado = (props) => {
    return (<p>Resultado é igual a {props.num1 + props.num2}</p>);
}

// Componente que exibe um texto e o componente Resultado
const MainContent = () => {
    return (
        <div>
            <h1>Olá React</h1>
            <Resultado num1={1} num2={51} />
            <p className="paragrafo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In porro provident pariatur, saepe itaque nobis est odit, ut autem dolorum officia officiis inventore, neque dolore deleniti nostrum nemo a consequuntur?
            </p>
        </div>
    );
};

// Componente com imagens e textos
const Section = () => {
    return (
        <div className="header">
            <div>
                <img src="https://i.pinimg.com/564x/60/38/bd/6038bdd7cf82ab07570cb482fa533110.jpg" alt="Imagem" />
            </div>
            <div>
                <img src="https://i.redd.it/sukuna-10-shadows-only-vs-frieren-v0-rw7xvaawh7he1.png?width=1200&format=png&auto=webp&s=d08dca3bf751be6302a6afa7e53d29ba01c4c743" alt="Imagem" />
            </div>
        </div>
    );
};

const Text = (props) => {
    return <h2>{props.texto}</h2>
}


const BemVindo = () => {
    return(<div>
        <Text texto="Bem vindo ao React" />
    </div>)
}

// Componente vazio que pode ser usado para adicionar mais conteúdo
const OdeioReact = () => {
    return <div className="container"></div>;
};

// Componente principal do aplicativo
const App = () => {
    return (
        <div>
            <h1>Eu odeio React</h1>
            <Section />
            <MainContent />
            <OdeioReact />
            <BemVindo/>
        </div>
    );
};

export default App;
