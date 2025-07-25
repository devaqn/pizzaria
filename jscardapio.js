document.addEventListener('DOMContentLoaded', () => {
    // Sistema de avaliação
    document.querySelectorAll('.stars').forEach(starGroup => {
        starGroup.addEventListener('click', (e) => {
            if (e.target.classList.contains('star')) {
                const stars = starGroup.querySelectorAll('.star');
                const clickedIndex = Array.from(stars).indexOf(e.target);
                
                stars.forEach((star, index) => {
                    star.classList.toggle('active', index <= clickedIndex);
                });
            }
        });
    });

    // Botões de pedido
    document.querySelectorAll('.order-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            alert("Pedido adicionado ao carrinho!");
        });
    });
});
