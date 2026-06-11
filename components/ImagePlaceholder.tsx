type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

export function ImagePlaceholder({ label, className = "" }: ImagePlaceholderProps) {
  return (
    <div className={`image-placeholder ${className}`.trim()} role="img" aria-label={label}>
      <div>
        <span>{label}</span>
        <small>Placeholder editable</small>
      </div>
    </div>
  );
}
