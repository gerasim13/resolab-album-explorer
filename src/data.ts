import { Album } from './types';
import { default as image_01 } from './assets/01.jpeg';
import { default as image_02 } from './assets/02.jpeg';
import { default as image_03 } from './assets/03.jpeg';
import { default as image_04 } from './assets/04.jpeg';
import { default as image_05 } from './assets/05.jpeg';
import { default as image_06 } from './assets/06.jpeg';
import { default as image_07 } from './assets/07.jpeg';
import { default as image_08 } from './assets/08.jpeg';
import { default as image_09 } from './assets/09.jpeg';
import { default as image_10 } from './assets/10.jpeg';
import { default as image_11 } from './assets/11.jpeg';
import { default as image_12 } from './assets/12.jpeg';
import { default as image_13 } from './assets/13.jpeg';
import { default as image_14 } from './assets/14.jpeg';
import { default as image_15 } from './assets/15.jpeg';
import { default as image_16 } from './assets/16.jpeg';
import { default as image_17 } from './assets/17.jpeg';
import { default as image_18 } from './assets/18.jpeg';
import { default as image_19 } from './assets/19.jpeg';
import { default as image_20 } from './assets/20.jpeg';
import { default as image_21 } from './assets/21.jpeg';
import { default as image_22 } from './assets/22.jpeg';
import { default as image_23 } from './assets/23.jpeg';
import { default as image_24 } from './assets/24.jpeg';
import { default as image_25 } from './assets/25.jpeg';
import { default as audio } from './assets/sample.mp3';

