export type Occupation = {
  careerId: string;
  careerLabel: string;
  groupId: string;
  groupLabel: string;
  occupationId: string;
  occupationLabel: string;
  specialtyId: string;
  specialtyLabel: string;
};

export const OCCUPATIONS: Occupation[] = [
  // IT・テクノロジー / ソフトウェア・システム開発
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG01", groupLabel: "ソフトウェア・システム開発", occupationId: "OC01", occupationLabel: "Webエンジニア", specialtyId: "SO001", specialtyLabel: "フロントエンドエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG01", groupLabel: "ソフトウェア・システム開発", occupationId: "OC01", occupationLabel: "Webエンジニア", specialtyId: "SO002", specialtyLabel: "バックエンドエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG01", groupLabel: "ソフトウェア・システム開発", occupationId: "OC01", occupationLabel: "Webエンジニア", specialtyId: "SO003", specialtyLabel: "フルスタックエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG01", groupLabel: "ソフトウェア・システム開発", occupationId: "OC02", occupationLabel: "モバイルエンジニア", specialtyId: "SO004", specialtyLabel: "iOSエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG01", groupLabel: "ソフトウェア・システム開発", occupationId: "OC02", occupationLabel: "モバイルエンジニア", specialtyId: "SO005", specialtyLabel: "Androidエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG01", groupLabel: "ソフトウェア・システム開発", occupationId: "OC03", occupationLabel: "システムエンジニア", specialtyId: "SO006", specialtyLabel: "業務システムSE" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG01", groupLabel: "ソフトウェア・システム開発", occupationId: "OC03", occupationLabel: "システムエンジニア", specialtyId: "SO007", specialtyLabel: "組み込みエンジニア" },
  // IT・テクノロジー / インフラ・クラウド
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG02", groupLabel: "インフラ・クラウド", occupationId: "OC04", occupationLabel: "インフラエンジニア", specialtyId: "SO008", specialtyLabel: "サーバーエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG02", groupLabel: "インフラ・クラウド", occupationId: "OC04", occupationLabel: "インフラエンジニア", specialtyId: "SO009", specialtyLabel: "ネットワークエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG02", groupLabel: "インフラ・クラウド", occupationId: "OC05", occupationLabel: "クラウドエンジニア", specialtyId: "SO010", specialtyLabel: "AWSエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG02", groupLabel: "インフラ・クラウド", occupationId: "OC05", occupationLabel: "クラウドエンジニア", specialtyId: "SO011", specialtyLabel: "GCPエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG02", groupLabel: "インフラ・クラウド", occupationId: "OC06", occupationLabel: "SRE・DevOps", specialtyId: "SO012", specialtyLabel: "SREエンジニア" },
  // IT・テクノロジー / データ・AI
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG03", groupLabel: "データ・AI", occupationId: "OC07", occupationLabel: "データエンジニア", specialtyId: "SO013", specialtyLabel: "データエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG03", groupLabel: "データ・AI", occupationId: "OC08", occupationLabel: "データサイエンティスト", specialtyId: "SO014", specialtyLabel: "データサイエンティスト" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG03", groupLabel: "データ・AI", occupationId: "OC09", occupationLabel: "機械学習エンジニア", specialtyId: "SO015", specialtyLabel: "MLエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG03", groupLabel: "データ・AI", occupationId: "OC09", occupationLabel: "機械学習エンジニア", specialtyId: "SO016", specialtyLabel: "AIエンジニア" },
  // IT・テクノロジー / セキュリティ
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG04", groupLabel: "セキュリティ", occupationId: "OC10", occupationLabel: "セキュリティエンジニア", specialtyId: "SO017", specialtyLabel: "セキュリティエンジニア" },
  // IT・テクノロジー / プロダクト・UX
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG05", groupLabel: "プロダクト・UX", occupationId: "OC11", occupationLabel: "プロダクトマネージャー", specialtyId: "SO018", specialtyLabel: "プロダクトマネージャー" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG05", groupLabel: "プロダクト・UX", occupationId: "OC12", occupationLabel: "UIUXデザイナー", specialtyId: "SO019", specialtyLabel: "UIデザイナー" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG05", groupLabel: "プロダクト・UX", occupationId: "OC12", occupationLabel: "UIUXデザイナー", specialtyId: "SO020", specialtyLabel: "UXデザイナー" },
  // 経営・管理
  { careerId: "CA02", careerLabel: "経営・管理", groupId: "OG06", groupLabel: "経営", occupationId: "OC13", occupationLabel: "経営者・役員", specialtyId: "SO021", specialtyLabel: "代表取締役" },
  { careerId: "CA02", careerLabel: "経営・管理", groupId: "OG06", groupLabel: "経営", occupationId: "OC13", occupationLabel: "経営者・役員", specialtyId: "SO022", specialtyLabel: "取締役・執行役員" },
  { careerId: "CA02", careerLabel: "経営・管理", groupId: "OG07", groupLabel: "人事・HR", occupationId: "OC14", occupationLabel: "人事", specialtyId: "SO023", specialtyLabel: "採用担当" },
  { careerId: "CA02", careerLabel: "経営・管理", groupId: "OG07", groupLabel: "人事・HR", occupationId: "OC14", occupationLabel: "人事", specialtyId: "SO024", specialtyLabel: "人事企画" },
  { careerId: "CA02", careerLabel: "経営・管理", groupId: "OG07", groupLabel: "人事・HR", occupationId: "OC14", occupationLabel: "人事", specialtyId: "SO025", specialtyLabel: "労務担当" },
  { careerId: "CA02", careerLabel: "経営・管理", groupId: "OG07", groupLabel: "人事・HR", occupationId: "OC15", occupationLabel: "HRBPパートナー", specialtyId: "SO026", specialtyLabel: "HRBP" },
  { careerId: "CA02", careerLabel: "経営・管理", groupId: "OG08", groupLabel: "財務・経理", occupationId: "OC16", occupationLabel: "経理", specialtyId: "SO027", specialtyLabel: "経理担当" },
  { careerId: "CA02", careerLabel: "経営・管理", groupId: "OG08", groupLabel: "財務・経理", occupationId: "OC17", occupationLabel: "財務", specialtyId: "SO028", specialtyLabel: "財務担当" },
  { careerId: "CA02", careerLabel: "経営・管理", groupId: "OG09", groupLabel: "法務・コンプライアンス", occupationId: "OC18", occupationLabel: "法務", specialtyId: "SO029", specialtyLabel: "法務担当" },
  // 営業・マーケティング
  { careerId: "CA03", careerLabel: "営業・マーケティング", groupId: "OG10", groupLabel: "営業", occupationId: "OC19", occupationLabel: "法人営業", specialtyId: "SO030", specialtyLabel: "法人営業" },
  { careerId: "CA03", careerLabel: "営業・マーケティング", groupId: "OG10", groupLabel: "営業", occupationId: "OC20", occupationLabel: "個人営業", specialtyId: "SO031", specialtyLabel: "個人営業" },
  { careerId: "CA03", careerLabel: "営業・マーケティング", groupId: "OG10", groupLabel: "営業", occupationId: "OC21", occupationLabel: "インサイドセールス", specialtyId: "SO032", specialtyLabel: "インサイドセールス" },
  { careerId: "CA03", careerLabel: "営業・マーケティング", groupId: "OG11", groupLabel: "マーケティング", occupationId: "OC22", occupationLabel: "マーケター", specialtyId: "SO033", specialtyLabel: "デジタルマーケター" },
  { careerId: "CA03", careerLabel: "営業・マーケティング", groupId: "OG11", groupLabel: "マーケティング", occupationId: "OC22", occupationLabel: "マーケター", specialtyId: "SO034", specialtyLabel: "コンテンツマーケター" },
  { careerId: "CA03", careerLabel: "営業・マーケティング", groupId: "OG11", groupLabel: "マーケティング", occupationId: "OC23", occupationLabel: "事業開発", specialtyId: "SO035", specialtyLabel: "事業開発担当" },
  // コンサルティング
  { careerId: "CA04", careerLabel: "コンサルティング", groupId: "OG12", groupLabel: "経営コンサルティング", occupationId: "OC24", occupationLabel: "経営コンサルタント", specialtyId: "SO036", specialtyLabel: "戦略コンサルタント" },
  { careerId: "CA04", careerLabel: "コンサルティング", groupId: "OG12", groupLabel: "経営コンサルティング", occupationId: "OC25", occupationLabel: "ITコンサルタント", specialtyId: "SO037", specialtyLabel: "ITコンサルタント" },
  { careerId: "CA04", careerLabel: "コンサルティング", groupId: "OG13", groupLabel: "HRコンサルティング", occupationId: "OC26", occupationLabel: "HRコンサルタント", specialtyId: "SO038", specialtyLabel: "HRコンサルタント" },
  // 医療・ヘルスケア
  { careerId: "CA05", careerLabel: "医療・ヘルスケア", groupId: "OG14", groupLabel: "医療専門職", occupationId: "OC27", occupationLabel: "医師", specialtyId: "SO039", specialtyLabel: "内科医" },
  { careerId: "CA05", careerLabel: "医療・ヘルスケア", groupId: "OG14", groupLabel: "医療専門職", occupationId: "OC27", occupationLabel: "医師", specialtyId: "SO040", specialtyLabel: "外科医" },
  { careerId: "CA05", careerLabel: "医療・ヘルスケア", groupId: "OG14", groupLabel: "医療専門職", occupationId: "OC28", occupationLabel: "看護師", specialtyId: "SO041", specialtyLabel: "看護師" },
  { careerId: "CA05", careerLabel: "医療・ヘルスケア", groupId: "OG15", groupLabel: "医療事務・管理", occupationId: "OC29", occupationLabel: "医療事務", specialtyId: "SO042", specialtyLabel: "医療事務" },
  // 教育
  { careerId: "CA06", careerLabel: "教育", groupId: "OG16", groupLabel: "教育職", occupationId: "OC30", occupationLabel: "教員", specialtyId: "SO043", specialtyLabel: "小学校教員" },
  { careerId: "CA06", careerLabel: "教育", groupId: "OG16", groupLabel: "教育職", occupationId: "OC30", occupationLabel: "教員", specialtyId: "SO044", specialtyLabel: "中学・高校教員" },
  { careerId: "CA06", careerLabel: "教育", groupId: "OG16", groupLabel: "教育職", occupationId: "OC31", occupationLabel: "研修講師", specialtyId: "SO045", specialtyLabel: "企業研修講師" },
  // 製造・生産
  { careerId: "CA07", careerLabel: "製造・生産", groupId: "OG17", groupLabel: "製造・生産技術", occupationId: "OC32", occupationLabel: "生産技術", specialtyId: "SO046", specialtyLabel: "生産技術エンジニア" },
  { careerId: "CA07", careerLabel: "製造・生産", groupId: "OG17", groupLabel: "製造・生産技術", occupationId: "OC33", occupationLabel: "品質管理", specialtyId: "SO047", specialtyLabel: "品質管理担当" },
  // 金融
  { careerId: "CA08", careerLabel: "金融", groupId: "OG18", groupLabel: "銀行・証券", occupationId: "OC34", occupationLabel: "銀行員", specialtyId: "SO048", specialtyLabel: "リテール営業" },
  { careerId: "CA08", careerLabel: "金融", groupId: "OG18", groupLabel: "銀行・証券", occupationId: "OC35", occupationLabel: "証券アナリスト", specialtyId: "SO049", specialtyLabel: "証券アナリスト" },
  // その他
  { careerId: "CA09", careerLabel: "その他", groupId: "OG19", groupLabel: "その他", occupationId: "OC36", occupationLabel: "その他", specialtyId: "SO050", specialtyLabel: "その他" },
];

