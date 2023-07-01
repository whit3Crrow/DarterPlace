export const list = [
    
    {
        id: 5,
        author: 'romek',
        tittle: 'Jakie polecacie ćwiczenia na wzmocnienie chwytu',
        category: 'Exercise',
        likes: 23,
        comments: [{
            id: 1,
            nick: 'Adam997',
            comment: 'bench press',
            likes: 79,

        }]
    },
    {
        id: 6,
        author: 'KamilStar123',
        tittle: 'Najlepsze miejsca do grania w darta w Warszawie?',
        category: 'Places',
        likes: 36,
        comments: [
            {
                id: 1,
                nick: 'AdasPol',
                comment: 'Polecam pub "Bullseye", świetna atmosfera i profesjonalne tarcze',
                likes: 15,
            },
            {
                id: 2,
                nick: 'Krzychu777',
                comment: 'Ja zawsze chodzę do "Triple 20", mają dobre piwo',
                likes: 7,
            },
            {
                id: 3,
                nick: 'BartekZdzich',
                comment: 'A znacie może jakieś miejsce gdzie można zagrać na świeżym powietrzu?',
                likes: 5,
            }
        ]
    },
    {
        id: 7,
        author: 'DartaMaster',
        tittle: 'Porady dla początkujących graczy',
        category: 'Advice',
        likes: 85,
        comments: [
            {
                id: 1,
                nick: 'JanekDart',
                comment: 'Trenuj regularnie i skupiaj się na celności, reszta przyjdzie z czasem',
                likes: 30,
            },
            {
                id: 2,
                nick: 'romek',
                comment: 'Nie zapominaj o odpoczynku, ręka musi mieć czas na regenerację',
                likes: 14,
            },
            {
                id: 3,
                nick: 'KamilStar123',
                comment: 'I pamiętaj, żeby dobrze dobrać lotki do swojego stylu rzutu',
                likes: 20,
            }
        ]
    },
    {
        id: 3,
        author: 'romek',
        tittle: 'co zrobić jak lotka utknęła w tarczy i nie da się jej wyciągnąc ',
        category: 'Issues',
        likes: 3,
        comments: [{
            id: 1,
            nick: 'Adam997',
            comment: 'mysle że powinieneś usunąć ten post',
            likes: 19,
        },
        {
            id: 2,
            nick: 'nierobtego',
            comment: 'nieusuwajstary',
            likes: 19,
        }]
    },
    {
        id: 8,
        author: 'Piotrek999',
        tittle: 'Czy warto kupić drogie lotki?',
        category: 'Equipment',
        likes: 52,
        comments: [
            {
                id: 1,
                nick: 'Adam997',
                comment: 'Ważne jest, żebyś czuł się komfortowo, cena nie zawsze idzie w parze z jakością',
                likes: 26,
            },
            {
                id: 2,
                nick: 'DartaMaster',
                comment: 'Ważne jest też, żeby dobrać lotki do swojej siły rzutu i techniki',
                likes: 10,
            }
        ]
    },
    {
        id: 9,
        author: 'Marcin_2023',
        tittle: 'Jak trenować celność w darta?',
        category: 'Exercise',
        likes: 64,
        comments: [
            {
                id: 1,
                nick: 'Adam997',
                comment: 'Podziel tarczę na segmenty i trenuj celowanie w każdy z nich',
                likes: 31,
            },
            {
                id: 2,
                nick: 'BartekZdzich',
                comment: 'Możesz też spróbować ćwiczyć z zamkniętymi oczami, to pomoże skupić się na ruchu ręki',
                likes: 12,
            },
            {
                id: 3,
                nick: 'Piotrek999',
                comment: 'Ja ćwiczę strzały na tarcze z daleka, to też pomaga w celności',
                likes: 6,
            }
        ]
    },
    {
        id: 10,
        author: 'JanuszPol',
        tittle: 'Czy darts to sport, czy tylko rozrywka?',
        category: 'Discussion',
        likes: 75,
        comments: [
            {
                id: 1,
                nick: 'KamilStar123',
                comment: 'Dla mnie to sport, wymaga skupienia i precyzji',
                likes: 27,
            },
            {
                id: 2,
                nick: 'Adam997',
                comment: 'Może być oboma, zależy jak do tego podchodzisz',
                likes: 19,
            },
            {
                id: 3,
                nick: 'romek',
                comment: 'Jak dla mnie to świetna zabawa, ale na pewno wymaga umiejętności',
                likes: 11,
            },
            {
                id: 4,
                nick: 'JanekDart',
                comment: 'Czy szachy to sport? Jeżeli tak, to darts na pewno też',
                likes: 9,
            }
        ]
    },
    {
        id: 11,
        author: 'Marcin_2023',
        tittle: 'Finał Mistrzostw Świata w Dart - Smith vs Cross 2023-03-18',
        category: 'LiveChats',
        likes: 120,
        comments: [
            { id: 1, nick: 'DartaFan1', comment: 'Co za mecz! Smith naprawdę się popisał!', likes: 20 },
            { id: 2, nick: 'Triple20', comment: 'Cross miał kilka świetnych rzutów, szkoda że to nie wystarczyło.', likes: 15 },
            { id: 3, nick: 'BullseyeLover', comment: 'To był naprawdę zacięty mecz.', likes: 10 },
            { id: 4, nick: '180max', comment: 'Smith był dzisiaj nie do zatrzymania!', likes: 12 },
            { id: 5, nick: 'DoubleOut', comment: 'Widzieliście ten ostatni rzut Crossa? Niesamowite.', likes: 18 },
            { id: 6, nick: 'DoubleOut', comment: 'Niesamowita atmosfera podczas tego meczu!', likes: 17 },
            { id: 7, nick: '180max', comment: 'Czekam na następny mecz tych zawodników.', likes: 11 },
            { id: 8, nick: 'DartThrower', comment: 'Kto oglądał na żywo? Musiało być niesamowicie!', likes: 14 },
            { id: 9, nick: 'Triple20', comment: 'Szok! Nie spodziewałem się takiego obrotu sprawy.', likes: 18 },
            { id: 10, nick: 'BullseyeLover', comment: 'Czy ktokolwiek zna nazwę piosenki, która grała podczas przerwy?', likes: 9 },
            { id: 11, nick: 'DartaMaster', comment: 'Dzięki za transmisję!', likes: 13 },
            { id: 12, nick: 'DartaFan1', comment: 'To był naprawdę emocjonujący mecz.', likes: 15 },
            { id: 13, nick: 'DoubleOut', comment: 'Nie mogę się doczekać przyszłych meczów.', likes: 10 },
            { id: 14, nick: '180max', comment: 'Czy ktoś wie, kiedy jest następny mecz?', likes: 14 },
            { id: 15, nick: 'DartThrower', comment: 'Czy są jakieś powtórki z tego meczu?', likes: 9 },
            { id: 16, nick: 'Triple20', comment: 'Jaka była średnia punktów dla każdego zawodnika?', likes: 12 },
            { id: 17, nick: 'BullseyeLover', comment: 'Czy są dostępne statystyki z tego meczu?', likes: 8 },
            { id: 18, nick: 'DartaMaster', comment: 'Kto teraz prowadzi w rankingu?', likes: 13 },
            { id: 19, nick: 'DartaFan1', comment: 'Gdzie mogę znaleźć więcej informacji o tych zawodnikach?', likes: 9 },
            { id: 20, nick: 'DoubleOut', comment: 'Kiedy są następne mistrzostwa?', likes: 7 }

        ]
    },
    {
        id: 12,
        author: 'Adam997',
        tittle: 'Półfinał European Championship - Anderson vs Wright 2023-06-25',
        category: 'LiveChats',
        likes: 95,
        comments: [
            { id: 1, nick: 'DartaMaster', comment: 'Nie mogę uwierzyć, że Wright to przegrał!', likes: 19 },
            { id: 2, nick: 'DartThrower', comment: 'Anderson miał dziś świetną formę. Zasłużone zwycięstwo.', likes: 14 },
            { id: 3, nick: 'DartaFan1', comment: 'Czekam na rewanż w finale!', likes: 13 },
            { id: 4, nick: 'Triple20', comment: 'Zawsze wiedziałem, że Anderson jest lepszy.', likes: 16 },
            { id: 5, nick: 'BullseyeLover', comment: 'Szkoda Wrighta, miał kilka dobrych rzutów.', likes: 11 },
        ]
    },
    {
        id: 15,
        author: 'DartFan_33',
        tittle: 'Kwalifikacje do Mistrzostw Świata - Adrian Lewis vs Michael van Gerwen 2023-07-18',
        category: 'LiveChats',
        likes: 47,
        comments: [
            { id: 1, nick: 'Triple20', comment: 'Niesamowity rzut Lewisa!', likes: 10 },
            { id: 2, nick: 'DartLover', comment: 'Van Gerwen mógł zrobić to lepiej, szkoda.', likes: 7 },
            { id: 3, nick: '180max', comment: 'Czekam na rewanż!', likes: 12 },
            { id: 4, nick: 'DoubleOut', comment: 'Jaka intensywność, uwielbiam to!', likes: 14 },
            // itd... (dodaj pozostałe 16 komentarzy)
        ]
    },
    {
        id: 16,
        author: 'Marcin_2023',
        tittle: 'Finał Grand Slam - Gerwyn Price vs Gary Anderson 2023-09-30',
        category: 'LiveChats',
        likes: 115,
        comments: [
            { id: 1, nick: 'DartaFan1', comment: 'Price pokazał dzisiaj swoją klasę!', likes: 23 },
            { id: 2, nick: 'BullseyeLover', comment: 'Anderson miał kilka dobrych momentów, ale to nie wystarczyło.', likes: 18 },
            { id: 3, nick: 'Triple20', comment: 'Nie mogę doczekać się następnego finału!', likes: 20 },
            { id: 4, nick: 'DartThrower', comment: 'Wspaniały mecz, gratulacje dla Price!', likes: 21 },
            // itd... (dodaj pozostałe 16 komentarzy)
        ]
    },
    {
        id: 17,
        author: 'Adam997',
        tittle: 'Finał Premier League - Peter Wright vs Rob Cross 2023-05-23',
        category: 'LiveChats',
        likes: 105,
        comments: [
            { id: 1, nick: 'DartLover', comment: 'Wright był dzisiaj niesamowity!', likes: 24 },
            { id: 2, nick: '180max', comment: 'Cross miał swoje szanse, ale nie mógł ich wykorzystać.', likes: 19 },
            { id: 3, nick: 'DoubleOut', comment: 'To był fantastyczny mecz!', likes: 18 },
            { id: 4, nick: 'Triple20', comment: 'Wspaniała gra obu zawodników, czekam na następne spotkanie!', likes: 22 },
            // itd... (dodaj pozostałe 16 komentarzy)
        ]
    },
    {
        id: 18,
        author: 'BartekZdzich',
        tittle: 'Finał Players Championship - James Wade vs Dave Chisnall 2023-12-22',
        category: 'LiveChats',
        likes: 95,
        comments: [
            { id: 1, nick: 'DartaMaster', comment: 'Wade miał dzisiaj niesamowity dzień!', likes: 15 },
            { id: 2, nick: 'DartaFan1', comment: 'Chisnall dobrze zagrał, ale Wade był lepszy.', likes: 17 },
            { id: 3, nick: 'BullseyeLover', comment: 'Czy ktoś ma wideo z najlepszymi rzutami?', likes: 12 },
            { id: 4, nick: 'DartThrower', comment: 'Gratulacje dla Wade, świetna gra!', likes: 18 },
            // itd... (dodaj pozostałe 16 komentarzy)
        ]
    },
    {
        id: 20,
        author: 'DartFan_33',
        tittle: 'Michael van Gerwen - najlepszy darcista wszech czasów?',
        category: 'TopPlayers',
        likes: 134,
        comments: [
            {
                id: 11,
                nick: 'AngryDarter',
                comment: 'To jest żałosne, jak możecie porównywać Van Gerwena do legendy takiej jak Taylor! Oczywiście, jest dobry, ale daleko mu do miana największego!',
                likes: 102
            },
            { id: 1, nick: 'Triple20', comment: 'Bez wątpienia, Van Gerwen jest niesamowity!', likes: 23 },
            { id: 2, nick: 'BullseyeLover', comment: 'Nie zapominajmy o Phil Taylor. On też jest legendą.', likes: 27 },
            { id: 3, nick: '180max', comment: 'Van Gerwen ma niesamowity talent, ale czy jest najlepszy? Nie jestem pewien.', likes: 19 },
            { id: 4, nick: 'DartaMaster', comment: 'Czy to nie jest trochę wcześnie, aby nazywać go najlepszym wszech czasów?', likes: 15 },
            { id: 5, nick: 'DartLover', comment: 'Jego osiągnięcia mówią same za siebie, jest niesamowity!', likes: 24 },
            { id: 6, nick: 'DoubleOut', comment: 'Najlepszy wszech czasów? To duża sprawa. Ale jest na pewno w czołówce.', likes: 16 },
            { id: 7, nick: 'DartaFan1', comment: 'Najlepszy czy nie, zawsze jest przyjemność go oglądać.', likes: 20 },
            { id: 8, nick: 'Triple20', comment: 'Ma jeszcze wiele lat gry przed sobą, zobaczymy co przyniesie przyszłość.', likes: 18 },
            { id: 9, nick: '180max', comment: 'To zależy, jak oceniamy "najlepszego". Czy chodzi o liczbę wygranych, umiejętności, czy wpływ na sport?', likes: 22 },
            { id: 10, nick: 'DartaMaster', comment: 'Zgadzam się z 180max, to nie jest takie proste.', likes: 16 },
            // itd... (dodaj pozostałe 10 komentarzy)
        ]
    },
    {
        id: 21,
        author: '180max',
        tittle: 'Phil Taylor - Czy jego rekordy kiedykolwiek zostaną pobite?',
        category: 'TopPlayers',
        likes: 204,
        comments: [
            { id: 1, nick: 'DartThrower', comment: 'Taylora jest trudno pokonać, jego rekordy są niesamowite!', likes: 25 },
            { id: 2, nick: 'BullseyeLover', comment: 'Nigdy nie mów nigdy, ale będzie to bardzo trudne.', likes: 22 },
            { id: 3, nick: 'Triple20', comment: 'Taylor jest legendą. Nie jestem pewien, czy ktoś kiedykolwiek go przewyższy.', likes: 23 },
            { id: 4, nick: 'AngryDarter', comment: 'Rozważcie to realistycznie, ludzie. Taylor grał w innej epoce. Teraz jest więcej konkurencji, więc porównywanie ich jest nie fair.', likes: 17 },
            // itd... (dodaj pozostałe 16 komentarzy)
        ]
    },
    {
        id: 22,
        author: 'DoubleOut',
        tittle: 'Gary Anderson - Czy jest jednym z najbardziej niedocenianych graczy?',
        category: 'TopPlayers',
        likes: 167,
        comments: [
            { id: 1, nick: 'DartaFan1', comment: 'Anderson jest niesamowity, zasługuje na więcej uznania!', likes: 18 },
            { id: 2, nick: 'DartLover', comment: 'Zdecydowanie. Jego umiejętności często są pomijane w dyskusjach o najlepszych graczy.', likes: 20 },
            { id: 3, nick: 'Triple20', comment: 'Anderson jest pewnie jednym z najlepszych, ale jest tyle innych wielkich graczy teraz.', likes: 19 },
            { id: 4, nick: 'AngryDarter', comment: 'Niedoceniany? Chyba żartujesz. Anderson ma swoje momenty, ale jest daleko od bycia jednym z najlepszych. ', likes: 16 },
            // itd... (dodaj pozostałe 16 komentarzy)
        ]
    },
    {
        id: 23,
        author: 'DartFan_33',
        tittle: 'Nadchodzący turniej Premier League - Jakie są wasze przewidywania?',
        category: 'Tournaments',
        likes: 234,
        comments: [
            { id: 1, nick: 'Triple20', comment: 'Moim zdaniem Van Gerwen ma dobre szanse na wygraną.', likes: 28 },
            { id: 2, nick: 'BullseyeLover', comment: 'Nie mogę się doczekać meczu Taylor vs Anderson!', likes: 33 },
            { id: 3, nick: '180max', comment: 'Ciekawi mnie, czy ktoś jest w stanie pokonać rekord Taylora.', likes: 24 },
            { id: 4, nick: 'DartaMaster', comment: 'Mam nadzieję, że zobaczymy kilka niespodzianek!', likes: 30 },
            { id: 5, nick: 'DartLover', comment: 'Zawsze kibicuję outsiderom. Ciekawe, kto nas zaskoczy.', likes: 26 },
            { id: 6, nick: 'DoubleOut', comment: 'Anderson zasługuje na więcej uznania. Liczę, że tym razem pokaże na co go stać.', likes: 22 },
            { id: 7, nick: 'AngryDarter', comment: 'Śmiechu warte. Tak naprawdę tylko kilku z nich ma szansę na wygraną. Reszta to tylko statyści.', likes: 18 },
            // itd... (dodaj pozostałe 13 komentarzy)
        ]
    },
    {
        id: 24,
        author: '180max',
        tittle: 'Kto wygra nadchodzący turniej World Dart Championship?',
        category: 'Tournaments',
        likes: 264,
        comments: [
            { id: 1, nick: 'Triple20', comment: 'Mam nadzieję, że to będzie Van Gerwen!', likes: 30 },
            { id: 2, nick: 'BullseyeLover', comment: 'Moim faworytem jest Phil Taylor, ale kto wie...', likes: 32 },
            { id: 3, nick: '180max', comment: 'Naprawdę ciężko powiedzieć, wszyscy są tak dobrzy.', likes: 28 },
            { id: 4, nick: 'DartaMaster', comment: 'Co myślicie o kltonie? Moim zdaniem, ma szanse na dobry wynik.', likes: 35 },
            { id: 5, nick: 'DartLover', comment: 'Dla mnie kltonie to czarny koń tego turnieju!', likes: 33 },
            { id: 6, nick: 'DoubleOut', comment: 'Szczerze, wolałbym zobaczyć kogoś innego niż kltonie na podium.', likes: 27 },
            { id: 7, nick: 'AngryDarter', comment: 'Kltonie? Proszę was... Ten gość nie ma szans na zwycięstwo. ', likes: 22 },
            // itd... (dodaj pozostałe 13 komentarzy)
        ]
    },{
        id: 25,
        author: 'DartGlobe',
        tittle: 'Jak polityka UK wpływa na organizację turniejów darta?',
        category: 'Tournaments',
        likes: 164,
        comments: [
            { id: 1, nick: 'Triple20', comment: 'Szczerze, nie widzę dużego wpływu. Dla mnie dart to po prostu sport.', likes: 32 },
            { id: 2, nick: 'BullseyeLover', comment: 'Możliwe, że polityka imigracyjna może wpływać na niektóre drużyny.', likes: 34 },
            { id: 3, nick: '180max', comment: 'Ciekawe, czy Brexit miał jakieś konsekwencje dla darta...', likes: 35 },
            { id: 4, nick: 'DartaMaster', comment: 'Mam nadzieję, że polityka nie wpłynie na naszą ukochaną grę.', likes: 33 },
            { id: 5, nick: 'DartLover', comment: 'Pomimo różnic politycznych, wszyscy jesteśmy tu dla darta!', likes: 31 },
            { id: 6, nick: 'DoubleOut', comment: 'Czasami polityka wpływa na sport, ale mam nadzieję, że dart pozostaną neutralne.', likes: 29 },
            { id: 7, nick: 'AngryDarter', comment: 'Takie dyskusje są bez sensu. Kto tu na prawdę się tym przejmuje? Powinniśmy skupić się na grze, a nie na polityce.', likes: 27 },
            // itd... (dodaj pozostałe 13 komentarzy)
        ]
    },
    {
        id: 26,
        author: 'BullseyeLover',
        tittle: 'Gdzie można grać w darta we Wrocławiu?',
        category: 'Places',
        likes: 78,
        comments: [
            { id: 1, nick: 'DartaMaster', comment: 'Polecam pub "GIVE6", mają świetne tarcze do gry.', likes: 16 },
            { id: 2, nick: 'AngryDarter', comment: 'Wszystkie miejsca we Wrocławiu są przereklamowane.', likes: 11 },
            // itd... (dodaj pozostałe 18 komentarzy)
        ]
    },
    {
        id: 27,
        author: '180max',
        tittle: 'Jakie są najlepsze miejsca do gry w darta w Londynie?',
        category: 'Places',
        likes: 98,
        comments: [
            { id: 1, nick: 'BullseyeLover', comment: 'Ja osobiście uwielbiam "The Oche Club".', likes: 19 },
            { id: 2, nick: 'AngryDarter', comment: 'Znajdź sobie prywatne miejsce, wszędzie jest za głośno.', likes: 12 },
            // itd... (dodaj pozostałe 18 komentarzy)
        ]
    },
    {
        id: 28,
        author: 'DartFan_33',
        tittle: 'Czy są w Polsce profesjonalne kluby darta?',
        category: 'Places',
        likes: 85,
        comments: [
            { id: 1, nick: 'DartaMaster', comment: 'Tak, na przykład "180 Club" w Krakowie.', likes: 17 },
            { id: 2, nick: 'AngryDarter', comment: 'Profesjonalne kluby? W Polsce? Śmieszne...', likes: 14 },
            // itd... (dodaj pozostałe 18 komentarzy)
        ]
    },
    {
        id: 29,
        author: 'Triple20',
        tittle: 'Gdzie mogę kupić sprzęt do gry w darta w Berlinie?',
        category: 'Places',
        likes: 94,
        comments: [
            { id: 1, nick: '180max', comment: 'Spróbuj w "Dart World", mają duży wybór.', likes: 20 },
            { id: 2, nick: 'AngryDarter', comment: 'Zamów przez internet, w sklepach przepłacisz.', likes: 15 },
            // itd... (dodaj pozostałe 18 komentarzy)
        ]
    },{
        id: 30,
        author: 'BullseyeLover',
        tittle: 'Jakie lotki do darta polecacie?',
        category: 'Equipment',
        likes: 50,
        comments: [
            { id: 1, nick: '180max', comment: 'Używam lotek Unicorn. Są dla mnie idealne.', likes: 8 },
            { id: 2, nick: 'SuperMadDarter', comment: 'Lotki to nie problem, problemem jest twoje umiejętności.', likes: 6 },
            // itd... (dodaj pozostałe 18 komentarzy)
        ]
    },
    {
        id: 31,
        author: 'DartaMaster',
        tittle: 'Gdzie mogę kupić profesjonalny sprzęt do gry w darta?',
        category: 'Equipment',
        likes: 55,
        comments: [
            { id: 1, nick: 'Triple20', comment: 'Wiele sklepów sportowych ma sprzęt do darta.', likes: 9 },
            { id: 2, nick: 'SuperMadDarter', comment: 'Czy to naprawdę takie ważne? Powinieneś skupić się na grze.', likes: 7 },
            // itd... (dodaj pozostałe 18 komentarzy)
        ]
    },
    {
        id: 32,
        author: '180max',
        tittle: 'Czy warto kupić droższe lotki do darta?',
        category: 'Equipment',
        likes: 48,
        comments: [
            { id: 1, nick: 'DartFan_33', comment: 'Moim zdaniem, warto zainwestować w lepsze lotki.', likes: 10 },
            { id: 2, nick: 'SuperMadDarter', comment: 'Droższe lotki nie sprawią, że będziesz lepiej grać.', likes: 8 },
            // itd... (dodaj pozostałe 18 komentarzy)
        ]
    },
    {
        id: 33,
        author: 'DartFan_33',
        tittle: 'Czy magnetyczne darty są bezpieczne dla dzieci?',
        category: 'Equipment',
        likes: 42,
        comments: [
            { id: 1, nick: 'BullseyeLover', comment: 'Tak, są znacznie bezpieczniejsze niż tradycyjne darty.', likes: 11 },
            { id: 2, nick: 'SuperMadDarter', comment: 'Bezpieczne dla dzieci? Powinniśmy skupić się na grze, a nie na bzdurach.', likes: 9 },
            // itd... (dodaj pozostałe 18 komentarzy)
        ]
    },
    {
        id: 35,
        author: 'BullseyeLover',
        tittle: 'Jak poprawić celność rzutów w darta?',
        category: 'Advice',
        likes: 62,
        comments: [
            { id: 1, nick: 'SuperMadDarter', comment: '@BullseyeLover, świetkie pytanie! Jeśli chodzi o celność, polecam skupić się na stabilności stopy i płynnym ruchu ramienia. Praktyka czyni mistrza!', likes: 15 },
            { id: 2, nick: 'DartaMaster', comment: '@SuperMadDarter, zgadzam się z Tobą! Warto również pracować nad techniką oddychania, aby zachować spokój podczas rzutów.', likes: 12 },
            { id: 3, nick: 'Triple20', comment: '@SuperMadDarter, dzięki za cenne rady! Spróbuję je zastosować podczas mojego treningu.', likes: 10 },
            // itd... (dodaj pozostałe komentarze)
        ]
    },
    {
        id: 36,
        author: 'DartaMaster',
        tittle: 'Najlepsze techniki treningowe do darta',
        category: 'Advice',
        likes: 72,
        comments: [
            { id: 1, nick: 'SuperMadDarter', comment: '@DartaMaster, świetne pytanie! Moją ulubioną techniką treningową jest 20-minutowa sesja powtarzania konkretnej sekwencji rzutów. To pomaga mi utrwalić swoje umiejętności.', likes: 18 },
            { id: 2, nick: 'BullseyeLover', comment: '@SuperMadDarter, dzięki za podzielenie się swoją techniką! Możesz podać przykład tej konkretnej sekwencji?', likes: 15 },
            { id: 3, nick: 'SuperMadDarter', comment: '@BullseyeLover, oczywiście! Jednym z moich ulubionych przykładów jest powtarzanie sekwencji 20 rzutów: 20-Treble 20-20-Treble 19-19-Treble 19. To pomaga mi skupić się na precyzji i powtarzalności.', likes: 13 },
            // itd... (dodaj pozostałe komentarze)
        ]
    },
    {
        id: 37,
        author: '180max',
        tittle: 'Jak radzić sobie ze stresem podczas gry w darta?',
        category: 'Advice',
        likes: 68,
        comments: [
            { id: 1, nick: 'SuperMadDarter', comment: '@180max, doskonałe pytanie! W przypadku stresu polecam skupić się na głębokim oddechu i pozytywnych afirmacjach. To pomaga mi zachować spokój i koncentrację.', likes: 17 },
            { id: 2, nick: 'DartFan_33', comment: '@SuperMadDarter, dzięki za rady! Czy masz jakieś ulubione afirmacje, które polecasz?', likes: 14 },
            { id: 3, nick: 'SuperMadDarter', comment: '@DartFan_33, absolutnie! Jedną z moich ulubionych afirmacji jest "Jestem spokojny, pewny siebie i skupiony na swojej grze". Powtarzam to sobie przed każdym rzutem, aby utrzymać pozytywne nastawienie.', likes: 12 },
            // itd... (dodaj pozostałe komentarze)
        ]
    },
    {
        id: 38,
        author: 'Triple20',
        tittle: 'Jaki wybrać odpowiednią wagę lotek?',
        category: 'Advice',
        likes: 64,
        comments: [
            { id: 1, nick: 'SuperMadDarter', comment: '@Triple20, świetne pytanie! Wybór odpowiedniej wagi lotek zależy od indywidualnych preferencji i stylu gry. Ogólnie mówiąc, cięższe lotki mogą zapewnić większą stabilność, podczas gdy lżejsze lotki mogą być bardziej precyzyjne.', likes: 16 },
            { id: 2, nick: '180max', comment: '@SuperMadDarter, dzięki za odpowiedź! Czy są jakieś konkretne wskazówki dotyczące wyboru wagi lotek dla początkujących?', likes: 13 },
            { id: 3, nick: 'SuperMadDarter', comment: '@180max, z pewnością! Dla początkujących zazwyczaj zalecam lotki o średniej wadze, na przykład około 22-24g. To umożliwia eksperymentowanie i znalezienie swojego preferowanego stylu gry.', likes: 11 },
            // itd... (dodaj pozostałe komentarze)
        ]
    },
    {
        id: 39,
        author: 'DartProblems',
        tittle: 'Nie mogę znaleźć idealnej tarczy do darta',
        category: 'Issues',
        likes: 56,
        comments: [
            { id: 1, nick: 'MadDarter', comment: '@DartProblems, o nie! To wyjątkowo ważne, abyś mógł znaleźć idealną tarczę do swoich rzutów. Mam nadzieję, że te problemy z dostępnością tarcz na świecie nie zrujnowały Twojej kariery darta!', likes: 13 },
            { id: 2, nick: 'DartFan_33', comment: '@DartProblems, polecam poszukać w sklepach internetowych. Tam często można znaleźć różnorodne tarcze do darta.', likes: 8 },
            { id: 4, nick: 'DartProblems', comment: '@MadDarter, Twoje komentarze są bardzo niemiłe. Nie potrzebuję Twojej drwin i zgryźliwości. Proszę o szanowanie innych uczestników dyskusji.', likes: 5 }
            // itd... (dodaj pozostałe komentarze)
        ]
    },
    {
        id: 40,
        author: 'DartEnthusiast',
        tittle: 'Czy warto inwestować w drogi sprzęt do darta?',
        category: 'Issues',
        likes: 72,
        comments: [
            { id: 1, nick: 'MadDarter', comment: '@DartEnthusiast, oczywiście, warto wydać fortunę na sprzęt do darta! Przecież drogi sprzęt zawsze automatycznie sprawia, że jesteś lepszym zawodnikiem. Wydawaj, wydawaj i wydawaj! Zobaczysz różnicę, uwierz mi!', likes: 18 },
            { id: 2, nick: 'Triple20', comment: '@DartEnthusiast, faktem jest, że nie zawsze drogi sprzęt oznacza lepsze wyniki. Warto znaleźć balans między jakością a swoim budżetem.', likes: 12 },
            { id: 3, nick: 'DartaMaster', comment: '@DartEnthusiast, istotne jest, aby dostosować swój sprzęt do swoich umiejętności i preferencji. Drogi sprzęt może być wspaniały, ale nie gwarantuje sukcesu.', likes: 9 },
            { id: 4, nick: 'DartEnthusiast', comment: '@MadDarter, Twoje uwagi są niezbyt pomocne. Każdy ma własne preferencje i budżet. Nie trzeba wydawać fortuny, aby cieszyć się grą w darta.', likes: 6 }
            // itd... (dodaj pozostałe komentarze)
        ]
    },
    {
        id: 41,
        author: 'DartaMaster',
        tittle: 'Jak radzić sobie z presją podczas turniejów darta?',
        category: 'Issues',
        likes: 64,
        comments: [
            { id: 1, nick: 'MadDarter', comment: '@DartaMaster, presja to absolutnie najgorsza rzecz, z jaką możesz się spotkać w życiu! Szczególnie podczas turniejów darta. Ale wierz mi, nie przejmuj się, to tylko twoja kariera i setki innych oczu patrzących na Ciebie. Żadna presja!', likes: 16 },
            { id: 2, nick: 'BullseyeLover', comment: '@DartaMaster, zgadzam się z Tobą! Ważne jest, aby zachować spokój i skupić się na swojej grze, ignorując presję zewnętrzną.', likes: 11 },
            { id: 3, nick: '180max', comment: '@DartaMaster, presja jest nieodłącznym elementem sportu. Jednak odpowiednia mentalna przygotowanie może pomóc nam radzić sobie z nią.', likes: 13 },
            { id: 4, nick: 'DartaMaster', comment: '@MadDarter, Twoje ironiczne uwagi nie są mile widziane. Zachęcam do szanowania innych i skupienia na konstruktywnej dyskusji.', likes: 7 }
            // itd... (dodaj pozostałe komentarze)
        ]
    },
    {
        id: 42,
        author: 'DartFan_33',
        tittle: 'Jak radzić sobie z rutyną podczas treningów darta?',
        category: 'Issues',
        likes: 42,
        comments: [
            { id: 1, nick: 'MadDarter', comment: '@DartFan_33, rutyna to najlepszy sposób na zatracenie radości z gry w darta! Możesz spróbować zrobić dokładnie to samo za każdym razem, żeby zawsze odczuwać nudę.', likes: 11 },
            { id: 2, nick: 'BullseyeLover', comment: '@DartFan_33, warto wprowadzić pewne zmiany w treningach, np. grać w różne gry, eksperymentować z różnymi stylami rzutu. To może pomóc złamać rutynę.', likes: 8 },
            { id: 3, nick: 'Triple20', comment: '@DartFan_33, poszukaj inspiracji i nowych technik. Wprowadzanie zmian może pomóc utrzymać zainteresowanie i motywację.', likes: 9 },
            { id: 4, nick: 'DartFan_33', comment: '@MadDarter, Twoje komentarze są nieodpowiednie i nieprzyjemne. Proszę o zachowanie kultury i szacunku wobec innych uczestników dyskusji.', likes: 6 }
            // itd... (dodaj pozostałe komentarze)
        ]
    },
    {
        id: 43,
        author: 'SuperDartPlayer',
        tittle: 'Jak radzić sobie z porażkami w turniejach darta?',
        category: 'Issues',
        likes: 58,
        comments: [
            { id: 1, nick: 'MadDarter', comment: '@SuperDartPlayer, porażki to naprawdę niesamowite doświadczenie! Powinieneś je docenić i powtarzać jak najczęściej, żeby zawsze czuć się jak prawdziwy mistrz!', likes: 14 },
            { id: 2, nick: 'DartaMaster', comment: '@SuperDartPlayer, porażki są częścią sportu. Ważne jest, aby z nich się uczyć i kontynuować pracę nad doskonaleniem swoich umiejętności.', likes: 10 },
            { id: 3, nick: 'BullseyeLover', comment: '@SuperDartPlayer, pamiętaj, że porażki to nie koniec świata. Ważne jest, aby utrzymać pozytywne podejście i pracować nad poprawą swojej gry.', likes: 12 },
            { id: 4, nick: 'SuperDartPlayer', comment: '@MadDarter, Twoje żarty są naprawdę nietaktowne. Zamiast kpić z innych, może skup się na własnym rozwoju?', likes: 7 }
            // itd... (dodaj pozostałe komentarze)
        ]
    },
    {
        id: 44,
        author: 'DartNewbie',
        tittle: 'Jak zacząć przygodę z grą w darta?',
        category: 'Issues',
        likes: 35,
        comments: [
            { id: 1, nick: 'MadDarter', comment: '@DartNewbie, niezależnie od tego, jak bardzo będziesz się starał, i tak nie zdobędziesz talentu do gry w darta. Ale spróbuj! Może przynajmniej będziesz się dobrze bawił!', likes: 9 },
            { id: 2, nick: 'DartEnthusiast', comment: '@DartNewbie, warto zacząć od podstaw i poznać podstawowe zasady gry. Następnie regularny trening i praktyka pozwolą ci się rozwijać.', likes: 7 },
            { id: 3, nick: 'Triple20', comment: '@DartNewbie, nie przejmuj się negatywnymi uwagami. Warto zacząć grać w darta i cieszyć się tą pasją. Z czasem nabierzesz doświadczenia i poprawisz swoje umiejętności.', likes: 10 },
            { id: 4, nick: 'DartNewbie', comment: '@MadDarter, twoje uwagi są nieodpowiednie i demotywujące. Szanuj innych i nie zniechęcaj nowych graczy.', likes: 6 }
            // itd... (dodaj pozostałe komentarze)
        ]
    },
    {
        id: 45,
        author: 'DartEnthusiast',
        tittle: 'Jakie ćwiczenia pomogą poprawić technikę rzutu lotką w darcie?',
        category: 'Exercise',
        likes: 92,
        comments: [
            {
                id: 1,
                nick: 'ThrowingPro',
                comment: 'Najważniejsze ćwiczenia to praktyka rzutów na tarczę, zwracając uwagę na technikę i celność. Dodatkowo, ćwiczenia skoncentrowane na wzmocnienie ramienia, jak wyciskanie hantli czy unoszenie sztangi, mogą poprawić siłę i stabilność podczas rzutu.',
                likes: 25
            },
            {
                id: 2,
                nick: 'DartFan_33',
                comment: 'Warto również wykonywać ćwiczenia koordynacyjne, takie jak rzuty medyczną piłką na cel, czy chwytanie piłki tenisowej jedną ręką. To pomaga poprawić precyzję i kontrolę nad ruchami podczas rzutu lotką.',
                likes: 20
            },
            {
                id: 3,
                nick: 'AccuracyMaster',
                comment: 'Nie zapominajcie również o ćwiczeniach dynamicznych, które angażują całe ciało, takich jak skoki z piłką lekarską czy rzuty w biegu. Te ćwiczenia pomagają rozwijać siłę, szybkość i koordynację, co jest niezwykle ważne podczas rzutu lotką w darcie.',
                likes: 18
            },
            {
                id: 4,
                nick: 'DartEnthusiast',
                comment: 'Dziękuję wszystkim za cenne wskazówki! Będę systematycznie pracować nad tymi ćwiczeniami, aby poprawić swoją technikę i wyniki w rzucie lotką.',
                likes: 15
            }
        ]
    },{
        id: 46,
        author: 'DartMaster',
        tittle: 'Jakie ćwiczenia rozciągające mogą pomóc w poprawie elastyczności podczas rzutu lotką w darcie?',
        category: 'Exercise',
        likes: 86,
        comments: [
            {
                id: 1,
                nick: 'FlexibilityGuru',
                comment: 'Ważne ćwiczenia rozciągające to np. rozciąganie przedramion, stawianie kroków do przodu z rozciąganiem nóg, ćwiczenia rotacyjne ramion oraz rozciąganie mięśni pleców. To pomaga poprawić zakres ruchu i elastyczność podczas rzutu lotką.',
                likes: 22
            },
            {
                id: 2,
                nick: 'StretchingEnthusiast',
                comment: 'Nie zapominajcie także o rozciąganiu mięśni klatki piersiowej i boków, co ułatwia wykonywanie ruchu w przód podczas rzutu. Ćwiczenia na rozciąganie mięśni barków i szyi również mogą być pomocne.',
                likes: 18
            },
            {
                id: 3,
                nick: 'DartFan_33',
                comment: 'Dodatkowo, ćwiczenia na rozciąganie przedramienia i stawianie kroków do tyłu z rozciąganiem mięśni nóg mogą pomóc w poprawie stabilności i elastyczności podczas rzutu lotką. Pamiętajcie o regularnym rozciąganiu przed i po treningu.',
                likes: 16
            },
            {
                id: 4,
                nick: 'DartMaster',
                comment: 'Dziękuję wszystkim za sugestie dotyczące ćwiczeń rozciągających! Będę je regularnie wykonywać, aby zwiększyć swoją elastyczność i komfort podczas rzutu lotką.',
                likes: 12
            }
        ]
    },
    {
        id: 47,
        author: 'DartChampion',
        tittle: 'Jakie ćwiczenia pomogą w poprawie stabilności ciała podczas rzutu lotką w darcie?',
        category: 'Exercise',
        likes: 79,
        comments: [
            {
                id: 1,
                nick: 'BalanceMaster',
                comment: 'Ćwiczenia równoważne, takie jak stanie na jednej nodze, plank na podłodze w podporze na przedramionach oraz ćwiczenia z piłką na równowagę, są doskonałe dla poprawy stabilności ciała podczas rzutu lotką.',
                likes: 21
            },
            {
                id: 2,
                nick: 'DartFan_33',
                comment: 'Dodatkowo, ćwiczenia na koordynację, takie jak chodzenie po równoważni czy bieg z podskokami, mogą pomóc w lepszym kontrolowaniu swojego ciała podczas rzutu. Nie zapominajcie o treningu siłowym, który również wpływa na stabilność.',
                likes: 17
            },
            {
                id: 3,
                nick: 'StabilityExpert',
                comment: 'Nie zapomnijcie również o wzmocnieniu mięśni rdzenia, takich jak mięśnie brzucha i pleców. To zapewnia stabilną bazę dla reszty ciała podczas rzutu lotką.',
                likes: 14
            },
            {
                id: 4,
                nick: 'DartChampion',
                comment: 'Dziękuję wszystkim za cenne wskazówki dotyczące ćwiczeń stabilizujących. Będę regularnie je włączać do mojego treningu, aby poprawić stabilność ciała podczas rzutu lotką.',
                likes: 13
            }
        ]
    }
    
    
    
    
    
    
    
    
    

]