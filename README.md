# ErrProovitoo

See projekt on loodud Angular raamistikus eesmärgiga demonstreerida horisontaalse slider-komponendi funktsionaalsust, kasutades ERR Jupiteri API andmeid.

# Tehtud funktsionaalsus
* Loogika andmete toomiseks ERR API kaudu.

* Dünaamiline sektsioonide kuvamine (Enim vaadatud, Sport, jne), igaühel eraldi horisontaalne piltide slider.

* Iga sektsiooni sees olevad pildid tulevad andmete verticalPhotos[0].photoTypes['60'].url põhjal.

* Lisatud vasakule ja paremale kerimisnupud igasse sektsiooni:

* Nupud ilmuvad ainult siis, kui pilte on rohkem kui mahub nähtavale alale.

* Nupud on vaikimisi peidetud ja muutuvad nähtavaks hiirega peale liikudes (hover-il).

* Skrollimine töötab sujuvalt (scrollBy koos behavior: 'smooth').

* Lisatud visuaalne kujundus (slider-img, scroll-left, scroll-right jne).

# Kuidas käivitada
* Paigalda sõltuvused: npm install

* Käivita arendusserver: ng serve

* Ava brauseris: http://localhost:4200/

# Muu info
* Kasutasin @Input() väärtusena iga sektsiooni andmeid.

* Slider on realiseeritud kui eraldi komponent (SliderSectionComponent), mida kasutatakse mitmel korral parent-komponendis.

* Projekt kasutab standalone components Angular 16+ stiilis.

