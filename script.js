
const old = {
    name: "Muhamet",
    birthday: '22.07.2003',
    age: 20,
    address: {
        street: 'raimbekova',
        number: 11,
        Country: 'Kyrgyzstan',
        city: 'Osh',
        region: 'Osh'
    },
    frends: [
        {
            name: "Ermat",
            age: 20,
            address: {
                street: 'Komsomolsky prospekt',
                number: 30,
                Country: 'Russia',
                city: 'Moscow',
                region: 'sokolinaya gora'

            }
        },
        {
            name: "Maksim",
            age: 19,
            address: {
                street: 'Frunzenskaya embankment',
                number: 32,
                Country: 'Russia',
                city: 'Moscow',
                region: 'Khamovniki'

            }
        },
    ],
    education: [
        {
            category: 'Higher education',
            educationalInstitution: 'OSHSU',
        },
        {
            category: 'elementary school',
            educationalInstitution: 'School gymnasium',
            address: {
                street: 'raimbekova',
                number: 17 / 1,
            }
        },
    ],
    family: [
        {
            mother: {
                name: 'Gulmira',
                age: 45,
                city: 'Moscow'
            }
        },
        {
            father: {
                name: 'Erkin',
                age: 48,
                city: 'Moscow'
            }
        },
        {
            brother: {
                name: 'Kalmyrza',
                age: 18,
                city: 'Moscow'
            }
        },
        {
            olderSister: {
                name: 'Fatima',
                age: 22,
                city: 'Moscow'
            }
        },
        {
            sister: {
                name: 'Farida',
                age: 12,
                city: 'Moscow'
            }
        }
    ],
    animals: [
        {
            cat: {
                name: 'Tom',
                age: 12,
                gender: 'male',
                eyes: 'brown',
                wool: 'white fluffy',
            }
        },
        {
            dog: {
                name: 'Spike',
                age: 13,
                gender: 'male',
                eyes: 'blue',
                wool: 'blek and fluffy',
                family: {
                    son: 'Skip',
                    wife: 'Sara',
                    daughter: 'Sofa',
                }
            }
        },
        {
            mouse: {
                name: 'Jerry',
                age: 2,
                eyes: 'blek',
                wool: 'grey',
            }
        },
        {
            hamster:{
                name: 'Nibbler',
                age: 2,
                eyes:'blek',
                wool:'grey'
            }
        },
        {
            parrot:{
                name: 'Kesha',
                age: 3,
                eyes:'blek',
                colour:'yellow'
            }
        }
    ],
    university: [
        {
            russian: {
                ball: 87
            }
        },
        {
            mathematics: {
                ball: 75
            }
        },
        {
            matanalysis: {
                ball: 73
            }
        },
        {
            kyrgyz: {
                ball: 70
            }
        },
        {
            programming: {
                ball: 83
            }
        },
        {
            informatics: {
                ball: 70
            }
        },
        {
            computers: {
                ball: 73
            }
        },
        {
            algebra: {
                ball: 78
            }
        },
        {
            physics: {
                ball: 80
            }
        },
        {
            chemistry: {
                ball: 82
            }
        },
    ],
    anatomyHuman: [
        'heart',
        'bud',
        'lungs',
        'stomach',
    ],
    hoddy: [
        'footdall',
        'basketball',
        'volleybal',
        'draw',
        'hockey',
        'tenis',
        'listen to music',
        {
            games: [
                'dota2',
                'cs',
                'fifa',
                'pubg',
                'pes',
                'call of duty'
            ]
        },
    ],
    film: [
        {
            fantasy: {
                marvel: 'the avengars finale',
                dc: 'Batman',
                dc: 'super man'
            }
        },
        {
            horror: [
                'astral 8',
                'paternoster',
                'busan train',
            ]
        },
        {
            gum: [
                'ayash 1',
                'rocketa',
                'kaha'
            ]
        },
        {
            series: [
                'слово пацана',
                'бесстыжие',
                'волчонок'
            ]
        },
    ],
    anime: [
        {
            genres: [
                {
                    romance: [
                        'Твоя апрельсая ложь',
                        'Золотая пора',
                        'Монстр за соселней паротй'
                    ]
                },
                {
                    adventure: [
                        'Гинтама',
                        'Ван пис',
                        'Хантер х Хантер'
                    ]
                },
                {
                    militant: [
                        'Последний серафим',
                        'Токийские мстители',
                        'Боец Баки'
                    ]
                },
                {
                    magic: [
                        'Хвост феи',
                        'Повелитель',
                        'логин гортзонт'
                    ]
                },
            ]
        }

    ],
    comics: [ 
        {
            manga: [
                'наруто',
                'атака титана',
                'смерть заместителя'
            ]  
        },
        {
            manhwa: [
                'башня богов',
                'невеста войны',
                'спасение'
            ]
        },
        {
            manhua: [
                'бездомный бог',
                'мартышка кинг',
                'боевая башня'
            ]
        }
    ],

}

console.log(old)