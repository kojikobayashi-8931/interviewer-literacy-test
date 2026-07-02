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
  // CA01 IT・テクノロジー / OG01 ソフトウェア・システム開発
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG01", groupLabel: "ソフトウェア・システム開発", occupationId: "OC01", occupationLabel: "Webエンジニア", specialtyId: "SO001", specialtyLabel: "フロントエンドエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG01", groupLabel: "ソフトウェア・システム開発", occupationId: "OC01", occupationLabel: "Webエンジニア", specialtyId: "SO002", specialtyLabel: "バックエンドエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG01", groupLabel: "ソフトウェア・システム開発", occupationId: "OC01", occupationLabel: "Webエンジニア", specialtyId: "SO003", specialtyLabel: "フルスタックエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG01", groupLabel: "ソフトウェア・システム開発", occupationId: "OC02", occupationLabel: "モバイルエンジニア", specialtyId: "SO004", specialtyLabel: "iOSエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG01", groupLabel: "ソフトウェア・システム開発", occupationId: "OC02", occupationLabel: "モバイルエンジニア", specialtyId: "SO005", specialtyLabel: "Androidエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG01", groupLabel: "ソフトウェア・システム開発", occupationId: "OC02", occupationLabel: "モバイルエンジニア", specialtyId: "SO006", specialtyLabel: "クロスプラットフォームエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG01", groupLabel: "ソフトウェア・システム開発", occupationId: "OC03", occupationLabel: "インフラ・クラウドエンジニア", specialtyId: "SO007", specialtyLabel: "インフラエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG01", groupLabel: "ソフトウェア・システム開発", occupationId: "OC03", occupationLabel: "インフラ・クラウドエンジニア", specialtyId: "SO008", specialtyLabel: "クラウドエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG01", groupLabel: "ソフトウェア・システム開発", occupationId: "OC03", occupationLabel: "インフラ・クラウドエンジニア", specialtyId: "SO009", specialtyLabel: "SRE/DevOpsエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG01", groupLabel: "ソフトウェア・システム開発", occupationId: "OC04", occupationLabel: "QAエンジニア", specialtyId: "SO010", specialtyLabel: "テストエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG01", groupLabel: "ソフトウェア・システム開発", occupationId: "OC04", occupationLabel: "QAエンジニア", specialtyId: "SO011", specialtyLabel: "テスト自動化エンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG01", groupLabel: "ソフトウェア・システム開発", occupationId: "OC03", occupationLabel: "インフラ・クラウドエンジニア", specialtyId: "SO098", specialtyLabel: "通信・ネットワークインフラエンジニア" },
  // CA01 / OG02 データ・AI
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG02", groupLabel: "データ・AI", occupationId: "OC05", occupationLabel: "データサイエンティスト", specialtyId: "SO012", specialtyLabel: "機械学習エンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG02", groupLabel: "データ・AI", occupationId: "OC05", occupationLabel: "データサイエンティスト", specialtyId: "SO013", specialtyLabel: "データアナリスト" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG02", groupLabel: "データ・AI", occupationId: "OC05", occupationLabel: "データサイエンティスト", specialtyId: "SO014", specialtyLabel: "統計モデリング" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG02", groupLabel: "データ・AI", occupationId: "OC06", occupationLabel: "データエンジニア", specialtyId: "SO015", specialtyLabel: "ETLエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG02", groupLabel: "データ・AI", occupationId: "OC06", occupationLabel: "データエンジニア", specialtyId: "SO016", specialtyLabel: "データアーキテクト" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG02", groupLabel: "データ・AI", occupationId: "OC07", occupationLabel: "AIエンジニア", specialtyId: "SO017", specialtyLabel: "NLPエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG02", groupLabel: "データ・AI", occupationId: "OC07", occupationLabel: "AIエンジニア", specialtyId: "SO018", specialtyLabel: "コンピュータビジョンエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG02", groupLabel: "データ・AI", occupationId: "OC07", occupationLabel: "AIエンジニア", specialtyId: "SO019", specialtyLabel: "LLM/生成AIエンジニア" },
  // CA01 / OG03 ITマネジメント・プロダクト
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG03", groupLabel: "ITマネジメント・プロダクト", occupationId: "OC08", occupationLabel: "プロダクトマネージャー", specialtyId: "SO020", specialtyLabel: "プロダクトマネージャー（BtoB）" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG03", groupLabel: "ITマネジメント・プロダクト", occupationId: "OC08", occupationLabel: "プロダクトマネージャー", specialtyId: "SO021", specialtyLabel: "プロダクトマネージャー（BtoC）" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG03", groupLabel: "ITマネジメント・プロダクト", occupationId: "OC09", occupationLabel: "プロジェクトマネージャー（IT）", specialtyId: "SO022", specialtyLabel: "ITプロジェクトマネージャー" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG03", groupLabel: "ITマネジメント・プロダクト", occupationId: "OC09", occupationLabel: "プロジェクトマネージャー（IT）", specialtyId: "SO023", specialtyLabel: "スクラムマスター" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG03", groupLabel: "ITマネジメント・プロダクト", occupationId: "OC10", occupationLabel: "UX/UIデザイナー", specialtyId: "SO024", specialtyLabel: "UXデザイナー" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG03", groupLabel: "ITマネジメント・プロダクト", occupationId: "OC10", occupationLabel: "UX/UIデザイナー", specialtyId: "SO025", specialtyLabel: "UIデザイナー" },
  // CA01 / OG04 ITセキュリティ・運用
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG04", groupLabel: "ITセキュリティ・運用", occupationId: "OC11", occupationLabel: "セキュリティエンジニア", specialtyId: "SO026", specialtyLabel: "セキュリティアナリスト" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG04", groupLabel: "ITセキュリティ・運用", occupationId: "OC11", occupationLabel: "セキュリティエンジニア", specialtyId: "SO027", specialtyLabel: "ペネトレーションテスター" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG04", groupLabel: "ITセキュリティ・運用", occupationId: "OC12", occupationLabel: "IT運用・サポート", specialtyId: "SO028", specialtyLabel: "システム管理者" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG04", groupLabel: "ITセキュリティ・運用", occupationId: "OC12", occupationLabel: "IT運用・サポート", specialtyId: "SO029", specialtyLabel: "ネットワークエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG04", groupLabel: "ITセキュリティ・運用", occupationId: "OC13", occupationLabel: "テクニカルサポート・通信インフラ", specialtyId: "SO097", specialtyLabel: "テクニカルサポートエンジニア" },
  // CA01 / OG05 カスタマーサクセス・ソリューションアーキテクト
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG05", groupLabel: "カスタマーサクセス・ソリューションアーキテクト", occupationId: "OC91", occupationLabel: "カスタマーサクセス・ソリューションアーキテクト", specialtyId: "SO101", specialtyLabel: "カスタマーサクセス" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG05", groupLabel: "カスタマーサクセス・ソリューションアーキテクト", occupationId: "OC91", occupationLabel: "カスタマーサクセス・ソリューションアーキテクト", specialtyId: "SO102", specialtyLabel: "ITプリセールス・ソリューションアーキテクト" },
  // CA01 / OG48 IT・SaaS営業
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG48", groupLabel: "IT・SaaS営業", occupationId: "OC88", occupationLabel: "法人営業（IT・SaaS）", specialtyId: "SO030", specialtyLabel: "フィールドセールス（IT・SaaS）" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG48", groupLabel: "IT・SaaS営業", occupationId: "OC88", occupationLabel: "法人営業（IT・SaaS）", specialtyId: "SO031", specialtyLabel: "インサイドセールス（IT・SaaS）" },
  // CA02 コンサルティング・専門サービス / OG06 コンサルティング
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG06", groupLabel: "コンサルティング", occupationId: "OC21", occupationLabel: "経営・戦略コンサルタント", specialtyId: "SO058", specialtyLabel: "経営戦略コンサルタント" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG06", groupLabel: "コンサルティング", occupationId: "OC21", occupationLabel: "経営・戦略コンサルタント", specialtyId: "SO059", specialtyLabel: "事業戦略コンサルタント" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG06", groupLabel: "コンサルティング", occupationId: "OC21", occupationLabel: "経営・戦略コンサルタント", specialtyId: "SO060", specialtyLabel: "M&Aアドバイザー" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG06", groupLabel: "コンサルティング", occupationId: "OC22", occupationLabel: "ITコンサルタント", specialtyId: "SO061", specialtyLabel: "DXコンサルタント" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG06", groupLabel: "コンサルティング", occupationId: "OC22", occupationLabel: "ITコンサルタント", specialtyId: "SO062", specialtyLabel: "ERPコンサルタント" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG06", groupLabel: "コンサルティング", occupationId: "OC22", occupationLabel: "ITコンサルタント", specialtyId: "SO063", specialtyLabel: "システムアーキテクト" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG06", groupLabel: "コンサルティング", occupationId: "OC23", occupationLabel: "業務・組織コンサルタント", specialtyId: "SO064", specialtyLabel: "BPRコンサルタント" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG06", groupLabel: "コンサルティング", occupationId: "OC23", occupationLabel: "業務・組織コンサルタント", specialtyId: "SO065", specialtyLabel: "SCMコンサルタント" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG06", groupLabel: "コンサルティング", occupationId: "OC23", occupationLabel: "業務・組織コンサルタント", specialtyId: "SO066", specialtyLabel: "人事・組織コンサルタント" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG06", groupLabel: "コンサルティング", occupationId: "OC92", occupationLabel: "財務・会計コンサルタント", specialtyId: "SO103", specialtyLabel: "財務DDアドバイザー（FAS）" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG06", groupLabel: "コンサルティング", occupationId: "OC92", occupationLabel: "財務・会計コンサルタント", specialtyId: "SO104", specialtyLabel: "会計監査・内部統制コンサルタント" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG06", groupLabel: "コンサルティング", occupationId: "OC93", occupationLabel: "リスク・サステナビリティコンサルタント", specialtyId: "SO105", specialtyLabel: "ESG・サステナビリティコンサルタント" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG06", groupLabel: "コンサルティング", occupationId: "OC93", occupationLabel: "リスク・サステナビリティコンサルタント", specialtyId: "SO106", specialtyLabel: "リスクマネジメントコンサルタント" },
  // CA02 / OG07 士業・専門事務所
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG07", groupLabel: "士業・専門事務所", occupationId: "OC76", occupationLabel: "士業", specialtyId: "SO208", specialtyLabel: "会計士" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG07", groupLabel: "士業・専門事務所", occupationId: "OC76", occupationLabel: "士業", specialtyId: "SO209", specialtyLabel: "弁護士" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG07", groupLabel: "士業・専門事務所", occupationId: "OC76", occupationLabel: "士業", specialtyId: "SO210", specialtyLabel: "弁理士・特許技術者" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG07", groupLabel: "士業・専門事務所", occupationId: "OC76", occupationLabel: "士業", specialtyId: "SO211", specialtyLabel: "司法書士" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG07", groupLabel: "士業・専門事務所", occupationId: "OC76", occupationLabel: "士業", specialtyId: "SO212", specialtyLabel: "行政書士" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG07", groupLabel: "士業・専門事務所", occupationId: "OC76", occupationLabel: "士業", specialtyId: "SO213", specialtyLabel: "社会保険労務士" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG07", groupLabel: "士業・専門事務所", occupationId: "OC76", occupationLabel: "士業", specialtyId: "SO214", specialtyLabel: "税理士" },
  // CA03 金融・保険 / OG08 銀行・証券
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG08", groupLabel: "銀行・証券", occupationId: "OC24", occupationLabel: "銀行業務", specialtyId: "SO067", specialtyLabel: "リテールバンキング" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG08", groupLabel: "銀行・証券", occupationId: "OC24", occupationLabel: "銀行業務", specialtyId: "SO068", specialtyLabel: "コーポレートバンカー" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG08", groupLabel: "銀行・証券", occupationId: "OC24", occupationLabel: "銀行業務", specialtyId: "SO069", specialtyLabel: "融資・審査" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG08", groupLabel: "銀行・証券", occupationId: "OC25", occupationLabel: "証券・投資", specialtyId: "SO070", specialtyLabel: "株式トレーダー" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG08", groupLabel: "銀行・証券", occupationId: "OC25", occupationLabel: "証券・投資", specialtyId: "SO071", specialtyLabel: "投資アナリスト" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG08", groupLabel: "銀行・証券", occupationId: "OC25", occupationLabel: "証券・投資", specialtyId: "SO072", specialtyLabel: "ファンドマネージャー" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG08", groupLabel: "銀行・証券", occupationId: "OC26", occupationLabel: "リース・クレジット", specialtyId: "SO107", specialtyLabel: "リース営業担当" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG08", groupLabel: "銀行・証券", occupationId: "OC26", occupationLabel: "リース・クレジット", specialtyId: "SO108", specialtyLabel: "クレジット審査担当" },
  // CA03 / OG09 保険
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG09", groupLabel: "保険", occupationId: "OC27", occupationLabel: "損害保険", specialtyId: "SO073", specialtyLabel: "損害査定員" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG09", groupLabel: "保険", occupationId: "OC27", occupationLabel: "損害保険", specialtyId: "SO074", specialtyLabel: "アンダーライター（損保）" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG09", groupLabel: "保険", occupationId: "OC28", occupationLabel: "生命保険", specialtyId: "SO075", specialtyLabel: "生命保険営業" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG09", groupLabel: "保険", occupationId: "OC28", occupationLabel: "生命保険", specialtyId: "SO076", specialtyLabel: "アクチュアリー" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG09", groupLabel: "保険", occupationId: "OC29", occupationLabel: "損保・生保事務", specialtyId: "SO109", specialtyLabel: "保険事務担当" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG09", groupLabel: "保険", occupationId: "OC29", occupationLabel: "損保・生保事務", specialtyId: "SO110", specialtyLabel: "損害調査担当" },
  // CA03 / OG10 フィンテック・資産運用
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG10", groupLabel: "フィンテック・資産運用", occupationId: "OC30", occupationLabel: "資産運用・PEファンド", specialtyId: "SO111", specialtyLabel: "プライベートエクイティアナリスト" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG10", groupLabel: "フィンテック・資産運用", occupationId: "OC30", occupationLabel: "資産運用・PEファンド", specialtyId: "SO112", specialtyLabel: "フィンテックプロダクトマネージャー" },
  // CA03 / OG49 金融営業
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG49", groupLabel: "金融営業", occupationId: "OC90", occupationLabel: "個人向け営業", specialtyId: "SO037", specialtyLabel: "金融個人営業（FP）" },
  // CA04 医療・福祉・介護 / OG11 医師・薬剤師
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG11", groupLabel: "医師・薬剤師", occupationId: "OC94", occupationLabel: "内科系医師", specialtyId: "SO077", specialtyLabel: "一般内科医" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG11", groupLabel: "医師・薬剤師", occupationId: "OC94", occupationLabel: "内科系医師", specialtyId: "SO078", specialtyLabel: "循環器内科医" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG11", groupLabel: "医師・薬剤師", occupationId: "OC29", occupationLabel: "外科系医師", specialtyId: "SO079", specialtyLabel: "一般外科医" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG11", groupLabel: "医師・薬剤師", occupationId: "OC29", occupationLabel: "外科系医師", specialtyId: "SO080", specialtyLabel: "整形外科医" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG11", groupLabel: "医師・薬剤師", occupationId: "OC30", occupationLabel: "薬剤師", specialtyId: "SO081", specialtyLabel: "病院薬剤師" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG11", groupLabel: "医師・薬剤師", occupationId: "OC30", occupationLabel: "薬剤師", specialtyId: "SO082", specialtyLabel: "調剤薬局薬剤師" },
  // CA04 / OG12 看護・介護
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG12", groupLabel: "看護・介護", occupationId: "OC31", occupationLabel: "病院看護師", specialtyId: "SO083", specialtyLabel: "病棟看護師" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG12", groupLabel: "看護・介護", occupationId: "OC31", occupationLabel: "病院看護師", specialtyId: "SO084", specialtyLabel: "ICU看護師" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG12", groupLabel: "看護・介護", occupationId: "OC32", occupationLabel: "地域・在宅看護師", specialtyId: "SO085", specialtyLabel: "訪問看護師" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG12", groupLabel: "看護・介護", occupationId: "OC32", occupationLabel: "地域・在宅看護師", specialtyId: "SO086", specialtyLabel: "保健師" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG12", groupLabel: "看護・介護", occupationId: "OC97", occupationLabel: "介護福祉士", specialtyId: "SO087", specialtyLabel: "施設介護士" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG12", groupLabel: "看護・介護", occupationId: "OC97", occupationLabel: "介護福祉士", specialtyId: "SO088", specialtyLabel: "ケアマネージャー" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG12", groupLabel: "看護・介護", occupationId: "OC95", occupationLabel: "リハビリテーション", specialtyId: "SO113", specialtyLabel: "理学療法士（PT）" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG12", groupLabel: "看護・介護", occupationId: "OC95", occupationLabel: "リハビリテーション", specialtyId: "SO114", specialtyLabel: "作業療法士（OT）" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG12", groupLabel: "看護・介護", occupationId: "OC95", occupationLabel: "リハビリテーション", specialtyId: "SO115", specialtyLabel: "言語聴覚士（ST）" },
  // CA04 / OG13 医療技術職・コメディカル
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG13", groupLabel: "医療技術職・コメディカル", occupationId: "OC96", occupationLabel: "コメディカル", specialtyId: "SO116", specialtyLabel: "臨床検査技師" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG13", groupLabel: "医療技術職・コメディカル", occupationId: "OC96", occupationLabel: "コメディカル", specialtyId: "SO117", specialtyLabel: "診療放射線技師" },
  // CA04 / OG14 製薬・医療機器・ヘルスケア
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG14", groupLabel: "製薬・医療機器・ヘルスケア", occupationId: "OC31", occupationLabel: "MR・医療機器営業・メディカルアフェアーズ", specialtyId: "SO118", specialtyLabel: "MR（医薬品営業）" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG14", groupLabel: "製薬・医療機器・ヘルスケア", occupationId: "OC31", occupationLabel: "MR・医療機器営業・メディカルアフェアーズ", specialtyId: "SO119", specialtyLabel: "メディカルアフェアーズ" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG14", groupLabel: "製薬・医療機器・ヘルスケア", occupationId: "OC31", occupationLabel: "MR・医療機器営業・メディカルアフェアーズ", specialtyId: "SO120", specialtyLabel: "CRA" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG14", groupLabel: "製薬・医療機器・ヘルスケア", occupationId: "OC31", occupationLabel: "MR・医療機器営業・メディカルアフェアーズ", specialtyId: "SO121", specialtyLabel: "CRC" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG14", groupLabel: "製薬・医療機器・ヘルスケア", occupationId: "OC32", occupationLabel: "医療経営・クリニック管理", specialtyId: "SO206", specialtyLabel: "医療事務" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG14", groupLabel: "製薬・医療機器・ヘルスケア", occupationId: "OC32", occupationLabel: "医療経営・クリニック管理", specialtyId: "SO207", specialtyLabel: "クリニック運営管理" },
  // CA04 / OG50 医療・ヘルスケア営業
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG50", groupLabel: "医療・ヘルスケア営業", occupationId: "OC89", occupationLabel: "MR・医療機器営業・メディカルアフェアーズ", specialtyId: "SO033", specialtyLabel: "医療機器営業" },
  // CA05 メーカー・製造業 / OG15 製品開発・設計
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG15", groupLabel: "製品開発・設計", occupationId: "OC33", occupationLabel: "化学・素材開発エンジニア", specialtyId: "SO122", specialtyLabel: "化学材料・素材研究開発エンジニア" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG15", groupLabel: "製品開発・設計", occupationId: "OC33", occupationLabel: "化学・素材開発エンジニア", specialtyId: "SO123", specialtyLabel: "食品・医薬品製造技術職" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG15", groupLabel: "製品開発・設計", occupationId: "OC34", occupationLabel: "機械設計エンジニア", specialtyId: "SO089", specialtyLabel: "機械設計" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG15", groupLabel: "製品開発・設計", occupationId: "OC34", occupationLabel: "機械設計エンジニア", specialtyId: "SO090", specialtyLabel: "CAD/CAE設計エンジニア" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG15", groupLabel: "製品開発・設計", occupationId: "OC35", occupationLabel: "電気・電子設計エンジニア", specialtyId: "SO091", specialtyLabel: "回路設計エンジニア" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG15", groupLabel: "製品開発・設計", occupationId: "OC35", occupationLabel: "電気・電子設計エンジニア", specialtyId: "SO092", specialtyLabel: "組込みソフトウェアエンジニア" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG15", groupLabel: "製品開発・設計", occupationId: "OC80", occupationLabel: "回路設計・電気設計", specialtyId: "SO218", specialtyLabel: "回路設計" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG15", groupLabel: "製品開発・設計", occupationId: "OC80", occupationLabel: "回路設計・電気設計", specialtyId: "SO219", specialtyLabel: "電気設計・シーケンス制御" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG15", groupLabel: "製品開発・設計", occupationId: "OC81", occupationLabel: "評価・実装・デバイス開発", specialtyId: "SO220", specialtyLabel: "評価・実装" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG15", groupLabel: "製品開発・設計", occupationId: "OC81", occupationLabel: "評価・実装・デバイス開発", specialtyId: "SO221", specialtyLabel: "デバイス開発" },
  // CA05 / OG16 生産・品質管理
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG16", groupLabel: "生産・品質管理", occupationId: "OC36", occupationLabel: "生産管理・生産技術", specialtyId: "SO093", specialtyLabel: "生産計画" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG16", groupLabel: "生産・品質管理", occupationId: "OC36", occupationLabel: "生産管理・生産技術", specialtyId: "SO094", specialtyLabel: "工程管理" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG16", groupLabel: "生産・品質管理", occupationId: "OC36", occupationLabel: "生産技術エンジニア", specialtyId: "SO126", specialtyLabel: "生産技術・製造プロセスエンジニア" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG16", groupLabel: "生産・品質管理", occupationId: "OC37", occupationLabel: "品質管理・品質保証", specialtyId: "SO095", specialtyLabel: "品質管理" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG16", groupLabel: "生産・品質管理", occupationId: "OC37", occupationLabel: "品質管理・品質保証", specialtyId: "SO096", specialtyLabel: "品質保証エンジニア" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG16", groupLabel: "生産・品質管理", occupationId: "OC38", occupationLabel: "購買・調達エンジニア", specialtyId: "SO124", specialtyLabel: "購買・調達エンジニア（サプライヤー管理）" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG16", groupLabel: "生産・品質管理", occupationId: "OC39", occupationLabel: "設備保全エンジニア", specialtyId: "SO125", specialtyLabel: "設備保全・メンテナンスエンジニア" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG16", groupLabel: "生産・品質管理", occupationId: "OC81", occupationLabel: "評価・実装・デバイス開発", specialtyId: "SO222", specialtyLabel: "プロセスエンジニア" },
  // CA05 / OG17 研究開発・先行技術
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG17", groupLabel: "研究開発・先行技術", occupationId: "OC77", occupationLabel: "基礎研究・先行開発・要素技術開発", specialtyId: "SO215", specialtyLabel: "基礎研究・先行開発・要素技術開発" },
  // CA05 / OG18 テクニカルセールス・フィールドエンジニア
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG18", groupLabel: "テクニカルセールス・フィールドエンジニア", occupationId: "OC78", occupationLabel: "セールスエンジニア・FAE・アプリケーションエンジニア", specialtyId: "SO216", specialtyLabel: "セールスエンジニア・FAE・アプリケーションエンジニア" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG18", groupLabel: "テクニカルセールス・フィールドエンジニア", occupationId: "OC79", occupationLabel: "サービスエンジニア・サポートエンジニア", specialtyId: "SO217", specialtyLabel: "サービスエンジニア・サポートエンジニア" },
  // CA05 / OG51 メーカー営業
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG51", groupLabel: "メーカー営業", occupationId: "OC88", occupationLabel: "法人営業", specialtyId: "SO032", specialtyLabel: "メーカー技術営業" },
  // CA06 人材・教育 / OG19 人材サービス
  { careerId: "CA06", careerLabel: "人材・教育", groupId: "OG19", groupLabel: "人材サービス", occupationId: "OC98", occupationLabel: "キャリアアドバイザー・人材コンサルタント", specialtyId: "SO127", specialtyLabel: "転職エージェント（CA：求職者支援）" },
  { careerId: "CA06", careerLabel: "人材・教育", groupId: "OG19", groupLabel: "人材サービス", occupationId: "OC98", occupationLabel: "キャリアアドバイザー・人材コンサルタント", specialtyId: "SO128", specialtyLabel: "リクルーティングアドバイザー（RA：企業開拓）" },
  { careerId: "CA06", careerLabel: "人材・教育", groupId: "OG19", groupLabel: "人材サービス", occupationId: "OC98", occupationLabel: "キャリアアドバイザー・人材コンサルタント", specialtyId: "SO129", specialtyLabel: "人材コーディネーター（派遣スタッフ管理）" },
  { careerId: "CA06", careerLabel: "人材・教育", groupId: "OG19", groupLabel: "人材サービス", occupationId: "OC38", occupationLabel: "採用支援・RPO", specialtyId: "SO130", specialtyLabel: "採用代行・RPOコンサルタント" },
  // CA06 / OG20 教育・研修
  { careerId: "CA06", careerLabel: "人材・教育", groupId: "OG20", groupLabel: "教育・研修", occupationId: "OC39", occupationLabel: "学校・塾講師", specialtyId: "SO131", specialtyLabel: "学習塾講師・個別指導講師" },
  { careerId: "CA06", careerLabel: "人材・教育", groupId: "OG20", groupLabel: "教育・研修", occupationId: "OC39", occupationLabel: "学校・塾講師", specialtyId: "SO132", specialtyLabel: "語学スクール講師" },
  { careerId: "CA06", careerLabel: "人材・教育", groupId: "OG20", groupLabel: "教育・研修", occupationId: "OC39", occupationLabel: "学校・塾講師", specialtyId: "SO248", specialtyLabel: "学校教職員" },
  { careerId: "CA06", careerLabel: "人材・教育", groupId: "OG20", groupLabel: "教育・研修", occupationId: "OC40", occupationLabel: "企業内教育・インストラクター", specialtyId: "SO133", specialtyLabel: "法人研修講師・研修ファシリテーター" },
  { careerId: "CA06", careerLabel: "人材・教育", groupId: "OG20", groupLabel: "教育・研修", occupationId: "OC40", occupationLabel: "企業内教育・インストラクター", specialtyId: "SO134", specialtyLabel: "eラーニング・コンテンツ開発担当" },
  { careerId: "CA06", careerLabel: "人材・教育", groupId: "OG20", groupLabel: "教育・研修", occupationId: "OC41", occupationLabel: "保育・教員", specialtyId: "SO135", specialtyLabel: "保育士・幼稚園教諭" },
  // CA07 広告・メディア・クリエイティブ / OG21 広告・PR
  { careerId: "CA07", careerLabel: "広告・メディア・クリエイティブ", groupId: "OG21", groupLabel: "広告・PR", occupationId: "OC42", occupationLabel: "広告プランナー・ディレクター", specialtyId: "SO136", specialtyLabel: "総合広告代理店プランナー" },
  { careerId: "CA07", careerLabel: "広告・メディア・クリエイティブ", groupId: "OG21", groupLabel: "広告・PR", occupationId: "OC42", occupationLabel: "広告プランナー・ディレクター", specialtyId: "SO137", specialtyLabel: "デジタル広告ディレクター" },
  { careerId: "CA07", careerLabel: "広告・メディア・クリエイティブ", groupId: "OG21", groupLabel: "広告・PR", occupationId: "OC43", occupationLabel: "PRプランナー・広報", specialtyId: "SO138", specialtyLabel: "PRコンサルタント" },
  { careerId: "CA07", careerLabel: "広告・メディア・クリエイティブ", groupId: "OG21", groupLabel: "広告・PR", occupationId: "OC43", occupationLabel: "PRプランナー・広報", specialtyId: "SO139", specialtyLabel: "コーポレート広報担当" },
  // CA07 / OG22 メディア・出版
  { careerId: "CA07", careerLabel: "広告・メディア・クリエイティブ", groupId: "OG22", groupLabel: "メディア・出版", occupationId: "OC44", occupationLabel: "編集・ライター", specialtyId: "SO140", specialtyLabel: "雑誌・書籍編集者" },
  { careerId: "CA07", careerLabel: "広告・メディア・クリエイティブ", groupId: "OG22", groupLabel: "メディア・出版", occupationId: "OC44", occupationLabel: "編集・ライター", specialtyId: "SO141", specialtyLabel: "Webコンテンツライター" },
  { careerId: "CA07", careerLabel: "広告・メディア・クリエイティブ", groupId: "OG22", groupLabel: "メディア・出版", occupationId: "OC45", occupationLabel: "記者・アナウンサー", specialtyId: "SO142", specialtyLabel: "新聞・Web記者" },
  { careerId: "CA07", careerLabel: "広告・メディア・クリエイティブ", groupId: "OG22", groupLabel: "メディア・出版", occupationId: "OC45", occupationLabel: "記者・アナウンサー", specialtyId: "SO143", specialtyLabel: "テレビ・ラジオアナウンサー" },
  // CA07 / OG23 クリエイティブ制作・コンテンツ
  { careerId: "CA07", careerLabel: "広告・メディア・クリエイティブ", groupId: "OG23", groupLabel: "クリエイティブ制作・コンテンツ", occupationId: "OC14", occupationLabel: "ゲームプロデューサー・プランナー", specialtyId: "SO099", specialtyLabel: "ゲームプロデューサー" },
  { careerId: "CA07", careerLabel: "広告・メディア・クリエイティブ", groupId: "OG23", groupLabel: "クリエイティブ制作・コンテンツ", occupationId: "OC14", occupationLabel: "ゲームプロデューサー・プランナー", specialtyId: "SO100", specialtyLabel: "ゲームプランナー" },
  { careerId: "CA07", careerLabel: "広告・メディア・クリエイティブ", groupId: "OG23", groupLabel: "クリエイティブ制作・コンテンツ", occupationId: "OC46", occupationLabel: "グラフィック・映像デザイナー", specialtyId: "SO144", specialtyLabel: "グラフィックデザイナー（広告・印刷）" },
  { careerId: "CA07", careerLabel: "広告・メディア・クリエイティブ", groupId: "OG23", groupLabel: "クリエイティブ制作・コンテンツ", occupationId: "OC46", occupationLabel: "グラフィック・映像デザイナー", specialtyId: "SO145", specialtyLabel: "映像ディレクター・動画編集者" },
  // CA08 物流・運輸 / OG24 物流オペレーション
  { careerId: "CA08", careerLabel: "物流・運輸", groupId: "OG24", groupLabel: "物流オペレーション", occupationId: "OC47", occupationLabel: "倉庫・物流管理", specialtyId: "SO146", specialtyLabel: "倉庫管理・在庫管理担当" },
  { careerId: "CA08", careerLabel: "物流・運輸", groupId: "OG24", groupLabel: "物流オペレーション", occupationId: "OC47", occupationLabel: "倉庫・物流管理", specialtyId: "SO147", specialtyLabel: "フォークリフトオペレーター" },
  { careerId: "CA08", careerLabel: "物流・運輸", groupId: "OG24", groupLabel: "物流オペレーション", occupationId: "OC48", occupationLabel: "ドライバー・配送", specialtyId: "SO148", specialtyLabel: "大型トラックドライバー" },
  { careerId: "CA08", careerLabel: "物流・運輸", groupId: "OG24", groupLabel: "物流オペレーション", occupationId: "OC48", occupationLabel: "ドライバー・配送", specialtyId: "SO149", specialtyLabel: "配送ドライバー（中小型）" },
  // CA08 / OG25 物流企画・管理
  { careerId: "CA08", careerLabel: "物流・運輸", groupId: "OG25", groupLabel: "物流企画・管理", occupationId: "OC49", occupationLabel: "ロジスティクス企画", specialtyId: "SO150", specialtyLabel: "ロジスティクスプランナー" },
  { careerId: "CA08", careerLabel: "物流・運輸", groupId: "OG25", groupLabel: "物流企画・管理", occupationId: "OC49", occupationLabel: "ロジスティクス企画", specialtyId: "SO151", specialtyLabel: "3PL提案・物流コンサルタント" },
  { careerId: "CA08", careerLabel: "物流・運輸", groupId: "OG25", groupLabel: "物流企画・管理", occupationId: "OC49", occupationLabel: "ロジスティクス企画", specialtyId: "SO244", specialtyLabel: "物流管理" },
  { careerId: "CA08", careerLabel: "物流・運輸", groupId: "OG25", groupLabel: "物流企画・管理", occupationId: "OC49", occupationLabel: "ロジスティクス企画", specialtyId: "SO245", specialtyLabel: "SCM企画・物流企画・需要予測" },
  { careerId: "CA08", careerLabel: "物流・運輸", groupId: "OG25", groupLabel: "物流企画・管理", occupationId: "OC50", occupationLabel: "貿易・通関", specialtyId: "SO152", specialtyLabel: "貿易事務・通関士" },
  { careerId: "CA08", careerLabel: "物流・運輸", groupId: "OG25", groupLabel: "物流企画・管理", occupationId: "OC50", occupationLabel: "貿易・通関", specialtyId: "SO153", specialtyLabel: "フォワーダー（国際輸送代理）" },
  { careerId: "CA08", careerLabel: "物流・運輸", groupId: "OG25", groupLabel: "物流企画・管理", occupationId: "OC87", occupationLabel: "購買・物流・貿易事務", specialtyId: "SO246", specialtyLabel: "物流・購買事務" },
  { careerId: "CA08", careerLabel: "物流・運輸", groupId: "OG25", groupLabel: "物流企画・管理", occupationId: "OC87", occupationLabel: "購買・物流・貿易事務", specialtyId: "SO247", specialtyLabel: "貿易事務" },
  // CA09 サービス・生活関連 / OG26 ホテル・観光・ブライダル
  { careerId: "CA09", careerLabel: "サービス・生活関連", groupId: "OG26", groupLabel: "ホテル・観光・ブライダル", occupationId: "OC51", occupationLabel: "ホテルフロント・コンシェルジュ", specialtyId: "SO154", specialtyLabel: "ホテルフロントスタッフ" },
  { careerId: "CA09", careerLabel: "サービス・生活関連", groupId: "OG26", groupLabel: "ホテル・観光・ブライダル", occupationId: "OC51", occupationLabel: "ホテルフロント・コンシェルジュ", specialtyId: "SO155", specialtyLabel: "ブライダルコーディネーター" },
  { careerId: "CA09", careerLabel: "サービス・生活関連", groupId: "OG26", groupLabel: "ホテル・観光・ブライダル", occupationId: "OC52", occupationLabel: "旅行・観光プランナー", specialtyId: "SO156", specialtyLabel: "旅行会社ツアープランナー" },
  { careerId: "CA09", careerLabel: "サービス・生活関連", groupId: "OG26", groupLabel: "ホテル・観光・ブライダル", occupationId: "OC52", occupationLabel: "旅行・観光プランナー", specialtyId: "SO157", specialtyLabel: "観光地域プロデューサー（DMO）" },
  // CA09 / OG27 美容・ウェルネス
  { careerId: "CA09", careerLabel: "サービス・生活関連", groupId: "OG27", groupLabel: "美容・ウェルネス", occupationId: "OC53", occupationLabel: "美容師・ネイリスト", specialtyId: "SO158", specialtyLabel: "美容師・ヘアスタイリスト" },
  { careerId: "CA09", careerLabel: "サービス・生活関連", groupId: "OG27", groupLabel: "美容・ウェルネス", occupationId: "OC53", occupationLabel: "美容師・ネイリスト", specialtyId: "SO159", specialtyLabel: "エステティシャン・ネイリスト" },
  { careerId: "CA09", careerLabel: "サービス・生活関連", groupId: "OG27", groupLabel: "美容・ウェルネス", occupationId: "OC54", occupationLabel: "フィットネス・スポーツ", specialtyId: "SO160", specialtyLabel: "パーソナルトレーナー" },
  { careerId: "CA09", careerLabel: "サービス・生活関連", groupId: "OG27", groupLabel: "美容・ウェルネス", occupationId: "OC54", occupationLabel: "フィットネス・スポーツ", specialtyId: "SO161", specialtyLabel: "スポーツインストラクター" },
  // CA09 / OG28 警備・清掃・施設管理
  { careerId: "CA09", careerLabel: "サービス・生活関連", groupId: "OG28", groupLabel: "警備・清掃・施設管理", occupationId: "OC55", occupationLabel: "警備・セキュリティ", specialtyId: "SO162", specialtyLabel: "施設警備・交通誘導警備員" },
  { careerId: "CA09", careerLabel: "サービス・生活関連", groupId: "OG28", groupLabel: "警備・清掃・施設管理", occupationId: "OC56", occupationLabel: "ビルメンテナンス", specialtyId: "SO163", specialtyLabel: "ビルメンテナンス" },
  // CA10 食品・飲食 / OG29 飲食・外食
  { careerId: "CA10", careerLabel: "食品・飲食", groupId: "OG29", groupLabel: "飲食・外食", occupationId: "OC57", occupationLabel: "調理・キッチン", specialtyId: "SO164", specialtyLabel: "料理人・シェフ" },
  { careerId: "CA10", careerLabel: "食品・飲食", groupId: "OG29", groupLabel: "飲食・外食", occupationId: "OC57", occupationLabel: "調理・キッチン", specialtyId: "SO165", specialtyLabel: "フードコーディネーター" },
  { careerId: "CA10", careerLabel: "食品・飲食", groupId: "OG29", groupLabel: "飲食・外食", occupationId: "OC58", occupationLabel: "飲食店管理・SV", specialtyId: "SO166", specialtyLabel: "飲食店舗マネージャー（店長）" },
  { careerId: "CA10", careerLabel: "食品・飲食", groupId: "OG29", groupLabel: "飲食・外食", occupationId: "OC58", occupationLabel: "飲食店管理・SV", specialtyId: "SO167", specialtyLabel: "飲食チェーンSV（スーパーバイザー）" },
  // CA11 官公庁・公共 / OG30 行政・公務
  { careerId: "CA11", careerLabel: "官公庁・公共", groupId: "OG30", groupLabel: "行政・公務", occupationId: "OC59", occupationLabel: "国家公務員", specialtyId: "SO168", specialtyLabel: "国家公務員一般職・総合職" },
  { careerId: "CA11", careerLabel: "官公庁・公共", groupId: "OG30", groupLabel: "行政・公務", occupationId: "OC59", occupationLabel: "国家公務員", specialtyId: "SO169", specialtyLabel: "国家専門職（国税・労基・外交官）" },
  { careerId: "CA11", careerLabel: "官公庁・公共", groupId: "OG30", groupLabel: "行政・公務", occupationId: "OC60", occupationLabel: "地方公務員", specialtyId: "SO170", specialtyLabel: "都道府県・市区町村職員" },
  { careerId: "CA11", careerLabel: "官公庁・公共", groupId: "OG30", groupLabel: "行政・公務", occupationId: "OC60", occupationLabel: "地方公務員", specialtyId: "SO171", specialtyLabel: "消防士・警察官" },
  // CA11 / OG31 公共・団体
  { careerId: "CA11", careerLabel: "官公庁・公共", groupId: "OG31", groupLabel: "公共・団体", occupationId: "OC61", occupationLabel: "独立行政法人・公益法人", specialtyId: "SO172", specialtyLabel: "独立行政法人研究員・職員" },
  { careerId: "CA11", careerLabel: "官公庁・公共", groupId: "OG31", groupLabel: "公共・団体", occupationId: "OC61", occupationLabel: "独立行政法人・公益法人", specialtyId: "SO173", specialtyLabel: "公益財団・NPO職員" },
  { careerId: "CA11", careerLabel: "官公庁・公共", groupId: "OG31", groupLabel: "公共・団体", occupationId: "OC62", occupationLabel: "教育行政・福祉行政", specialtyId: "SO174", specialtyLabel: "社会福祉士・生活保護担当" },
  { careerId: "CA11", careerLabel: "官公庁・公共", groupId: "OG31", groupLabel: "公共・団体", occupationId: "OC62", occupationLabel: "教育行政・福祉行政", specialtyId: "SO175", specialtyLabel: "学校事務・教育委員会職員" },
  // CA12 商社 / OG32 商社営業・トレーディング
  { careerId: "CA12", careerLabel: "商社", groupId: "OG32", groupLabel: "商社営業・トレーディング", occupationId: "OC63", occupationLabel: "総合商社営業", specialtyId: "SO176", specialtyLabel: "資源・エネルギートレーダー" },
  { careerId: "CA12", careerLabel: "商社", groupId: "OG32", groupLabel: "商社営業・トレーディング", occupationId: "OC63", occupationLabel: "総合商社営業", specialtyId: "SO177", specialtyLabel: "プラント・インフラ海外事業営業" },
  { careerId: "CA12", careerLabel: "商社", groupId: "OG32", groupLabel: "商社営業・トレーディング", occupationId: "OC64", occupationLabel: "専門商社営業", specialtyId: "SO178", specialtyLabel: "専門商社営業（IT・食品・化学・鉄鋼等）" },
  { careerId: "CA12", careerLabel: "商社", groupId: "OG32", groupLabel: "商社営業・トレーディング", occupationId: "OC64", occupationLabel: "専門商社営業", specialtyId: "SO179", specialtyLabel: "仕入れ・バイヤー（商社）" },
  // CA12 / OG33 商社企画・管理
  { careerId: "CA12", careerLabel: "商社", groupId: "OG33", groupLabel: "商社企画・管理", occupationId: "OC65", occupationLabel: "トレードファイナンス・事業企画", specialtyId: "SO180", specialtyLabel: "トレードファイナンス担当" },
  { careerId: "CA12", careerLabel: "商社", groupId: "OG33", groupLabel: "商社企画・管理", occupationId: "OC65", occupationLabel: "トレードファイナンス・事業企画", specialtyId: "SO181", specialtyLabel: "商社事業企画・新規事業開発" },
  // CA13 不動産・建設 / OG34 不動産営業・開発
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG34", groupLabel: "不動産営業・開発", occupationId: "OC66", occupationLabel: "不動産営業・仲介", specialtyId: "SO182", specialtyLabel: "不動産売買仲介営業（宅建士）" },
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG34", groupLabel: "不動産営業・開発", occupationId: "OC66", occupationLabel: "不動産営業・仲介", specialtyId: "SO183", specialtyLabel: "不動産賃貸仲介営業" },
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG34", groupLabel: "不動産営業・開発", occupationId: "OC67", occupationLabel: "不動産開発・用地仕入", specialtyId: "SO184", specialtyLabel: "不動産デベロッパー（用地取得）" },
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG34", groupLabel: "不動産営業・開発", occupationId: "OC67", occupationLabel: "不動産開発・用地仕入", specialtyId: "SO185", specialtyLabel: "不動産企画・事業開発担当" },
  // CA13 / OG35 不動産運用・管理
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG35", groupLabel: "不動産運用・管理", occupationId: "OC68", occupationLabel: "プロパティ・アセット管理", specialtyId: "SO186", specialtyLabel: "プロパティマネージャー（PM）" },
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG35", groupLabel: "不動産運用・管理", occupationId: "OC68", occupationLabel: "プロパティ・アセット管理", specialtyId: "SO187", specialtyLabel: "アセットマネージャー（AM）" },
  // CA13 / OG36 建設・施工
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG36", groupLabel: "建設・施工", occupationId: "OC69", occupationLabel: "施工管理", specialtyId: "SO188", specialtyLabel: "建築施工管理" },
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG36", groupLabel: "建設・施工", occupationId: "OC69", occupationLabel: "施工管理", specialtyId: "SO189", specialtyLabel: "土木施工管理" },
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG36", groupLabel: "建設・施工", occupationId: "OC69", occupationLabel: "施工管理", specialtyId: "SO250", specialtyLabel: "設備施工管理" },
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG36", groupLabel: "建設・施工", occupationId: "OC70", occupationLabel: "設計・積算", specialtyId: "SO190", specialtyLabel: "建築設計（意匠・構造）" },
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG36", groupLabel: "建設・施工", occupationId: "OC70", occupationLabel: "設計・積算", specialtyId: "SO191", specialtyLabel: "設備設計・積算担当" },
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG36", groupLabel: "建設・施工", occupationId: "OC70", occupationLabel: "設計・積算", specialtyId: "SO251", specialtyLabel: "土木設計" },
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG36", groupLabel: "建設・施工", occupationId: "OC70", occupationLabel: "設計・積算", specialtyId: "SO252", specialtyLabel: "CAD/BIM/CIMオペレーター" },
  // CA13 / OG52 不動産営業
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG52", groupLabel: "不動産営業", occupationId: "OC90", occupationLabel: "個人向け営業", specialtyId: "SO035", specialtyLabel: "不動産投資営業" },
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG52", groupLabel: "不動産営業", occupationId: "OC90", occupationLabel: "個人向け営業", specialtyId: "SO036", specialtyLabel: "住宅営業" },
  // CA14 小売・流通 / OG37 店舗・販売
  { careerId: "CA14", careerLabel: "小売・流通", groupId: "OG37", groupLabel: "店舗・販売", occupationId: "OC71", occupationLabel: "販売スタッフ・店長", specialtyId: "SO192", specialtyLabel: "小売店販売スタッフ・店長" },
  { careerId: "CA14", careerLabel: "小売・流通", groupId: "OG37", groupLabel: "店舗・販売", occupationId: "OC71", occupationLabel: "販売スタッフ・店長", specialtyId: "SO193", specialtyLabel: "アパレル販売スタッフ・ショップマネージャー" },
  // CA14 / OG38 商品企画・MD
  { careerId: "CA14", careerLabel: "小売・流通", groupId: "OG38", groupLabel: "商品企画・MD", occupationId: "OC72", occupationLabel: "バイヤー・MD", specialtyId: "SO194", specialtyLabel: "バイヤー・仕入れ担当" },
  { careerId: "CA14", careerLabel: "小売・流通", groupId: "OG38", groupLabel: "商品企画・MD", occupationId: "OC72", occupationLabel: "バイヤー・MD", specialtyId: "SO195", specialtyLabel: "マーチャンダイザー（MD）・VMD" },
  { careerId: "CA14", careerLabel: "小売・流通", groupId: "OG38", groupLabel: "商品企画・MD", occupationId: "OC73", occupationLabel: "店舗開発・エリアSV", specialtyId: "SO196", specialtyLabel: "スーパーバイザー・エリアマネージャー" },
  { careerId: "CA14", careerLabel: "小売・流通", groupId: "OG38", groupLabel: "商品企画・MD", occupationId: "OC73", occupationLabel: "店舗開発・エリアSV", specialtyId: "SO197", specialtyLabel: "店舗開発・FC開発担当" },
  // CA14 / OG39 EC・デジタル流通
  { careerId: "CA14", careerLabel: "小売・流通", groupId: "OG39", groupLabel: "EC・デジタル流通", occupationId: "OC74", occupationLabel: "EC・通販運営", specialtyId: "SO198", specialtyLabel: "ECサイト運営・通販MD" },
  { careerId: "CA14", careerLabel: "小売・流通", groupId: "OG39", groupLabel: "EC・デジタル流通", occupationId: "OC74", occupationLabel: "EC・通販運営", specialtyId: "SO199", specialtyLabel: "ECカスタマーサービス・フルフィルメント管理" },
  // CA99 全業種共通 / OG40 企画・マーケティング
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG40", groupLabel: "企画・マーケティング", occupationId: "OC15", occupationLabel: "経営企画・事業開発", specialtyId: "SO038", specialtyLabel: "経営企画担当" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG40", groupLabel: "企画・マーケティング", occupationId: "OC15", occupationLabel: "経営企画・事業開発", specialtyId: "SO039", specialtyLabel: "新規事業開発担当" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG40", groupLabel: "企画・マーケティング", occupationId: "OC15", occupationLabel: "経営企画・事業開発", specialtyId: "SO040", specialtyLabel: "M&Aアナリスト" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG40", groupLabel: "企画・マーケティング", occupationId: "OC15", occupationLabel: "経営企画・事業開発", specialtyId: "SO200", specialtyLabel: "経営管理" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG40", groupLabel: "企画・マーケティング", occupationId: "OC15", occupationLabel: "経営企画・事業開発", specialtyId: "SO223", specialtyLabel: "事業企画" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG40", groupLabel: "企画・マーケティング", occupationId: "OC15", occupationLabel: "経営企画・事業開発", specialtyId: "SO224", specialtyLabel: "営業企画・営業推進" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG40", groupLabel: "企画・マーケティング", occupationId: "OC15", occupationLabel: "経営企画・事業開発", specialtyId: "SO225", specialtyLabel: "リサーチ・市場調査" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG40", groupLabel: "企画・マーケティング", occupationId: "OC16", occupationLabel: "マーケティング", specialtyId: "SO041", specialtyLabel: "デジタルマーケター（SEO/SEM）" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG40", groupLabel: "企画・マーケティング", occupationId: "OC16", occupationLabel: "マーケティング", specialtyId: "SO042", specialtyLabel: "SNSマーケター" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG40", groupLabel: "企画・マーケティング", occupationId: "OC16", occupationLabel: "マーケティング", specialtyId: "SO043", specialtyLabel: "プロダクトマーケティングマネージャー" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG40", groupLabel: "企画・マーケティング", occupationId: "OC16", occupationLabel: "マーケティング", specialtyId: "SO044", specialtyLabel: "ブランドマネージャー" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG40", groupLabel: "企画・マーケティング", occupationId: "OC17", occupationLabel: "クリエイティブ", specialtyId: "SO045", specialtyLabel: "コピーライター" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG40", groupLabel: "企画・マーケティング", occupationId: "OC17", occupationLabel: "クリエイティブ", specialtyId: "SO046", specialtyLabel: "コンテンツマーケター" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG40", groupLabel: "企画・マーケティング", occupationId: "OC17", occupationLabel: "クリエイティブ", specialtyId: "SO226", specialtyLabel: "商品企画" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG40", groupLabel: "企画・マーケティング", occupationId: "OC17", occupationLabel: "クリエイティブ", specialtyId: "SO249", specialtyLabel: "WEBディレクター" },
  // CA99 / OG41 管理・スタッフ
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG41", groupLabel: "管理・スタッフ", occupationId: "OC18", occupationLabel: "経理・財務・会計・内部統制", specialtyId: "SO047", specialtyLabel: "CFO/財務責任者" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG41", groupLabel: "管理・スタッフ", occupationId: "OC18", occupationLabel: "経理・財務・会計・内部統制", specialtyId: "SO048", specialtyLabel: "財務アナリスト" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG41", groupLabel: "管理・スタッフ", occupationId: "OC18", occupationLabel: "経理・財務・会計・内部統制", specialtyId: "SO050", specialtyLabel: "経理" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG41", groupLabel: "管理・スタッフ", occupationId: "OC18", occupationLabel: "経理・財務・会計・内部統制", specialtyId: "SO201", specialtyLabel: "財務・税務・管理会計" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG41", groupLabel: "管理・スタッフ", occupationId: "OC18", occupationLabel: "経理・財務・会計・内部統制", specialtyId: "SO227", specialtyLabel: "内部統制" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG41", groupLabel: "管理・スタッフ", occupationId: "OC19", occupationLabel: "法務・コンプライアンス", specialtyId: "SO051", specialtyLabel: "企業法務（契約）" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG41", groupLabel: "管理・スタッフ", occupationId: "OC19", occupationLabel: "法務・コンプライアンス", specialtyId: "SO052", specialtyLabel: "知的財産" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG41", groupLabel: "管理・スタッフ", occupationId: "OC19", occupationLabel: "法務・コンプライアンス", specialtyId: "SO053", specialtyLabel: "コンプライアンス" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG41", groupLabel: "管理・スタッフ", occupationId: "OC20", occupationLabel: "人事・組織開発", specialtyId: "SO054", specialtyLabel: "中途採用" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG41", groupLabel: "管理・スタッフ", occupationId: "OC20", occupationLabel: "人事・組織開発", specialtyId: "SO055", specialtyLabel: "HRBP" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG41", groupLabel: "管理・スタッフ", occupationId: "OC20", occupationLabel: "人事・組織開発", specialtyId: "SO056", specialtyLabel: "タレントマネジメント" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG41", groupLabel: "管理・スタッフ", occupationId: "OC20", occupationLabel: "人事・組織開発", specialtyId: "SO057", specialtyLabel: "研修・人材開発" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG41", groupLabel: "管理・スタッフ", occupationId: "OC20", occupationLabel: "人事・組織開発", specialtyId: "SO202", specialtyLabel: "新卒採用" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG41", groupLabel: "管理・スタッフ", occupationId: "OC20", occupationLabel: "人事・組織開発", specialtyId: "SO203", specialtyLabel: "人事企画・人事制度" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG41", groupLabel: "管理・スタッフ", occupationId: "OC20", occupationLabel: "人事・組織開発", specialtyId: "SO204", specialtyLabel: "組織開発" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG41", groupLabel: "管理・スタッフ", occupationId: "OC20", occupationLabel: "人事・組織開発", specialtyId: "SO228", specialtyLabel: "労務・給与社保" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG41", groupLabel: "管理・スタッフ", occupationId: "OC75", occupationLabel: "総務・購買", specialtyId: "SO205", specialtyLabel: "総務・ファシリティ" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG41", groupLabel: "管理・スタッフ", occupationId: "OC75", occupationLabel: "総務・購買", specialtyId: "SO229", specialtyLabel: "購買" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG41", groupLabel: "管理・スタッフ", occupationId: "OC82", occupationLabel: "広報・IR・サステナビリティ", specialtyId: "SO230", specialtyLabel: "広報" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG41", groupLabel: "管理・スタッフ", occupationId: "OC82", occupationLabel: "広報・IR・サステナビリティ", specialtyId: "SO231", specialtyLabel: "IR" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG41", groupLabel: "管理・スタッフ", occupationId: "OC82", occupationLabel: "広報・IR・サステナビリティ", specialtyId: "SO232", specialtyLabel: "サステナビリティ" },
  // CA99 / OG42 事務・アシスタント
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG42", groupLabel: "事務・アシスタント", occupationId: "OC83", occupationLabel: "管理部門事務", specialtyId: "SO233", specialtyLabel: "経理事務・財務アシスタント" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG42", groupLabel: "事務・アシスタント", occupationId: "OC83", occupationLabel: "管理部門事務", specialtyId: "SO234", specialtyLabel: "総務アシスタント" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG42", groupLabel: "事務・アシスタント", occupationId: "OC83", occupationLabel: "管理部門事務", specialtyId: "SO235", specialtyLabel: "法務アシスタント" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG42", groupLabel: "事務・アシスタント", occupationId: "OC83", occupationLabel: "管理部門事務", specialtyId: "SO236", specialtyLabel: "人事アシスタント" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG42", groupLabel: "事務・アシスタント", occupationId: "OC84", occupationLabel: "企画・マーケティング事務", specialtyId: "SO237", specialtyLabel: "マーケティングアシスタント" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG42", groupLabel: "事務・アシスタント", occupationId: "OC84", occupationLabel: "企画・マーケティング事務", specialtyId: "SO238", specialtyLabel: "経営企画アシスタント" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG42", groupLabel: "事務・アシスタント", occupationId: "OC85", occupationLabel: "秘書・翻訳通訳", specialtyId: "SO239", specialtyLabel: "秘書" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG42", groupLabel: "事務・アシスタント", occupationId: "OC85", occupationLabel: "秘書・翻訳通訳", specialtyId: "SO240", specialtyLabel: "翻訳" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG42", groupLabel: "事務・アシスタント", occupationId: "OC85", occupationLabel: "秘書・翻訳通訳", specialtyId: "SO241", specialtyLabel: "通訳" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG42", groupLabel: "事務・アシスタント", occupationId: "OC86", occupationLabel: "その他事務", specialtyId: "SO242", specialtyLabel: "営業事務" },
  { careerId: "CA99", careerLabel: "全業種共通（管理部門/企画/事務等）", groupId: "OG42", groupLabel: "事務・アシスタント", occupationId: "OC86", occupationLabel: "その他事務", specialtyId: "SO243", specialtyLabel: "一般事務" },
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
  const careers = OCCUPATIONS.filter((o) => {
    if (seen.has(o.careerId)) return false;
    seen.add(o.careerId);
    return true;
  }).map((o) => ({ id: o.careerId, label: o.careerLabel }));

  // CA99（全業種共通）を先頭に移動
  const ca99Index = careers.findIndex((c) => c.id === "CA99");
  if (ca99Index > 0) {
    const [ca99] = careers.splice(ca99Index, 1);
    careers.unshift(ca99);
  }
  return careers;
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

export function getSpecialties(occupationId: string, groupId: string): SpecialtyOption[] {
  return OCCUPATIONS.filter((o) => o.occupationId === occupationId && o.groupId === groupId).map((o) => ({
    id: o.specialtyId,
    label: o.specialtyLabel,
    occupationId: o.occupationId,
  }));
}
