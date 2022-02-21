type IBadgeProps = { color: string; title: string; number?: number };
export const Badge = ({ title, color }, IBadgeProps) => {
  return (
    <span
      className={`ml-3 mr-2 px-0 py-0 text-base font-extrabold p-3 ${color} rounded-lg  uppercase text-xl`}
    >
      {title}
    </span>
  );
};
export const DoctorBadge = ({ title, color, number }) => {
  return (
    <span
      className={`ml-3 mr-2 px-0 py-0 text-base font-extrabold p-3 ${color} rounded-lg  uppercase text-xl`}
    >
      {title} = {number}
    </span>
  );
};
export const HFBadge = ({ title, number }) => {
  return (
    <span className={"rounded-lg  uppercase text-xl"}>
      <h1 className="font-extrabold text-2xl">{number}</h1>
      <h3 className="bold">{title}</h3>
    </span>
  );
};
