const Internship = ({ data }) => {
  const { title, teamName, technology, type, time, description, partners } =
    data.data;
  // const { title1, teamName1, technology1, type1, time1, description1 } =
  //   data.data;

  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600">
            <strong className="text-blue-600">Team:</strong> {teamName}
          </p>
          <p className="text-gray-600">
            <strong className="text-blue-600">Technology:</strong> {technology}
          </p>
          <p className="text-gray-600">
            <strong className="text-blue-600">Technology:</strong> {partners}
          </p>
          <p className="text-gray-600">
            <strong className="text-blue-600">Type:</strong> {type}
          </p>
          <p className="text-gray-600">
            <strong className="text-blue-600">Duration:</strong> {time}
          </p>
          <p className="text-gray-600">
            <strong className="text-blue-600">Description:</strong>{" "}
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Internship;
