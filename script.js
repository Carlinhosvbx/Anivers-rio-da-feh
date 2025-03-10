document.addEventListener("DOMContentLoaded", function() {
    // Animação de fade-in nas homenagens
    let homenagens = document.querySelectorAll(".homenagem");
    homenagens.forEach((homenagem, index) => {
        setTimeout(() => {
            homenagem.style.opacity = "1";
            homenagem.style.transform = "translateY(0)";
        }, 500 * index); // Pequeno atraso entre cada uma
    });
});
