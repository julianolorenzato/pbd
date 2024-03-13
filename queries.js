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
	return await client.query('SELECT * FROM tratadores').then(res => res.rows)
}

export async function retrieveTreatments() {
	return await client.query('SELECT * FROM tratamentos').then(res => res.rows)
}

export async function retrieveSections() {
	return await client.query('SELECT * FROM sections').then(res => res.rows)
}

export async function retrieveClasses() {
	return await client.query('SELECT * FROM classes').then(res => res.rows)
}

export async function retrieveOrders() {
	return await client.query('SELECT * FROM ordens').then(res => res.rows)
}

export async function retrieveFamilies() {
	return await client.query('SELECT * FROM familias').then(res => res.rows)
}

export async function retrieveGenders() {
	return await client.query('SELECT * FROM generos').then(res => res.rows)
}

export async function retrieveSpecies() {
	return await client.query('SELECT * FROM especies').then(res => res.rows)
}

export async function createAnimal(nome, idade, status_saude, especie_id) {
	await client.query(
		'INSERT INTO animais (id, nome, idade, status_de_saude, especie_id) VALUES (gen_random_uuid(), $1, $2, $3, $4)',
		[nome, idade, status_saude, especie_id]
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
		'INSERT INTO tratamentos (id, animal_id, tratador_id, descricao, data) VALUES (gen_random_uuid(), $1, $2, $3, $4)',
		[animal_id, tratador_id, descricao, data]
	)
}

export async function createClass(nome) {
	await client.query(
		'INSERT INTO classes (id, nome) VALUES (gen_random_uuid(), $1)',
		[nome]
	)
}

export async function createOrder(nome, classe_id) {
	await client.query(
		'INSERT INTO ordens (id, nome, classe_id) VALUES (gen_random_uuid(), $1, $2)',
		[nome, classe_id]
	)
}

export async function createFamily(nome, ordem_id) {
	await client.query(
		'INSERT INTO familias (id, nome, ordem_id) VALUES (gen_random_uuid(), $1, $2)',
		[nome, ordem_id]
	)
}
export async function createGender(nome, familia_id) {
	await client.query(
		'INSERT INTO generos (id, nome, familia_id) VALUES (gen_random_uuid(), $1, $2)',
		[nome, familia_id]
	)
}
export async function createSpecie(nome, genero_id) {
	await client.query(
		'INSERT INTO especies (id, nome, genero_id) VALUES (gen_random_uuid(), $1, $2)',
		[nome, genero_id]
	)
}

export async function createSection(nome, descricao, especie_id) {
	await client.query(
		'INSERT INTO secoes (id, nome, descricao, especie_id) VALUES (gen_random_uuid(), $1, $2, $3)',
		[nome, descricao, especie_id]
	)
}

export async function remove(table, id) {
	switch (table) {
		case 'animais':
			await client.query(`DELETE FROM animais WHERE id=$1`, [id])
			break
		case 'secoes':
			await client.query(`DELETE FROM secoes WHERE id=$1`, [id])
			break
		case 'tratadores':
			await client.query(`DELETE FROM tratadores WHERE id=$1`, [id])
			break
		case 'tratamentos':
			await client.query(`DELETE FROM tratamentos WHERE id=$1`, [id])
			break
		case 'classes':
			await client.query(`DELETE FROM classes WHERE id=$1`, [id])
			break
		case 'ordens':
			await client.query(`DELETE FROM ordens WHERE id=$1`, [id])
			break
		case 'familias':
			await client.query(`DELETE FROM familias WHERE id=$1`, [id])
			break
		case 'generos':
			await client.query(`DELETE FROM generos WHERE id=$1`, [id])
			break
		case 'especies':
			await client.query(`DELETE FROM especies WHERE id=$1`, [id])
			break
		default:
			break
	}
}
