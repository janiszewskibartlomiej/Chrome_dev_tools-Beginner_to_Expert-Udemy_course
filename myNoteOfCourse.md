##### 1. programy do porównań - pokazujące różnice w plikach:

http://mergely.com/editor

http://meldmerge.org/

---
##### 2.pobieranie całej strony DOM; w postaci stringa z outerHTML:

`document.getElementsByTagName('html')[0].outerHTML`

>metoda copy() = ctrl + c

***
![alt text](https://www.python.org/static/community_logos/python-logo-master-v3-TM.png "logo python")
##### 3. uruchamianie lokalnego servera:
`python -m http.server 8000`

***
##### 4. Sources -> Snippets ->
możemy dodać funkcję JS która możemy uruchamiać; będzie zapisana w naszej przeglądarce i dostępna globalnie

***

##### 5. Sources -> Filesystem -> Add folder to workspace
dzieki temu możemy działac na folderze lokalnym i wszelki zmiany strony odpalonej na localhost
 bedą zapisywane w tym folderze - po refreshe bedzie to ciągle dostępne
 
 ***
 
 ##### 6. Cases of styles - examples
 
 https://codepen.io/TheRoccoB/full/zZLNwB
 
 *** 
 
 ##### 7. Animations
 
 * https://codepen.io/levineuland/full/AmwCL
 * http://cssanimate.com/
 
 ***
 
 ##### 8. Snippets -> Debugger po ustawieniu breakpointu
 
 istotna jest zakładka Watch w któej możemy wpisać np nazwe zmiennej
  ktora bedzie obserwowana lub mozemy wpisac fukcje JS.
  Mamy równiez dostep do wszytskich zmiennych z pozycji konsoli
  
  ***
  
  ##### 9. CTRL + O -> search by files
  
  * możemy wpisac np ":20"  <- to oznacza że przejdziemy do lini nr 20
  * możemy wpisać "app.js:15" <- przejdziemy do pliku app.js i lini nr 15
 
  
  ***
  
  ##### 10. CTRL + F -> search by name 
  
  możemy szukać równiez po wyrażeniach regularnych
  
  ***
  
  ##### 11. Console -> '$_'
ta komenda daje dostęp do ostatnio zadeklarowanej zmiennej

***

##### 12. komendy z grupy 'console.'

* console.dir(document);  <= wszystkie dane ze strony [object JS ] - np lista links
* console.dirxml(document);  <= cały kod HTML - DOM
* .group('nazwa') <= zgrupuje poniższe dane do nazwy 'name' 
  * .log(obj.first)
  * .log(obj.middle)
  * .log(obj.last)
* .warn() <= print to consol z żółtym trójkątem + wykrzyknikiem
* .info() <= print like .log ale niby ma być z zółtym okiem
* .error() <= print to consol z czerwonym 'x'
* console.time('total') <= to jest start do mierzenia czasu wykonania czegoś 
* console.timeEnd('total') <= koniec mierzenia czasu i pokazanie czasu który upłynął  
* console.trace() <= pokazuje ścieżkę wykonania skryptu
 ***
 
 ##### 13. document.querySelectorAll('*')
 pobierzemy liste wszytskich elemnetów  z DOM

***
##### 14.  '$' - skrót - funkcja jQuery selector 
* $('div') == document.querySelector('dir')
* $$('div') == document.querySelectorAll('dir')
* $_ < daje dostęp do ostatnio zadeklaroanej zmiennej
---
* $0 <- daje dostęp do ostatnio zbadanego elementu co umożliwia łatwe zmiany
np.: $0.style.bacgroundColor = 'blue'
* $1 <- pokazuje poprzednio zbadany element
---
* console.log('%c hi %c World', 'font-size:100px','color:orange; font-size:6-px')

***

##### 15. 'debugger;' 
w tym miejscu zatrzyma się JS jak to wpiszemy tą komendę do kodu

*** 

##### 16. Source -> 'II' znak pause on caught exceptions

kod zostnanie zatrzymany na stronei jak pojawi sie wyjatek

***
##### 17. Network -> XHR 

to są Request url  -> header i response; 
- można klikajac prawym przyciskiem myszy skopiowac ten reuest i uzyc np w terminalu
- Można wykożystać request url do hacowania poniewaz dokaldnie widzimy strukture url

*w network jest zakładka online gdzie można wybrać np łącze 3G slow

***

##### 18. zabezpieczenie localhostu tunelem

https://ngrok.com   -> można wykożystać m.in do testów mobile
>odpalenie ngrok http 8000

***

##### 19. Rendering -> scroll ...

mozna zobaczyc co sie dzieje ze scrollem

***

##### 20. Performance > rec + zaznaczone checkboxy screenshots and memory

mozemy zobczyć czasy ładowania jak agramy np ładowanie strony, dzieki temu wiem w czym jest problem wydajnosci strony

>klikając w Bottom-Up mozemy zobaczyć zo zajmuje najwiecej czasu przy ladowaniu,
można rozwinąć Activity  i linkime 'index.js...' przeniesć się do fukcji JS i zobaczyc który wiersz kodu zajmuje najwiecej czasu

* możemy dopisać fukcję do JS `console.profile();` jako start oraz `console.profileEnd();` na koniec zapisu [w pozegulnych wierszach pliku JS] 
- w ten sposób wszystkie wyniki ładowania będą zapisane w zakładce More tools -> JavaScript Profiller 
 i nie trzeba ich nagrywac bo mamy je zapisane.

***

##### 21. Memory > snapshot/rec 

widzimy co ile pamieci zrzera/zajmuje, ile obiektów jest łądowanych itd,
w tiltrze mozna wpisac detached i zobaczymy co zajmuje najwiecej czasu 

***

##### 22. INspect code by inspect

* trzeba właczyć devtools `shift+ctrt+i`
* trzeba odseparować okno - odłączyć od obecnego
* wciskamy `shift+ctrt+i` i otwiera nam się kolejne okno, dzięki temu możemy zbadać konkrteną linijkę kodu 

