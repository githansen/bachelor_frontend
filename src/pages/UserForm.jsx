import { useState } from 'react';
import Select, { components } from 'react-select';
import Footer from '../components/shared/Footer';
import { Navigate } from 'react-router-dom';
import UserFormIcon from '../assets/img/UserForm.png';

function SelectInput({ options, name, selected, onChange }) {
	const selectStyle = {

		control: (base, state) => {
			let border = '2px solid #f2f2f2';

			if (state.isSelected) {
				border = "2px solid #FFD039";
			}
			if (state.isFocused) {
				border = "2px solid #FFD039";
			}

			return {
				...base,
				border,
				boxShadow: 'none',
				'&:hover': {
					border: '2px solid #FFD039',
				}
			};
		}
	};

	const Option = props => {
		const {
		  children,
		  className = "",
		  cx,
		  isDisabled,
		  isFocused,
		  isSelected,
		  innerProps
		} = props;
		return (
		  <div
			className={cx(
			  {
				option: true,
				"option--is-disabled": isDisabled,
				"option--is-focused": isFocused,
				"option--is-selected": isSelected
			  },
			  `${className} defaultSelectOptionsStyle`
			)}
			{...innerProps}
		  >
			{children}
		  </div>
		);
	  };
	const NoOptionsMessage = props => {
		return (
		  <components.NoOptionsMessage {...props}>
			<span>Ingen resultat...</span> 
		  </components.NoOptionsMessage>
		);
	  };

	// <label> element has to stay for accessibility purposes, however
	// it can be hidden with the className "sr-only"
	return (
		<div className='w-10/12 mx-auto'>
			<div className="flex flex-col m-3">
				<label htmlFor={name} className="font-bold text-dark text-p">{name}</label>
				<Select 
				color="warning"
					placeholder={<div>Ikke valgt...</div>}
					name={name}
					options={options}
					value={selected}
					isClearable={true}
					components={{ NoOptionsMessage, Option }}
					className="py-1"
					styles={selectStyle}
					onChange={onChange}
				/>
			</div>
		</div>
	);
}

function Stepper({ step, totalSteps }) {
	const before = 'before:border-light before:border before:w-[92%] before:content-"" before:absolute before:top-1/2 before:-translate-y-1/2 before:z-[1]';
	return (
		<div className={`flex justify-center items-center gap-20 mb-2 relative ${before}`}>
			{Array(totalSteps).fill(0).map((_, i) => (
				<div 
					key={i}
					className={`w-5 h-5 z-[2] rounded-full m-1 transition-all ${i <= step ? 'bg-secondary' : 'bg-white'} border-secondary border-2`}
				/>
			))}
		</div>
	);
}

export default function PageUserForm() {
	const ageOptions = [
		{ value: '1', label: '18-29' },
		{ value: '2', label: '30-39' },
		{ value: '3', label: '40-49' },
		{ value: '4', label: '50-59' },
		{ value: '5', label: '60+' }
	];
	const genderOptions = [
		{ value: 'mann', label: 'Mann' },
		{ value: 'kvinne', label: 'Kvinne' },
		{ value: 'annet', label: 'Annet' }
	];
	const languageOptions = [
		{ value: 'norsk', label: 'Norsk' },
		{ value: 'arabisk', label: 'Arabisk' },
		{ value: 'alabansk', label: 'Albansk' }
	];
	const dialectOptions = [
		{ value: 'ostlandsk', label: 'Østlandsk' },
		{ value: 'vestlandsk', label: 'Vestlandsk' },
		{ value: 'trondersk', label: 'Trøndersk' },
		{ value: 'nordnorsk', label: 'Nordnorsk' },
		{ value: 'annet', label: 'Annet' }
	];

	// Selected options
	const [gender, setGender] = useState(null);
	const [ageGroup, setAgeGroup] = useState(null);
	const [language, setLanguage] = useState(null);
	const [dialect, setDialect] = useState(null);

	const [step, setStep] = useState(0);
	const steps = [
		(<SelectInput 
			name="Velg et kjønn" 
			options={genderOptions} 
			selected={gender}
			onChange={(value) => setGender(value)}
		/>),
		(<SelectInput 
			name="Velg aldersgruppe" 
			options={ageOptions} 
			selected={ageGroup}
			onChange={(value) => setAgeGroup(value)}
		/>),
		(<div className='w-full mx-auto'>
			<SelectInput 
				name="Velg morsmål" 
				options={languageOptions}
				selected={language}
				onChange={(value) => setLanguage(value)}
			/>
			{language?.value === 'norsk' && (
				<SelectInput 
					name="Velg dialekt" 
					options={dialectOptions}
					selected={dialect}
					onChange={(value) => setDialect(value)}
				/>
			)}
		</div>),
	];

	if (step >= steps.length) {
		return <Navigate to="/les" />
	} else {
		return (
			<div>
				<div className='mx-auto max-w-screen-xl'>
					<div className="min-h-[calc(100vh-500px)] flex flex-col place-items-center my-[10rem]">
						<img src={UserFormIcon} className='h-[15rem] mb-10'></img>
						<Stepper 
							step={step} 
							totalSteps={steps.length} 
						/>
						<h2 className='text-h2 mb-5'>Først, et par spørsmål</h2>
						<div className="min-w-[430px] my-2">
							{steps[step]}
						</div>
						<button onClick={() => setStep(prev => prev + 1)} className="transScale text-dark bg-secondary px-4 py-4 mb-2 font-bold text-h4 mt-2 text-black w-48 rounded inline-flex justify-center items-center gap-2">
							Gå videre
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
							</svg>

						</button>
						{step > 0 && (
							<button 
								onClick={() => setStep(prev => Math.max(prev - 1, 0))} 
								className="bg-light px-5 py-2 mt-2 text-black w-40 rounded border-2 border-light hover:bg-secondary-soft hover:border-secondary"
							>
								Gå tilbake
							</button>
						)}
						<div className="max-w-md text-gray-300 italic mt-5 text-center">
							<p className='text-p'>Vi samler ikke inn noen personlige data fra deg, denne infoen blir kun brukt til å systematisere data.</p>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
