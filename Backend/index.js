const express=require('express');
const app = express();

const morgan= require('morgan');
app.set('puerto', 2023);
app.use(morgan('dev'));

app.get('/hola', (req , res)=>{
    res.send("Hola gente, esta entrando por aca")
})


app.post('/metodo', (req , res)=>{
    res.send("Hola gente, esto ingreso aca ahora")
})


app.listen(app.get('puerto'), ()=>{
    console.log('El servidor del profe eta corriendo', app.get('puerto'))
});

