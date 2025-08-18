export default function Services() {
    return (
        <div className="pt-28"> {/* Push content down so it clears floating navbar */}
            <div className="max-w-4xl mx-auto py-20 px-6">
                <h2 className="text-4xl font-heading font-bold mb-8 text-brand-accent">
                    Our Services
                </h2>
                <ul className="space-y-6 text-lg text-brand-text leading-relaxed">
                    <li>
                        <strong className="text-brand-accent">
                            ERP Implementation & Transformation:
                        </strong>{" "}
                        Business process assessment, ERP setup, custom modules.
                    </li>
                    <li>
                        <strong className="text-brand-accent">
                            ERP Optimization & Insights:
                        </strong>{" "}
                        Fix poor setups, automate finance, build dashboards.
                    </li>
                    <li>
                        <strong className="text-brand-accent">
                            Custom Finance Tech:
                        </strong>{" "}
                        Web apps, Excel VBA tools, integrations.
                    </li>
                    <li>
                        <strong className="text-brand-accent">
                            Startup Systems & Support:
                        </strong>{" "}
                        SOPs, dashboards, bookkeeping & compliance.
                    </li>
                </ul>
            </div>
        </div>
    )
}
