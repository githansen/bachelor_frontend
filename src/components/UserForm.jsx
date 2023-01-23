import { useState } from 'react';

function Select({ values, name, selected, onChange }) {
	// <label> element has to stay for accessibility purposes, however
	// it can be hidden with the className "sr-only"
	return (
		<div className="flex flex-col m-3">
			<label htmlFor={name} className="font-bold pb-1">{name}</label>
			<select 
				name={name}
				onChange={(e) => onChange(e.target.value)}
				value={selected ?? ''}
				className="py-1 px-3 cursor-pointer rounded hover:outline-marine-dark"
			>
				{values.map((value) => (
					<option value={value} key={value}>
						{value}
					</option>
				))}
			</select>
		</div>
	);
}

function Stepper({ step, totalSteps }) {
	const before = 'before:border-gray-300 before:border before:w-[92%] before:content-"" before:absolute before:top-1/2 before:-translate-y-1/2 before:z-[-1]';
	return (
		<div className={`flex justify-center items-center gap-24 mb-5 relative ${before}`}>
			{Array(totalSteps).fill(0).map((_, i) => (
				<div 
					key={i}
					className={`w-4 h-4 rounded-full m-1 ${i === step ? 'bg-marine-dark' : 'bg-white'} border-marine-dark border-2`}
				/>
			))}
		</div>
	);
}

export default function UserForm() {
	// The values that can be selected
	const dialects = 'Velg dialekt, Østlandsk, Vestlandsk, Trøndersk, Nordnorsk, Annet'.split(', ');
	const ageGroups = 'Velg aldersgruppe, 18-29, 30-39, 40-49, 50-59, 60+'.split(', ');
	const languages = 'Velg morsmål, Norsk, Arabisk, Albansk, Pakistansk, Annet'.split(', ');
	const genders = 'Velg kjønn, Mann, Kvinne, Annet'.split(', ');

	// Selected values
	const [gender, setGender] = useState(null);
	const [ageGroup, setAgeGroup] = useState(null);
	const [language, setLanguage] = useState(null);
	const [dialect, setDialect] = useState(null);

	const [step, setStep] = useState(0);
	const steps = [
		<Select 
			name="Kjønn" 
			values={genders} 
			selected={gender}
			onChange={(value) => setGender(value)}
		/>,
		<Select 
			name="Aldersgruppe" 
			values={ageGroups} 
			selected={ageGroup}
			onChange={(value) => setAgeGroup(value)}
		/>,
		(<div>
			<Select 
				name="Morsmål" 
				values={languages} 
				selected={language}
				onChange={(value) => setLanguage(value)}papegøye
			/>
			{language === 'Norsk' && (
				<Select 
					name="Dialekt" 
					values={dialects} 
					selected={dialect}
					onChange={(value) => setDialect(value)}
				/>
			)}
		</div>),
	];

	return (
		<div className="flex flex-col place-items-center justify-center flex-grow">
			<Stepper step={step} totalSteps={steps.length} />
			{steps[step]}
			<button onClick={() => setStep(prev => prev + 1)} className="bg-blue-400 px-4 font-bold py-2 text-xl text-white mt-8">
				Gå videre
			</button>
			<button onClick={() => setStep(prev => prev - 1)} className="bg-gray-200 px-5 py-1 mt-2">
				Hopp over
			</button>
			<div className="max-w-md text-gray-300 italic mt-14">
				Vi samler ikke inn noen personlige data fra deg, denne infoen blir kun brukt til å systematisere data.
			</div>
		</div>
	);
}
