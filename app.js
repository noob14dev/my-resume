var FALLBACK_DATA = {
  "nombre": "Juan Camilo Larrota Ruiz",
  "rol": "Ingeniero Telemático · Desarrollador de Software / DevOps",
  "perfil": "Desarrollador de software con experiencia en todo el ciclo de vida de aplicaciones: desarrollo full-stack, scripting y automatización, administración de servidores Linux, bases de datos y redes corporativas. Actualmente desarrollo lógica de negocio y soluciones sobre la plataforma Oracle CX (Groovy Scripting, Visual Builder Studio, Redwood). Enfocado en resolver problemas complejos con soluciones técnicas estables, escalables y de alto valor, aplicando metodologías ágiles.",
  "ubicacion": ["Bogotá, Colombia", "Remoto · Híbrido · Presencial"],
  "contacto": [
    { "tipo": "Email", "valor": "jclarrotar@gmail.com", "link": "mailto:jclarrotar@gmail.com" },
    { "tipo": "LinkedIn", "valor": "linkedin.com/in/juanclarrota", "link": "https://linkedin.com/in/juanclarrota" },
    { "tipo": "GitHub", "valor": "github.com/noob14dev", "link": "https://github.com/noob14dev" }
  ],
  "educacion": [
    { "titulo": "Ingeniería Telemática — Universidad Distrital Francisco José de Caldas", "meta": "Título profesional · 2026" },
    { "titulo": "Tecnólogo en Sistematización de Datos — Universidad Distrital Francisco José de Caldas", "meta": "2022" },
    { "titulo": "Diplomado en Desarrollo de Software — MinTIC", "meta": "2022" },
    { "titulo": "Cursos complementarios — Udemy · Platzi", "meta": "2021", "extra": "Scrum Master, Master JavaScript, SQL, Introducción a la Terminal, Python intermedio, Curso profesional de Git y GitHub" }
  ],
  "experiencia": [
    { "cargo": "Desarrollador Oracle CX", "empresa": "ImagineCX", "meta": "Dic. 2025 — Actualidad", "detalle": "Desarrollo de lógica de negocio y extensiones con Groovy Scripting y Visual Builder Studio (VBS). Implementación de interfaces modernas con Oracle JET y Redwood. Estimación de proyectos y documentación técnica." },
    { "cargo": "Técnico TIC - Desarrollo", "empresa": "BibloRed · Proyectamos Colombia / UT Bogotá Lectora", "meta": "Abr. 2023 — Jun. 2025", "detalle": "Desarrollo de una imagen personalizada en Debian para el catálogo de la red. Administración de bases de datos bibliográficas y sistemas de información (Sinbad, Moodle, GLPI). Gestión de infraestructura, backups y monitoreo de servidores." },
    { "cargo": "Monitor de Laboratorio de Informática", "empresa": "Universidad Distrital Francisco José de Caldas", "meta": "2022-1", "detalle": "Administración de servidores Linux y bases de datos del laboratorio. Mantenimiento preventivo de la infraestructura de cómputo." },
    { "cargo": "Auxiliar de Ingeniería", "empresa": "Carvajal Soluciones de Comunicación S.A.S.", "meta": "Abr. 2020 — Jul. 2020", "detalle": "Procesamiento y análisis de datos para clientes, asegurando la integridad de las bases de datos. Apoyo en la implementación de proyectos de ingeniería." },
    { "cargo": "Aprendiz SENA - Tecnología", "empresa": "Carvajal Soluciones de Comunicación S.A.S.", "meta": "Sep. 2019 — Mar. 2020", "detalle": "Desarrollo de software con C# para el área de Ingeniería. Monitoreo de servidores, gestión de redes y validación de rutinas de backup." }
  ],
  "habilidades": [
      "C#",
      "JavaScript / TypeScript",
      "PHP",
      "Python",
      "Groovy Scripting",
      "SQL y administración de bases de datos",
      "Linux / Debian",
      "Docker",
      "Git & GitHub",
      "Oracle CX / Redwood / Visual Builder Studio",
      "Scrum"
    ],
  "idiomas": [
    { "idioma": "Español", "nivel": "Nativo" },
    { "idioma": "Inglés", "nivel": "Básico A2" }
  ],
  "proyectos": [
    { "nombre": "myLibrary", "tech": "Next.js · TypeScript · Prisma · SQL", "detalle": "Aplicación web para gestionar una biblioteca personal de libros físicos y digitales.", "link": "https://github.com/noob14dev/myLibrary" },
    { "nombre": "dm_helper", "tech": "TypeScript · APIs · Arquitectura de software", "detalle": "Asistente modular para dirigir partidas de rol (D&D, Call of Cthulhu, etc.). Módulo de dados con 19 tests unitarios.", "link": "https://github.com/noob14dev/dm_helper" }
  ],
  "referencias": [
    { "nombre": "Andrés Olaya", "cargo": "Banco Falabella", "linkedin": "https://www.linkedin.com/in/andres-olaya/" },
    { "nombre": "Daniel Pulgarín", "cargo": "Infinite Computer Solutions", "linkedin": "https://www.linkedin.com/in/daniel-alejandro-pulgarin-cruz/" }
  ]
};

