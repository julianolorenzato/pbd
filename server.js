import Fastify from 'fastify'
import {
	createAnimal,
	createClass,
	createFamily,
	createGender,
	createOrder,
	createSection,
	createSpecie,
	createTreater,
	createTreatment,
	remove,
	retrieveAnimals,
	retrieveClasses,
	retrieveFamilies,
	retrieveGenders,
	retrieveOrders,
	retrieveSections,
	retrieveSpecies,
	retrieveTreaters,
	retrieveTreatments
} from './queries.js'

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
	const { nome, idade, status_saude, especie_id } = req.body
	return await createAnimal(nome, idade, status_saude, especie_id)
})
fastify.post('/tratadores', async (req, res) => {
	const { nome, cpf, data_entrada, data_saida } = req.body
	return await createTreater(nome, cpf, data_entrada, data_saida)
})
fastify.post('/tratamentos', async (req, res) => {
	const { animal_id, tratador_id, descricao, data } = req.body
	return await createTreatment(animal_id, tratador_id, descricao, data)
})
fastify.post('/classes', async (req, res) => {
	const { nome } = req.body
	return await createClass(nome)
})
fastify.post('/ordens', async (req, res) => {
	const { nome, classe_id } = req.body
	return await createOrder(nome, classe_id)
})
fastify.post('/familias', async (req, res) => {
	const { nome, ordem_id } = req.body
	return await createFamily(nome, ordem_id)
})
fastify.post('/generos', async (req, res) => {
	const { nome, familia_id } = req.body
	return await createGender(nome, familia_id)
})
fastify.post('/especies', async (req, res) => {
	const { nome, genero_id } = req.body
	return await createSpecie(nome, genero_id)
})
fastify.post('/secoes', async (req, res) => {
	const { nome, descricao, especie_id } = req.body
	return await createSection(nome, descricao, especie_id)
})

fastify.delete(
	'/animais/:id',
	async (req, res) => await remove('animais', req.query.id)
)
fastify.delete(
	'/tratadores/:id',
	async (req, res) => await remove('tratadores', req.query.id)
)
fastify.delete(
	'/tratamentos/:id',
	async (req, res) => await remove('tratamentos', req.query.id)
)
fastify.delete(
	'/secoes/:id',
	async (req, res) => await remove('secoes', req.query.id)
)
fastify.delete(
	'/classes/:id',
	async (req, res) => await remove('classes', req.query.id)
)
fastify.delete(
	'/ordens/:id',
	async (req, res) => await remove('ordens', req.query.id)
)
fastify.delete(
	'/familias/:id',
	async (req, res) => await remove('familias', req.query.id)
)
fastify.delete(
	'/generos/:id',
	async (req, res) => await remove('generos', req.query.id)
)
fastify.delete(
	'/especies/:id',
	async (req, res) => await remove('especies', req.query.id)
)

fastify.listen({ port: 3000 })
