let alert_box = document.getElementById('alert');
let parent = document.getElementById('parent');
for(let i=0; i <=100 ; i++){
    if(i % 2 == 0)
    {
        const newtag = document.createElement('div');
        newtag.classList.add('alert');
        newtag.classList.add('alert-warning');
        newtag.classList.add('w-50');
        newtag.classList.add('mx-auto');
        newtag.innerHTML = `${i} یک عدد زوج میباشد`;
        parent.appendChild(newtag);
    }
}