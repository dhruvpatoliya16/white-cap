import { MapPin, ShieldCheck, Truck } from 'lucide-react';

const advantages = [
  {
    icon: MapPin,
    title: 'Strategic Location',
    description:
      'Operating from Ahmedabad provides direct access to Gujarat\'s dense network of chemical manufacturing clusters and well-connected freight routes, enabling faster sourcing and logistics.',
    color: 'brand',
  },
  {
    icon: ShieldCheck,
    title: 'Quality & Compliance Support',
    description:
      'We focus on sourcing materials backed by proper documentation, including Certificates of Analysis (CoA) and GMP certifications, ensuring your formulations meet regulatory standards.',
    color: 'grey',
  },
  {
    icon: Truck,
    title: 'Supply Chain Reliability',
    description:
      'Robust inventory planning assists manufacturing partners with just-in-time delivery and batch consistency, minimising production disruptions and supply-chain risk.',
    color: 'neutral',
  },
];

const colorMap = {
  brand: {
    wrap: 'bg-brand-50 group-hover:bg-brand-100',
    icon: 'text-brand-700',
    line: 'bg-brand-600',
  },
  grey: {
    wrap: 'bg-grey-50 group-hover:bg-grey-100',
    icon: 'text-grey-600',
    line: 'bg-grey-500',
  },
  neutral: {
    wrap: 'bg-neutral-100 group-hover:bg-neutral-200',
    icon: 'text-neutral-700',
    line: 'bg-neutral-500',
  },
};

export default function StrategicAdvantages() {
  return (
    <section className="section-py bg-white" aria-labelledby="advantages-heading">
      <div className="container-xl">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-brand-600 uppercase tracking-[0.15em] mb-3">
            Our Strengths
          </span>
          <h2 id="advantages-heading" className="text-3xl md:text-4xl font-bold text-neutral-900">
            Why White Capsule
          </h2>
          <p className="mt-4 text-neutral-500 text-lg max-w-2xl mx-auto">
            Built on strategic location, quality compliance, and reliable supply chain partnerships.
          </p>
          <div className="mt-5 h-0.5 w-12 bg-brand-600 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map(({ icon: Icon, title, description, color }) => {
            const c = colorMap[color as keyof typeof colorMap];
            return (
              <div key={title} className="group card card-hover flex flex-col">
                <div className={`p-4 rounded-xl w-fit mb-5 transition-colors duration-200 ${c.wrap}`}>
                  <Icon size={28} className={c.icon} aria-hidden="true" />
                </div>
                <div className={`h-0.5 w-8 ${c.line} rounded-full mb-4`} />
                <h3 className="text-lg font-bold text-neutral-900 mb-3">{title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