export type CareerOption = {
  id: string;
  label: string;
};

export type GroupOption = {
  id: string;
  label: string;
  careerId: string;
};

export type OccupationOption = {
  id: string;
  label: string;
  groupId: string;
};

export type SpecialtyOption = {
  id: string;
  label: string;
  occupationId: string;
};

export function getCareers(): CareerOption[] {
  const seen = new Set<string>();
  return OCCUPATIONS.filter((o) => {
    if (seen.has(o.careerId)) return false;
    seen.add(o.careerId);
    return true;
  }).map((o) => ({ id: o.careerId, label: o.careerLabel }));
}

export function getGroups(careerId: string): GroupOption[] {
  const seen = new Set<string>();
  return OCCUPATIONS.filter((o) => o.careerId === careerId)
    .filter((o) => {
      if (seen.has(o.groupId)) return false;
      seen.add(o.groupId);
      return true;
    })
    .map((o) => ({ id: o.groupId, label: o.groupLabel, careerId: o.careerId }));
}

export function getOccupations(groupId: string): OccupationOption[] {
  const seen = new Set<string>();
  return OCCUPATIONS.filter((o) => o.groupId === groupId)
    .filter((o) => {
      if (seen.has(o.occupationId)) return false;
      seen.add(o.occupationId);
      return true;
    })
    .map((o) => ({ id: o.occupationId, label: o.occupationLabel, groupId: o.groupId }));
}

export function getSpecialties(occupationId: string): SpecialtyOption[] {
  return OCCUPATIONS.filter((o) => o.occupationId === occupationId).map((o) => ({
    id: o.specialtyId,
    label: o.specialtyLabel,
    occupationId: o.occupationId,
  }));
}
