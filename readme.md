<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/><title>Plantilla README</title><style>
/* cspell:disable-file */
/* webkit printing magic: print all background colors */
html {
	-webkit-print-color-adjust: exact;
}
* {
	box-sizing: border-box;
	-webkit-print-color-adjust: exact;
}

html,
body {
	margin: 0;
	padding: 0;
}
@media only screen {
	body {
		margin: 2em auto;
		max-width: 900px;
		color: rgb(55, 53, 47);
	}
}

body {
	line-height: 1.5;
	white-space: pre-wrap;
}

a,
a.visited {
	color: inherit;
	text-decoration: underline;
}

.pdf-relative-link-path {
	font-size: 80%;
	color: #444;
}

h1,
h2,
h3 {
	letter-spacing: -0.01em;
	line-height: 1.2;
	font-weight: 600;
	margin-bottom: 0;
}

.page-title {
	font-size: 2.5rem;
	font-weight: 700;
	margin-top: 0;
	margin-bottom: 0.75em;
}

h1 {
	font-size: 1.875rem;
	margin-top: 1.875rem;
}

h2 {
	font-size: 1.5rem;
	margin-top: 1.5rem;
}

h3 {
	font-size: 1.25rem;
	margin-top: 1.25rem;
}

.source {
	border: 1px solid #ddd;
	border-radius: 3px;
	padding: 1.5em;
	word-break: break-all;
}

.callout {
	border-radius: 3px;
	padding: 1rem;
}

figure {
	margin: 1.25em 0;
	page-break-inside: avoid;
}

figcaption {
	opacity: 0.5;
	font-size: 85%;
	margin-top: 0.5em;
}

mark {
	background-color: transparent;
}

.indented {
	padding-left: 1.5em;
}

hr {
	background: transparent;
	display: block;
	width: 100%;
	height: 1px;
	visibility: visible;
	border: none;
	border-bottom: 1px solid rgba(55, 53, 47, 0.09);
}

img {
	max-width: 100%;
}

@media only print {
	img {
		max-height: 100vh;
		object-fit: contain;
	}
}

@page {
	margin: 1in;
}

.collection-content {
	font-size: 0.875rem;
}

.column-list {
	display: flex;
	justify-content: space-between;
}

.column {
	padding: 0 1em;
}

.column:first-child {
	padding-left: 0;
}

.column:last-child {
	padding-right: 0;
}

.table_of_contents-item {
	display: block;
	font-size: 0.875rem;
	line-height: 1.3;
	padding: 0.125rem;
}

.table_of_contents-indent-1 {
	margin-left: 1.5rem;
}

.table_of_contents-indent-2 {
	margin-left: 3rem;
}

.table_of_contents-indent-3 {
	margin-left: 4.5rem;
}

.table_of_contents-link {
	text-decoration: none;
	opacity: 0.7;
	border-bottom: 1px solid rgba(55, 53, 47, 0.18);
}

table,
th,
td {
	border: 1px solid rgba(55, 53, 47, 0.09);
	border-collapse: collapse;
}

table {
	border-left: none;
	border-right: none;
}

th,
td {
	font-weight: normal;
	padding: 0.25em 0.5em;
	line-height: 1.5;
	min-height: 1.5em;
	text-align: left;
}

th {
	color: rgba(55, 53, 47, 0.6);
}

ol,
ul {
	margin: 0;
	margin-block-start: 0.6em;
	margin-block-end: 0.6em;
}

li > ol:first-child,
li > ul:first-child {
	margin-block-start: 0.6em;
}

ul > li {
	list-style: disc;
}

ul.to-do-list {
	text-indent: -1.7em;
}

ul.to-do-list > li {
	list-style: none;
}

.to-do-children-checked {
	text-decoration: line-through;
	opacity: 0.375;
}

ul.toggle > li {
	list-style: none;
}

ul {
	padding-inline-start: 1.7em;
}

ul > li {
	padding-left: 0.1em;
}

