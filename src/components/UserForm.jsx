import { useState } from 'react';
import Select from 'react-select';
import Header from './Header';

function SelectInput({ values, name, selected, onChange }) {
	const firstOptions = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' }
	]
	const ageOptions = [
		{ value: '1', label: '18-29' },
		{ value: '2', label: '30-39' },
		{ value: '3', label: '40-49' },
		{ value: '4', label: '50-59' },
		{ value: '5', label: '60+' }
	]
	// <label> element has to stay for accessibility purposes, however
	// it can be hidden with the className "sr-only"
	return (
		<div className="flex flex-col m-3 2xl:w-2/12 xl:w-3/12 lg:w-4/12 md:w-4/12 sm:w-6/12 xs:w-8/12">
			<label htmlFor={name} className="font-bold text-dark text-p">{name}</label>
			<Select 
				placeholder={<div>Ikke valgt...</div>}
				name={name}
				onChange={(e) => onChange(e.target.value)}
				options={firstOptions}
				className="py-1 cursor-pointer rounded hover:outline-marine-dark"
			>
				{values.map((value) => (
					<option value={value} key={value}>
						{value}
					</option>
				))}
			</Select>
		</div>
	);
}

function Stepper({ step, totalSteps }) {
	const before = 'before:border-gray before:border before:w-[92%] before:content-"" before:absolute before:top-1/2 before:-translate-y-1/2 before:z-[-1]';
	return (
		<div className={`flex justify-center items-center gap-30 mb-8 relative ${before}`}>
			{Array(totalSteps).fill(0).map((_, i) => (
				<div 
					key={i}
					className={`w-6 h-6 rounded-full m-1 ${i <= step ? 'bg-secondary' : 'bg-white'} border-secondary border-4`}
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
		<SelectInput 
			name="Velg et kjønn" 
			values={genders} 
			selected={gender}
			onChange={(value) => setGender(value)}
		/>,
		<SelectInput 
			name="Velg aldersgruppe" 
			values={ageGroups} 
			selected={ageGroup}
			onChange={(value) => setAgeGroup(value)}
		/>,
		(<div>
			<SelectInput 
				name="Velg morsmål" 
				values={languages} 
				selected={language}
				onChange={(value) => setLanguage(value)}papegøye
			/>
			{language === 'Norsk' && (
				<SelectInput 
					name="Velg dialekt" 
					values={dialects} 
					selected={dialect}
					onChange={(value) => setDialect(value)}
				/>
			)}
		</div>),
	];

	return (
		<div>
		<Header />
			<div className="h-[calc(100vh-300px)] flex flex-col place-items-center justify-center">
				<h2 className='text-h2 mb-5'>Først et par spørsmål</h2>
				<Stepper step={step} totalSteps={steps.length} />
				{steps[step]}
				<button onClick={() => setStep(prev => prev + 1)} className="transScale bg-secondary px-4 py-4 font-bold py-2 text-h4 text-white mt-2 text-black w-48 rounded inline-flex justify-center items-center gap-2">
					Gå videre
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
					</svg>

				</button>
				<button onClick={() => setStep(prev => prev - 1)} className="bg-light px-5 py-2 mt-2 text-black w-40 rounded">
					Hopp over
				</button>
				<div className="max-w-md text-gray-300 italic mt-14 text-center">
					<p className='text-p'>Vi samler ikke inn noen personlige data fra deg, denne infoen blir kun brukt til å systematisere data.</p>
				</div>
			</div>
		</div>
	);
}
