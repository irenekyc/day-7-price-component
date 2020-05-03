const toggleBtn = document.getElementById('toggle-price')

const showPrice = (type) =>{
    if(type === "annual"){
        document.getElementById('basic-price').innerText = "199.99"
        document.getElementById('professional-price').innerText = "249.99"
        document.getElementById('master-price').innerText = "399.99"
    }
    else{
        document.getElementById('basic-price').innerText = "19.99"
        document.getElementById('professional-price').innerText = "24.99"
        document.getElementById('master-price').innerText = "39.99"
    }

}

toggleBtn.addEventListener('click', e=>{
    if (toggleBtn.checked){
        showPrice("monthly")
    } else{
        showPrice("annual")
    }
})



