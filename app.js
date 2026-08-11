var FALLBACK_DATA = {
  "nombre": "Juan Camilo Larrota Ruiz",
  "rol": "Desarrollador",
  "perfil": "Transformo problemas en soluciones. Con formación en Ingeniería Telemática y experiencia en desarrollo web, automatización de procesos y consultoría de experiencia de cliente, hoy me desempeño en Oracle CX (ImagineCX). Trabajo con metodologías ágiles, buenas prácticas y herramientas como Git, Docker, Linux y SQL. Apunto a crecer en desarrollo backend, full stack o DevOps, donde la automatización y la solidez técnica marcan la diferencia.",
  "ubicacion": ["Bogotá, Colombia", "Remoto · Híbrido · Presencial"],
  "contacto": [
    { "tipo": "Email", "valor": "jclarrotar@gmail.com", "link": "mailto:jclarrotar@gmail.com" },
    { "tipo": "LinkedIn", "valor": "linkedin.com/in/juanclarrota", "link": "https://linkedin.com/in/juanclarrota" },
    { "tipo": "GitHub", "valor": "github.com/noob14dev", "link": "https://github.com/noob14dev" }
  ],
  "educacion": [
    { "titulo": "Ingeniería Telemática — Universidad Distrital Francisco José de Caldas", "meta": "Graduado · 2026" },
    { "titulo": "Tecnólogo en Sistematización de Datos — Universidad Distrital Francisco José de Caldas", "meta": "2022" },
    { "titulo": "Diplomado Tecnologías Web — Universidad de Caldas · MinTIC (MisiónTIC 2022)", "meta": "2022" },
    { "titulo": "Cursos complementarios — Udemy · Platzi", "meta": "2021", "extra": "Scrum Master, Master JavaScript, SQL, Introducción a la Terminal, Python intermedio, Curso profesional de Git y GitHub" }
  ],
  "experiencia": [
    { "cargo": "Consultor CX (Oracle Consulting)", "empresa": "ImagineCX", "meta": "Dic. 2025 — Actualidad", "detalle": "Consultoría y soporte en proyectos de experiencia de cliente (CX) sobre plataformas Oracle CX. Configuración, análisis de requerimientos, documentación de soluciones y atención al cliente." },
    { "cargo": "Técnico TIC - Desarrollo", "empresa": "Biblored — Bogotá", "meta": "Abr. 2023 — Nov. 2025", "detalle": "Desarrollo y mantenimiento de soluciones web internas y automatización de procesos con PHP y JavaScript. Soporte técnico a usuarios en múltiples sedes." },
    { "cargo": "Monitor - Laboratorista de Informática", "empresa": "Universidad Distrital Francisco José de Caldas", "meta": "Ene. 2022 — Ago. 2022", "detalle": "Mantenimiento y administración de servidores Linux y bases de datos SQL. Apoyo en laboratorios de programación y redes." },
    { "cargo": "Aux. Ingeniería", "empresa": "Carvajal Soluciones de Comunicación", "meta": "Abr. 2021 — Jul. 2021", "detalle": "Apoyo en pruebas técnicas y control de calidad de productos. Registro y documentación de información técnica." },
    { "cargo": "Practicante", "empresa": "Carvajal Soluciones de Comunicación", "meta": "Sep. 2020 — Mar. 2021", "detalle": "Desarrollo en C# para la gestión interna y generación de documentos. Manejo, monitoreo y soporte de servidores." }
  ],
  "habilidades": {
    "Lenguajes y Web": [
      "HTML y CSS",
      "JavaScript",
      "C#",
      "PHP",
      "Python"
    ],
    "Herramientas y Plataformas": [
      "Git & GitHub",
      "Docker",
      "Terminal Unix / Linux",
      "Bases de datos relacionales (SQL)"
    ],
    "Metodologías": [
      "Scrum (metodología ágil)"
    ]
  },
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

  function habilidadHTML(hab) {
    return Object.keys(hab)
      .map(function (grupo) {
        var items = hab[grupo]
          .map(function (skill) {
            return '<li class="chip">' + escapeHTML(skill) + "</li>";
          })
          .join("");
        return (
          '<div class="skill-grupo"><h3>' + grupo + "</h3><ul>" + items + "</ul></div>"
        );
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

  function proyectosHTML(lista) {
    return lista
      .map(function (p) {
        return (
          "<article class=\"sec-item\">" +
            '<div class="item-head">' +
              '<span class="badge"></span>' +
              '<div class="item-body"><h3><a href="' + p.link + '" target="_blank" rel="noopener">' +
              escapeHTML(p.nombre) + "</a></h3>" +
              '<p class="meta">' +
              escapeHTML(p.tech) +
              "</p></div>" +
            "</div>" +
            "<p class=\"item-detalle-txt\">" +
            escapeHTML(p.detalle) +
            "</p>" +
          "</article>"
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

          '<section class="bloque"><h2>Habilidades</h2>' +
            habilidadHTML(data.habilidades) +
          "</section>" +

          '<section class="bloque"><h2>Idiomas</h2><ul class="idiomas">' +
            idiomasHTML(data.idiomas) +
          "</ul></section>" +

          '<section class="bloque"><h2>Referencias</h2>' +
            referenciasHTML(data.referencias) +
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

          '<details class="seccion-colapsable" open>' +
            '<summary class="seccion-sum"><span class="seccion-titulo">Proyectos</span><span class="chevron"></span></summary>' +
            proyectosHTML(data.proyectos) +
          "</details>" +

        "</main>" +
      "</div>";
  });
})();