const mediaQuery = window.matchMedia('(max-width: 1350px)');
const mediaQuery_2 = window.matchMedia('(max-width: 768px)');

function handleMediaQueryChange(mediaQuery) {
    if (mediaQuery.matches) {
        document.getElementById('right-column').style.display = 'none';  
    }
}



handleMediaQueryChange(mediaQuery);
mediaQuery.addListener(handleMediaQueryChange);

function handleMediaQueryChange(mediaQuery_2) {
    if (mediaQuery_2.matches) {
        document.getElementById('right-column').style.display = 'none';  
    }
}




const lightmode=()=>{
    const root = document.documentElement;
     document.getElementById('right-column').style.display = 'inline';
    document.getElementById('sun').style.display = 'none';
    document.getElementById('moon').style.display = 'flex';
    root.style.setProperty('--back', '#f3f2f3');
    root.style.setProperty('--white', '#ffffff');
    root.style.setProperty('--btn-color-background-two', '#555555');
    root.style.setProperty('--black', '#ffffff');
    root.style.setProperty('--headers', '#000000');
    root.style.setProperty('--btn-color-background-one', '#555555');

}



const darkmode=()=>{
    const root = document.documentElement;
    document.getElementById('moon').style.display = 'none';
    document.getElementById('sun').style.display = 'flex';
    root.style.setProperty('--back', '#3a3939');
    root.style.setProperty('--white', '#918e8e');
    root.style.setProperty('--btn-color-background-two', '#555555');
    root.style.setProperty('--black', '#ffffff');
    root.style.setProperty('--headers', '#ffffff');
    root.style.setProperty('--btn-color-background-one', '#737373');

    
}


