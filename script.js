function criarPandaSubindo() {
    const panda = document.createElement("img");
    panda.src = "file-SSHJ7NoshtaWPmRTsTYHny.webp"; // Confirme que o arquivo existe no local certo
    panda.classList.add("panda-subindo");

    // Define uma posição aleatória para cada panda na tela
    const posicaoX = Math.random() * window.innerWidth;
    panda.style.left = `${posicaoX}px`;

    // Tempo de animação aleatório entre 3s e 6s
    panda.style.animationDuration = `${3 + Math.random() * 3}s`;

    // Adiciona o panda ao corpo do site
    document.body.appendChild(panda);

    // Remove o panda após a animação para evitar sobrecarga
    setTimeout(() => {
        panda.remove();
    }, 6000);
}

// Cria pandas automaticamente a cada segundo
setInterval(criarPandaSubindo, 1000);
