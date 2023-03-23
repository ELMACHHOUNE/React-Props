import PropTypes from "prop-types";

const Profile = (props) => {
  const { fullName, bio, profession, handleName } = props;

  return (
    <div style={{ textAlign: "center" }}>
      {props.children}
      <h2>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
      <button onClick={() => handleName(fullName)}>Click me</button>
    </div>
  );
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

Profile.defaultProps = {
  bio: "No bio available",
  profession: "Unknown",
};

export default Profile;
