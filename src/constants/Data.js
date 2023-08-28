import DehliImage from '../assets/india_gate.jpeg';

// aims
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';

//backgrounds
import EnergyBack from '../assets/back-energy.jpg';
import BuildingBack from '../assets/proj-buil.jpeg';
import TransBack from '../assets/back-transport.jpg';
import EnvBack from '../assets/back-env.jpg';
import MediBack from '../assets/back-medicine.jpeg';

//projects
import EnergyPro from '../assets/energy-pro.jpg';
import BuildingPro from '../assets/proj-buil.jpeg';
import TransPro from '../assets/project tran.jpg';
import EnvPr from '../assets/proj-env.jpg';

export const LOWEST_FARE_LIST = [
  {
    id: 1,
    heading: 'Flights to Dehli',
    describtion: '$42',
    image: EnergyPro,
    root: '/',
  },
  {
    id: 2,
    heading: 'Flights to Dehli',
    describtion: '$42',
    image: BuildingPro,
    root: '/building',
  },
  {
    id: 3,
    heading: 'Flights to Dehli',
    describtion: '$42',
    image: TransPro,
    root: '/transportation',
  },
  {
    id: 4,
    heading: 'Flights to Dehli',
    describtion: '$42',
    image: EnvPr,
    root: '/environment',
  },
  {
    id: 5,
    heading: 'Flights to Dehli',
    describtion: '$42',
    image: MediBack,
    root: '/health',
  },
];

export const Background = [
  {
    id: 1,
    image: EnergyBack,
    root: '/',
  },
  {
    id: 2,
    image: BuildingBack,
    root: '/building',
  },
  {
    id: 3,
    image: TransBack,
    root: '/transportation',
  },
  {
    id: 4,
    image: EnvBack,
    root: '/environment',
  },
  {
    id: 5,
    image: MediBack,
    root: '/health',
  },
];

export const Contents = [
  {
    id: 1,
    heading: 'test1',
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    root: '/',
  },
  {
    id: 2,
    heading: 'test2',
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    root: '/building',
  },
  {
    id: 3,
    heading: 'test3',
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    root: '/transportation',
  },
  {
    id: 4,
    heading: 'test4',
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    root: '/environment',
  },
  {
    id: 5,
    heading: 'test5',
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    root: '/health',
  },
];

export const Aims = [
  {
    id: 1,
    heading: 'Fight against climate change',
    description: 'Renewble  emit greenhouse gases in energy generation process.',
    icon: icon3,
  },
  {
    id: 2,
    heading: 'Reduce energy dependence of fossil fuels',
    description: 'Energy infrastructure resilence, sun, water, wind and organic materials',
    icon: icon4,
  },
  {
    id: 3,
    heading: 'Increasingly competitive',
    description: 'Renewables are now the most cost-competitive source of powers',
    icon: icon2,
  },
  {
    id: 4,
    heading: 'Creates job developing local community',
    description: 'Renewable energy investments are usually spent within the continent',
    icon: icon1,
  },
  {
    id: 5,
    heading: 'Type of sustainble Energy',
    description: 'Geothernal, Bioress, Hydrogen energy snd solar energy',
    icon: icon5,
  },
];
