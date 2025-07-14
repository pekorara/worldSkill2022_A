document.querySelectorAll('a').forEach(z => {
    z.addEventListener('click', async e => {
        e.preventDefault();
        history.pushState(null, '', e.target.href);
        const url = e.target.href.split('/').pop();
        fetch(url)
            .then(z => z.text())
            .then(z => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(z, 'text/html');
                const newMain = doc.querySelector('main');
                if (newMain) {
                    document.querySelector('main').innerHTML = newMain.innerHTML;
                }
            })
    });
});
