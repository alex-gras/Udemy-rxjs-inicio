
import { ajax } from 'rxjs/ajax';


const url = 'https:/httpbin.org/delay/1';

// ajax.post( url, {
//     id: 1,
//     nombre: 'alex'
// }, {
//     'mi-token': 'ABC123'
// }).subscribe( console.log );

// ajax.put( url, {
//     id: 1,
//     nombre: 'alex'
// }, {
//     'mi-token': 'ABC123'
// }).subscribe( console.log );

// ajax.delete( url, {
//     'mi-token': 'ABC123'
// }).subscribe( console.log );

// ajax( {
//     url: url,
//     method: 'POST',
//     headers: {
//         'mi-token': 'ABC1234'
//     },
//     body: {
//         id: 1,
//         nombre: 'Alex'
//     }
// }).subscribe( console.log );



ajax( {
    url: url,
    method: 'DELETE',
    headers: {
        'mi-token': 'ABC1234'
    },
    body: {
        id: 1,
        nombre: 'Alex'
    }
}).subscribe( console.log );