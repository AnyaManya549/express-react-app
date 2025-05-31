const express = require('express'); //Строка 1
const path = require('path')
const fs = require('fs')
const app = express(); //Строка 2
const port = process.env.PORT || 3000; //Строка 3

app.use(express.static(path.join(__dirname, 'client/build')));
//Для корректного получения данных из формы
app.use(express.urlencoded({ extended: false }))
//Для получения данных от клиента в формате .json
app.use(express.json())
// Сообщение о том, что сервер запущен и прослушивает указанный порт 
app.listen(port, () => console.log(`Listening on port ${port}`)); //Строка 6


//fs.writeFileSync('db.json', '[]', { encoding: 'utf-8', flag: 'w' });




// Создание GET маршрута
app.get('/', (req, res) => { //Строка 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Строка 10
}); //Строка 11


app.put('/add', (req, res)=>{
  let data = JSON.parse(fs.readFileSync('db.json'))
  data[data.length]=(req.body)
  console.log(req.body)
  fs.writeFileSync('db.json', JSON.stringify(data), { encoding: 'utf-8', flag: 'w' });
  res.send()
})

app.post('/get', (req, res)=>{
  console.log(req.body);
  res.sendFile(`${__dirname}/db.json`)
})

app.post('/add', (req, res)=>{
  let data = JSON.parse(fs.readFileSync('db.json'))
  data[data.length]=(req.body)
  console.log(req.body)
  fs.writeFileSync('db.json', JSON.stringify(data), { encoding: 'utf-8', flag: 'w' });
  res.sendFile(`${__dirname}/db.json`)
})

