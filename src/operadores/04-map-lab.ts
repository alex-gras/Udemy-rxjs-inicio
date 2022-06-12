import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';


const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse urna nulla, consequat a auctor a, malesuada nec leo. Mauris elementum metus et ipsum feugiat, et luctus purus consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin quis semper arcu. Cras sollicitudin diam ut neque volutpat accumsan. Vestibulum nec sem et lectus convallis interdum interdum in velit. Nullam vel sapien justo. Cras aliquet dolor vel vestibulum luctus. Duis sagittis semper massa, et molestie lorem lacinia et. Nam ultrices, erat eu placerat posuere, massa ipsum efficitur velit, eget eleifend ligula turpis quis orci. Cras at orci magna. Aenean accumsan, odio nec pharetra rutrum, leo felis aliquam nunc, vestibulum facilisis libero nibh vitae erat. Suspendisse fringilla varius lacus vel pharetra. Integer porta elit dui, a interdum diam ultrices sit amet. Vestibulum et vehicula nunc.
<br /><br />
Pellentesque ultricies urna vel purus condimentum vulputate. Vivamus dapibus sapien ut luctus convallis. Aenean et turpis dolor. Suspendisse potenti. Donec condimentum aliquet posuere. Nunc laoreet enim sed nisl mollis, vel feugiat mauris aliquet. Etiam nec risus enim. Nulla et lacus vitae urna tincidunt hendrerit. Etiam eget eleifend tortor. Vestibulum lacinia, odio a auctor eleifend, tellus quam sodales quam, at facilisis mi turpis sit amet orci.
<br /><br />
Vivamus eget erat eu metus lacinia fringilla id finibus velit. Curabitur quis euismod augue, at fermentum libero. Curabitur cursus consequat tincidunt. Phasellus sed neque semper nisi facilisis tincidunt eu non dolor. Aliquam egestas felis quis nunc sagittis, eu imperdiet nisl pulvinar. Nunc et varius ligula. Nulla aliquet libero non libero cursus, sed pulvinar tellus luctus.
<br /><br />
Aenean at tincidunt odio. Quisque ultricies, velit eget pulvinar molestie, quam lacus laoreet enim, ut lobortis ligula mauris in justo. Donec suscipit ut risus gravida malesuada. Cras consequat felis vitae urna laoreet vestibulum in gravida nisl. Integer est lorem, sollicitudin et sagittis vel, aliquet condimentum nibh. Suspendisse potenti. Vivamus interdum vestibulum urna, a mollis dui pharetra in. Nunc consequat eu sem nec rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse libero odio, vestibulum commodo quam et, imperdiet suscipit enim. Duis molestie eros imperdiet tincidunt scelerisque.
<br /><br />
Quisque quis felis sed augue dignissim sagittis. Morbi vitae leo purus. Nunc ut dapibus felis. Duis bibendum dolor sed magna varius, at tristique elit eleifend. Aliquam posuere varius turpis vitae posuere. Ut et libero convallis, dapibus ligula at, faucibus ex. Sed scelerisque sit amet quam sit amet auctor. Sed convallis, magna nec condimentum efficitur, nibh dolor faucibus tortor, ut elementum est tellus eu libero. Duis maximus, lectus vel egestas vulputate, orci metus malesuada augue, ac tempor augue turpis sed lacus. Vivamus vitae enim sed risus facilisis dictum vitae et libero. Cras venenatis purus vel lectus semper fringilla. Donec efficitur lorem sit amet felis consequat, eget volutpat est accumsan. Maecenas in urna eget sapien convallis auctor. Quisque sollicitudin metus sem, vel aliquam nisl porttitor at. Nulla eget bibendum ipsum, in ullamcorper lacus.
<br /><br />
Donec sit amet lacus auctor felis porta dignissim rutrum at tortor. Morbi finibus pharetra ex, eu vulputate urna tincidunt sit amet. Ut volutpat eget erat et condimentum. Praesent non lacus quis ex dignissim tempus. Nam quis tortor vitae velit interdum sollicitudin. Mauris posuere diam augue, quis convallis lorem feugiat a. In at metus gravida, euismod erat non, pellentesque ante. Fusce vitae nisl risus.
<br /><br />
Praesent mattis odio nec lobortis laoreet. Nulla condimentum purus purus, molestie semper elit vulputate ac. Pellentesque pulvinar lobortis suscipit. Curabitur eget tempor dolor. Fusce laoreet, purus id aliquam condimentum, ante lorem luctus justo, nec tempus eros elit vitae augue. Sed ullamcorper quam elit, a convallis odio iaculis quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus leo, imperdiet vitae elit vitae, cursus euismod elit. Aliquam et mi eu odio consequat hendrerit.
<br /><br />
Ut sit amet urna vel ligula condimentum feugiat. Mauris vestibulum mattis est, sed commodo odio dapibus sollicitudin. Donec consectetur libero arcu, et blandit lectus sollicitudin ut. Nam vel faucibus odio. Donec mollis lacus id rutrum vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam et euismod lacus. Aliquam in efficitur nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla ac tempor urna. Nullam at volutpat felis. Integer euismod bibendum rutrum. Suspendisse egestas odio eget dapibus varius. Quisque pharetra nec arcu eget dapibus.
`;

const body = document.querySelector('body');
body.append(texto);

const progresBarr = document.createElement('div');
progresBarr.setAttribute('class', 'progress-bar');

body.append(progresBarr);

//funcion que haga el cálculo

const calcularPorcentajeScroll = ( event ) => {
    const { 
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    // console.log ({
    //     scrollTop,
    //     scrollHeight,
    //     clientHeight
    // })
    return ( scrollTop / (scrollHeight - clientHeight) ) * 100
}

//streams
const scroll$ = fromEvent(document, 'scroll');

// scroll$.subscribe(console.log); 

const progress$ = scroll$.pipe(
   //map (event => calcularPorcentajeScroll( event ))
    map ( calcularPorcentajeScroll ),
    tap( console.log )
);


progress$.subscribe( porcentaje => {
    progresBarr.style.width = `${ porcentaje }%` ;
});