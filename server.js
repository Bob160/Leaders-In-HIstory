const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 7000

app.use(cors())
//app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + "/public", {
    index: false, 
    immutable: true, 
    cacheControl: true,
    maxAge: "30d"
}));

let leaders = {
    'Sir Frederick Lugard': {
        'fullName': 'Sir Frederick Lugard',
        'periodServed': '1st January 1914 to 8th August 1919',
        'durationInOffice': '5 years',
        'nationality': 'British',
        'stateOfOrigin/ Province': 'Not Applicable',
        'civilianOrMilitary': 'Not Applicable'
    },
    'Sir Hugh Clifford': {
        'fullName': 'Sir Hugh Clifford',
        'periodServed': '8th August 1919 to 13th November 1925',
        'durationInOffice': '6 years',
        'nationality': 'British',
        'stateOfOrigin': 'Not Applicable',
        'civilianOrMilitary': 'Not Applicable'
    },
    'Sir Graeme Thomson': {
        'fullName': 'Sir Graeme Thomson',
        'periodServed': '13th November 1925 to 17th June 1931',
        'durationInOffice': '6 years',
        'nationality': 'British',
        'stateOfOrigin': 'Not Applicable',
        'civilianOrMilitary': 'Not Applicable'
    },
    'Sir Donald Cameron': {
        'fullName': 'Sir Donald Cameron',
        'periodServed': '17th June 1931 to 1st November 1935',
        'durationInOffice': '4 years',
        'nationality': 'British',
        'stateOfOrigin': 'Not Applicable',
        'civilianOrMilitary': 'Not Applicable'
    },
    'Sir Bernard Bourdillon': {
        'fullName': 'Sir Bernard Bourdillon',
        'periodServed': '1st November 1935 to 1943',
        'durationInOffice': '8 years',
        'nationality': 'British',
        'stateOfOrigin': 'Not Applicable',
        'civilianOrMilitary': 'Not Applicable'
    },
    'Sir Arthur Richards': {
        'fullName': 'Sir Arthur Richards',
        'periodServed': '1943 to 5th February 1948',
        'durationInOffice': '5 years',
        'nationality': 'British',
        'stateOfOrigin': 'Not Applicable',
        'civilianOrMilitary': 'Not Applicable'
    },
    'Sir John Macpherson': {
        'fullName': 'Sir John Macpherson',
        'periodServed': '5th February 1948 to 1st October 1954',
        'durationInOffice': '5 years',
        'nationality': 'British',
        'stateOfOrigin': 'Not Applicable',
        'civilianOrMilitary': 'Not Applicable'
    },
    'Sir James Wilson Robertson': {
        'fullName': 'Sir James Wilson Robertson',
        'periodServed': '15th June 1955 to 16th November 1960',
        'durationInOffice': '5 years',
        'nationality': 'British',
        'stateOfOrigin': 'Not Applicable',
        'civilianOrMilitary': 'Not Applicable'
    },
    'Dr Nnamdi Azikiwe': {
        'fullName': 'Dr Nnamdi Azikiwe',
        'periodServed': '16th November 1960 to 1st October 1963 and 1st October 1963 to 16th January 1966 as President',
        'durationInOffice': '3 years and 2 years as President ',
        'nationality': 'Nigerian',
        'stateOfOrigin': '',
        'civilianOrMilitary': 'Civilian'
    },
    'Major Gen Johnson Aguiyi-Ironsi': {
        'fullName': 'Major Gen Johnson Aguiyi-Ironsi',
        'periodServed': '16th January 1966 to 12th July 1966',
        'durationInOffice': '177 days',
        'nationality': 'Nigerian',
        'stateOfOrigin': '',
        'civilianOrMilitary': 'Military'
    },
    'Gen Yakubu Gowon': {
        'fullName': 'Gen Yakubu Gowon',
        'periodServed': '1st August 1966 to 29th July 1975',
        'durationInOffice': '8 years',
        'nationality': 'Nigerian',
        'stateOfOrigin': '',
        'civilianOrMilitary': 'Military'
    },
    'Gen Murtala Muhammed': {
        'fullName': 'Gen Murtala Muhammed',
        'periodServed': '29th July 1975 to 13th February 1976',
        'durationInOffice': '199 days',
        'nationality': 'Nigerian',
        'stateOfOrigin': '',
        'civilianOrMilitary': 'Military'
    },
    'Major Gen Olusegun Obasanjo': {
        'fullName': '',
        'periodServed': '13th February 1976 to 1st October 1979',
        'durationInOffice': '3 years 258 days',
        'nationality': 'Nigerian',
        'stateOfOrigin': 'Ogun',
        'civilianOrMilitary': 'Military'
    },
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:fullName', (request, response) => {
    const leader = request.param.name.toLowerCase()
    if (leaders[leaderName]) {
        // response.json(leaders[leaderName])m
        console.log(leaders[leaderName])
    } else {
        // response.json(leaders['unknown'])
        console.log(leaders['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


// 'Major Gen Johnson Aguiyi-Ironsi' : {
//     'fullName': '',
//         'periodServed': '',
//             'durationInOffice': '',
//                 'nationality': '',
//                     'stateOfOrigin': '',
//                         'civilianOrMilitary': ''
// }