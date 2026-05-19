"use client";

import { useState } from "react";
import {
  getCareers,
  getGroups,
  getOccupations,
  getSpecialties,
} from "@/src/data/occupations";

type OccupationSelectorProps = {
  value: { label: string; id: string };
  onChange: (occupation: { label: string; id: string }) => void;
};

export function OccupationSelector({ value, onChange }: OccupationSelectorProps) {
  const [careerId, setCareerId] = useState<string>("");
  const [groupId, setGroupId] = useState<string>("");
  const [occupationId, setOccupationId] = useState<string>("");
  const [freeText, setFreeText] = useState<string>("");
  const [isFreeText, setIsFreeText] = useState(false);

  const careers = getCareers();
  const groups = careerId ? getGroups(careerId) : [];
  const occupations = groupId ? getOccupations(groupId) : [];
  const specialties = occupationId ? getSpecialties(occupationId) : [];

  const handleCareer = (id: string) => {
    if (id === "none") {
      setIsFreeText(true);
      setCareerId("none");
      setGroupId("");
      setOccupationId("");
      onChange({ label: "", id: "" });
      return;
    }
    setIsFreeText(false);
    setCareerId(id);
    setGroupId("");
    setOccupationId("");
    onChange({ label: "", id: "" });
  };

  const handleGroup = (id: string) => {
    if (id === "none") {
      setIsFreeText(true);
      setGroupId("none");
      setOccupationId("");
      onChange({ label: "", id: "" });
      return;
    }
    setGroupId(id);
    setOccupationId("");
    onChange({ label: "", id: "" });
  };

  const handleOccupation = (id: string) => {
    if (id === "none") {
      setIsFreeText(true);
      setOccupationId("none");
      onChange({ label: "", id: "" });
      return;
    }
    setOccupationId(id);
    onChange({ label: "", id: "" });
  };

  const handleSpecialty = (id: string) => {
    if (id === "none") {
      setIsFreeText(true);
      onChange({ label: "", id: "" });
      return;
    }
    const specialty = getSpecialties(occupationId).find((s) => s.id === id);
    if (specialty) {
      setIsFreeText(false);
      onChange({ label: specialty.label, id: specialty.id });
    }
  };

  const handleFreeText = (text: string) => {
    setFreeText(text);
    onChange({ label: text, id: "FREE" });
  };

  const selectClass =
    "w-full border-2 border-border rounded-lg px-3 py-2 text-text font-body text-sm focus:outline-none focus:border-accent bg-base";

  return (
    <div className="space-y-3">
      <div>
        <label className="block text-sm font-body font-medium text-main mb-1">
          Step 1：キャリア領域
        </label>
        <select
          value={careerId}
          onChange={(e) => handleCareer(e.target.value)}
          className={selectClass}
        >
          <option value="">選択してください</option>
          {careers.map((c) => (
            <option key={c.id} value={c.id}>
              {c.label}
            </option>
          ))}
          <option value="none">該当するものがない</option>
        </select>
      </div>

      {careerId && careerId !== "none" && (
        <div>
          <label className="block text-sm font-body font-medium text-main mb-1">
            Step 2：職種グループ
          </label>
          <select
            value={groupId}
            onChange={(e) => handleGroup(e.target.value)}
            className={selectClass}
          >
            <option value="">選択してください</option>
            {groups.map((g) => (
              <option key={g.id} value={g.id}>
                {g.label}
              </option>
            ))}
            <option value="none">該当するものがない</option>
          </select>
        </div>
      )}

      {groupId && groupId !== "none" && (
        <div>
          <label className="block text-sm font-body font-medium text-main mb-1">
            Step 3：職種
          </label>
          <select
            value={occupationId}
            onChange={(e) => handleOccupation(e.target.value)}
            className={selectClass}
          >
            <option value="">選択してください</option>
            {occupations.map((o) => (
              <option key={o.id} value={o.id}>
                {o.label}
              </option>
            ))}
            <option value="none">該当するものがない</option>
          </select>
        </div>
      )}

      {occupationId && occupationId !== "none" && specialties.length > 0 && (
        <div>
          <label className="block text-sm font-body font-medium text-main mb-1">
            Step 4：専門職種（任意）
          </label>
          <select
            value={value.id}
            onChange={(e) => handleSpecialty(e.target.value)}
            className={selectClass}
          >
            <option value="">選択してください</option>
            {specialties.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
            <option value="none">該当するものがない</option>
          </select>
        </div>
      )}

      {isFreeText && (
        <div>
          <label className="block text-sm font-body font-medium text-main mb-1">
            職種を入力してください
          </label>
          <input
            type="text"
            value={freeText}
            onChange={(e) => handleFreeText(e.target.value)}
            placeholder="例：HRコンサルタント"
            className={selectClass}
          />
        </div>
      )}
    </div>
  );
}