ol {
	padding-inline-start: 1.6em;
}

ol > li {
	padding-left: 0.2em;
}

.mono ol {
	padding-inline-start: 2em;
}

.mono ol > li {
	text-indent: -0.4em;
}

.toggle {
	padding-inline-start: 0em;
	list-style-type: none;
}

/* Indent toggle children */
.toggle > li > details {
	padding-left: 1.7em;
}

.toggle > li > details > summary {
	margin-left: -1.1em;
}

.selected-value {
	display: inline-block;
	padding: 0 0.5em;
	background: rgba(206, 205, 202, 0.5);
	border-radius: 3px;
	margin-right: 0.5em;
	margin-top: 0.3em;
	margin-bottom: 0.3em;
	white-space: nowrap;
}

.collection-title {
	display: inline-block;
	margin-right: 1em;
}

time {
	opacity: 0.5;
}

.icon {
	display: inline-block;
	max-width: 1.2em;
	max-height: 1.2em;
	text-decoration: none;
	vertical-align: text-bottom;
	margin-right: 0.5em;
}

img.icon {
	border-radius: 3px;
}

.user-icon {
	width: 1.5em;
	height: 1.5em;
	border-radius: 100%;
	margin-right: 0.5rem;
}

.user-icon-inner {
	font-size: 0.8em;
}

.text-icon {
	border: 1px solid #000;
	text-align: center;
}

.page-cover-image {
	display: block;
	object-fit: cover;
	width: 100%;
	height: 30vh;
}

.page-header-icon {
	font-size: 3rem;
	margin-bottom: 1rem;
}

.page-header-icon-with-cover {
	margin-top: -0.72em;
	margin-left: 0.07em;
}

.page-header-icon img {
	border-radius: 3px;
}

.link-to-page {
	margin: 1em 0;
	padding: 0;
	border: none;
	font-weight: 500;
}

p > .user {
	opacity: 0.5;
}

td > .user,
td > time {
	white-space: nowrap;
}

input[type="checkbox"] {
	transform: scale(1.5);
	margin-right: 0.6em;
	vertical-align: middle;
}

p {
	margin-top: 0.5em;
	margin-bottom: 0.5em;
}

.image {
	border: none;
	margin: 1.5em 0;
	padding: 0;
	border-radius: 0;
	text-align: center;
}

.code,
code {
	background: rgba(135, 131, 120, 0.15);
	border-radius: 3px;
	padding: 0.2em 0.4em;
	border-radius: 3px;
	font-size: 85%;
	tab-size: 2;
}

code {
	color: #eb5757;
}

.code {
	padding: 1.5em 1em;
}

.code-wrap {
	white-space: pre-wrap;
	word-break: break-all;
}

.code > code {
	background: none;
	padding: 0;
	font-size: 100%;
	color: inherit;
}

blockquote {
	font-size: 1.25em;
	margin: 1em 0;
	padding-left: 1em;
	border-left: 3px solid rgb(55, 53, 47);
}

.bookmark {
	text-decoration: none;
	max-height: 8em;
	padding: 0;
	display: flex;
	width: 100%;
	align-items: stretch;
}

.bookmark-title {
	font-size: 0.85em;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 1.75em;
	white-space: nowrap;
}

.bookmark-text {
	display: flex;
	flex-direction: column;
}

