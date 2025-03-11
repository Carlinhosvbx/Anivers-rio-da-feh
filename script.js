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
function criarPandaSubindo() {
    const panda = document.createElement("img");
    panda.src = "panda.png"; // Certifique-se de que a imagem está no mesmo diretório
    panda.classList.add("panda-subindo");

    // Posição aleatória na tela
    const posicaoX = Math.random() * window.innerWidth;
    panda.style.left = `${posicaoX}px`;

    // Tempo de animação aleatório para efeito dinâmico
    panda.style.animationDuration = `${3 + Math.random() * 3}s`;

    document.body.appendChild(panda);

    // Remover panda após a animação
    setTimeout(() => {
        panda.remove();
    }, 6000);
}

// Criar pandas de tempos em tempos
setInterval(criarPandaSubindo, 1000);
