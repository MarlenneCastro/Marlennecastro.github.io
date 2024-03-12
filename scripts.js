// Función para mostrar u ocultar contenido
function muestra_oculta(id) {
    let div = document.getElementById(id);
    if (div.style.display == "none"){ 
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const dropdownArrow = document.querySelector('.dropdown-arrow');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownInput = document.querySelector('.dropdown-input');

    // Función para mostrar la opción seleccionada en la caja de texto
    function showSelectedOption(optionText) {
        dropdownInput.value = optionText;
        dropdownMenu.style.display = 'none'; // Oculta el menú después de seleccionar una opción
    }

    // Maneja el clic en la flecha para mostrar u ocultar el menú
    dropdownArrow.addEventListener('click', function () {
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }
    });

    // Agrega eventos a las opciones del menú
    const dropdownOptions = document.querySelectorAll('.dropdown-menu ul li a');
    dropdownOptions.forEach(function(option) {
        option.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace se siga
            showSelectedOption(option.textContent);
        });
    });
});


    // Event listener para las opciones del menú
    const menuOptions = document.querySelectorAll('.dropdown-menu ul li a');
    menuOptions.forEach(function (option) {
        option.addEventListener('click', function (e) {
            e.preventDefault();
            const selectedText = e.target.textContent;
            showSelectedOption(selectedText);
            dropdownMenu.style.display = 'none'; // Oculta el menú después de seleccionar una opción
        });
    });

document.addEventListener("DOMContentLoaded", function() {
    var boton = document.getElementById('boton');
    boton.addEventListener('click', function() {
        var seleccion = document.querySelector('.dropdown-input').value;
        if (seleccion.trim() === '') {
            alert('Selecciona una opción');
        } else {
            // Aquí puedes colocar la URL a la que deseas redirigir al usuario
            window.location.href = 'https://ejemplo.com';
        }
    });
});

// Script de inicialización del carrusel
$(document).ready(function() {
    $('#carouselExampleIndicators').carousel();
  });
  