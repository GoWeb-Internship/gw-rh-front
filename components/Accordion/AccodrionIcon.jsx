const AccodrionIcon = ({ idx, open }) => {
  const classes =
    'absolute top-1/2 -translate-y-1/2 left-0 w-full h-[2px] shrink-0 duration-200 transition-transform bg-light';
  return (
    <div className={`${idx === open ? 'rotate-180' : ''} relative h-8 w-8 `}>
      <div
        className={`${classes} rounded-sm rotate-90 ${
          idx === open ? 'rotate-0' : ''
        }`}
      ></div>
      <div
        className={`${classes} rounded-sm rotate-180 ${
          idx === open ? 'rotate-0' : ''
        }`}
      ></div>
    </div>
  );
};

export default AccodrionIcon;
