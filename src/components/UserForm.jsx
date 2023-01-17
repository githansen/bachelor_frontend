
function Select({ values, name }) {
	return (
		<div className="flex flex-col m-3">
			<label htmlFor={name} className="font-bold pb-1">{name}</label>
			<select name={name} className="py-1 px-3 cursor-pointer rounded hover:outline-marine-dark">
				{values.map((value) => (
					<option value={value} key={value}>
						{value}
					</option>
				))}
			</select>
		</div>
	);
}

export default function UserForm() {
	const dialects = 'Østlandsk, Vestlandsk, Trøndersk, Nordnorsk, Annet'.split(', ');
	const ageGroups = '18-29, 30-39, 40-49, 50-59, 60+'.split(', ');
	const languages = 'Norsk, Arabisk, Albansk, Pakistansk, Annet'.split(', ');
	const genders = 'Mann, Kvinne, Annet'.split(', ');

	return (
		<div className="flex place-items-center justify-center flex-grow">
			<Select values={dialects} name="Dialekt" />
			<Select values={ageGroups} name="Aldersgruppe" />
			<Select values={languages} name="Morsmål" />
			<Select values={genders} name="Kjønn" />
		</div>
	);
}
