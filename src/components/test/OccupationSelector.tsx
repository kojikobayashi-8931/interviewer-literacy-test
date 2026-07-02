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

export function OccupationSelector({ value: _value, onChange }: OccupationSelectorProps) {
  const [careerId, setCareerId] = useState<string>("");
  const [groupId, setGroupId] = useState<string>("");
  const [occupationId, setOccupationId] = useState<string>("");
  const [specialtyId, setSpecialtyId] = useState<string>("");
  const [freeText, setFreeText] = useState<string>("");
  const [isFreeText, setIsFreeText] = useState(false);

  const careers = getCareers();
  const groups = careerId ? getGroups(careerId) : [];
  const occupations = groupId ? getOccupations(groupId) : [];
  const specialties = occupationId && groupId ? getSpecialties(occupationId, groupId) : [];

  const handleCareer = (id: string) => {
    if (id === "none") {
      setIsFreeText(true);
      setCareerId("none");
      setGroupId("");
      setOccupationId("");
      setSpecialtyId("");
      onChange({ label: "", id: "" });
      return;
    }
    setIsFreeText(false);
    setCareerId(id);
    setGroupId("");
    setOccupationId("");
    setSpecialtyId("");
    onChange({ label: "", id: "" });
  };

  const handleGroup = (id: string) => {
    if (id === "none") {
      setIsFreeText(true);
      setGroupId("none");
      setOccupationId("");
      setSpecialtyId("");
      onChange({ label: "", id: "" });
      return;
    }
    setGroupId(id);
    setOccupationId("");
    setSpecialtyId("");
    onChange({ label: "", id: "" });
  };

  const handleOccupation = (id: string) => {
    if (id === "none") {
      setIsFreeText(true);
      setOccupationId("none");
      setSpecialtyId("");
      onChange({ label: "", id: "" });
      return;
    }
    const occ = occupations.find((o) => o.id === id);
    setOccupationId(id);
    setSpecialtyId("");
    onChange({ label: occ?.label ?? "", id });
  };

  const handleSpecialty = (id: string) => {
    if (id === "none") {
      setIsFreeText(true);
      setSpecialtyId("");
      onChange({ label: "", id: "" });
      return;
    }
    const specialty = specialties.find((s) => s.id === id);
    if (specialty) {
      setIsFreeText(false);
      setSpecialtyId(id);
      onChange({ label: specialty.label, id: specialty.id });
    }
  };

  const handleFreeText = (text: string) => {
    setFreeText(text);
    onChange({ label: text, id: "FREE" });
  };

  const selectClass =
    "w-full border-2 border-border rounded-lg px-3 py-2 text-text font-body text-base focus:outline-none focus:border-accent bg-base";

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
            value={specialtyId}
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
