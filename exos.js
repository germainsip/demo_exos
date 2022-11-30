const calcul = ()=>{
    const nb1 = parseInt(document.querySelector('#nb1').value)
    const nb2 = parseInt(document.querySelector('#nb2').value)
    const res1 = document.querySelector('#res')
    res1.innerHTML= "= "+(nb1+nb2)
}



const table = () => {
    const nb1 = parseInt(document.querySelector('#table').value)
    const restable = document.querySelector('#restable')
    restable.innerHTML=''
    for(let i=0;i<=10;i++){
        const p = document.createElement('p')
        p.append(nb1+" X "+i+" = "+(i*nb1))
        restable.append(p)
    }
}


                                            