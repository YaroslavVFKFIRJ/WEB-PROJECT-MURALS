let arr=[];
arr[0]=document.querySelector('.f1');
arr[1]=document.querySelector('.f2');
arr[2]=document.querySelector('.f3');
arr[3]=document.querySelector('.f4');
arr[4]=document.querySelector('.f5');
arr[5]=document.querySelector('.f6');

arr.forEach(el=>
el.onclick=()=>
{
    for(let i=0;i<=arr.length;i++){
        arr[i].classList.remove('down');
        arr[i].classList.remove('up');
        arr[i].classList.remove('anim');
        if(arr[i]==el){
            arr[i].classList.add('up')
            arr[i].classList.add('anim')
        }
        else{
            arr[i].classList.add('down')
        }

    }
}
)
/**
 * Created by User-ПК on 23.08.2023.
 */
