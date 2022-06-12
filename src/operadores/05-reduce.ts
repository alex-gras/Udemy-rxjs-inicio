import { interval } from "rxjs";
import { reduce, take, tap } from 'rxjs/operators';


const numbers = [1,2,3,4,5];
//reducer en JavaScript
const totalReducer = ( acumulador: number, valorActual: number ) => {
    return acumulador + valorActual;
}

const total = numbers.reduce( totalReducer, 5 );

console.log('total arr: ', total);

//reducer con rxjs
interval(1000).pipe(
    take(4),
    tap( console.log ),
    reduce( totalReducer , 5 )
)
    .subscribe(
        {
            next: val => console.log('next: ', val),
            complete: () => console.log('Complete')
        }
    );


