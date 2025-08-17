export default function Contact() {
    return (
        <div className="max-w-xl mx-auto py-20 px-6">
            <h2 className="text-4xl font-heading font-bold mb-6 text-brand-accent">Get in Touch</h2>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-brand-accent"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-brand-accent"
                />
                <textarea
                    placeholder="Your Message"
                    className="w-full border border-gray-300 p-3 rounded h-32 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-brand-accent hover:bg-brand-accentDark text-white py-3 rounded font-semibold"
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}
