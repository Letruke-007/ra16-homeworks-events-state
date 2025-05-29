export default function IconSwitch({ icon, onSwitch }) {
  return (
    <span className="material-icons icon-switch" onClick={onSwitch}>
      {icon}
    </span>
  );
}
