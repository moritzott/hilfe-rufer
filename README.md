# Smartphone Hilfe-Rufer
Mit dem Hilfe-Rufer können Sie sich in Notsituation akustisch bemerkbar machen. Er kann für Sie um Hilfe rufen.


![Demo-Seite](./hilfe-rufer-demo.png)

## Beschreibung

Es gibt Notsituationen, bei denen man sich
mittels Hilfe-Rufen akustisch bemerkbar machen muss, damit
andere Personen einen finden und auf die Rufe
aufmerksam werden. Es könnte dabei der unglückliche Fall eintreten,
dass man physisch selbst nicht um Hilfe rufen kann. Das
kann der Fall sein bei Gesichtslähmungen, bei Verletzungen des
Hals-Nase-Rachen-Raumes, des Brustkorbs oder bei einer ungünstigen
Körperhaltung, sodass nicht der volle Einsatz
des Brustkorbes zum Einsatz kommen kann und der Hilferuf
leiser ist als sonst. Viele Menschen haben auch
Hemmungen, in Notsituationen laut zu rufen, sodass
der Hilferuf nicht weit zu hören ist.

Ziel ist deswegen die Entwicklung einer einfachen App, mittels derer
man mit einer Männer- oder Frauenstimme um Hilfe rufen kann. Der Nutzer kann das Geschlecht der Rufstimme (Mann/Frau) einstellen. Über ein Menü lassen sich die Einstellungen ändern.

Sollte man nun in eine Notsituation kommen, bei der man nicht selbst akustisch um Hilfe rufen kann oder aufgrund von Verletzungen nicht im Stande ist, sich bemerkbar zu machen, kann man die Anwendung nutzen. Falls man mit einer Hand an sein Smartphone hinkommt, kann man versuchen, die Anwendung zu starten und auf den zentralen Start-Schalter drücken und die Hilferufe werden in
in einer Schleife so lange abgespielt, bis man auf den Stop-Schalter drückt.

In Notsituationen haben die manche Menschen nicht die Kraft und das Lungenvolumen, um über einen längeren Zeitraum (z. B. 15 min.) um Hilfe zu rufen. Die Anwendung kann das Problem lösen, indem in einer Schleife so lange ein menschlicher Hilferuf abgespielt wird, bis man auf den Stop-Knopf drückt.

Der *Hilfe-Rufer* ist ein privates Projekt, dass ich im August 2021 begonnen habe. Ziel war eine leicht zu bedienende Anwendung, mit der ich akustisch um Hilfe rufen kann, wenn ich nicht in der Lage bin dies selbst zu tun.

## Live-Demo:
* [Hilfe-Rufer](https://moritzott.github.io/hilfe-rufer/)

## Anforderung
* Die App muss offline funktionieren, da man auch in Gebieten sein kann, wo kein mobiles Internet oder Telefonnetz funktioniert.

* Es muss deutlich in der Beschreibung der App sein, dass die App nicht die Polizei oder Rettungskräfte per Telefon zu Hilfe ruft. Manche Leute könnten den Ausdruck ('Um Hilfe rufen') missverstehen. Diese Anwendung möchte akustisch um Hilfe rufen, nicht einen Telefonanruf bei der Polizei absetzen.

## Installation

Bei der App handelt es sich um eine progressive Web-App (PWA). Sie wird initial in Ihrem Browser (Chrome, Firefox, usw.) über die [Live-Demo](https://moritzott.github.io/hilfe-rufer/) geöffnet. Danach haben Sie die Möglichkeit die Anwendung auf ihrem Gerät zu installieren. Klicken Sie oben rechts in ihrem Browser auf die drei vertikalen Punkte und wählen dann im Menü die Option *Zum Startbildschirm hinzufügen*. Ein Service Worker lädt die erforderlichen Dateien im Hintergrund herunter, sodass Sie die App auch nutzen können sollten, wenn Sie keine Internet-Verbindung haben. Eventuell bekommen Sie je nach verwendeten Browser auch schon vorgeschlagen, dass Sie die App installieren können.

**Wichtig:** Testen Sie die Anwendung und machen Sie sich mit den Funktionen vertraut! Vor allem sollten Sie testen, ob die Anwendung auch ohne Internet funktioniert oder ob es zu  Fehlern kommt.

Wenn Sie die App nicht installieren möchten, können oder sonstige Fehler auftreten, gibt es auch eine einfache Lösung:

* Klangdatei einfach herunterladen (sie finden diese oben im Audio-Ordner => 'male.mp3' oder 'female.mp3')
* in ihren Download-Ordner gehen und die heruntergeladene Datei suchen
* auf die Datei lange draufdrücken
* einen Link auf den Startbildschirm erstellen
* zum Startbildschirm wechseln und einmal auf den Link drücken
* der Audio-Player spielt die Datei ab
* **nicht vergessen:** beim Audio-Player die Option *Loop* oder *Schleifen* aktivieren, damit die Klangdatei in einer Schleife ständig wiederholt wird

## Größe der Anwendung
- ca. 917 kB

## Weiterentwicklung
* [ ] Momentan gibt es die Anwendung nur in deutscher Sprache. Eine internationale Version mit der Menusprache in Englisch wäre das nächste Ziel. Man kann dann auch diverse Sprachen für die Hilfe-Rufe einstellen (in seiner jeweiligen Landessprache).
* [ ] Die Klangdateien sollten noch weiter optimiert werden. Vielleicht für die Männerstimme eine tiefere Stimme finden. Die Klangdateien müssen einen lauten Pegel haben 
* [ ] Eine native Android-App ist parallel in Planung, da Servie-Worker manchmal etwas tückisch sein könnten. Im schlimmsten Fall wären dann offline die Audiodateien nicht verfügbar. Das **darf** nicht eintreten.

## Version
Aktuelle Version ist:
* Hilfe-Rufer v1.0-pre-alpha
