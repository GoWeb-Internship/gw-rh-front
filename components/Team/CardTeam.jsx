import React from 'react';
import PropTypes from 'prop-types';
import NextImage from '../reusable/Image';

const CardTeam = ({ team }) => {
  return (
    <div>
      <NextImage
        image={team.attributes.foto}
        className="rounded"
        alt={team.attributes.alt}
      />
      <h3 className="mt-4 text-base font-semibold uppercase md:text-lg md:tracking-[0.005em]">
        {team.attributes.name}
      </h3>
      <p className="mt-2 text-[14px] leading-[16px] font-normal">
        {team.attributes.profession}
      </p>
    </div>
  );
};

CardTeam.propTypes = {
  team: PropTypes.object,
};

export default CardTeam;
