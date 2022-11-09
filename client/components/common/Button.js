const Button = ({ label, handleClick, url }) => {
  if (url) {
    return (
      <a
        className="px-5 py-2 border text-xl text-white rounded-md bg-green-500 hover:bg-green-800"
        href={url}
      >
        {label}
      </a>
    );
  }
  return (
    <>
      <button
        onClick={handleClick}
        className="bg-red-500 px-5 py-2  border text-white rounded-xl text-xl hover:bg-red-800"
      >
        {label}
      </button>
    </>
  );
};
export default Button;
