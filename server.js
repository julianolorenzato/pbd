import Fastify from 'fastify'
import pg from 'pg'
import {
	createAnimal,
	retrieveAnimals,
	retrieveClasses,
	retrieveFamilies,
	retrieveGenders,
	retrieveOrders,
	retrieveSections,
	retrieveSpecies,
	retrieveTreaters,
	retrieveTreatments
} from './queries'

const client = new pg.Client({
	host: 'localhost',
	port: 5432,
	user: 'root',
	password: 'secret',
	database: 'ong_animais'
})

await client.connect()

const fastify = Fastify({ logger: true })

fastify.get('/animais', async (req, res) => await retrieveAnimals())
fastify.get('/tratadores', async (req, res) => await retrieveTreaters())
fastify.get('/tratamentos', async (req, res) => await retrieveTreatments())
fastify.get('/secoes', async (req, res) => await retrieveSections())
fastify.get('/classes', async (req, res) => await retrieveClasses())
fastify.get('/ordens', async (req, res) => await retrieveOrders())
fastify.get('/familias', async (req, res) => await retrieveFamilies())
fastify.get('/generos', async (req, res) => await retrieveGenders())
fastify.get('/especies', async (req, res) => await retrieveSpecies())

fastify.post('/animais', async (req, res) => {
	const { nome, idade, status_saude } = req.body
	return createAnimal(nome, idade, status_saude)
})

fastify.post('/tratadores', async (req, res) => {
	const { nome, data_entrada, data_saida } = req.body
	return 
})

fastify.listen({ port: 3000 })
