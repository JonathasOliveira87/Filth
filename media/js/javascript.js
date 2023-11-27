document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".scroll");

    links.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            var targetId = this.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                var offsetTop = targetElement.getBoundingClientRect().top;
                var startPosition = window.pageYOffset;
                var startTime = null;

                function animateScroll(currentTime) {
                    if (startTime === null) {
                        startTime = currentTime;
                    }

                    var timeElapsed = currentTime - startTime;
                    var progress = Math.min(timeElapsed / 800, 1);
                    var ease = easeOutQuad(progress);

                    window.scrollTo(0, startPosition + offsetTop * ease);

                    if (timeElapsed < 800) {
                        requestAnimationFrame(animateScroll);
                    }
                }

                function easeOutQuad(t) {
                    return t * (2 - t);
                }

                requestAnimationFrame(animateScroll);
            }
        });
    });

    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav-list a');

    // Adicione um ouvinte de evento de clique ao menu-toggle
    menuToggle.addEventListener('click', function () {
        // Alterne a exibição do nav-list
        if (navList.style.display === 'block') {
            navList.style.display = 'none';
        } else {
            navList.style.display = 'block';
        }
    });

    // Adicione um ouvinte de evento de clique para cada link no menu
    mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Ocultar o menu após clicar em um link
            navList.style.display = 'none';
        });
    });
  
});

'click', function rotateImage(img) {
    img.classList.toggle("bar");
  }


  document.addEventListener('DOMContentLoaded', function () {
    const imagens = document.querySelectorAll('.GaleriaBarba img');
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);

    imagens.forEach(function (imagem) {
        imagem.addEventListener('click', function () {
            lightbox.innerHTML = ''; // Limpa o conteúdo anterior
            const copiaImagem = imagem.cloneNode();
            copiaImagem.classList.add('imagemSelecionada');
            lightbox.appendChild(copiaImagem);
            lightbox.classList.add('active');
            setTimeout(function () {
                copiaImagem.style.transform = 'scale(1.1)';
            }, 50); 
        });
    });

    lightbox.addEventListener('click', function () {
        lightbox.classList.remove('active');
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const imagens = document.querySelectorAll('.GaleriaBarba img');
    const itemsPerPage = 6; // Número de imagens por página
    let currentPage = 1;

    showPage(currentPage);

    function showPage(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        imagens.forEach(function (imagem, index) {
            if (index >= startIndex && index < endIndex) {
                imagem.style.display = 'block';
            } else {
                imagem.style.display = 'none';
            }
        });

        updatePaginationText(page);
    }

    function updatePaginationText(page) {
        const totalPages = Math.ceil(imagens.length / itemsPerPage);
        document.getElementById('currentPage').textContent = `Página ${page} de ${totalPages}`;
    }

    function changePage(change) {
        const newPage = currentPage + change;

        if (newPage >= 1 && newPage <= Math.ceil(imagens.length / itemsPerPage)) {
            currentPage = newPage;
            showPage(currentPage);
        }
    }

    // Corrija os IDs dos botões para corresponder ao seu HTML
    document.getElementById('prevPage').addEventListener('click', function () {
        changePage(-1);
    });

    document.getElementById('nextPage').addEventListener('click', function () {
        changePage(1);
    });
});
