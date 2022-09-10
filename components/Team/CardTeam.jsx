import React from 'react';
// import NextImage from '../../../reusable/Image';
// import women from '../../../../public/woman-1.jpg';

const CardTeam = ({ team }) => {
  //   console.log('team', team);
  return (
    <div>
      {/* <NextImage src={women} className="rounded" layout="fill" /> */}
      <h3 className="mt-4 uppercase">{team.name}</h3>
      <p className="mt-2">{team.prof}</p>
    </div>
  );
};

export default CardTeam;
