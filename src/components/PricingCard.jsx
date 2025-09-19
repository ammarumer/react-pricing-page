function PricingCard({ title, price, features, highlight }) {
    return (
        <div className={`flex flex-col border rounded-xl p-6 shadow-md transition transform hover:scale-105 
      ${highlight ? "border-blue-500 bg-blue-50 shadow-xl" : ""}`}>

            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-3xl font-bold mb-4">${price}<span className="text-base">/mo</span></p>

            <ul className="flex-1 mb-4">
                {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 mb-2">
                        ✅ {feature}
                    </li>
                ))}
            </ul>

            <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Choose Plan
            </button>
        </div>
    );
}

export default PricingCard;
