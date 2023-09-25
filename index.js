onload = () => {
    alert("Sé que no es mucho, pero te lo hice con mucho cariño porque eres una niña espectacular y maravillosa, te quiero mucho :) Atte: Luis Luna")
    const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
    }, 1000);
};

    const nombreElement = document.getElementById('nombre');
    setTimeout(() => {
        nombreElement.style.opacity = '1';
    }, 3000); 