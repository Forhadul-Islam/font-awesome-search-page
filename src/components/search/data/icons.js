import { faHouse, faMagnifyingGlass, faUser, faDownload, faImage, faPhone, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const iconObjects = [
  {
    icon: <FontAwesomeIcon icon={faHouse} />,
    name: 'House',
    category: 'Classic',
  },
  {
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
    name: 'MagnifyingGlass',
    category: 'Classic',
  },
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    name: 'User',
    category: 'Classic',
  },
  {
    icon: <FontAwesomeIcon icon={faDownload} />,
    name: 'Download',
    category: 'Classic',
  },
  {
    icon: <FontAwesomeIcon icon={faImage} />,
    name: 'Image',
    category: 'Classic',
  },
  {
    icon: <FontAwesomeIcon icon={faPhone} />,
    name: 'Phone',
    category: 'Classic',
  },
  {
    icon: <FontAwesomeIcon icon={faBars} />,
    name: 'Bars',
    category: 'Classic',
  },
];

export default iconObjects;
