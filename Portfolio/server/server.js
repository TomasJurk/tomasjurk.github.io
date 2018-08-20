const express = require('express');
const app = express();

// const cors = require('cors'); npm install cors
// app.use(cors()); CROSS ORIGIN BLA BLA BLA.......

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.json({'msg': 'hello world'});
});

app.listen(3201, () => {
    console.log('Server is working on port 3201');
});

// COMPONENT
// import { HttpClient } from '@angular/common/http';
// constructor(
//     private http: HttpClient
//   ) { }


// getTestData() {
//     this.http.get('http://localhost:3201').subscribe(data => {
//         console.log(data);
//     });
// }


// app.module
// import { HttpClientModule } from '@angular/common/http';

// @NgModule({
//     imports: [
//       HttpClientModule
//     ]
//   })