import React from 'react';
import WhyBuild from './homeSections/WhyBuild';
import Virtual from '../../virtual/Virtual';
import ContactsPage from './ContactsPage';
import InstructionInfo from '../instructionInfo/InstructionInfo';
import HydraAbout from '../hydraAbout/HydraAbout';
import Technologies from '../technologies/Technologies';
import HydraTech from '../hydraTech/HydraTech';
import EllipseContent from '../ellipseContent/EllipseContent';
import HyrdaForm from '../hydraForm/HyrdaForm';

const HomePage = () => {
	return (
		<>
			<Virtual />
			<ContactsPage />
			<InstructionInfo />
			<HydraAbout />
			<WhyBuild />
			<Technologies />
			<HydraTech />
			<InstructionInfo />
			<EllipseContent />
			<HyrdaForm />
		</>
	);
};
export default HomePage;
