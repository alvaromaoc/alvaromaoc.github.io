# Todo lo que tiene que saber para hacer una buena página de GitHub Pages
## Índice
- [Uso de Emojis :smiley:](#uso-de-emojis)
- [Configuración de la página](#configuración-de-la-página)
    - [Básica](#básica)
    - [Temas](#temas-theme)

## Uso de Emojis
En Markdown se pueden usar emojis con `:codigoemoji:`.
Puedes visitar esta [guía de emojis](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md) para informarte de todas las posibilidades

## Configuración de la página
Toda la configuración estará contenida en el archivo `_config.yml` en la raíz de nuestro repositorio.

### Básica
Estas diferentes posibilidades que tenemos
- `title`
- `description`

Muchas otras configuraciones se pueden añadir gracias a Jekyll, en [esta guía](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/about-github-pages-and-jekyll) está toda la información.

### Temas `theme`
En GitHub Pages puedes dar estilo a las páginas creadas con Markdown gracias a Jekyll.
En [esta guía](https://pages.github.com/themes/) tienes todos los temas disponibles.

Para aplicar un tema debes añadir la siguiente línea al archivo `_config.yml`:
~~~yml
    theme: jekyll-theme-cayman
~~~
En este ejemplo estariamos usando el tema Cayman.
