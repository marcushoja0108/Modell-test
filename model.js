const model = {
    app: {
        loggedInUserID: null,
        pages: ["mainPage", "loginPage","moviepage","profilepage","searchpage"],
        currentPage: "mainPage",
    },

    input: {
        logIn:{
            email:null,
            password:null,
        },
        
        createAccount: {
            name: null,
            adress: null,
            email: null,
            password: null,
            secondPassword: null
        },

        AddMovies: {
            name: null,
            genre: null,
            year: null,
            description: null,
            starts: null,
            director: null,
            writers: null,
            movieImage: null
        },
        
        SearchMovie: {
            inputsearch: null,
            resultview: []
           
        },

    },
    
    data: {
        users: [
            {
                id: 100000001,
                name: "Kaia",
                description: "",
                isAdmin: true,
                favoriteMovie: "Lion King",
                profileImage: "kaia.jpg",
                friendsList: [
                    {
                        id: 100000002
                    }
                ],
                moviesSeen: [
                    {
                        id: 1
                    }

                ],
                favMovies: [
                    {
                        id: 1
                    }
                ],
                recommendedmovies: [
                    {
                        id: 1
                    }
                ]
            }
        ],

        Top10: [
            {
                id: 1,
            }
        ],

        movies: [
            {
                id: 1,
                movieImage: "Image.jpg",
                ratings:[300, 700, 834],
                avgrating: null,
                comments: [
                    {
                        id: 100000001,
                        comment: "god film",

                    }
                ],
                title: "Ace ventura, pet detective",
                description: "",
                genre: [
                    "comedy"
                ],
                year: "1994",
                Stars: [
                    "Jim Carrey",
                    "Courteney Cox",
                    "Sean Young",
                ],
                Director: [
                    "Tom Shadyac"
                ],

                Writer: [
                    "Jack Bernstein",
                    "Tom Shadyac",
                    "Jim Carrey",
                ]

                
            }
        ]
    }
}