export const albumData: Album = {
  title: "Jeff Wayne's Musical Version of The War of the Worlds",
  description: `Революционный концептуальный альбом 1978 года, адаптирующий роман Герберта Уэллса "Война миров". 
  Этот прогрессивный рок-альбом сочетает в себе повествование, рок-музыку и оркестровые аранжировки, чтобы рассказать 
  историю марсианского вторжения в викторианскую Англию. Альбом достиг международного успеха и был представлен 
  в живых концертных турах с использованием голографических технологий и замысловатых сценических дизайнов.`,
  year: 1978,
  image: image_01,
  audio: audio,
  link: "https://ru.wikipedia.org/wiki/Jeff_Wayne%27s_Musical_Version_of_The_War_of_the_Worlds",
  participants: [
    {
      id: "jeff-wayne",
      name: "Jeff Wayne",
      role: "Композитор и Продюсер",
      description: "Гений проекта, Джефф Уэйн написал музыку и спродюсировал весь альбом. Его инновационный подход к сочетанию прогрессивного рока с классическими элементами и повествовательным сторителлингом создал уникальный музыкальный опыт, который выдержал испытание временем.",
      image: image_02,
      link: "https://en.wikipedia.org/wiki/Jeff_Wayne",
      projects: [
        {
          title: "Jeff Wayne's Musical Version of Spartacus",
          description: "Рок-опера на основе истории Спартака",
          year: 1992,
          image: image_03,
          link: "https://en.wikipedia.org/wiki/Jeff_Wayne%27s_Musical_Version_of_Spartacus"
        }
      ]
    },
    {
      id: "richard-burton",
      name: "Richard Burton",
      role: "Рассказчик (Журналист)",
      description: "Легендарный уэльский актер Ричард Бёртон предоставил культовое повествование в роли Журналиста. Его характерный голос и драматическое исполнение оживили историю, создавая незабываемую повествовательную нить на протяжении всего альбома.",
      image: image_04,
      link: "https://ru.wikipedia.org/wiki/Richard_Burton",
      projects: [
        {
          title: "1984",
          description: "Британский научно-фантастический фильм-антиутопия сценариста и режиссёра Майкла Рэдфорда, снятый по роману Джорджа Оруэлла «1984» в год, к которому приурочены происходящие в нём события.",
          year: 1965,
          image: image_05,
          link: "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four_(1984_film)"
        },
        {
          title: "Кто боится Вирджинии Вулф?",
          description: "Камерная кинодрама 1966 года, дебютная лента режиссёра Майка Николса. Экранизация одноимённой пьесы Эдварда Олби. В главных ролях снялась супружеская пара — Ричард Бёртон и Элизабет Тейлор.",
          year: 1966,
          image: image_06,
          link: "https://en.wikipedia.org/wiki/Who%27s_Afraid_of_Virginia_Woolf%3F_(film)"
        }
      ]
    },
    {
      id: "david-essex",
      name: "David Essex",
      role: "Вокал (Артиллерист)",
      description: "Популярный британский певец Дэвид Эссекс исполнил роль Артиллериста, демонстрируя мощные вокальные выступления в песнях 'Brave New World' и 'The Fighting Machine.' Его персонаж олицетворяет решимость человечества сопротивляться марсианскому вторжению.",
      image: image_07,
      link: "https://ru.wikipedia.org/wiki/David_Essex",
      projects: [
        {
          title: "Эвита",
          description: "Оригинальная запись лондонского актерского состава",
          year: 1978,
          image: image_08,
          link: "https://en.wikipedia.org/wiki/Evita_(musical)"
        }
      ]
    },
    {
      id: "phil-lynott",
      name: "Phil Lynott",
      role: "Вокал (Священник Натаниэль)",
      description: "Вокалист группы Thin Lizzy Фил Лайнот привнес интенсивные эмоции в роль Священника Натаниэля, священника, доведенного до безумия вторжением. Его мощное исполнение в песне 'The Spirit of Man' особенно запоминается.",
      image: image_09,
      link: "https://en.wikipedia.org/wiki/Phil_Lynott",
      projects: [
        {
          title: "Соло в Сохо",
          description: "Сольный альбом",
          year: 1980,
          image: image_10,
          link: "https://en.wikipedia.org/wiki/Solo_in_Soho"
        }
      ]
    },
    {
      id: "julie-covington",
      name: "Julie Covington",
      role: "Вокал (Бет)",
      description: "Джули Ковингтон исполнила роль Бет, жены священника, демонстрируя трогательное выступление в песне 'The Spirit of Man.' Ее персонаж олицетворяет надежду и человечность перед лицом отчаяния.",
      image: image_11,
      link: "https://en.wikipedia.org/wiki/Julie_Covington",
      projects: [
        {
          title: "Rock Follies",
          description: "Саундтрек к телевизионному сериалу",
          year: 1976,
          image: image_12,
          link: "https://en.wikipedia.org/wiki/Rock_Follies"
        }
      ]
    },
    {
      id: "chris-thompson",
      name: "Chris Thompson",
      role: "Вокал (Голос человечества)",
      description: "Бывший вокалист группы Manfred Mann's Earth Band Крис Томпсон предоставил голос человечества, особенно в культовой песне 'Thunder Child.' Его мощные рок-вокалы добавили интенсивности самым драматическим моментам альбома.",
      image: image_13,
      link: "https://en.wikipedia.org/wiki/Chris_Thompson_(English_musician)",
      projects: [
        {
          title: "A Single Man",
          description: "Двенадцатый студийный альбом английского музыканта Элтона Джона.",
          year: 1978,
          image: image_14,
          link: "https://en.wikipedia.org/wiki/A_Single_Man_(album)"
        }
      ]
    },
    {
      id: "ken-freeman",
      name: "Ken Freeman",
      role: "Синтезаторные аранжировки",
      description: "Кен Фриман отвечал за характерные синтезаторные аранжировки, которые придали альбому уникальное звучание. Его работа помогла создать неземную атмосферу, необходимую для повествования о марсианском вторжении.",
      image: image_15,
      link: "https://en.wikipedia.org/wiki/Ken_Freeman_(composer)",
      projects: [
        {
          title: "The Tripods",
          description: "Телевизионная адаптация серии романов Джона Кристофера \"The Tripods\". Его совместно произвели BBC в Великобритании и Seven Network в Австралии.",
          year: 1984,
          image: image_16,
          link: "https://en.wikipedia.org/wiki/The_Tripods_(TV_series)"
        }
      ]
    },
    {
      id: "jerry-wayne",
      name: "Jerry Wayne",
      role: "Голоса NASA, Режиссер драматических и повествовательных секций",
      description: "Джерри Уэйн озвучил Голоса NASA и выступил в роли режиссера драматических и повествовательных секций, обеспечивая связность повествования и интеграцию звуковых эффектов.",
      image: image_17,
      link: "https://en.wikipedia.org/wiki/Jerry_Wayne",
      projects: [
        {
          title: "As Long as They're Happy",
          description: "Британская музыкальная комедия 1955 года, режиссером которой был Дж. Ли Томпсон, в главных ролях - Джек Бьюкенен, Сьюзен Стивен и Диана Дорс. Сценарий был написан Аланом Мелвиллем на основе пьесы 1953 года того же названия авторства Вернон Сильвейн. Съемки проводились на студии Pinewood вблизи Лондона на фоне декораций, созданных художником-постановщиком Майклом Стрингером, в технике Eastmancolor.",
          year: 1955,
          image: image_18,
          link: "https://example.com/classical-crossovers"
        }
      ]
    },
    {
      id: "doreen-wayne",
      name: "Doreen Wayne",
      role: "Сценарий",
      description: "Дорин Уэйн ответственна за написание сценария, обеспечивая связность повествовательных элементов альбома.",
      image: image_19,
      link: "https://www.imdb.com/name/nm3396961/",
      projects: []
    },
    {
      id: "geoff-young",
      name: "Geoff Young",
      role: "Запись",
      description: "Джефф Янг занимался записью альбома, контролируя процесс захвата звука для обеспечения наилучшего качества.",
      image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&h=400&fit=crop",
      link: "https://www.discogs.com/artist/171127-Geoff-Young?srsltid=AfmBOorC_RVNSPiyi6WYsTP4zjHcJ0bTv5jkOrTSpxYT0Tb4a3UdhPx6",
      projects: []
    },
    {
      id: "geoff-taylor",
      name: "Geoff Taylor",
      role: "Живопись",
      description: "Джефф Тейлор создал живописные работы для альбома, придавая визуальную глубину и эпическое качество обложке и внутренним страницам.",
      image: image_20,
      link: "https://en.wikipedia.org/wiki/Geoff_Taylor_(illustrator)",
      projects: [
        {
          title: "Chronicles of Ancient Darkness",
          description: "Серия исторических фэнтезийных романов британской авторки Мишель Пейвер и ее первые книги для детей. Книги повествуют о приключениях подростка Торака и его друзей Ренн и Волк. Главный сюжетный арк развивается вокруг Торака и его задачи победить Пожирателей Душ - группу жаждущих власти магов, которые стремятся уничтожить весь живой мир в лесу. Пейвер назвала это просто \"единой историей: рассказом о том, как Торак открывает для себя себя и свой мир.\"",
          year: 2004,
          image: image_21,
          link: "https://en.wikipedia.org/wiki/Chronicles_of_Ancient_Darkness"
        }
      ]
    },
    {
      id: "mike-trim",
      name: "Mike Trim",
      role: "Живопись, Карандашные эскизы",
      description: "Майк Трим занимался созданием живописных работ и карандашных эскизов для альбома, обогащая визуальные материалы дополнительными деталями и концепциями.",
      image: image_22,
      link: "https://en.wikipedia.org/wiki/Mike_Trim",
      projects: []
    },
    {
      id: "john-pasche",
      name: "John Pasche",
      role: "Арт-дирекция, Дизайн логотипа",
      description: "Джон Пэш отвечал за арт-дирекцию и дизайн логотипа, создавая визуальные элементы, которые дополняли музыкальное содержание альбома.",
      image: image_23,
      link: "https://en.wikipedia.org/wiki/John_Pasche",
      projects: [
        {
          title: "Tongue and lips logo",
          description: "Логотип \"язык и губы\" был разработан английским художником-дизайнером Джоном Паше для рок-группы \"Rolling Stones\" в 1970 году. Его называют самым известным логотипом в истории популярной музыки. Логотип оставался на всех альбомах и синглах \"Rolling Stones\" после 1970 года, а также на их мерчандайзе (от футболок до зажигалок) и сценических декорациях.",
          year: 1971,
          image: image_24,
          link: "https://en.wikipedia.org/wiki/Tongue_and_lips_logo"
        }
      ]
    },
    {
      id: "justin-hayward",
      name: "Justin Hayward",
      role: "Вокал, Гитара",
      description: "Известный музыкант и солист группы The Moody Blues. Его голос стал частью нескольких треков альбома, добавив им мелодичности и глубины.",
      image: image_25,
      link: "https://en.wikipedia.org/wiki/Justin_Hayward",
      projects: [
        {
          title: "The Moody Blues",
          description: "Участие в составе группы The Moody Blues",
          year: 1964,
          image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=400&h=400&fit=crop",
          link: "https://en.wikipedia.org/wiki/The_Moody_Blues"
        }
      ]
    },
  ]
};