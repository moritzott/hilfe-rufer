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
Hals-Nasen-Rachen-Raumes, des Brustkorbs oder bei einer ungünstigen
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

## Live-Demo
* [Hilfe-Rufer](https://moritzott.github.io/hilfe-rufer/)

## Installation
### Android
Die Hilfe-Rufer-App gibt es noch nicht im Play Store. Dennoch können Sie sie schon installieren:
1. Laden Sie die signierte APK-Datei über meinen [Google-Drive-Ordner](https://drive.google.com/file/d/12W08eBiSvX9oZrMx4XHLIp25bKeowDvO/view?usp=sharing) herunter.
2. Eventuell müssen Sie in den Systemeinstellungen erst die Funktion freischalten, dass Sie auch von externen Quellen (außerhalb des PlayStore) Android Apps installieren können.
3. Gehen Sie in Ihren Donwload-Ordner und klicken Sie auf die heruntergeladene APK-Datei und wählen Sie 'installieren'.

#### Minimum Anforderungen
* API 16: Android 4.1 (Jelly Beans)

### iOS und Sonstige
Wenn Sie die App nicht installieren möchten, können (es gibt keine iOS Version) oder sonstige Fehler auftreten, gibt es auch eine einfache Lösung:

* Klangdatei einfach herunterladen (sie finden diese oben im Audio-Ordner => 'male.mp3' oder 'female.mp3')
* in Ihren Download-Ordner gehen und die heruntergeladene Datei suchen
* auf die Datei lange draufdrücken
* einen Link auf den Startbildschirm erstellen
* zum Startbildschirm wechseln und einmal auf den Link drücken
* der Audio-Player spielt die Datei ab
* **nicht vergessen:** beim Audio-Player die Option *Loop* oder *Schleifen* aktivieren, damit die Klangdatei in einer Schleife ständig wiederholt wird

## Größe der Anwendung (Android)
- ca. 13,26 MB

## Weiterentwicklung
* [ ] Momentan gibt es die Anwendung nur in deutscher Sprache. Eine internationale Version mit der Menusprache in Englisch wäre das nächste Ziel. Man kann dann auch diverse Sprachen für die Hilfe-Rufe einstellen (in seiner jeweiligen Landessprache).
* [ ] Die Klangdateien sollten noch weiter optimiert werden. Vielleicht für die Männerstimme eine tiefere Stimme finden. Die Klangdateien müssen einen lauten Pegel haben 


## Version
Aktuelle Version ist:
* Hilfe-Rufer v1.0-pre-alpha
