const Internship = ({ data }) => {
  const { title, team, technology, type, time } = data;
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600">
            <strong className="text-blue-600">Team:</strong> {team}
          </p>
          <p className="text-gray-600">
            <strong className="text-blue-600">Technology:</strong> {technology}
          </p>
          <p className="text-gray-600">
            <strong className="text-blue-600">Type:</strong> {type}
          </p>
          <p className="text-gray-600">
            <strong className="text-blue-600">Duration:</strong> {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Internship;
