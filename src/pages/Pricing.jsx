import PricingCard from "../components/PricingCard";

function Pricing() {
    const plans = [
        {
            title: "Free",
            price: 0,
            features: ["Basic feature 1", "Basic feature 2", "Basic feature 3"],
        },
        {
            title: "Pro",
            price: 19,
            features: ["All Free plan features", "Advanced feature 1", "Priority support"],
            highlight: true,
        },
        {
            title: "Enterprise",
            price: 49,
            features: ["All Pro features", "Enterprise support", "Custom solutions"],
        },
    ];

    return (
        <section className="p-8">
            <h1 className="text-4xl font-bold text-center mb-8">Choose Your Plan</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {plans.map((plan, idx) => (
                    <PricingCard key={idx} {...plan} />
                ))}
            </div>
        </section>
    );
}

export default Pricing;
