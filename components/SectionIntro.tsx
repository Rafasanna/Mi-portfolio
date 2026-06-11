type SectionIntroProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionIntro({
  eyebrow,
  title,
  text,
  align = "left"
}: SectionIntroProps) {
  return (
    <div className={`section-intro section-intro--${align} reveal`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
