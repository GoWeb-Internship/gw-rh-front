import React from 'react';
import NextImage from '../reusable/Image';
// import women from '../../public/woman.jpg';

const CardTeam = ({ team }) => {
  //   console.log('team', team);
  return (
    <div>
      <NextImage src={team.foto} className="rounded" layout="fill" />
      <h3 className="mt-4 text-base font-semibold uppercase md:text-lg md:tracking-[0.005em]">
        {team.name}
      </h3>
      <p className="mt-2 text-[14px] leading-[16px] font-normal">{team.prof}</p>
    </div>
  );
};

export default CardTeam;
