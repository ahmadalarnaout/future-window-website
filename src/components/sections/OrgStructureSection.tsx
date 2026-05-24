import { orgStructureData } from "@/data/sections";

export function OrgStructureSection() {
  return (
    <section className="py-stack-lg px-margin-mobile md:px-margin-desktop relative">
      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 border-l-4 border-primary-container pl-6">
          <h2 className="font-heading text-headline-lg-mobile md:text-headline-lg text-primary mb-4 font-semibold">
            {orgStructureData.heading}
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl">
            {orgStructureData.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {orgStructureData.departments.map((dept) => (
            <div
              key={dept.title}
              className="bg-surface-container-low rounded-lg p-8 border border-outline-variant/30 hover:border-primary-container/50 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span
                  className="material-symbols-outlined text-7xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {dept.icon}
                </span>
              </div>
              <h3 className="font-body text-title-md text-primary mb-4 font-medium">
                {dept.title}
              </h3>
              <p className="font-body text-body-md text-on-surface-variant mb-6">
                {dept.description}
              </p>
              <ul className="space-y-3 font-body text-label-sm text-on-surface">
                {dept.items.map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-primary-container rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
