const Card = ({ title, value }) => {
    return (
        <div className="bg-white p-6 rounded shadow-lg">
            <h3 className="text-secondary mb-2">{title}</h3>
            <p className="text-2xl font-bold">{value}</p>
        </div>
    );
};

export default Card;
