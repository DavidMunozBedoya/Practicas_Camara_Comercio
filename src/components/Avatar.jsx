export default function Avatar(props) {
  return (
    <img
      className="Avatar w-80 object-center border-4 border-amber-50 mx-auto"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
