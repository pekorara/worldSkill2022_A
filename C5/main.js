const box = document.getElementById('color-input');
document.querySelector('.error-result').style.display = 'none';
box.addEventListener('input',z => {
    const data = encodeURIComponent(z.target.value);
    fetch(`back.php?data=${data}`)
        .then(z => z.json())
        .then(z => {
            const divList = document.querySelector('.success-result').querySelectorAll('div');
            if(z.message === 'success'){
                document.querySelector('.error-result').style.display = 'none';
                document.querySelector('.success-result').style.display = 'block';
                divList[0].textContent = "The color format is : " + z.type;
                divList[1].textContent = "HEX value : " + z.HEX;
                divList[2].textContent = "RGB value : " + z.RGB;
            }else{
                document.querySelector('.error-result').style.display = 'block';
                document.querySelector('.success-result').style.display = 'none';
                divList[0].textContent = '';
                divList[1].textContent = '';
                divList[2].textContent = '';
            }
        });
})