(function () {
  const root = document.getElementById("cv");
  root.textContent = "";

  function cargar() {
    return fetch("data.json")
      .then(function (res) {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .catch(function () {
        return FALLBACK_DATA;
      });
  }

  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[c];
    });
  }

  function contactoHTML(lista) {
    return lista
      .map(function (item) {
        var v = item.link
          ? '<a href="' + item.link + '" target="_blank" rel="noopener">' + escapeHTML(item.valor) + "</a>"
          : escapeHTML(item.valor);
        return "<li>" + v + "</li>";
      })
      .join("");
  }

  function ubicacionHTML(lista) {
    return lista
      .map(function (item) {
        return "<li>" + escapeHTML(item) + "</li>";
      })
      .join("");
  }

  function habilidadHTML(lista) {
    return lista
      .map(function (skill) {
        return '<li class="chip">' + escapeHTML(skill) + "</li>";
      })
      .join("");
  }

  function idiomasHTML(lista) {
    return lista
      .map(function (i) {
        return (
          "<li><span class=\"lang\">" + escapeHTML(i.idioma) + '</span><span class="nivel">' + escapeHTML(i.nivel) + "</span></li>"
        );
      })
      .join("");
  }

  function educacionHTML(lista) {
    return lista
      .map(function (e) {
        var extra = e.extra
          ? '<p class="extra">' + escapeHTML(e.extra) + "</p>"
          : "";
        return (
          "<article class=\"sec-item\"><h3>" +
          escapeHTML(e.titulo) +
          "</h3><p class=\"meta\">" +
          escapeHTML(e.meta) +
          "</p>" + extra + "</article>"
        );
      })
      .join("");
  }

  function experienciaHTML(lista) {
    return lista
      .map(function (x, i) {
        return (
          "<details class=\"item-xp\">" +
            "<summary class=\"item-xp-sum\">" +
              '<span class="badge">' + (i + 1) + "</span>" +
              '<div class="item-body"><h3>' +
              escapeHTML(x.cargo) +
              "</h3><p class=\"empresa\">" +
              escapeHTML(x.empresa) +
              '</p><p class="meta">' +
              escapeHTML(x.meta) +
              "</p></div>" +
              '<span class="chevron"></span>' +
            "</summary>" +
            '<div class="item-xp-detalle"><p>' +
            escapeHTML(x.detalle) +
            "</p></div>" +
          "</details>"
        );
      })
      .join("");
  }

  function referenciasHTML(lista) {
    return lista
      .map(function (r) {
        return (
          "<article class=\"ref\">" +
          "<h3>" + escapeHTML(r.nombre) + "</h3>" +
          '<p class="empresa">' + escapeHTML(r.cargo) + "</p>" +
          '<a class="linkedin" href="' + r.linkedin + '" target="_blank" rel="noopener">LinkedIn</a>' +
          "</article>"
        );
      })
      .join("");
  }

  function proyectosSidebarHTML(lista) {
    return lista
      .map(function (p) {
        return (
          "<article class=\"ref\">" +
          '<h3><a class="linkedin" href="' + p.link + '" target="_blank" rel="noopener">' + escapeHTML(p.nombre) + "</a></h3>" +
          "</article>"
        );
      })
      .join("");
  }

  cargar().then(function (data) {
    root.innerHTML =
      '<div class="cv-grid">' +

        '<aside class="sidebar">' +
          '<div class="cabeza">' +
            (data.foto
              ? '<img class="avatar-img" src="' + data.foto + '" alt="Foto de ' + escapeHTML(data.nombre) + '" onerror="this.remove();">'
              : "") +
            "<h1>" + escapeHTML(data.nombre) + "</h1>" +
            '<p class="rol">' + escapeHTML(data.rol) + "</p>" +
          "</div>" +

          '<section class="bloque"><h2>Ubicación</h2><ul class="contacto">' +
            ubicacionHTML(data.ubicacion) +
          "</ul></section>" +

          '<section class="bloque"><h2>Contacto</h2><ul class="contacto">' +
            contactoHTML(data.contacto) +
          "</ul></section>" +

          '<section class="bloque"><h2>Habilidades</h2><ul class="skill-grupo">' +
            habilidadHTML(data.habilidades) +
          "</ul></section>" +

          '<section class="bloque"><h2>Idiomas</h2><ul class="idiomas">' +
            idiomasHTML(data.idiomas) +
          "</ul></section>" +

          '<section class="bloque"><h2>Referencias</h2>' +
            referenciasHTML(data.referencias) +
          "</section>" +

          '<section class="bloque"><h2>Proyectos</h2>' +
            proyectosSidebarHTML(data.proyectos) +
          "</section>" +
        "</aside>" +

        '<main class="principal">' +

          '<section class="seccion"><h2>Perfil</h2><p class="lead">' +
            escapeHTML(data.perfil) +
          "</p></section>" +

          '<details class="seccion-colapsable" open>' +
            '<summary class="seccion-sum"><span class="seccion-titulo">Experiencia</span><span class="chevron"></span></summary>' +
            experienciaHTML(data.experiencia) +
          "</details>" +

          '<details class="seccion-colapsable" open>' +
            '<summary class="seccion-sum"><span class="seccion-titulo">Educación</span><span class="chevron"></span></summary>' +
            educacionHTML(data.educacion) +
          "</details>" +

        "</main>" +
      "</div>";
  });
})();