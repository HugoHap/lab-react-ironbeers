import axios from 'axios'

class BeersService {

    constructor() {
        this.api = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com/beers' })
    }

    getAllBeers = () => {
        return this.api.get('/')
    }

    getOneBeer = id => {
        return this.api.get(`/${id}`)
    }

    getRandomBeer = () => {
        return this.api.get('/random')
    }

    newBeer = beer => {
        return this.api.post(`/new`, beer)
    }
    searchBeer = search => {
        return this.api.get(`/search?q=${search
            }`)
    }
}

const beerService = new BeersService()

export default beerService