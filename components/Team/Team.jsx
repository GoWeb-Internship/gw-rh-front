import CardTeam from './CardTeam';
import Heading from '../reusable/Heading';

const Team = ({ teams }) => {
  // console.log('teams', teams);
  return (
    <div className="pt-8 pb-16 text-main md:pt-16 md:pb-32 lg:pt-[124px] lg:pb-[248px]">
      <Heading
        tag="h2"
        text={teams.title}
        className="uppercase font-semibold text-[28px] leading-[33px] mb-6"
      />
      <p className="mb-4 text-base font-semibold text-brand md:w-[464px] md:mb-14">
        {teams.description}
      </p>
      <ul className="grid grid-cols-2 gap-x-3 gap-y-4 md:gap-x-5 lg:grid-cols-4 lg:gap-x-4">
        {teams &&
          teams.item.map(team => (
            <li key={team.id}>
              <CardTeam team={team} />
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Team;
