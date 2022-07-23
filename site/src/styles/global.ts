import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

:root {
    --cor-fundo-container: #f6f6f6;
    --cor-fundo-imagem: #e5e5e5;
    --cor-container: #ffffff;
    --cor-texto-claro: #ffffff;
    --cor-texto-escuro: #41464b;
    --cor-primaria: #0077ff;
    --cor-erro: #ff0000;
    --cor-confirmacao: #14bd00;
    --cor-verde-azulado: #008761;
    --cor-amarela: #ffff00;
    --cor-roxa: #4c2cff;
    --cor-preta: #000000;
    --transparencia-modal: #00000060;
    --transparente: #00000000;
}

* {
    font-family: "Mulish", sans-serif !important;
}

body {
    background-color: var(--cor-fundo-container);
    -webkit-font-smoothing: antialiased;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }

    @media (max-width: 720px) {
        font-size: 87.5%;
    }
}

button {
    cursor: pointer;
}

[disable] {
    opacity: 0.6;
    cursor: not-allowed;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

body {
    line-height: 1;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: "";
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

`;
