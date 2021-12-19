import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  icon: IconDefinition;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ icon, onClick }) => {
  return (
    <span onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </span>
  );
};

export default Icon;
