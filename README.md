
# Calculator-TOP
---

Solution for TheOdinProject: Calculator: https://www.theodinproject.com/lessons/foundations-calculator


## Live-preview: https://tomasjpn.github.io/Calculator-TOP/

---
## Projektübersicht

Das `Calculator-TOP` Projekt ist eine Taschenrechner-Anwendung, die auf Web-Entwicklung basiert. Die Anwendung bietet eine benutzerfreundliche Oberfläche und führt grundlegende mathematische Berechnungen durch. Die Benutzeroberfläche wurde mit HTML, CSS und JavaScript entwickelt und bietet eine ansprechende Animation und Interaktivität. Das Projekt verwendet Webpack, um die Ressourcen zu bündeln und zu optimieren.

## Funktionen

- **Grundrechenarten**: Unterstützung für Addition, Subtraktion, Multiplikation und Division.
- **Gleichheitsfunktion**: Zeigt das Ergebnis der Berechnung an.
- **Animationen**: Eingebaute Animationen für einen flüssigen und modernen Benutzererlebnis.

## Sprachen

- **HTML**: Struktur der Webanwendung.
- **CSS**: Gestaltung und Layout, einschließlich Animationen.
- **JavaScript**: Logik zur Durchführung der Berechnungen und zur Interaktivität.

## Projektstruktur

- **`src/`**: Der Quellcode des Projekts.
  - **`index.html`**: Die Haupt-HTML-Datei, die die Struktur der Anwendung enthält.
  - **`styles.css`**: Die CSS-Datei, die für das Styling und die Animationen der Anwendung verantwortlich ist.
  - **`script.js`**: Die JavaScript-Datei, die die Funktionalität des Taschenrechners implementiert.
- **`dist/`**: Der Ordner, der die gebündelten Dateien enthält, die von Webpack generiert wurden.
- **`webpack.config.js`**: Die Konfigurationsdatei für Webpack.
- **`package.json`**: Die Datei, die die Abhängigkeiten und Skripte für das Projekt enthält.

## Nutzung

1. **Eingabe von Zahlen und Operatoren**:
   - Verwenden Sie die Tasten auf der Benutzeroberfläche, um Zahlen und Operatoren einzugeben.
   
2. **Berechnung**:
   - Drücken Sie die `=`-Taste, um das Ergebnis der Berechnung anzuzeigen.
   
3. **Löschen**:
   - Verwenden Sie die `C`-Taste, um die Eingabe zu löschen oder zurückzusetzen.
   
4. **Operatoren**:
   - Verwenden Sie die Operatoren (`+`, `-`, `*`, `/`), um mathematische Operationen durchzuführen.

## Animationen

Die Anwendung enthält folgende Animationen:
- **Einblenden der Buttons**: Jeder Button wird nacheinander mit einer Fade-In-Animation angezeigt.
- **Hochschiebende Animation**: Die gesamte Benutzeroberfläche wird von unten nach oben eingeblendet.
- **Schattenanimation**: Ein subtiler Schatten wird nach dem Einblenden hinzugefügt, um eine visuelle Tiefe zu schaffen.

## Methoden

### JavaScript-Funktionen

- **`calculate()`**: Führt die Berechnung basierend auf der aktuellen Eingabe durch.
- **`updateDisplay()`**: Aktualisiert das Display mit den aktuellen Eingaben und Ergebnissen.
- **`clearDisplay()`**: Setzt das Display zurück.

### CSS-Animationen

- **`@keyframes fadeIn`**: Animiert das Einblenden der Buttons.
- **`@keyframes slideUp`**: Animiert das Hochschieben der Benutzeroberfläche.
- **`@keyframes shadow`**: Fügt einen Schatten hinzu, der im Verlauf der Animation sichtbar wird.

## Webpack-Konfiguration

Die Webpack-Konfiguration (`webpack.config.js`) umfasst folgende Punkte:

- **Entry**: Der Einstiegspunkt der Anwendung (`src/index.js`).
- **Output**: Der Ausgabepunkt für die gebündelten Dateien (`dist/main.js`).
- **Loaders**: Regeln zum Verarbeiten von CSS- und JavaScript-Dateien.
- **Plugins**: Plugins zur Optimierung und Verwaltung der Ausgabe.


---

## Entwickler

- **Autor**: Tomasjpn
- **GitHub-Profil**: [Tomasjpn](https://github.com/tomasjpn)
