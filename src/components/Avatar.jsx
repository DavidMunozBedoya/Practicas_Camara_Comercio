export default function Avatar(props) {
   return (
      <img
         className="Avatar w-80 object-center border mx-auto"
         src={props.user.avatarUrl}
         alt={props.user.name}
      />
   );
}