.bookmark-info {
	flex: 4 1 180px;
	padding: 12px 14px 14px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.bookmark-image {
	width: 33%;
	flex: 1 1 180px;
	display: block;
	position: relative;
	object-fit: cover;
	border-radius: 1px;
}

.bookmark-description {
	color: rgba(55, 53, 47, 0.6);
	font-size: 0.75em;
	overflow: hidden;
	max-height: 4.5em;
	word-break: break-word;
}

.bookmark-href {
	font-size: 0.75em;
	margin-top: 0.25em;
}

.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"; }
.code { font-family: "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace; }
.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }
.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }
.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }
.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }
.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }
.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }
.pdf .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .code { font-family: Source Code Pro, "SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }
.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }
.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }
.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }
.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }
.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }
.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }
.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }
.highlight-default {
}
.highlight-gray {
	color: rgb(155,154,151);
}
.highlight-brown {
	color: rgb(100,71,58);
}
.highlight-orange {
	color: rgb(217,115,13);
}
.highlight-yellow {
	color: rgb(223,171,1);
}
.highlight-teal {
	color: rgb(15,123,108);
}
.highlight-blue {
	color: rgb(11,110,153);
}
.highlight-purple {
	color: rgb(105,64,165);
}
.highlight-pink {
	color: rgb(173,26,114);
}
.highlight-red {
	color: rgb(224,62,62);
}
.highlight-gray_background {
	background: rgb(235,236,237);
}
.highlight-brown_background {
	background: rgb(233,229,227);
}
.highlight-orange_background {
	background: rgb(250,235,221);
}
.highlight-yellow_background {
	background: rgb(251,243,219);
}
.highlight-teal_background {
	background: rgb(221,237,234);
}
.highlight-blue_background {
	background: rgb(221,235,241);
}
.highlight-purple_background {
	background: rgb(234,228,242);
}
.highlight-pink_background {
	background: rgb(244,223,235);
}
.highlight-red_background {
	background: rgb(251,228,228);
}
.block-color-default {
	color: inherit;
	fill: inherit;
}
.block-color-gray {
	color: rgba(55, 53, 47, 0.6);
	fill: rgba(55, 53, 47, 0.6);
}
.block-color-brown {
	color: rgb(100,71,58);
	fill: rgb(100,71,58);
}
.block-color-orange {
	color: rgb(217,115,13);
	fill: rgb(217,115,13);
}
.block-color-yellow {
	color: rgb(223,171,1);
	fill: rgb(223,171,1);
}
.block-color-teal {
	color: rgb(15,123,108);
	fill: rgb(15,123,108);
}
.block-color-blue {
	color: rgb(11,110,153);
	fill: rgb(11,110,153);
}
.block-color-purple {
	color: rgb(105,64,165);
	fill: rgb(105,64,165);
}
.block-color-pink {
	color: rgb(173,26,114);
	fill: rgb(173,26,114);
}
.block-color-red {
	color: rgb(224,62,62);
	fill: rgb(224,62,62);
}
.block-color-gray_background {
	background: rgb(235,236,237);
}
.block-color-brown_background {
	background: rgb(233,229,227);
}
.block-color-orange_background {
	background: rgb(250,235,221);
}
.block-color-yellow_background {
	background: rgb(251,243,219);
}
.block-color-teal_background {
	background: rgb(221,237,234);
}
.block-color-blue_background {
	background: rgb(221,235,241);
}
.block-color-purple_background {
	background: rgb(234,228,242);
}
.block-color-pink_background {
	background: rgb(244,223,235);
}
.block-color-red_background {
	background: rgb(251,228,228);
}
.select-value-color-default { background-color: rgba(206,205,202,0.5); }
.select-value-color-gray { background-color: rgba(155,154,151, 0.4); }
.select-value-color-brown { background-color: rgba(140,46,0,0.2); }
.select-value-color-orange { background-color: rgba(245,93,0,0.2); }
.select-value-color-yellow { background-color: rgba(233,168,0,0.2); }
.select-value-color-green { background-color: rgba(0,135,107,0.2); }
.select-value-color-blue { background-color: rgba(0,120,223,0.2); }
.select-value-color-purple { background-color: rgba(103,36,222,0.2); }
.select-value-color-pink { background-color: rgba(221,0,129,0.2); }
.select-value-color-red { background-color: rgba(255,0,26,0.2); }

.checkbox {
	display: inline-flex;
	vertical-align: text-bottom;
	width: 16;
	height: 16;
	background-size: 16px;
	margin-left: 2px;
	margin-right: 5px;
}

.checkbox-on {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E");
}

