
document.addEventListener("DOMContentLoaded", () => {

    const memories = [
        {
            chapter: "CAPÍTULO 01",
            title: "Nuestra primera salida",
            text: "Este momento fue muy especial para nosotros. Fue el comienzo de una historia que hoy guardo con muchísimo cariño, me encantó compartir ese tiempo con mi bebé.",
            caption: "Donde empezó nuestra historia.",
            image: "imagenes/recuerdo1.jpg"
        },
        {
            chapter: "CAPÍTULO 02",
            title: "El pequeño regalo que te di",
            text: "Se que no fue, nada ese regalo, pero, eso me hace tan lindo contigo, darte algo sin haberte besado antes, para demostrar mi amor hacía ti    .",
            caption: "Dos personas, una historia.",
            image: "imagenes/recuerdo2.jpg"
        },
        {
            chapter: "CAPÍTULO 03",
            title: "Nuestras pequeñas locuras",
            text: "Cuando usted me llamaba para escaparme de clases a las 1:45 para que la fuera a abrazar, extraño esos momentos mi niña preciosa",
            caption: "Las risas que nunca faltan.",
            image: "imagenes/recuerdo3.jpg"
        },
        {
            chapter: "CAPÍTULO 04",
            title: "Momentos que nunca quisiera olvidar",
            text: "¿Sabes? en algun momento donde nos peleemos, o nos hayamos peleado, aun asi siempre nos hemos arreglado, te amo mucho mi niña pequeña.",
            caption: "Un recuerdo para siempre.",
            image: "imagenes/recuerdo4.jpg"
        },
        {
            chapter: "CAPÍTULO 05",
            title: "Lo que me gusta de ti",
            text: "Sabes, nunca me interesan regalos asi grandes ni nada, me interesan cosas con tu propio esfuerzo, cartas, cosas hecha por ti misma, sabes? ademas de los besitos que me das siempre.",
            caption: "Tú, en todos tus detalles.",
            image: "imagenes/recuerdo5.jpg"
        },
        {
            chapter: "CAPÍTULO 06",
            title: "Todo lo que nos falta vivir",
            text: "Esta es la última foto que tenemos juntitos, para mi significa mucho por que, ese era mi plan inicial, faltar a clases para verte y arreglar con mi bebe y apoyarla en todo momento.",
            caption: "Aún quedan muchas páginas.",
            image: "imagenes/recuerdo6.jpg"
        },
        {
            chapter: "CAPÍTULO 07",
            title: "Mi viernes 13",
            text: "Gracias por formar parte de mi vida, por cada sonrisa y por cada momento compartido. Este pequeño álbum es una forma de recordarte lo especial que es para mí, te amo mucho mi niña linda.",
            caption: "Nuestra historia continúa.",
            image: "imagenes/recuerdo7.jpg"
        }
    ];

    let current = -1;

    const cover = document.getElementById("cover");
    const nextBtn = document.getElementById("next");
    const previousBtn = document.getElementById("previous");
    const song = document.getElementById("song");
    const musicButton = document.getElementById("musicButton");
    const musicStatus = document.getElementById("musicStatus");

    const chapter = document.getElementById("chapter");
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const memoryImage = document.getElementById("memoryImage");
    const memoryCaption = document.getElementById("memoryCaption");
    const pageNumber = document.getElementById("pageNumber");
    const counter = document.getElementById("counter");

    // Comprueba que los elementos principales existan.
    if (!cover || !nextBtn || !previousBtn) {
        console.error("No se encontró la portada o los botones. Revisa los ID del HTML.");
        return;
    }

    function showMemory(index) {
        const memory = memories[index];

        chapter.textContent = memory.chapter;
        title.textContent = memory.title;
        description.textContent = memory.text;
        memoryCaption.textContent = memory.caption;
        memoryImage.src = memory.image;
        pageNumber.textContent = String(index + 1).padStart(2, "0");

        counter.textContent = `RECUERDO ${index + 1} / 7`;
    }

    async function startMusic() {
        if (!song) return;

        try {
            await song.play();
            musicButton.textContent = "Ⅱ Pausar música";
            musicStatus.textContent = "Reproduciendo nuestra canción";
        } catch (error) {
            musicStatus.textContent = "Pulsa Activar música para escucharla";
        }
    }

    function openAlbum() {
        if (current !== -1) return;

        current = 0;

        cover.classList.add("open");

        showMemory(current);

        nextBtn.textContent = "Siguiente →";
        previousBtn.disabled = false;

        startMusic();
    }

    function closeAlbum() {
        current = -1;

        cover.classList.remove("open");

        counter.textContent = "PORTADA";
        nextBtn.textContent = "Abrir →";
        previousBtn.disabled = true;
    }

    nextBtn.addEventListener("click", () => {

        if (current === -1) {
            openAlbum();
            return;
        }

        if (current < memories.length - 1) {
            current++;
            showMemory(current);
        } else {
            closeAlbum();
        }

    });

    previousBtn.addEventListener("click", () => {

        if (current > 0) {
            current--;
            showMemory(current);
        } else if (current === 0) {
            closeAlbum();
        }

    });

    cover.addEventListener("click", () => {
        if (current === -1) {
            openAlbum();
        }
    });

    if (musicButton && song) {
        musicButton.addEventListener("click", async () => {

            if (song.paused) {
                await startMusic();
            } else {
                song.pause();
                musicButton.textContent = "♫ Activar música";
                musicStatus.textContent = "Música pausada";
            }

        });
    }

    previousBtn.disabled = true;

});