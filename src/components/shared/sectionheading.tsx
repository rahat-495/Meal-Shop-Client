type SectionHeadingProps = {
    title: string;
    subtitle?: string;
};

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
    const words = title.trim().split(/\s+/);
    const mid = Math.floor(words.length / 2);

    const firstHalf = words.slice(0, mid);
    const secondHalf = words.slice(mid);

    return (
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-[Ubuntu]">
                <span className="text-emerald-500">{firstHalf.join(" ")}</span>{" "}
                <span className="text-black">{secondHalf.join(" ")}</span>
            </h2>
            {subtitle && (
                <p className="mt-2 text-muted-foreground text-base font-[Ubuntu]">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeading;
