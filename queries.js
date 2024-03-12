import pg from 'pg'

const client = new pg.Client({
	host: 'localhost',
	port: 5432,
	user: 'root',
	password: 'secret',
	database: 'ong_animais'
})

await client.connect()

export async function retrieveAnimals() {
	return await client.query('SELECT * FROM animais').then(res => res.rows)
}

export async function retrieveTreaters() {
	return await client.query('SELECT * FROM tratadores')
}

export async function retrieveTreatments() {
	return await client.query('SELECT * FROM tratamentos')
}

export async function retrieveSections() {
	return await client.query('SELECT * FROM sections')
}

export async function retrieveClasses() {
	return await client.query('SELECT * FROM classes')
}

export async function retrieveOrders() {
	return await client.query('SELECT * FROM ordens')
}

export async function retrieveFamilies() {
	return await client.query('SELECT * FROM familias')
}

export async function retrieveGenders() {
	return await client.query('SELECT * FROM generos')
}

export async function retrieveSpecies() {
	return await client.query('SELECT * FROM especies')
}

export async function createAnimal(nome, idade, status_saude) {
	await client.query(
		'INSERT INTO animais VALUES (gen_random_uuid(), $1, $2, $3)',
		[nome, idade, status_saude]
	)
}

export async function createTreater(nome, cpf, data_entrada, data_saida) {
	await client.query(
		'INSERT INTO tratadores VALUES (gen_random_uuid(), $1, $2, $3, $4)',
		[nome, cpf, data_entrada, data_saida]
	)
}

export async function createTreatment(animal_id, tratador_id, descricao, data) {
	await client.query(
		'INSERT INTO tratamentos (animal_id, tratador_id, descricao, data) VALUES (gen_random_uuid(), $1, $2, $3, $4)',
		[animal_id, tratador_id, descricao, data]
	)
}
