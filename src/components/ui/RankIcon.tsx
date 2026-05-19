import Image from "next/image";
import type { RankId } from "@/src/types/rank";

type RankIconProps = {
  rankId: RankId;
  size?: number;
  className?: string;
};

const RANK_ICON_PATHS: Record<RankId, string> = {
  grandmaster: "/ranks/lv5_grandmaster.svg",
  master: "/ranks/lv4_master.svg",
  path: "/ranks/lv3_path.svg",
  step: "/ranks/lv2_step.svg",
  egg: "/ranks/lv1_egg.svg",
};

export function RankIcon({ rankId, size = 120, className }: RankIconProps) {
  return (
    <Image
      src={RANK_ICON_PATHS[rankId]}
      alt={`段位アイコン: ${rankId}`}
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}
