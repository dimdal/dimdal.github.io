---
layout: ../../layouts/BlogPostLayout.astro
title: Hvorfor er utviklere så skeptiske til å ta i bruk AI?
description: En stor del av jobben som utvikler handler om å løse problemer. Ofte med å skrive kode. Med AI beskriver vi bare problemet, får kode tilbake, og må sitte å lese andres kode. Det er kjedelig, det. Eller?
date: 2025-11-27
author: Marius Ørvik
---
Jeg hører det stadig vekk. Erfarne utviklere som rister på hodet av AI-koding. "Det fungerer ikke til annet enn enkle prototyper," sier de.

Hvorfor er det så mye skepsis til AI blant utviklere?
## **Løse problemer → gøy, lese kode → not**

La oss være ærlige: Det er ikke selve tastingen som er gøy. Ingen ble utvikler fordi de elsker å skrive boilerplate eller pugge syntaks.

Det vi elsker, er tenkingen. Å finne den elegante løsningen på noe komplekst. Følelsen når det sier 'klikk' fordi du fant en smartere vei gjennom logikken.

Med verktøy som Claude Code endres loopen. Du beskriver problemet, får kode tilbake, og må sitte og lese andres kode. Det føles passivt. Kjedelig, til og med. Ser man på cycle time i et utviklingsteam, er det ofte code review som er flaskehalsen. Nå risikerer vi at _hele_ jobben føles som en evig code review.

![Graf som viser hvor mye tid code review tar i et team](/images/blog/code-review-time.jpg)

## Når kartet ikke stemmer med terrenget

Det stikker dypere enn kjedsomhet. Mange har brukt tiår på å lære seg håndverket. Vi har trålet Stack Overflow, ofret nattesøvn for å forstå pointers, og sett utallige [Fireship-videoer](https://www.youtube.com/@Fireship).

Og så kommer en LLM og gjør "hvem som helst" til en habil koder over natta. Det føles litt urettferdig.

Men før vi blir for defensive, la oss se på hva tallene faktisk sier. Fenomenet kalles gjerne "Vibe Coding" – der folk uten dyp teknisk innsikt "føler" seg frem til en løsning med naturlig språk. De er ekstremt gode på _Happy Path_. De får ting til å virke på skjermen.

Problemet er at de sjelden aner om det er trygt, eller om det vil bryte sammen så fort de første tusen brukerne melder sin ankomst.

[Forskning fra Stanford](https://arxiv.org/abs/2211.03622) peker på en fascinerende – og litt skremmende – tendens: Utviklere som lener seg tungt på AI, skriver oftere kode med sikkerhetshull. Det ironiske? De er samtidig _mer selvsikre_ på at koden er trygg enn de som koder manuelt.

## Spagetti som forretningsmodell

Det er her mange utviklere tenker: "Aha! Jeg visste det. AI lager dårlig kode, ergo er jobben min trygg."

Men her må vi skille mellom teknisk perfeksjon og kommersiell realitet.

Nyere rapporter – som [denne fra Y Combinator](https://www.claude.com/blog/building-companies-with-claude-code) – viser at ikke-tekniske gründere nå bygger hele SaaS-tjenester utelukkende ved å snakke med Claude og Cursor. Er koden vakker? Neppe. Er den full av tech debt? Garantert. Er den sikker? Antagelig ikke.

Men den er _ute i markedet_. Mens du diskuterer den mest optimale arkitekturen eller refaktorerer for tredje gang, har "Vibe Coderen" allerede onboardet de første ti kundene.

Sjefen, investoren eller kunden bryr seg sjelden om koden er spagetti, så lenge den løser problemet deres i dag.

## Den nye superkraften

Men historien slutter ikke der. For når disse ti kundene blir til tusen, og edge cases begynner å melde seg? Da faller korthuset sammen.

En ren AI-prompter mangler den mentale modellen for å feilsøke når systemet hallusinerer eller skaleringsproblemene treffer vifta. Det er her skillet går.

Systemtenkning forsvinner ikke. Forståelse for sikkerhet, skalering og arkitektur går ikke ut på dato. Noen må fortsatt vite forskjellen på en tech demo og et driftssikkert system.

Hvis en amatør kan bygge en app på en helg med AI, hva tror du en seniorutvikler kan få til?

Du trenger ikke bli erstattet; Du kan få superkrefter. Du slipper å google regex. Du slipper boilerplate. Du kan flytte fokuset 100% over på arkitektur, forretningsverdi og de vanskelige problemene – de som faktisk er gøye å løse.

Kanskje er vi på vei inn i en tid hvor "utvikler" betyr mindre "en som skriver tekstfiler med rare filendelser" og mer "en som orkestrerer systemer". De beste utviklerne jeg kjenner bruker allerede AI, ikke fordi de ikke kan kode, men fordi det fjerner friksjon.

Rollen forsvinner ikke, men den beveger seg oppover i verdikjeden. Spørsmålet er vel bare om vi er klare for å gi slipp på syntaksen og omfavne arkitekturen.