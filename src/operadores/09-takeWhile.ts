import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';


const click$ = fromEvent<PointerEvent> (document, 'click');

click$.pipe(
    map( ({x, y}) => ({x, y})),
    // takeWhile( ({ y }) => y <=150  )

    // con true incluye el valor que rompe la condición
    takeWhile( ({ y }) => y <=150, true  )

).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
})