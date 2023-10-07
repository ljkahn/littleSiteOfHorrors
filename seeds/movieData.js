const {Movies} =require('../models')



const movieData =
[
    {
        title: "Candyman",
        director: "Bernard Rose",
        genre: "remake/reboot",
        rating: 4,
        release_year: 1992,
        description: "The Candyman, a murderous soul with a hook for a hand, is accidentally summoned to reality by a skeptic grad student researching the monster's myth",
        poster_url: "https://m.media-amazon.com/images/M/MV5BYjVjYjhlNTQtN2UxOC00Njk5LWFjNDctODNjZTI1ZGM0ZDZkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        title: "Evil Dead Rise",
        director: "Lee Cronin",
        genre: "remake/reboot",
        rating: 4,
        release_year: 2023,
        description: "A twisted tale of two estranged sisters whose reunion is cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable",
        poster_url: "https://m.media-amazon.com/images/M/MV5BMmZiN2VmMjktZDE5OC00ZWRmLWFlMmEtYWViMTY4NjM3ZmNkXkEyXkFqcGdeQXVyMTI2MTc2ODM3._V1_SX300.jpg"
    },
    {
        title: "Halloween",
        director: "John Carpenter",
        genre: "classic",
        rating: 4,
        release_year: 1978,
        description: "Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.",
        poster_url: "https://m.media-amazon.com/images/M/MV5BNzk1OGU2NmMtNTdhZC00NjdlLWE5YTMtZTQ0MGExZTQzOGQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
    },
    {
        title: "It",
        director: "Andy Muschietti",
        genre: "remake/reboot",
        rating: 4,
        release_year: 2017,
        description: "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.",
        poster_url: "https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_SX300.jpg"
    },
    {
        title: "The Exorcism of Emily Rose",
        director: "Scott Derrickson",
        genre: "Exorcism",
        rating: 3,
        release_year: 2005,
        description: "A lawyer takes on a negligent homicide case involving a priest who performed an exorcism on a young girl.",
        poster_url: "https://m.media-amazon.com/images/M/MV5BMTI2NTM5MjQ0Nl5BMl5BanBnXkFtZTcwNDAxNjAzMQ@@._V1_SX300.jpg"
    },
    {
        title: "Hocus Pocus",
        director: "Kenny Ortega",
        genre: "Comedy Horror",
        rating: 2,
        release_year: 1993,
        description: "A teenage boy named Max and his little sister move to Salem, where he struggles to fit in before awakening a trio of diabolical witches that were executed in the 17th century",
        poster_url: "https://m.media-amazon.com/images/M/MV5BNWM3NmRhMGMtOGE4ZC00MDk0LWI1NjMtMjVlNTEwOTcwZTc0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
        title: "Nightmare Before Christmas",
        director: "Henry Selick",
        genre: "Spooky Family",
        rating: 2,
        release_year: 1993,
        description: "Jack Skellington, king of Halloween Town, discovers Christmas Town, but his attempts to bring Christmas to his home causes confusion.",
        poster_url: "https://m.media-amazon.com/images/M/MV5BNWE4OTNiM2ItMjY4Ni00ZTViLWFiZmEtZGEyNGY2ZmNlMzIyXkEyXkFqcGdeQXVyMDU5NDcxNw@@._V1_SX300.jpg"
    },
    {
        title: "The Little Vampire",
        director: "Uli Edel",
        genre: "Spooky Family",
        rating: 1,
        release_year: 2000,
        description: "A lonely American boy living in Scotland makes a new best friend, a fellow nine year-old who happens to be a vampire.",
        poster_url: "https://m.media-amazon.com/images/M/MV5BOTU4NDQ3NzY1NV5BMl5BanBnXkFtZTYwMTQ3NTk2._V1_SX300.jpg"
    },
    {
        title: "Halloweentown",
        director: "Duwayne D Unham",
        genre: "Spooky Family",
        rating: 1,
        release_year: 1998,
        description: "When a young girl living with her secret witch mother learns she too is a witch, she must help her witch grandmother save Halloweentown from evil forces.",
        poster_url:"https://m.media-amazon.com/images/M/MV5BOTAyYjQ3NjctNGMzNi00YThkLThmYzUtZDViYWZkMDA2YTMyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjAwMjc0NjQ@._V1_SX300.jpg"
    },
    {
        title: "Trolls",
        director: "Mike Mitchel and Scott Dorh",
        genre: "Not Scary",
        rating: 1,
        release_year: 2016,
        description: "After the Bergens invade Troll Village, Poppy, the happiest Troll ever born, and the curmudgeonly Branch set off on a journey to rescue her friends.",
        poster_url:"https://m.media-amazon.com/images/M/MV5BMTkxNDc3OTcxMV5BMl5BanBnXkFtZTgwODk2NjAzOTE@._V1_SX300.jpg"
    },
    {
        title: "Corpse Bride",
        director: "Tim Burton",
        genre: "Family Spooky",
        rating: 2,
        release_year: 2005,
        description: "When a shy groom practices his wedding vows in the inadvertent presence of a deceased young woman, she rises from the grave assuming he has married her.",
    },
    {
        title: "Beetlejuice",
        director: "Tim Burton",
        genre: "Family Spooky",
        rating: 2,
        release_year: 1988,
        description: "The spirits of a deceased couple are harassed by an unbearable family that has moved into their home, and hire a malicious spirit to drive them out.",
        poster_url: "https://m.media-amazon.com/images/M/MV5BMTk1MTY1NjU4MF5BMl5BanBnXkFtZTcwNjIzMTEzMw@@._V1_SX300.jpg"
    },
    {
        title: "Little Shop of Horrors",
        director: "Frank Oz",
        genre: "Comedy Horror",
        rating: 3,
        release_year: 1986,
        description: "A nerdy florist finds his chance for success and romance with the help of a giant man-eating plant who demands to be fed.",
        poster_url: "https://m.media-amazon.com/images/M/MV5BYzUxZDI3MjktZmM4YS00MzdjLWE5MzctMmI4M2ViMDgxMmUzXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
        title: "Hotel Transylvania",
        director: "Genndy Tartakovsky",
        genre: "Family Horror",
        rating: 1,
        release_year: 2012,
        description: "Dracula, who operates a high-end resort away from the human world, goes into overprotective mode when a boy discovers the resort and falls for the count's teenaged daughter.",
        poster_url:"https://m.media-amazon.com/images/M/MV5BMTM3NjQyODI3M15BMl5BanBnXkFtZTcwMDM4NjM0OA@@._V1_SX300.jpg"
    },
    {
        title: "The Visit",
        director: "M. Night Shaymalan",
        genre: "Daytime Horror",
        rating: 3,
        release_year: 2015,
        description: "Two siblings become increasingly frightened by their grandparents' disturbing behavior while visiting them on vacation.",
        poster_url: "https://m.media-amazon.com/images/M/MV5BMTg3OTM2OTc5MV5BMl5BanBnXkFtZTgwMjMxNDM0NTE@._V1_SX300.jpg"
    },
    {
        title: "Funny Games",
        director: "Michael Haneke",
        genre: "Daytime Horror",
        rating: 4,
        release_year: 2007,
        description: "Two psychopathic young men take a family hostage in their cabin.",
        poster_url:"https://m.media-amazon.com/images/M/MV5BMTg4OTExNTYzMV5BMl5BanBnXkFtZTcwOTg1MDU1MQ@@._V1_SX300.jpg"
    },
    {
        title: "Tucker and Dale vs Evil",
        director: "Eli Craig",
        genre: "Horror Comedy",
        rating: 4,
        release_year: 2010,
        description: "Affable hillbillies Tucker and Dale are on vacation at their dilapidated mountain cabin when they are mistaken for murderers by a group of preppy college students.",
        poster_url: "https://m.media-amazon.com/images/M/MV5BODQ5NDQ0MjkwMF5BMl5BanBnXkFtZTcwNDg1OTU4NQ@@._V1_SX300.jpg"
    },
    {
        title: "The Wolf of Snow Hollow",
        director: "Jim Cummings",
        genre: "Horror Comedy",
        rating: 4,
        release_year: 2020,
        description: "error grips a small mountain town as bodies are discovered after each full moon. Losing sleep, raising a teenage daughter, and caring for his ailing father, officer Marshall struggles to remind himself there's no such thing as werewolves.",
        poster_url: "https://m.media-amazon.com/images/M/MV5BOWZlMDBiMmItMWU0Ny00MGIzLWI1NTQtZDEwMjM0MzBiYjhkXkEyXkFqcGdeQXVyMzIxMjMyODY@._V1_SX300.jpg"
    },
    {
        title: "Jennifer's Body",
        director: "Karyn Kusama",
        genre: "Horror Comedy",
        rating: 4,
        release_year: 2009,
        description: "A newly-possessed high-school cheerleader turns into a succubus who specializes in killing her male classmates. Can her best friend put an end to the horror?",
        poster_url: "https://m.media-amazon.com/images/M/MV5BMTMxNzYwMjc1Ml5BMl5BanBnXkFtZTcwNDI3MDE3Mg@@._V1_SX300.jpg"
    },
    {
        title: "Bodies Bodies Bodies",
        director: "Halina Reijn",
        genre: "Horror Comedy",
        rating: 4,
        release_year: 2022,
        description: "When a group of rich 20-somethings plan a hurricane party at a remote family mansion, a party game turns deadly in this fresh and funny look at backstabbing, fake friends, and one party gone very, very wrong.",
        poster_url: "https://m.media-amazon.com/images/M/MV5BYTA2ODg5ZjgtOTU2My00MzFkLWI0NzMtZmQ5MmRhMWU1NzhlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg",
    },
    {
        title: "The Witch",
        director: "Robert Eggers",
        genre: "Elevated Horror",
        rating: 4,
        release_year: 2015,
        description: "A family in 1630s New England is torn apart by the forces of witchcraft, black magic and possession.",
        poster_url:"https://m.media-amazon.com/images/M/MV5BMTUyNzkwMzAxOF5BMl5BanBnXkFtZTgwMzc1OTk1NjE@._V1_SX300.jpg"
    },

    {
        title: "Midsommar",
        director: "Ari Aster",
        genre: "Elevated Horror",
        rating: 4,
        release_year: 2019, 
        description: "A couple travels to Northern Europe to visit a rural hometown's fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.",
        poster_url: "https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_SX300.jpg"

    },

    {
        title: "Hereditary",
        director: "Ari Aster",
        genre: "Elevated Horror",
        rating: 5,
        release_year: 2018, 
        description: "A grieving family is haunted by tragic and disturbing occurrences.",
        poster_url: "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_SX300.jpg"

    },

    {
        title: "Get Out",
        director: "Jordan Peele",
        genre: "Elevated Horror",
        rating: 4,
        release_year: 2017, 
        description: "A young African-American visits his White girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
        poster_url: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg"

    },

    {
        title: "Us",
        director: "Jordan Peele",
        genre: "Elevated horror",
        rating: 4,
        release_year: 2019, 
        description: "A family's serene beach vacation turns to chaos when their doppelgängers appear and begin to terrorize them.",
        poster_url:"https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg"

    },

    {
        title: "Nope",
        director: "Jordan Peele",
        genre: "Elevated Horror",
        rating:4 ,
        release_year: 2022, 
        description: "The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery.",
        poster_url:"https://m.media-amazon.com/images/M/MV5BMGIyNTI3NWItNTJkOS00MGYyLWE4NjgtZDhjMWQ4Y2JkZTU5XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg",


    },

    {
        title: "You're Next",
        director: "Adam Wingard",
        genre: "Female-led Horror",
        rating: 4,
        release_year:2011 , 
        description: "When the Davison family comes under attack during their wedding anniversary getaway, the gang of mysterious killers soon learns that one of the victims harbors a secret talent for fighting back.",
        poster_url:"https://m.media-amazon.com/images/M/MV5BMTQwODAxMTE1NF5BMl5BanBnXkFtZTcwNTQ0MjY3OQ@@._V1_SX300.jpg"

    },

    {
        title: "The Final Girls",
        director: "Todd Strauss-Schulson",
        genre: "Female-led Horror",
        rating: 3,
        release_year: 2015, 
        description: "A young woman grieving the loss of her mother, a famous scream queen from the 1980s, finds herself pulled into the world of her mom's most famous movie. Reunited, the women must fight off the film's maniacal killer.",
        poster_url: "https://m.media-amazon.com/images/M/MV5BMjI4Nzk2NzAzOV5BMl5BanBnXkFtZTgwNjI1NzY4NjE@._V1_SX300.jpg",

    },

    {
         title: "Ready of Not",
        director: "2019",
        genre: "Female-led Horror",
        rating: 4,
        release_year: 2019 , 
        description: "A bride's wedding night takes a sinister turn when her eccentric new in-laws force her to take part in a terrifying game.",
        poster_url: "https://m.media-amazon.com/images/M/MV5BYzBkMzAyMDUtZTFkZS00OWUyLTgwM2ItNGI3MTQ5NzA3NTVkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"

    },

    {
        title: "House of the Devil",
        director: "Ti West",
        genre: "Female-led Horror",
        rating: 4,
        release_year: 2009, 
        description: "In 1983, financially struggling college student Samantha Hughes takes a strange babysitting job that coincides with a full lunar eclipse. She slowly realizes her clients harbor a terrifying secret, putting her life in mortal danger.",
        poster_url: "https://m.media-amazon.com/images/M/MV5BMTAxMDAxODg5ODReQTJeQWpwZ15BbWU3MDI5ODYxODI@._V1_SX300.jpg",

    },


    {
        title: "X",
        director: "Ti West",
        genre: "Female-led Horror",
        rating: 4,
        release_year: 2022, 
        description: "In 1979, a group of young filmmakers set out to make an adult film in rural Texas, but when their reclusive, elderly hosts catch them in the act, the cast find themselves fighting for their lives.",
        poster_url:"https://m.media-amazon.com/images/M/MV5BMTJiMmE5YWItOWZjYS00YTg0LWE0MTYtMzg2ZTY4YjNkNDEzXkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_SX300.jpg"

    },

    {
        title: "Pearl",
        director: "Ti West",
        genre: "Female-led Horror",
        rating: 4,
        release_year: 2022, 
        description: "In 1918, a young woman on the brink of madness pursues stardom in a desperate attempt to escape the drudgery, isolation, and lovelessness of life on her parents' farm.",
        poster_url: "https://m.media-amazon.com/images/M/MV5BZTFkNmE5MjUtZDE1Yi00ZmQyLTk2YWUtN2EwODA1ZmNlOTA5XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_SX300.jpg",

    },

    {
        title: "Hostel",
        direcotr: "Eli Roth",
        genre: "Torture",
        rating: 5,
        release_year: 2005,
        description: "Three backpackers head to a Slovak city that promises to meet their hedonistic expectations, with no idea of the hell that awaits them.",
        poster_url:"https://m.media-amazon.com/images/M/MV5BMTY1NDA3ODM1OV5BMl5BanBnXkFtZTcwMDM5NzEzMQ@@._V1_SX300.jpg",
        
    },
    {
        title: 'The Blair Witch Project',
        director: 'Daniel Myrick, Eduardo Sánchez',
        genre: 'the woods',
        rating: '4',
        release_year: 1999,
        description: 'Three film students vanish after traveling into a Maryland forest to film a documentary on the local Blair Witch legend, leaving only their footage behind.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BNzQ1NDBlNDItMDAyYS00YTI2LTgwMmYtMzAwMzg4NDFlM2ZmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },

    {
        title: 'Wrong Turn',
        director: 'Mike P. Nelson',
        genre: 'the woods',
        rating: '4',
        release_year: 2021,
        description: 'Friends hiking the Appalachian Trail are confronted by "The Foundation", a community of people who have lived in the mountains for hundreds of years.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BMTQwMTkyMTY4M15BMl5BanBnXkFtZTYwMDc0NDE3._V1_SX300.jpg",
    },

    {
        title: 'Dead End',
        director: 'Jean-Baptiste Andrea, Fabrice Canepa',
        genre: 'the woods',
        rating: '4',
        release_year: 2023,
        description: 'Christmas Eve. On his way to his in-laws with his family, Frank Harrington decides to try a shortcut, for the first time in 20 years. It turns out to be the biggest mistake of his life.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BNTM2YWZhMjktMDk5My00YzMxLTk5ZDAtNmM0NTkyMDZmMWE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
        title: 'Friday the 13th',
        director: 'Sean S. Cunningham',
        genre: 'the woods',
        rating: '4',
        release_year: 1980,
        description: 'A group of camp counselors trying to reopen a summer camp called Crystal Lake, which has a grim past, are stalked by a mysterious killer.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BNWMxYTYzYWQtNGZmNy00MTg5LTk1N2MtNzQ5NjQxYjQ5NTJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
        title: 'The Ritual',
        director: 'David Bruckner',
        genre: 'the woods',
        rating: '4',
        release_year: 1997,
        description: 'A group of old college friends reunite for a trip to a most dangerous country in Europe - Sweden, encountering a menacing presence there stalking them.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BMjAzMzAyMDI4Ml5BMl5BanBnXkFtZTgwODMwOTY2NDM@._V1_SX300.jpg",
    },
    {
        title: 'The Evil Dead',
        director: 'Sam Raimi',
        genre: 'the woods',
        rating: '5',
        release_year: 1981,
        description: 'Five friends travel to a cabin in the woods, where they unknowingly release flesh-possessing demons.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BNjRmY2NmN2UtMmRlMS00Mjg2LTgwNjUtZjYyZjc0NDJjODFkXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg",
    },
    {
        title: 'The Evil Dead 2',
        director: 'Sam Raimi',
        genre: 'the woods',
        rating: '4',
        release_year: 1987,
        description: 'The lone survivor of an onslaught of flesh-possessing spirits holes up in a cabin with a group of strangers while the demons continue their attack.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BMWY3ODZlOGMtNzJmOS00ZTNjLWI3ZWEtZTJhZTk5NDZjYWRjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    },
    {
        title: 'Cabin in the Woods',
        director: 'Drew Goddard',
        genre: 'meta horror',
        rating: '4',
        release_year: 2011,
        description: 'Five friends go for a break at a remote cabin, where they get more than they bargained for, discovering the truth behind the cabin in the woods.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BNTUxNzYyMjg2N15BMl5BanBnXkFtZTcwMTExNzExNw@@._V1_SX300.jpg",
    },
    
    {
        title: 'Scream',
        director: 'Wes Craven',
        genre: 'meta horror',
        rating: '4',
        release_year: 1996,
        description: 'A year after the murder of her mother, a teenage girl is terrorized by a masked killer who targets her and her friends by using scary movies as part of a deadly game.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_SX300.jpg",
    },
    {
        title: 'Final Girls',
        director: 'Todd Strauss-Schulson',
        genre: 'meta horror',
        rating: '3',
        release_year: 2015,
        description: 'A young woman grieving the loss of her mother, a famous scream queen from the 1980s, finds herself pulled into the world of her mom\'s most famous movie. Reunited, the women must fight off the film\'s maniacal killer.',
    },
    {
        title: 'The Thing',
        director: 'John Carpenter',
        genre: 'classics',
        rating: '4',
        release_year: 1982,
        description: 'A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
        title: 'Dracula',
        director: 'Tod Browning, Karl Freund',
        genre: 'classics',
        rating: '',
        release_year: 1931,
        description: 'Transylvanian vampire Count Dracula bends a naive real estate agent to his will, then takes up residence at a London estate where he sleeps in his coffin by day and searches for potential victims by night.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BZDQzMmIxYTItOTJkMi00YzU1LWJkNGEtYWE1NjhiNWU5YmNkXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg",
    },
    {
        title: 'Lost Boys',
        director: 'Joel Schumacher',
        genre: 'classics',
        rating: '4',
        release_year: 1987,
        description: 'After moving to a new town, two brothers discover that the area is a haven for vampires.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BMWEzNmUxZTMtZjY0My00OGNmLWIyNDctODM2YzZjM2YwZWEwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
        title: 'Bram Stoker\'s Dracula',
        director: 'Francis Ford Coppola',
        genre: 'classics',
        rating: '4',
        release_year: 1992,
        description: 'The centuries old vampire Count Dracula comes to England to seduce his barrister Jonathan Harker\'s fiancée Mina Murray and inflict havoc in the foreign land.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BNjcyMDZlMTktYTIxOC00ZWFhLWJkYzgtNWNiYjAwYTFkNjIyXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    },
    {
        title: 'Candyman',
        director: 'Bernard Rose',
        genre: 'classics',
        rating: '4',
        release_year: 1992,
        description: 'The Candyman, a murderous soul with a hook for a hand, is accidentally summoned to reality by a skeptic grad student researching the monster\'s myth.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BYjVjYjhlNTQtN2UxOC00Njk5LWFjNDctODNjZTI1ZGM0ZDZkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
        title: 'The Exorcist',
        director: 'William Friedkin',
        genre: 'classics',
        rating: '4',
        release_year: 1973,
        description: 'When a young girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her daughter.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BYWFlZGY2NDktY2ZjOS00ZWNkLTg0ZDAtZDY4MTM1ODU4ZjljXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    },
    {
        title: 'The Slumber Party Massacre',
        director: 'Amy Holden Jones',
        genre: 'classics',
        rating: '4',
        release_year: 1982,
        description: 'A female high school student\'s slumber party turns into a bloodbath, as a newly escaped psychotic serial killer wielding a power drill prowls her neighborhood.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BMGIzNTMxOGEtMzg3NC00M2ZhLWEwYzAtMjE5MTQyNzBhZTcwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
        title: 'Black Christmas',
        director: 'Bob Clark',
        genre: 'classics',
        rating: '4',
        release_year: 1974,
        description: 'During their Christmas break, a group of sorority girls are stalked by a stranger.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BYTllYWY5ZDYtZjExYy00ZTY5LTk2OWEtMTQ3NTdlNzE5NjcyXkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_SX300.jpg",
    },
    {
        title: 'Rocky Horror Picture Show',
        director: 'Jim Sharman',
        genre: 'classics',
        rating: '4',
        release_year: 1975,
        description: 'A newly-engaged couple have a breakdown in an isolated area and must seek shelter at the bizarre residence of Dr. Frank-n-Furter.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BOGIzYjM3YzMtMjk5ZS00NDY2LTllMjEtNjYwZjhmMDNhMDBkXkEyXkFqcGdeQXVyODUzMjQxMTA@._V1_SX300.jpg",
    },
    {
        title: 'Rosemary\'s Baby',
        director: 'Roman Polanski',
        genre: 'meta horror',
        rating: '4',
        release_year: 1968,
        description: 'A young couple trying for a baby moves into an aging, ornate apartment building on Central Park West, where they find themselves surrounded by peculiar neighbors.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BMTA5NWQwMmYtZjEyYS00Nzc2LTgwZjAtNTQ4NmFmZjNkNjg4XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    },
    {
        title: 'Trick \'r Treat',
        director: 'Michael Dougherty',
        genre: 'anthologies',
        rating: '4',
        release_year: 2007,
        description: 'Five interwoven stories that occur on Halloween: an everyday high school principal has a secret life as a serial killer; a college virgin might have just met the guy for her; a group of teenagers pull a mean prank; a woman who loathes the night has to contend with her holiday-obsessed husband; and a mean old man meets his match with a demonic, supernatural trick-or-treater.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BYmIyY2E5YjMtZDA3NC00MmIzLWFkZmItNzVlODllZWNlZmRkXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    },
    {
        title: 'Fear Street',
        director: 'Leigh Janiak',
        genre: 'anthologies',
        rating: '4',
        release_year: 1994,
        description: 'A circle of teenage friends accidentally encounter the ancient evil responsible for a series of brutal murders that have plagued their town for over 300 years. Welcome to Shadyside.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BNzQzYjIyZDQtMjBhZS00MzU3LTk0MTQtNTVmMDI3ZWY0ZWU3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    },
    {
        title: 'V/H/S',
        director: 'Matt Bettinelli-Olpin, David Bruckner, Tyler Gillett',
        genre: 'anthologies',
        rating: '4',
        release_year: 2012,
        description: 'When a group of misfits are hired by an unknown third party to burglarize a desolate house and acquire a rare VHS tape, they discover more found footage than they bargained for.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BMTUwODAxMzMwNF5BMl5BanBnXkFtZTcwMTk3MTQ5Nw@@._V1_SX300.jpg",
    },
    {
        title: 'V/H/S 2',
        director:'Simon Barrett, Jason Eisener, Gareth Evans',
        genre: 'anthologies',
        rating: '4',
        release_year: 2013,
        description: 'Searching for a missing student, two private investigators break into his house and find collection of VHS tapes. Viewing the horrific contents of each cassette, they realize there may be dark motives behind the student\'s disappearance.',
        posster_url: "https://m.media-amazon.com/images/M/MV5BODg4OTMxNDAxMV5BMl5BanBnXkFtZTcwMjM4ODQ0OQ@@._V1_SX300.jpg",
    },
    {
        title: 'Barbarian',
        director: 'Zach Cregger',
        genre: 'contemporary horror',
        rating: '4',
        release_year: 2022,
        description: 'A woman staying at an Airbnb discovers that the house she has rented is not what it seems.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BN2M3Y2NhMGYtYjUxOS00M2UwLTlmMGUtYzY4MzFlNjZkYzY2XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_SX300.jpg",
    },
    {
        title: 'Broadcast Signal Intrusion',
        director: 'Jacob Gentry',
        genre: 'contemporary horror',
        rating: '',
        release_year: 2021,
        description: 'In the late 90s, a video archivist unearths a series of sinister pirate broadcasts and becomes obsessed with uncovering the dark conspiracy behind them.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BNDgxYWFiY2MtYmMzMS00OWZjLTkzNTItZTkzNzEyZjQ5NjljXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    },
    {
        title: 'The Black Phone',
        director: 'Scott Derrickson',
        genre: 'contemporary horror',
        rating: '4',
        release_year: 2021,
        description: 'After being abducted by a child killer and locked in a soundproof basement, a 13-year-old boy starts receiving calls on a disconnected phone from the killer\'s previous victims.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BMWQxOGJlNTUtYTc1YS00NDkyLWExZjItMTFiYWEzMjAzYTdjXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
    },
    {
        title: 'The Host',
        director: 'Bong Joon Ho',
        genre: 'contemporary horror',
        rating: '4',
        release_year: 2006,
        description: 'A monster emerges from Seoul\'s Han River and begins attacking people. One victim\'s loving family does what it can to rescue her from its clutches.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BMTE3N2IwNmMtOGE0Ny00NWFlLTliNmUtNjY3ODExYjgxNmUyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
        title: 'The Fourth Kind',
        director: 'Olatunde Osunsanmi',
        genre: 'sci-fi horror',
        rating: '3',
        release_year: 2009,
        description: 'A thriller involving an ongoing unsolved mystery in Alaska, where one town has seen an extraordinary number of unexplained disappearances during the past 40 years and there are accusations of a federal cover up.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BMTY2OTM0NDEyM15BMl5BanBnXkFtZTcwNTAzMDY4Mg@@._V1_SX300.jpg",
    },
    {
        title: 'Transylvania 6-5000',
        director: 'Rudy De Luca',
        genre: 'sci-fi horror',
        rating: '2',
        release_year: 1985,
        description: 'Two tabloid reporters are sent to Transylvania to find the Frankenstein monster - or get fired. They are laughed at there, but something suspicious is going on.',
        poster_url: "https://m.media-amazon.com/images/M/MV5BMjlhODIwYTAtNzFhNi00Yzg5LWE3NmYtY2I3MjY4NWNmMjhlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },






]

const seedMovies = () => Movies.bulkCreate(movieData);

module.exports = seedMovies;