.checkbox-off {
	background-image: url("data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E");
}
	
</style></head><body><article id="8257f22b-f880-4337-bc96-777f860ca827" class="page sans"><header><img class="page-cover-image" src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb" style="object-position:center 50%"/><div class="page-header-icon page-header-icon-with-cover"><span class="icon">📜</span></div><h1 class="page-title">Plantilla README</h1></header><div class="page-body"><figure class="block-color-gray_background callout" style="white-space:pre-wrap;display:flex" id="60624de7-90e8-49be-9e3f-bf2fa329cbeb"><div style="font-size:1.5em"><span class="icon">💡</span></div><div style="width:100%">Para que el índice funcione, tienes que dividir tu tema por Headings o Subtítulos. Para crear un &quot;Heading&quot; tienes que darle formato Heading 1 para el título principal, Heading 2 para título secundario y Heading 3 para título terciario.</div></figure><p id="c690337a-0c37-4d6a-9740-aace268842f2" class=""><strong>Índice del Tema:</strong></p><hr id="a7fd2316-8ce3-4e0d-aa2d-728cd116ac0f"/><nav id="b42b9c88-2ed1-4e0b-b80e-1ef69a252693" class="block-color-teal table_of_contents"><div class="table_of_contents-item table_of_contents-indent-0"><a class="table_of_contents-link" href="#388aad76-6c44-4a2b-bd9c-51a7692c8265"><strong>INFORMACIÓN RELEVANTE:</strong></a></div><div class="table_of_contents-item table_of_contents-indent-0"><a class="table_of_contents-link" href="#56af9728-4813-420c-8df8-74f7709ad969"><strong>RESUMEN DEL TEMA:</strong></a></div><div class="table_of_contents-item table_of_contents-indent-0"><a class="table_of_contents-link" href="#0edd3af7-8de1-443e-9771-7d17812bcc1c"><strong>Título del Proyecto</strong></a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#7cf70ec4-17c6-4695-a052-81c497cdc454"><strong>Comenzando 🚀</strong></a></div><div class="table_of_contents-item table_of_contents-indent-2"><a class="table_of_contents-link" href="#763022be-e98e-4391-b09d-25e4602817e5"><strong>Pre-requisitos 📋</strong></a></div><div class="table_of_contents-item table_of_contents-indent-2"><a class="table_of_contents-link" href="#6d4d8349-fa77-41dc-9d73-a3a405486f2d"><strong>Instalación 🔧</strong></a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#5de10c12-ed5c-4ad9-918d-2a8721ac7612"><strong>Ejecutando las pruebas ⚙️</strong></a></div><div class="table_of_contents-item table_of_contents-indent-2"><a class="table_of_contents-link" href="#cef0ade0-add2-457e-bb6d-d63a505c828f"><strong>Analice las pruebas end-to-end 🔩</strong></a></div><div class="table_of_contents-item table_of_contents-indent-2"><a class="table_of_contents-link" href="#496c5a0e-1b80-4659-9d73-0181cbe3ceef"><strong>Y las pruebas de estilo de codificación ⌨️</strong></a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#861e2ad2-0ab4-44ed-9dc6-914727007f0c"><strong>Despliegue 📦</strong></a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#ff88f918-024f-4e63-9b60-42b5ae4d8ee0"><strong>Construido con 🛠️</strong></a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#94f51f89-b579-4097-bda1-f9df8da59d33"><strong>Contribuyendo 🖇️</strong></a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#3da77816-7a7d-49c1-8b3f-7013cc1777ea"><strong>Wiki 📖</strong></a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#44b0f93e-7c7b-470d-9671-64a6bf3a8b9f"><strong>Versionado 📌</strong></a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#44a0da53-97d3-4d67-b63d-48354b77e677"><strong>Autores ✒️</strong></a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#265d78e3-4e42-4fbc-bc7d-f3d03502d68b"><strong>Licencia 📄</strong></a></div><div class="table_of_contents-item table_of_contents-indent-1"><a class="table_of_contents-link" href="#854402da-2ade-4749-bb62-d922523f6470"><strong>Expresiones de Gratitud 🎁</strong></a></div><div class="table_of_contents-item table_of_contents-indent-0"><a class="table_of_contents-link" href="#d99b9f67-5ae2-4414-bb5a-37cabf0487ce">CODIGO</a></div></nav><p id="51362920-a7cb-4411-8b3c-1cc5f6ddb545" class="">
</p><h2 id="388aad76-6c44-4a2b-bd9c-51a7692c8265" class=""><strong>INFORMACIÓN RELEVANTE:</strong></h2><hr id="405475ad-c7d8-421c-b336-466f5331aa25"/><ul id="6db1a5a5-17d9-476b-ab5a-0a0334678d21" class="toggle"><li><details open=""><summary>✅ <strong>Ideas más importantes del tema:</strong></summary><ol type="1" id="f26e086c-c2c5-4a8c-90d8-2449ed52c077" class="numbered-list" start="1"><li> </li></ol><ol type="1" id="14e3b66b-8c74-4981-9948-4113fa7e3f9f" class="numbered-list" start="2"><li> </li></ol><ol type="1" id="e81a548b-04b2-42ad-ae88-ac2c9b74751c" class="numbered-list" start="3"><li></li></ol></details></li></ul><ul id="afeb4ab0-1612-4652-9cad-3d24e7ea827a" class="toggle"><li><details open=""><summary>📕 <strong>El Tema en un párrafo o idea:</strong></summary><ul id="a2e62e1d-0393-4a43-b412-6cfbd0c18577" class="bulleted-list"><li></li></ul></details></li></ul><ul id="64da159a-599b-4a93-8223-400af0825788" class="toggle"><li><details open=""><summary><strong>🔗 Ligas, documentos y medios importantes:</strong></summary><ul id="257f2df5-e083-4f9c-946f-7f08228afe58" class="bulleted-list"><li></li></ul></details></li></ul><h2 id="56af9728-4813-420c-8df8-74f7709ad969" class=""><strong>RESUMEN DEL TEMA:</strong></h2><hr id="893c7b2b-689f-4ac2-8fe9-fc133f09812c"/><h1 id="0edd3af7-8de1-443e-9771-7d17812bcc1c" class=""><strong>Título del Proyecto</strong></h1><p id="d7b8739b-a367-4e9c-9049-dfcd571df02f" class=""><em>Acá va un párrafo que describa lo que es el proyecto</em></p><h2 id="7cf70ec4-17c6-4695-a052-81c497cdc454" class=""><strong>Comenzando 🚀</strong></h2><p id="31f0ab31-3d30-4fa0-ac58-a1d4d753bb01" class=""><em>Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.</em></p><p id="57e85a43-bcc6-4d11-a08b-e29273a9f5ad" class="">Mira <strong>Deployment</strong> para conocer como desplegar el proyecto.</p><h3 id="763022be-e98e-4391-b09d-25e4602817e5" class=""><strong>Pre-requisitos 📋</strong></h3><p id="c7afd918-8e57-4dee-b0cb-ed90be899574" class=""><em>Que cosas necesitas para instalar el software y como instalarlas</em></p><pre id="8164965b-6034-4eb5-83b9-3a1617ed999c" class="code code-wrap"><code>Da un ejemplo
</code></pre><h3 id="6d4d8349-fa77-41dc-9d73-a3a405486f2d" class=""><strong>Instalación 🔧</strong></h3><p id="94c21049-0080-46d1-a3b4-7d0e9f6bec5c" class=""><em>Una serie de ejemplos paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutandose</em></p><p id="f888cf86-55a5-4aab-94cb-e1ec74da3e8f" class=""><em>Dí cómo será ese paso</em></p><pre id="d7bfa02b-0dcc-4fa5-a618-a4dea146e634" class="code code-wrap"><code>Da un ejemplo
</code></pre><p id="ed37d97e-06b5-40e1-8652-60a878e7cec6" class=""><em>Y repite</em></p><pre id="540672cf-ceee-43c0-99aa-3cd21a8be1c2" class="code code-wrap"><code>hasta finalizar
</code></pre><p id="e7d029ea-54ef-4edf-a117-9875531a36d4" class=""><em>Finaliza con un ejemplo de cómo obtener datos del sistema o como usarlos para una pequeña demo</em></p><h2 id="5de10c12-ed5c-4ad9-918d-2a8721ac7612" class=""><strong>Ejecutando las pruebas ⚙️</strong></h2><p id="b6c9bc2e-5c61-4116-95b2-7e06b6d4fe6d" class=""><em>Explica como ejecutar las pruebas automatizadas para este sistema</em></p><h3 id="cef0ade0-add2-457e-bb6d-d63a505c828f" class=""><strong>Analice las pruebas end-to-end 🔩</strong></h3><p id="1e86cbfd-5665-4fd8-9469-f8ee3ba3c54a" class=""><em>Explica que verifican estas pruebas y por qué</em></p><pre id="d93dceb0-6961-45d5-975d-a558d966c803" class="code code-wrap"><code>Da un ejemplo
</code></pre><h3 id="496c5a0e-1b80-4659-9d73-0181cbe3ceef" class=""><strong>Y las pruebas de estilo de codificación ⌨️</strong></h3><p id="26990787-ed2d-4eea-9e04-80aacdca4beb" class=""><em>Explica que verifican estas pruebas y por qué</em></p><pre id="08ec55b0-68f1-40ea-b3f8-f2bb067e6dac" class="code code-wrap"><code>Da un ejemplo
</code></pre><h2 id="861e2ad2-0ab4-44ed-9dc6-914727007f0c" class=""><strong>Despliegue 📦</strong></h2><p id="f2d5a81a-0d5f-4619-a89d-8330b0c73b03" class=""><em>Agrega notas adicionales sobre como hacer deploy</em></p><h2 id="ff88f918-024f-4e63-9b60-42b5ae4d8ee0" class=""><strong>Construido con 🛠️</strong></h2><p id="125a9278-f5b6-4a1d-b64b-523d2daea8b2" class=""><em>Menciona las herramientas que utilizaste para crear tu proyecto</em></p><ul id="5b9195cd-1530-4aa5-8b5f-4378c9b05c89" class="bulleted-list"><li><a href="http://www.dropwizard.io/1.0.2/docs/">Dropwizard</a> - El framework web usado</li></ul><ul id="bc4816dc-f969-4d61-bc22-2b900215762b" class="bulleted-list"><li><a href="https://maven.apache.org/">Maven</a> - Manejador de dependencias</li></ul><ul id="70266c78-65f7-4a8a-901d-43d087e11d03" class="bulleted-list"><li><a href="https://rometools.github.io/rome/">ROME</a> - Usado para generar RSS</li></ul><h2 id="94f51f89-b579-4097-bda1-f9df8da59d33" class=""><strong>Contribuyendo 🖇️</strong></h2><p id="f104e29e-f288-42c1-b1fc-e64028a620ad" class="">Por favor lee el <a href="https://gist.github.com/villanuevand/xxxxxx">CONTRIBUTING.md</a> para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.</p><h2 id="3da77816-7a7d-49c1-8b3f-7013cc1777ea" class=""><strong>Wiki 📖</strong></h2><p id="5256f067-bffb-48bb-b639-a26751a04c81" class="">Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra <a href="https://github.com/tu/proyecto/wiki">Wiki</a></p><h2 id="44b0f93e-7c7b-470d-9671-64a6bf3a8b9f" class=""><strong>Versionado 📌</strong></h2><p id="3d4ead69-0e0a-47df-a74d-307782b31507" class="">Usamos <a href="http://semver.org/">SemVer</a> para el versionado. Para todas las versiones disponibles, mira los <a href="https://github.com/tu/proyecto/tags">tags en este repositorio</a>.</p><h2 id="44a0da53-97d3-4d67-b63d-48354b77e677" class=""><strong>Autores ✒️</strong></h2><p id="5b2a8b79-e7d7-4122-9bf9-7af65b3a3431" class=""><em>Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios</em></p><ul id="0dbf4819-2637-48bc-84b0-309edaa54195" class="bulleted-list"><li><strong>Andrés Villanueva</strong> - <em>Trabajo Inicial</em> - <a href="https://github.com/villanuevand">villanuevand</a></li></ul><ul id="193792f9-4504-4d7b-a779-ccdb19bc671d" class="bulleted-list"><li><strong>Fulanito Detal</strong> - <em>Documentación</em> - <a href="https://www.notion.so/6386899f70346d4580c723232524d35a">fulanitodetal</a></li></ul><p id="ed18c375-b70d-4f26-8aa1-0d56577b789b" class="">También puedes mirar la lista de todos los <a href="https://github.com/your/project/contributors">contribuyentes</a> quienes han participado en este proyecto.</p><h2 id="265d78e3-4e42-4fbc-bc7d-f3d03502d68b" class=""><strong>Licencia 📄</strong></h2><p id="a2679e7a-3a20-47ce-b080-29de367887b5" class="">Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo <a href="https://gist.github.com/Villanuevand/LICENSE.md">LICENSE.md</a> para detalles</p><h2 id="854402da-2ade-4749-bb62-d922523f6470" class=""><strong>Expresiones de Gratitud 🎁</strong></h2><ul id="d0c0e9d5-37dc-483c-8bfe-a8e9b6768ad7" class="bulleted-list"><li>Comenta a otros sobre este proyecto 📢</li></ul><ul id="6c83902e-5595-4a3a-a453-5a2c74f5515f" class="bulleted-list"><li>Invita una cerveza 🍺 o un café ☕ a alguien del equipo.</li></ul><ul id="5deb6691-c1b1-497b-b4ac-0b1044e753dd" class="bulleted-list"><li>Da las gracias públicamente 🤓.</li></ul><ul id="84cdeca6-282f-426d-aa8f-827abfb596e7" class="bulleted-list"><li>etc.</li></ul><p id="72cb29cc-a5c8-4646-896a-605d9f250505" class="">
</p><p id="132e1be5-65f8-4098-bdc4-19665ea38add" class="">
</p><h1 id="d99b9f67-5ae2-4414-bb5a-37cabf0487ce" class="">CODIGO</h1><p id="69d26b2e-325c-43a3-ba4e-e2cbdecdc124" class="">
</p><pre id="44ba9978-4a8e-4352-99ec-17bd3321bd1e" class="code"><code># Título del Proyecto

_Acá va un párrafo que describa lo que es el proyecto_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_Que cosas necesitas para instalar el software y como instalarlas_

```
Da un ejemplo
```

### Instalación 🔧

_Una serie de ejemplos paso a paso que te dice lo que debes ejecutar para tener un entorno de desarrollo ejecutandose_

_Dí cómo será ese paso_

```
Da un ejemplo
```

_Y repite_

```
hasta finalizar
```

_Finaliza con un ejemplo de cómo obtener datos del sistema o como usarlos para una pequeña demo_

## Ejecutando las pruebas ⚙️

_Explica como ejecutar las pruebas automatizadas para este sistema_

### Analice las pruebas end-to-end 🔩

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

### Y las pruebas de estilo de codificación ⌨️

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - El framework web usado
* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [ROME](https://rometools.github.io/rome/) - Usado para generar RSS

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/villanuevand/xxxxxx) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki)

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/tu/proyecto/tags).

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Andrés Villanueva** - *Trabajo Inicial* - [villanuevand](https://github.com/villanuevand)
* **Fulanito Detal** - *Documentación* - [fulanitodetal](#fulanito-de-tal)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.</code></pre></div></article></body></html>
