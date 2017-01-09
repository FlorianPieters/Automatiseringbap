# Automatiseringbab
### Florian Pieters & Kilian Pauwels
App om op een overzichtelijke manier github repositories op te volgen. 

## Handleiding. 
 
### Benodigdheden.

Om onze app te openen hebt u Node.js nodig en een internetverbinding. Zonder internet verbinding zal angular niet kunnen werken. 

### Setup.

Als u de code heeft gedownload (of gecloned) opent u node.js opdrachtprompt. Met het "cd" commando navigeert u naar de map waar u de code heeft opgeslagen. 
Hierna moet u de node packages "Morgan" en "Express" nog installeren. Dit doet u aan de hand van het commando "npm install [package name]". Als deze packages geïnstalleerd zijn kunt u het commando "node server.js" gebruiken om de site online te brengen.
Er zal in de node console een message komen die zegt "Listening on port 3000". Als deze message in de console komt kan u in uw favoriete web browser naar de site "http://localhost:3000/index.html#/login" navigeren. 

Op deze pagina is er een login scherm, het is altijd mogelijk om in te loggen met username "admin" en password "admin". Met deze credentials krijgt u een lijst van alle studenten in de database.
Het is ook mogelijk om op de link "Register new Username here." te klikken om een nieuw account aan te maken. Na dat u een nieuw account hebt geregistreerd kan je hiermee ook inloggen en dan krijg je enkel de studenten te zien die bij uw account horen. 
Dit zal in de eerste plaats dus niets zijn. Op de overzicht pagina is echter een upload zone om zelf een repo toe te voegen die je wilt volgen. Na dat u dit heeft gedaan zal deze repo dus in uw lijst terecht komen. 

Als u dan op een studenten naam klikt komt u op zijn/haar persoonlijke info pagina waar dan een knop is die linkt naar "repo student", als u hier op klikt kan u alle informatie zien van de repo die u wou opvolgend. 

Wij hopen dat u geniet van onze site.
