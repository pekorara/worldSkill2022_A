const pages = {
    'a.html' : {
        'title' : 'A html',
        'h2' : 'A Page',
        'p' : 'This is a page content',
        'backgroundColor' : '#f99',
    },
    'b.html' : {
        'title' : 'B html',
        'h2' : 'B Page',
        'p' : 'This is b page content',
        'backgroundColor' : '#9f9',
    },
    'c.html' : {
        'title' : 'C html',
        'h2' : 'C Page',
        'p' : 'This is c page content',
        'backgroundColor' : '#99f',
    }
}

document.querySelectorAll('a').forEach(z => {
  z.addEventListener('click',e => {
      e.preventDefault();
      history.pushState(null,'',e.target.href);
      const url = e.target.href.split('/')[e.target.href.split('/').length - 1];
      document.title = pages[url].title;
      document.querySelector('h2').textContent = pages[url].h2;
      document.querySelector('p').textContent = pages[url].p;
      document.querySelector('main').style.backgroundColor = pages[url].backgroundColor
  })
})
//main 塞進去