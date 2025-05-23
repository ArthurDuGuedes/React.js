import ReactDOM from "react-dom/client";
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';



const CardProds = ({ produto }) => {
  return (
    <Card sx={{  width: 320, marginBottom: 2, backgroundColor: '#1c1c1c', color: '#fff'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={produto.imagem}
          alt={produto.nome}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {produto.nome}
          </Typography>
          <Typography variant="body1" color="text.info">
            {produto.descricao}
          </Typography>
          <Typography variant="h6" color="primary">
            R$ {produto.preco}
          </Typography>
          <div onClick={() => alert("Produto comprado com sucesso!")}  className="comprar">
            Comprar
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};


//Exercicio 1
// const UserData = () => {
//     return (
//         <div className="userData">
//             <h2>User Data</h2>
//             <h3>WiiDante</h3>
//             <p>Full Stack Developer</p>
//             <p>23 anos</p>
//         </div>
//     )
// }

// const Imagem = () => {
//     return (
//         <div className="userImage" >
//             <img   src="https://pbs.twimg.com/media/FJvryQqX0AIF8T4.jpg" alt="Imagem" />      
//         </div>
        
//     );
// }

//Exercicio 2
// const Painel = (props) => {
//     return(
//         <div>
//             <h2>Bem Vindo</h2>
//             {props.children}
//         </div>
//     )
// }

const produtos = [
  {
    nome: "Notebook",
    preco: 2000,
    descricao: "Notebook 15 polegadas",
    imagem: "https://img.global.news.samsung.com/br/wp-content/uploads/2019/01/Samsung-Notebook-9-Pro.png"
  },
  {
    nome: "Mouse",
    preco: 50,
    descricao: "Mouse sem fio",
    imagem: "https://a-static.mlcdn.com.br/1500x1500/mouse-sem-fio-2-4-ghz-optico-recarregavel-gamer-usb-led-rgb-wirelles-usb-notebook-mouse-ultra-fino-wireless/utilcomvariedades/0116/36441a6a0e78795f20426d3a1dc194e1.jpeg"
  },
  {
    nome: "Teclado",
    preco: 100,
    descricao: "Teclado sem fio",
    imagem: "https://cdn.awsli.com.br/1318/1318167/produto/313612867/1--1--5bk0ri9nwu.jpg"
  },
];





function App2() {
    
    return (
    <div style={{ padding: "20px"  }}>
        <h1>Lista De Produtos</h1>
        <div className="cardsContainer" >
          {produtos.map((produto, index) => (
              <CardProds key={index} produto={produto} />
          ))}
        </div>
    </div>


        
        //Exercicio 1 
        // <div >
        //     <div className="container" >
        //         <Imagem/>
        //         <UserData/>
        //     </div>
        //     <div className="container" >
        //         <Imagem/>
        //         <UserData/>
        //     </div>
        // </div>


        //Exercicio 2
        // <Painel>
        //     <p>Seja Muito Bem Vindo ao React</p>
        //     <button>Entrar</button>
        // </Painel>
    );
}

export default App2