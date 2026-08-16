interface IconProps {
  paths: string;
  className?: string;
}

/**
 * Renders an inline icon from raw SVG path/shape markup (stored as strings in our
 * data files, mirroring the original prototype's icon set). Safe because the markup
 * is authored in our own data files, not user input.
 */
export default function Icon({ paths, className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: paths }}
    />
  );
}
