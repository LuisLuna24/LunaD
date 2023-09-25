onload = () => {
    alert("Te amo mucho mi amorcito y me haces muy feliz estas son para ti :3 <3")
    const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
    }, 1000);
};

    const nombreElement = document.getElementById('nombre');
    setTimeout(() => {
        nombreElement.style.opacity = '1';
    }, 3000); 