// import CardTeam from './CardTeam';
// import Heading from '../../Heading';

const Team = ({ teams }) => {
  // console.log('teams', teams);
  return (
    <div className="py-10">
      {/* <Heading
        tag="h2"
        text={teams.title}
        className="uppercase font-semibold text-[28px] leading-[33px] mb-6 text-black"
      /> */}
      <h2>{teams.title}</h2>
      <p className="mb-14 w-[464px] text-blue-800">{teams.description}</p>
      {/* <ul className="grid grid-cols-4 gap-4">
        {teams &&
          teams.item.map(team => (
            <li key={team.id}>
              <CardTeam team={team} />
            </li>
          ))}
      </ul> */}
    </div>
  );
};
export default Team;
