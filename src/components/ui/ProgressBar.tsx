type ProgressBarProps = {
  current: number;
  total: number;
};

export function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1 text-sm text-text font-body">
        <span>
          {current} / {total}
        </span>
        <span>{pct}%</span>
      </div>
      <div className="w-full bg-border rounded-full h-2.5">
        <div
          className="bg-accent h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={total}
        />
      </div>
    </div>
  );
}
