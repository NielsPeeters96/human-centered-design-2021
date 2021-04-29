const btnWork = document.querySelector('work')
const btnHome = document.querySelector('home')
const btnElse = document.querySelector('else')
const btnDate = document.querySelector('date')
const btnBackHome = document.querySelector('backhome')
const btnSubmit = document.querySelector('submit')

document.addEventListener('keyup', (event) => {
    switch(event.key) {
        case 'k':
        case 'm':
        case 'l':
        case ',':
        const datum = localStorage.getItem('datum')
        if (datum) {
            window.location.replace(`https://www.ns.nl/reisplanner/#/?vertrek=Eindhoven%20Centraal&vertrektype=treinstation&aankomst=Amsterdam%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=${datum}-T07:00`)
        }
        else {window.location.replace('https://www.ns.nl/reisplanner/#/?vertrek=Eindhoven%20Centraal&vertrektype=treinstation&aankomst=Amsterdam%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=null-T18:00')}
        break;
        case 's':
        case 'x':
        case 'd':
        case 'c':
        window.location.replace('https://www.ns.nl/reisplanner/#/?vertrek=Eindhoven%20Centraal&vertrektype=treinstation&aankomst=Amsterdam%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=null-T18:00')
        break;    
        case 'g':
        case 'v':
        case 'b':
        case 'h':
        window.location.replace('else.html')
        break;    
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        window.location.replace('/')
        break;
        case 'z':
        case 'x':
        window.location.replace('/')
        break;
        default:
        return
    }
}) 
