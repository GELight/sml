# SML

The Simple Markup Language

## Was ist SML?

> [Video - Offizielle Videos zum Format](https://www.youtube.com/channel/UCSVt-9JcnxfTFnztnLEQQug)

    SML ist ein modernes leichtgewichtiges Dateiformat

### Wie könnte man SML beschreiben?

SML ist ein Dateiformat, welches in seiner Schlichtheit kaum zu schlagen ist.
Es vereint die Möglichkeiten der in der Praxis weit verbreiteten Formate und ist eine wirkliche Alternative zu Formaten wie beispielsweise **json**, **xml** oder **yml**.

SML gliedert sich in **3 wesentliche technische Bereiche**, die auf den folgenden Seiten genauer dokumentiert sind:
* [ReliableTxt](https://dev.stenway.com/SML) - Das zuverlässige Textdateiformat
* [WhitespaceSV](https://dev.stenway.com/WSV/) - Leerraum getrennte Werteformate
* [SimpleML](https://dev.stenway.com/SML/) - Einfache Markup-Sprache

Alle 3 Bereiche können unabhängig voneinander eingesetzt werden.
* Die Suche nach einer intuitiven und zuverlässigen Alternative zu CSV sollte mit [WhitespaceSV](https://dev.stenway.com/WSV/) beendet sein.
* Wird ein zuverlässiges Textdateiformat benötigt, dann ist [ReliableTxt](https://dev.stenway.com/SML) die Lösung.
* Für das Schreiben von kompletten Dokumenten ist [SimpleML](https://dev.stenway.com/SML/) die Wahl der Wahl.

### Was unterscheidet SML von anderen Formaten?

* SML ist ... 100% verlässlich durch saubere Zeichenkodierungen
* SML ist ... praktisch einsetzbar auch als Übertragungsformat für REST API's (noch kleiner als JSON)
* SML ist ... weniger fehleranfällig durch eine einfache Syntax
* SML ist ... menschenlesbar durch ein Minimum an strukturellen Vorgaben, Sonder- oder Trennzeichen
* SML ist ... in jeder Sprache einsetzbar
* ... und SML erlaubt natürlich Kommentare :)

> [Video - SML Explained](https://www.youtube.com/watch?v=fBzMdzMtH-s)

> [Video - Relax with SML](https://www.youtube.com/watch?v=4zhejW3Qolg&t=3s)

### Wofür ist SML einsetzbar?

Im Prinzip ist SML für alles einsetzbar. Es gibt praktisch keine fachlichen Grenzen oder technischen Hürden. Möchte man ein paar praktische Beispiele aufzeigen, so wäre es wohl das Einfachste, es mit typischen Konfigurationsdateien zu versuchen:

> [Video - Converting Wikipedia Examples to SML](https://www.youtube.com/watch?v=6FzWTEKPCFw)

## Installation

Für die Anwendung von SML im Browser sowie die serverseitige Anwendung, stehen 2 NPM Pakete zur Verfügung.

* [@gelight/sml](https://www.npmjs.com/package/@gelight/sml) - für die serverseitige Anwendung mit node.js
* [@gelight/sml-client](https://www.npmjs.com/package/@gelight/sml-client) - für die clientseitige Anwendung im Browser


> Der Unterschied der beiden Pakete liegt lediglich in den von SML zur Verfügung gestellten (exportierten) Javascript-Klassen für die entsprechenden Environments. Im Browser stehen besispielsweise keine File-System Operationen zur Verfügung. Das Paket [@gelight/sml-client](https://www.npmjs.com/package/@gelight/sml-client) stellt ausschließlich nur die Klassen von SML zur Verfügung, die im Browser auch verwendet werden können. Im Paket [@gelight/sml](https://www.npmjs.com/package/@gelight/sml) werden auch Klassen exportiert, mit denen man beispielsweise Dateien im File-System schreiben oder lesen kann.

### NPM

Die empfohlene Installationsmethode ist NPM. Dies ist die quasi Standard-Methode, verschiedene Technologien in typische Web-Projekten zu integrieren.

*Anwendung in Node basierten Projekten*
```
npm install @gelight/sml
```
```
yarn add @gelight/sml
```

*Anwendung im Browser*
```
npm install @gelight/sml-client
```
```
yarn add @gelight/sml-client
```

## Beispiele

Parsen eines einfachen SML Dokument
```js
import { SmlDocument } from "@gelight/sml";

const doc = SmlDocument.parse(`
Hello
  About I am "a simple" SML document
World
`);
const values = doc.getRoot().getAttribute("About").getValues();

console.log(values);
```
Konsolenausgabe:
```
[ 'I', 'am', 'a simple', 'SML', 'document' ]
```