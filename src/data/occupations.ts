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
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG01", groupLabel: "ソフトウェア・システム開発", occupationId: "OC13A", occupationLabel: "テクニカルサポート・通信インフラ", specialtyId: "SO097", specialtyLabel: "テクニカルサポートエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG01", groupLabel: "ソフトウェア・システム開発", occupationId: "OC13A", occupationLabel: "テクニカルサポート・通信インフラ", specialtyId: "SO098", specialtyLabel: "通信インフラエンジニア（5G/NW）" },
  // CA01 / OG02 データ・AI
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG02", groupLabel: "データ・AI", occupationId: "OC05", occupationLabel: "データサイエンティスト", specialtyId: "SO012", specialtyLabel: "機械学習エンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG02", groupLabel: "データ・AI", occupationId: "OC05", occupationLabel: "データサイエンティスト", specialtyId: "SO013", specialtyLabel: "データアナリスト" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG02", groupLabel: "データ・AI", occupationId: "OC05", occupationLabel: "データサイエンティスト", specialtyId: "SO014", specialtyLabel: "統計モデリング専門家" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG02", groupLabel: "データ・AI", occupationId: "OC06", occupationLabel: "データエンジニア", specialtyId: "SO015", specialtyLabel: "ETLエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG02", groupLabel: "データ・AI", occupationId: "OC06", occupationLabel: "データエンジニア", specialtyId: "SO016", specialtyLabel: "データアーキテクト" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG02", groupLabel: "データ・AI", occupationId: "OC07", occupationLabel: "AIエンジニア", specialtyId: "SO017", specialtyLabel: "NLPエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG02", groupLabel: "データ・AI", occupationId: "OC07", occupationLabel: "AIエンジニア", specialtyId: "SO018", specialtyLabel: "コンピュータビジョンエンジニア" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG02", groupLabel: "データ・AI", occupationId: "OC07", occupationLabel: "AIエンジニア", specialtyId: "SO019", specialtyLabel: "LLM/生成AIエンジニア" },
  // CA01 / OG03 ITマネジメント・プロダクト
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG03", groupLabel: "ITマネジメント・プロダクト", occupationId: "OC08", occupationLabel: "プロダクトマネージャー", specialtyId: "SO020", specialtyLabel: "B2BプロダクトPM" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG03", groupLabel: "ITマネジメント・プロダクト", occupationId: "OC08", occupationLabel: "プロダクトマネージャー", specialtyId: "SO021", specialtyLabel: "B2CプロダクトPM" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG03", groupLabel: "ITマネジメント・プロダクト", occupationId: "OC09", occupationLabel: "プロジェクトマネージャー（IT）", specialtyId: "SO022", specialtyLabel: "ITプロジェクトマネージャー" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG03", groupLabel: "ITマネジメント・プロダクト", occupationId: "OC09", occupationLabel: "プロジェクトマネージャー（IT）", specialtyId: "SO023", specialtyLabel: "スクラムマスター" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG03", groupLabel: "ITマネジメント・プロダクト", occupationId: "OC10", occupationLabel: "UX/UIデザイナー", specialtyId: "SO024", specialtyLabel: "UXデザイナー" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG03", groupLabel: "ITマネジメント・プロダクト", occupationId: "OC10", occupationLabel: "UX/UIデザイナー", specialtyId: "SO025", specialtyLabel: "UIデザイナー" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG03", groupLabel: "ITマネジメント・プロダクト", occupationId: "OC14A", occupationLabel: "ゲームプロデューサー・プランナー", specialtyId: "SO099", specialtyLabel: "ゲームプロデューサー" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG03", groupLabel: "ITマネジメント・プロダクト", occupationId: "OC14A", occupationLabel: "ゲームプロデューサー・プランナー", specialtyId: "SO100", specialtyLabel: "ゲームプランナー" },
  // CA01 / OG04 ITセキュリティ・運用
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG04", groupLabel: "ITセキュリティ・運用", occupationId: "OC11", occupationLabel: "セキュリティエンジニア", specialtyId: "SO026", specialtyLabel: "セキュリティアナリスト" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG04", groupLabel: "ITセキュリティ・運用", occupationId: "OC11", occupationLabel: "セキュリティエンジニア", specialtyId: "SO027", specialtyLabel: "ペネトレーションテスター" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG04", groupLabel: "ITセキュリティ・運用", occupationId: "OC12", occupationLabel: "IT運用・サポート", specialtyId: "SO028", specialtyLabel: "システム管理者" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG04", groupLabel: "ITセキュリティ・運用", occupationId: "OC12", occupationLabel: "IT運用・サポート", specialtyId: "SO029", specialtyLabel: "ネットワークエンジニア" },
  // CA01 / OG05 IT営業・カスタマーサクセス
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG05A", groupLabel: "IT営業・カスタマーサクセス", occupationId: "OC15A", occupationLabel: "IT営業・カスタマーサクセス", specialtyId: "SO101", specialtyLabel: "カスタマーサクセスマネージャー（SaaS）" },
  { careerId: "CA01", careerLabel: "IT・テクノロジー", groupId: "OG05A", groupLabel: "IT営業・カスタマーサクセス", occupationId: "OC15A", occupationLabel: "IT営業・カスタマーサクセス", specialtyId: "SO102", specialtyLabel: "ITプリセールス・ソリューションアーキテクト" },
  // CA99 全業種共通 / OG05 営業
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG05", groupLabel: "営業", occupationId: "OC13", occupationLabel: "法人営業", specialtyId: "SO030", specialtyLabel: "IT・SaaS営業（フィールドセールス）" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG05", groupLabel: "営業", occupationId: "OC13", occupationLabel: "法人営業", specialtyId: "SO031", specialtyLabel: "IT・SaaS営業（インサイドセールス）" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG05", groupLabel: "営業", occupationId: "OC13", occupationLabel: "法人営業", specialtyId: "SO032", specialtyLabel: "メーカー技術営業" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG05", groupLabel: "営業", occupationId: "OC13", occupationLabel: "法人営業", specialtyId: "SO033", specialtyLabel: "医療機器営業" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG05", groupLabel: "営業", occupationId: "OC13", occupationLabel: "法人営業", specialtyId: "SO034", specialtyLabel: "金融法人営業" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG05", groupLabel: "営業", occupationId: "OC14", occupationLabel: "個人向け営業", specialtyId: "SO035", specialtyLabel: "不動産投資営業" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG05", groupLabel: "営業", occupationId: "OC14", occupationLabel: "個人向け営業", specialtyId: "SO036", specialtyLabel: "住宅営業" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG05", groupLabel: "営業", occupationId: "OC14", occupationLabel: "個人向け営業", specialtyId: "SO037", specialtyLabel: "金融個人営業（FP）" },
  // CA99 / OG06 企画・マーケティング
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG06", groupLabel: "企画・マーケティング", occupationId: "OC15", occupationLabel: "経営企画・事業開発", specialtyId: "SO038", specialtyLabel: "経営企画担当" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG06", groupLabel: "企画・マーケティング", occupationId: "OC15", occupationLabel: "経営企画・事業開発", specialtyId: "SO039", specialtyLabel: "新規事業開発担当" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG06", groupLabel: "企画・マーケティング", occupationId: "OC15", occupationLabel: "経営企画・事業開発", specialtyId: "SO040", specialtyLabel: "M&Aアナリスト" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG06", groupLabel: "企画・マーケティング", occupationId: "OC16", occupationLabel: "マーケティング", specialtyId: "SO041", specialtyLabel: "デジタルマーケター（SEO/SEM）" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG06", groupLabel: "企画・マーケティング", occupationId: "OC16", occupationLabel: "マーケティング", specialtyId: "SO042", specialtyLabel: "SNSマーケター" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG06", groupLabel: "企画・マーケティング", occupationId: "OC16", occupationLabel: "マーケティング", specialtyId: "SO043", specialtyLabel: "プロダクトマーケティングマネージャー" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG06", groupLabel: "企画・マーケティング", occupationId: "OC16", occupationLabel: "マーケティング", specialtyId: "SO044", specialtyLabel: "ブランドマネージャー" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG06", groupLabel: "企画・マーケティング", occupationId: "OC17", occupationLabel: "クリエイティブ", specialtyId: "SO045", specialtyLabel: "コピーライター" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG06", groupLabel: "企画・マーケティング", occupationId: "OC17", occupationLabel: "クリエイティブ", specialtyId: "SO046", specialtyLabel: "コンテンツマーケター" },
  // CA99 / OG07 管理・スタッフ
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG07", groupLabel: "管理・スタッフ", occupationId: "OC18", occupationLabel: "財務・会計", specialtyId: "SO047", specialtyLabel: "CFO/財務部長" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG07", groupLabel: "管理・スタッフ", occupationId: "OC18", occupationLabel: "財務・会計", specialtyId: "SO048", specialtyLabel: "財務アナリスト" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG07", groupLabel: "管理・スタッフ", occupationId: "OC18", occupationLabel: "財務・会計", specialtyId: "SO049", specialtyLabel: "経理マネージャー" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG07", groupLabel: "管理・スタッフ", occupationId: "OC18", occupationLabel: "財務・会計", specialtyId: "SO050", specialtyLabel: "経理担当（一般）" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG07", groupLabel: "管理・スタッフ", occupationId: "OC19", occupationLabel: "法務・コンプライアンス", specialtyId: "SO051", specialtyLabel: "企業法務（契約）" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG07", groupLabel: "管理・スタッフ", occupationId: "OC19", occupationLabel: "法務・コンプライアンス", specialtyId: "SO052", specialtyLabel: "知的財産担当" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG07", groupLabel: "管理・スタッフ", occupationId: "OC19", occupationLabel: "法務・コンプライアンス", specialtyId: "SO053", specialtyLabel: "コンプライアンス担当" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG07", groupLabel: "管理・スタッフ", occupationId: "OC20", occupationLabel: "人事・組織開発", specialtyId: "SO054", specialtyLabel: "中途採用担当" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG07", groupLabel: "管理・スタッフ", occupationId: "OC20", occupationLabel: "人事・組織開発", specialtyId: "SO055", specialtyLabel: "HRBPマネージャー" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG07", groupLabel: "管理・スタッフ", occupationId: "OC20", occupationLabel: "人事・組織開発", specialtyId: "SO056", specialtyLabel: "タレントマネジメント担当" },
  { careerId: "CA99", careerLabel: "全業種共通（営業/管理部門/企画等）", groupId: "OG07", groupLabel: "管理・スタッフ", occupationId: "OC20", occupationLabel: "人事・組織開発", specialtyId: "SO057", specialtyLabel: "研修・L&D担当" },
  // CA02 コンサルティング・専門サービス / OG08
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG08", groupLabel: "コンサルティング", occupationId: "OC21", occupationLabel: "経営・戦略コンサルタント", specialtyId: "SO058", specialtyLabel: "経営戦略コンサルタント" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG08", groupLabel: "コンサルティング", occupationId: "OC21", occupationLabel: "経営・戦略コンサルタント", specialtyId: "SO059", specialtyLabel: "事業戦略コンサルタント" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG08", groupLabel: "コンサルティング", occupationId: "OC21", occupationLabel: "経営・戦略コンサルタント", specialtyId: "SO060", specialtyLabel: "M&Aアドバイザー" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG08", groupLabel: "コンサルティング", occupationId: "OC22", occupationLabel: "ITコンサルタント", specialtyId: "SO061", specialtyLabel: "DXコンサルタント" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG08", groupLabel: "コンサルティング", occupationId: "OC22", occupationLabel: "ITコンサルタント", specialtyId: "SO062", specialtyLabel: "ERPコンサルタント" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG08", groupLabel: "コンサルティング", occupationId: "OC22", occupationLabel: "ITコンサルタント", specialtyId: "SO063", specialtyLabel: "システムアーキテクト" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG08", groupLabel: "コンサルティング", occupationId: "OC23", occupationLabel: "業務・組織コンサルタント", specialtyId: "SO064", specialtyLabel: "BPRコンサルタント" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG08", groupLabel: "コンサルティング", occupationId: "OC23", occupationLabel: "業務・組織コンサルタント", specialtyId: "SO065", specialtyLabel: "SCMコンサルタント" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG08", groupLabel: "コンサルティング", occupationId: "OC23", occupationLabel: "業務・組織コンサルタント", specialtyId: "SO066", specialtyLabel: "人事・組織コンサルタント" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG08", groupLabel: "コンサルティング", occupationId: "OC24A", occupationLabel: "財務・会計コンサルタント", specialtyId: "SO103", specialtyLabel: "財務DDアドバイザー（FAS）" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG08", groupLabel: "コンサルティング", occupationId: "OC24A", occupationLabel: "財務・会計コンサルタント", specialtyId: "SO104", specialtyLabel: "会計監査・内部統制コンサルタント" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG08", groupLabel: "コンサルティング", occupationId: "OC25A", occupationLabel: "リスク・サステナビリティコンサルタント", specialtyId: "SO105", specialtyLabel: "ESG・サステナビリティコンサルタント" },
  { careerId: "CA02", careerLabel: "コンサルティング・専門サービス", groupId: "OG08", groupLabel: "コンサルティング", occupationId: "OC25A", occupationLabel: "リスク・サステナビリティコンサルタント", specialtyId: "SO106", specialtyLabel: "リスクマネジメントコンサルタント" },
  // CA03 金融・保険 / OG09 銀行・証券
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG09", groupLabel: "銀行・証券", occupationId: "OC24B", occupationLabel: "銀行業務", specialtyId: "SO067", specialtyLabel: "リテールバンキング担当" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG09", groupLabel: "銀行・証券", occupationId: "OC24B", occupationLabel: "銀行業務", specialtyId: "SO068", specialtyLabel: "コーポレートバンカー" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG09", groupLabel: "銀行・証券", occupationId: "OC24B", occupationLabel: "銀行業務", specialtyId: "SO069", specialtyLabel: "融資・審査担当" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG09", groupLabel: "銀行・証券", occupationId: "OC25B", occupationLabel: "証券・投資", specialtyId: "SO070", specialtyLabel: "株式トレーダー" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG09", groupLabel: "銀行・証券", occupationId: "OC25B", occupationLabel: "証券・投資", specialtyId: "SO071", specialtyLabel: "投資アナリスト" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG09", groupLabel: "銀行・証券", occupationId: "OC25B", occupationLabel: "証券・投資", specialtyId: "SO072", specialtyLabel: "ファンドマネージャー" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG09", groupLabel: "銀行・証券", occupationId: "OC26A", occupationLabel: "リース・クレジット", specialtyId: "SO107", specialtyLabel: "リース営業担当" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG09", groupLabel: "銀行・証券", occupationId: "OC26A", occupationLabel: "リース・クレジット", specialtyId: "SO108", specialtyLabel: "クレジット審査担当" },
  // CA03 / OG10 保険
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG10", groupLabel: "保険", occupationId: "OC26B", occupationLabel: "損害保険", specialtyId: "SO073", specialtyLabel: "損害査定員" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG10", groupLabel: "保険", occupationId: "OC26B", occupationLabel: "損害保険", specialtyId: "SO074", specialtyLabel: "アンダーライター（損保）" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG10", groupLabel: "保険", occupationId: "OC27A", occupationLabel: "生命保険", specialtyId: "SO075", specialtyLabel: "生命保険営業担当" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG10", groupLabel: "保険", occupationId: "OC27A", occupationLabel: "生命保険", specialtyId: "SO076", specialtyLabel: "アクチュアリー" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG10", groupLabel: "保険", occupationId: "OC27B", occupationLabel: "損保・生保事務", specialtyId: "SO109", specialtyLabel: "保険事務担当" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG10", groupLabel: "保険", occupationId: "OC27B", occupationLabel: "損保・生保事務", specialtyId: "SO110", specialtyLabel: "損害調査担当" },
  // CA03 / OG11 フィンテック・資産運用
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG11A", groupLabel: "フィンテック・資産運用", occupationId: "OC28A", occupationLabel: "資産運用・PEファンド", specialtyId: "SO111", specialtyLabel: "プライベートエクイティアナリスト" },
  { careerId: "CA03", careerLabel: "金融・保険", groupId: "OG11A", groupLabel: "フィンテック・資産運用", occupationId: "OC28A", occupationLabel: "資産運用・PEファンド", specialtyId: "SO112", specialtyLabel: "フィンテックプロダクトマネージャー" },
  // CA04 医療・福祉・介護 / OG11 医師・薬剤師
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG11B", groupLabel: "医師・薬剤師", occupationId: "OC28B", occupationLabel: "内科系医師", specialtyId: "SO077", specialtyLabel: "一般内科医" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG11B", groupLabel: "医師・薬剤師", occupationId: "OC28B", occupationLabel: "内科系医師", specialtyId: "SO078", specialtyLabel: "循環器内科医" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG11B", groupLabel: "医師・薬剤師", occupationId: "OC29A", occupationLabel: "外科系医師", specialtyId: "SO079", specialtyLabel: "一般外科医" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG11B", groupLabel: "医師・薬剤師", occupationId: "OC29A", occupationLabel: "外科系医師", specialtyId: "SO080", specialtyLabel: "整形外科医" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG11B", groupLabel: "医師・薬剤師", occupationId: "OC30A", occupationLabel: "薬剤師", specialtyId: "SO081", specialtyLabel: "病院薬剤師" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG11B", groupLabel: "医師・薬剤師", occupationId: "OC30A", occupationLabel: "薬剤師", specialtyId: "SO082", specialtyLabel: "調剤薬局薬剤師" },
  // CA04 / OG12 看護・介護
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG12", groupLabel: "看護・介護", occupationId: "OC31A", occupationLabel: "病院看護師", specialtyId: "SO083", specialtyLabel: "病棟看護師" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG12", groupLabel: "看護・介護", occupationId: "OC31A", occupationLabel: "病院看護師", specialtyId: "SO084", specialtyLabel: "ICU看護師" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG12", groupLabel: "看護・介護", occupationId: "OC32A", occupationLabel: "地域・在宅看護師", specialtyId: "SO085", specialtyLabel: "訪問看護師" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG12", groupLabel: "看護・介護", occupationId: "OC32A", occupationLabel: "地域・在宅看護師", specialtyId: "SO086", specialtyLabel: "保健師" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG12", groupLabel: "看護・介護", occupationId: "OC33A", occupationLabel: "介護福祉士", specialtyId: "SO087", specialtyLabel: "施設介護士" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG12", groupLabel: "看護・介護", occupationId: "OC33A", occupationLabel: "介護福祉士", specialtyId: "SO088", specialtyLabel: "ケアマネージャー" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG12", groupLabel: "看護・介護", occupationId: "OC29B", occupationLabel: "リハビリテーション", specialtyId: "SO113", specialtyLabel: "理学療法士（PT）" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG12", groupLabel: "看護・介護", occupationId: "OC29B", occupationLabel: "リハビリテーション", specialtyId: "SO114", specialtyLabel: "作業療法士（OT）" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG12", groupLabel: "看護・介護", occupationId: "OC29B", occupationLabel: "リハビリテーション", specialtyId: "SO115", specialtyLabel: "言語聴覚士（ST）" },
  // CA04 / OG13 コメディカル
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG13A", groupLabel: "コメディカル", occupationId: "OC30B", occupationLabel: "コメディカル", specialtyId: "SO116", specialtyLabel: "臨床検査技師" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG13A", groupLabel: "コメディカル", occupationId: "OC30B", occupationLabel: "コメディカル", specialtyId: "SO117", specialtyLabel: "診療放射線技師" },
  // CA04 / OG14 医療・ヘルスケア事業
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG14A", groupLabel: "医療・ヘルスケア事業", occupationId: "OC31B", occupationLabel: "MR・メディカルアフェア", specialtyId: "SO118", specialtyLabel: "MR（医薬品営業）" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG14A", groupLabel: "医療・ヘルスケア事業", occupationId: "OC31B", occupationLabel: "MR・メディカルアフェア", specialtyId: "SO119", specialtyLabel: "メディカルアフェアズ担当" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG14A", groupLabel: "医療・ヘルスケア事業", occupationId: "OC32B", occupationLabel: "医療経営・クリニック管理", specialtyId: "SO120", specialtyLabel: "医療事務担当" },
  { careerId: "CA04", careerLabel: "医療・福祉・介護", groupId: "OG14A", groupLabel: "医療・ヘルスケア事業", occupationId: "OC32B", occupationLabel: "医療経営・クリニック管理", specialtyId: "SO121", specialtyLabel: "クリニック運営管理担当" },
  // CA05 メーカー・製造業 / OG13 製品開発・設計
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG13B", groupLabel: "製品開発・設計", occupationId: "OC34A", occupationLabel: "機械設計エンジニア", specialtyId: "SO089", specialtyLabel: "機械設計（部品・ユニット）" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG13B", groupLabel: "製品開発・設計", occupationId: "OC34A", occupationLabel: "機械設計エンジニア", specialtyId: "SO090", specialtyLabel: "CAD/CAE設計エンジニア" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG13B", groupLabel: "製品開発・設計", occupationId: "OC35A", occupationLabel: "電気・電子設計エンジニア", specialtyId: "SO091", specialtyLabel: "回路設計エンジニア" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG13B", groupLabel: "製品開発・設計", occupationId: "OC35A", occupationLabel: "電気・電子設計エンジニア", specialtyId: "SO092", specialtyLabel: "組込みソフトウェアエンジニア" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG13B", groupLabel: "製品開発・設計", occupationId: "OC33B", occupationLabel: "化学・素材開発エンジニア", specialtyId: "SO122", specialtyLabel: "化学材料・素材研究開発エンジニア" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG13B", groupLabel: "製品開発・設計", occupationId: "OC33B", occupationLabel: "化学・素材開発エンジニア", specialtyId: "SO123", specialtyLabel: "食品・医薬品製造技術職" },
  // CA05 / OG14 生産・品質管理
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG14B", groupLabel: "生産・品質管理", occupationId: "OC36A", occupationLabel: "生産管理", specialtyId: "SO093", specialtyLabel: "生産計画担当" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG14B", groupLabel: "生産・品質管理", occupationId: "OC36A", occupationLabel: "生産管理", specialtyId: "SO094", specialtyLabel: "工程管理担当" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG14B", groupLabel: "生産・品質管理", occupationId: "OC37A", occupationLabel: "品質管理・品質保証", specialtyId: "SO095", specialtyLabel: "品質管理担当" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG14B", groupLabel: "生産・品質管理", occupationId: "OC37A", occupationLabel: "品質管理・品質保証", specialtyId: "SO096", specialtyLabel: "品質保証エンジニア" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG14B", groupLabel: "生産・品質管理", occupationId: "OC34B", occupationLabel: "購買・調達エンジニア", specialtyId: "SO124", specialtyLabel: "購買・調達エンジニア（サプライヤー管理）" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG14B", groupLabel: "生産・品質管理", occupationId: "OC35B", occupationLabel: "設備保全エンジニア", specialtyId: "SO125", specialtyLabel: "設備保全・メンテナンスエンジニア" },
  { careerId: "CA05", careerLabel: "メーカー・製造業", groupId: "OG14B", groupLabel: "生産・品質管理", occupationId: "OC36B", occupationLabel: "生産技術エンジニア", specialtyId: "SO126", specialtyLabel: "生産技術・製造プロセスエンジニア" },
  // CA06 人材・教育 / OG15 人材サービス
  { careerId: "CA06", careerLabel: "人材・教育", groupId: "OG15", groupLabel: "人材サービス", occupationId: "OC37B", occupationLabel: "キャリアアドバイザー・人材コンサルタント", specialtyId: "SO127", specialtyLabel: "転職エージェント（CA：求職者支援）" },
  { careerId: "CA06", careerLabel: "人材・教育", groupId: "OG15", groupLabel: "人材サービス", occupationId: "OC37B", occupationLabel: "キャリアアドバイザー・人材コンサルタント", specialtyId: "SO128", specialtyLabel: "リクルーティングアドバイザー（RA：企業開拓）" },
  { careerId: "CA06", careerLabel: "人材・教育", groupId: "OG15", groupLabel: "人材サービス", occupationId: "OC37B", occupationLabel: "キャリアアドバイザー・人材コンサルタント", specialtyId: "SO129", specialtyLabel: "人材コーディネーター（派遣スタッフ管理）" },
  { careerId: "CA06", careerLabel: "人材・教育", groupId: "OG15", groupLabel: "人材サービス", occupationId: "OC38", occupationLabel: "採用支援・RPO", specialtyId: "SO130", specialtyLabel: "採用代行・RPOコンサルタント" },
  // CA06 / OG16 教育・研修
  { careerId: "CA06", careerLabel: "人材・教育", groupId: "OG16", groupLabel: "教育・研修", occupationId: "OC39", occupationLabel: "学校・塾講師", specialtyId: "SO131", specialtyLabel: "学習塾講師・個別指導講師" },
  { careerId: "CA06", careerLabel: "人材・教育", groupId: "OG16", groupLabel: "教育・研修", occupationId: "OC39", occupationLabel: "学校・塾講師", specialtyId: "SO132", specialtyLabel: "語学スクール講師" },
  { careerId: "CA06", careerLabel: "人材・教育", groupId: "OG16", groupLabel: "教育・研修", occupationId: "OC40", occupationLabel: "企業内教育・インストラクター", specialtyId: "SO133", specialtyLabel: "法人研修講師・研修ファシリテーター" },
  { careerId: "CA06", careerLabel: "人材・教育", groupId: "OG16", groupLabel: "教育・研修", occupationId: "OC40", occupationLabel: "企業内教育・インストラクター", specialtyId: "SO134", specialtyLabel: "eラーニング・コンテンツ開発担当" },
  { careerId: "CA06", careerLabel: "人材・教育", groupId: "OG16", groupLabel: "教育・研修", occupationId: "OC41", occupationLabel: "保育・教員", specialtyId: "SO135", specialtyLabel: "保育士・幼稚園教諭" },
  // CA07 広告・メディア・クリエイティブ / OG17 広告・PR
  { careerId: "CA07", careerLabel: "広告・メディア・クリエイティブ", groupId: "OG17", groupLabel: "広告・PR", occupationId: "OC42", occupationLabel: "広告プランナー・ディレクター", specialtyId: "SO136", specialtyLabel: "総合広告代理店プランナー" },
  { careerId: "CA07", careerLabel: "広告・メディア・クリエイティブ", groupId: "OG17", groupLabel: "広告・PR", occupationId: "OC42", occupationLabel: "広告プランナー・ディレクター", specialtyId: "SO137", specialtyLabel: "デジタル広告ディレクター" },
  { careerId: "CA07", careerLabel: "広告・メディア・クリエイティブ", groupId: "OG17", groupLabel: "広告・PR", occupationId: "OC43", occupationLabel: "PRプランナー・広報", specialtyId: "SO138", specialtyLabel: "PRコンサルタント" },
  { careerId: "CA07", careerLabel: "広告・メディア・クリエイティブ", groupId: "OG17", groupLabel: "広告・PR", occupationId: "OC43", occupationLabel: "PRプランナー・広報", specialtyId: "SO139", specialtyLabel: "コーポレート広報担当" },
  // CA07 / OG18 メディア・出版
  { careerId: "CA07", careerLabel: "広告・メディア・クリエイティブ", groupId: "OG18", groupLabel: "メディア・出版", occupationId: "OC44", occupationLabel: "編集・ライター", specialtyId: "SO140", specialtyLabel: "雑誌・書籍編集者" },
  { careerId: "CA07", careerLabel: "広告・メディア・クリエイティブ", groupId: "OG18", groupLabel: "メディア・出版", occupationId: "OC44", occupationLabel: "編集・ライター", specialtyId: "SO141", specialtyLabel: "Webコンテンツライター・ディレクター" },
  { careerId: "CA07", careerLabel: "広告・メディア・クリエイティブ", groupId: "OG18", groupLabel: "メディア・出版", occupationId: "OC45", occupationLabel: "記者・アナウンサー", specialtyId: "SO142", specialtyLabel: "新聞・Web記者" },
  { careerId: "CA07", careerLabel: "広告・メディア・クリエイティブ", groupId: "OG18", groupLabel: "メディア・出版", occupationId: "OC45", occupationLabel: "記者・アナウンサー", specialtyId: "SO143", specialtyLabel: "テレビ・ラジオアナウンサー" },
  // CA07 / OG19 クリエイティブ制作
  { careerId: "CA07", careerLabel: "広告・メディア・クリエイティブ", groupId: "OG19", groupLabel: "クリエイティブ制作", occupationId: "OC46", occupationLabel: "グラフィック・映像デザイナー", specialtyId: "SO144", specialtyLabel: "グラフィックデザイナー（広告・印刷）" },
  { careerId: "CA07", careerLabel: "広告・メディア・クリエイティブ", groupId: "OG19", groupLabel: "クリエイティブ制作", occupationId: "OC46", occupationLabel: "グラフィック・映像デザイナー", specialtyId: "SO145", specialtyLabel: "映像ディレクター・動画編集者" },
  // CA08 物流・運輸 / OG20 物流オペレーション
  { careerId: "CA08", careerLabel: "物流・運輸", groupId: "OG20", groupLabel: "物流オペレーション", occupationId: "OC47", occupationLabel: "倉庫・物流管理", specialtyId: "SO146", specialtyLabel: "倉庫管理・在庫管理担当" },
  { careerId: "CA08", careerLabel: "物流・運輸", groupId: "OG20", groupLabel: "物流オペレーション", occupationId: "OC47", occupationLabel: "倉庫・物流管理", specialtyId: "SO147", specialtyLabel: "フォークリフトオペレーター" },
  { careerId: "CA08", careerLabel: "物流・運輸", groupId: "OG20", groupLabel: "物流オペレーション", occupationId: "OC48", occupationLabel: "ドライバー・配送", specialtyId: "SO148", specialtyLabel: "大型トラックドライバー" },
  { careerId: "CA08", careerLabel: "物流・運輸", groupId: "OG20", groupLabel: "物流オペレーション", occupationId: "OC48", occupationLabel: "ドライバー・配送", specialtyId: "SO149", specialtyLabel: "配送ドライバー（中小型）" },
  // CA08 / OG21 物流企画・管理
  { careerId: "CA08", careerLabel: "物流・運輸", groupId: "OG21", groupLabel: "物流企画・管理", occupationId: "OC49", occupationLabel: "ロジスティクス企画", specialtyId: "SO150", specialtyLabel: "ロジスティクスプランナー" },
  { careerId: "CA08", careerLabel: "物流・運輸", groupId: "OG21", groupLabel: "物流企画・管理", occupationId: "OC49", occupationLabel: "ロジスティクス企画", specialtyId: "SO151", specialtyLabel: "3PL提案・物流コンサルタント" },
  { careerId: "CA08", careerLabel: "物流・運輸", groupId: "OG21", groupLabel: "物流企画・管理", occupationId: "OC50", occupationLabel: "貿易・通関", specialtyId: "SO152", specialtyLabel: "貿易事務・通関士" },
  { careerId: "CA08", careerLabel: "物流・運輸", groupId: "OG21", groupLabel: "物流企画・管理", occupationId: "OC50", occupationLabel: "貿易・通関", specialtyId: "SO153", specialtyLabel: "フォワーダー（国際輸送代理）" },
  // CA09 サービス・生活関連 / OG22 ホテル・観光・ブライダル
  { careerId: "CA09", careerLabel: "サービス・生活関連", groupId: "OG22", groupLabel: "ホテル・観光・ブライダル", occupationId: "OC51", occupationLabel: "ホテルフロント・コンシェルジュ", specialtyId: "SO154", specialtyLabel: "ホテルフロントスタッフ" },
  { careerId: "CA09", careerLabel: "サービス・生活関連", groupId: "OG22", groupLabel: "ホテル・観光・ブライダル", occupationId: "OC51", occupationLabel: "ホテルフロント・コンシェルジュ", specialtyId: "SO155", specialtyLabel: "ブライダルコーディネーター" },
  { careerId: "CA09", careerLabel: "サービス・生活関連", groupId: "OG22", groupLabel: "ホテル・観光・ブライダル", occupationId: "OC52", occupationLabel: "旅行・観光プランナー", specialtyId: "SO156", specialtyLabel: "旅行会社ツアープランナー" },
  { careerId: "CA09", careerLabel: "サービス・生活関連", groupId: "OG22", groupLabel: "ホテル・観光・ブライダル", occupationId: "OC52", occupationLabel: "旅行・観光プランナー", specialtyId: "SO157", specialtyLabel: "観光地域プロデューサー（DMO）" },
  // CA09 / OG23 美容・ウェルネス
  { careerId: "CA09", careerLabel: "サービス・生活関連", groupId: "OG23", groupLabel: "美容・ウェルネス", occupationId: "OC53", occupationLabel: "美容師・ネイリスト", specialtyId: "SO158", specialtyLabel: "美容師・ヘアスタイリスト" },
  { careerId: "CA09", careerLabel: "サービス・生活関連", groupId: "OG23", groupLabel: "美容・ウェルネス", occupationId: "OC53", occupationLabel: "美容師・ネイリスト", specialtyId: "SO159", specialtyLabel: "エステティシャン・ネイリスト" },
  { careerId: "CA09", careerLabel: "サービス・生活関連", groupId: "OG23", groupLabel: "美容・ウェルネス", occupationId: "OC54", occupationLabel: "フィットネス・スポーツ", specialtyId: "SO160", specialtyLabel: "パーソナルトレーナー" },
  { careerId: "CA09", careerLabel: "サービス・生活関連", groupId: "OG23", groupLabel: "美容・ウェルネス", occupationId: "OC54", occupationLabel: "フィットネス・スポーツ", specialtyId: "SO161", specialtyLabel: "スポーツインストラクター" },
  // CA09 / OG24 警備・清掃・施設管理
  { careerId: "CA09", careerLabel: "サービス・生活関連", groupId: "OG24", groupLabel: "警備・清掃・施設管理", occupationId: "OC55", occupationLabel: "警備・セキュリティ", specialtyId: "SO162", specialtyLabel: "施設警備・交通誘導警備員" },
  { careerId: "CA09", careerLabel: "サービス・生活関連", groupId: "OG24", groupLabel: "警備・清掃・施設管理", occupationId: "OC56", occupationLabel: "ビルメンテナンス", specialtyId: "SO163", specialtyLabel: "ビルメンテナンス技術者" },
  // CA10 食品・飲食 / OG25 飲食・外食
  { careerId: "CA10", careerLabel: "食品・飲食", groupId: "OG25", groupLabel: "飲食・外食", occupationId: "OC57", occupationLabel: "調理・キッチン", specialtyId: "SO164", specialtyLabel: "料理人・シェフ（和洋中）" },
  { careerId: "CA10", careerLabel: "食品・飲食", groupId: "OG25", groupLabel: "飲食・外食", occupationId: "OC57", occupationLabel: "調理・キッチン", specialtyId: "SO165", specialtyLabel: "フードコーディネーター" },
  { careerId: "CA10", careerLabel: "食品・飲食", groupId: "OG25", groupLabel: "飲食・外食", occupationId: "OC58", occupationLabel: "飲食店管理・SV", specialtyId: "SO166", specialtyLabel: "飲食店舗マネージャー（店長）" },
  { careerId: "CA10", careerLabel: "食品・飲食", groupId: "OG25", groupLabel: "飲食・外食", occupationId: "OC58", occupationLabel: "飲食店管理・SV", specialtyId: "SO167", specialtyLabel: "飲食チェーンSV（スーパーバイザー）" },
  // CA11 官公庁・公共 / OG26 行政・公務
  { careerId: "CA11", careerLabel: "官公庁・公共", groupId: "OG26", groupLabel: "行政・公務", occupationId: "OC59", occupationLabel: "国家公務員", specialtyId: "SO168", specialtyLabel: "国家公務員一般職・総合職" },
  { careerId: "CA11", careerLabel: "官公庁・公共", groupId: "OG26", groupLabel: "行政・公務", occupationId: "OC59", occupationLabel: "国家公務員", specialtyId: "SO169", specialtyLabel: "国家専門職（国税・労基・外交官）" },
  { careerId: "CA11", careerLabel: "官公庁・公共", groupId: "OG26", groupLabel: "行政・公務", occupationId: "OC60", occupationLabel: "地方公務員", specialtyId: "SO170", specialtyLabel: "都道府県・市区町村職員" },
  { careerId: "CA11", careerLabel: "官公庁・公共", groupId: "OG26", groupLabel: "行政・公務", occupationId: "OC60", occupationLabel: "地方公務員", specialtyId: "SO171", specialtyLabel: "消防士・警察官" },
  // CA11 / OG27 公共・団体
  { careerId: "CA11", careerLabel: "官公庁・公共", groupId: "OG27", groupLabel: "公共・団体", occupationId: "OC61", occupationLabel: "独立行政法人・公益法人", specialtyId: "SO172", specialtyLabel: "独立行政法人研究員・職員" },
  { careerId: "CA11", careerLabel: "官公庁・公共", groupId: "OG27", groupLabel: "公共・団体", occupationId: "OC61", occupationLabel: "独立行政法人・公益法人", specialtyId: "SO173", specialtyLabel: "公益財団・NPO職員" },
  { careerId: "CA11", careerLabel: "官公庁・公共", groupId: "OG27", groupLabel: "公共・団体", occupationId: "OC62", occupationLabel: "教育行政・福祉行政", specialtyId: "SO174", specialtyLabel: "社会福祉士・生活保護担当" },
  { careerId: "CA11", careerLabel: "官公庁・公共", groupId: "OG27", groupLabel: "公共・団体", occupationId: "OC62", occupationLabel: "教育行政・福祉行政", specialtyId: "SO175", specialtyLabel: "学校事務・教育委員会職員" },
  // CA12 商社 / OG28 商社営業・トレーディング
  { careerId: "CA12", careerLabel: "商社", groupId: "OG28", groupLabel: "商社営業・トレーディング", occupationId: "OC63", occupationLabel: "総合商社営業", specialtyId: "SO176", specialtyLabel: "資源・エネルギートレーダー" },
  { careerId: "CA12", careerLabel: "商社", groupId: "OG28", groupLabel: "商社営業・トレーディング", occupationId: "OC63", occupationLabel: "総合商社営業", specialtyId: "SO177", specialtyLabel: "プラント・インフラ海外事業営業" },
  { careerId: "CA12", careerLabel: "商社", groupId: "OG28", groupLabel: "商社営業・トレーディング", occupationId: "OC64", occupationLabel: "専門商社営業", specialtyId: "SO178", specialtyLabel: "専門商社営業（IT・食品・化学・鉄鋼等）" },
  { careerId: "CA12", careerLabel: "商社", groupId: "OG28", groupLabel: "商社営業・トレーディング", occupationId: "OC64", occupationLabel: "専門商社営業", specialtyId: "SO179", specialtyLabel: "仕入れ・バイヤー（商社）" },
  // CA12 / OG29 商社企画・管理
  { careerId: "CA12", careerLabel: "商社", groupId: "OG29", groupLabel: "商社企画・管理", occupationId: "OC65", occupationLabel: "トレードファイナンス・事業企画", specialtyId: "SO180", specialtyLabel: "トレードファイナンス担当" },
  { careerId: "CA12", careerLabel: "商社", groupId: "OG29", groupLabel: "商社企画・管理", occupationId: "OC65", occupationLabel: "トレードファイナンス・事業企画", specialtyId: "SO181", specialtyLabel: "商社事業企画・新規事業開発" },
  // CA13 不動産・建設 / OG30 不動産営業・開発
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG30", groupLabel: "不動産営業・開発", occupationId: "OC66", occupationLabel: "不動産営業・仲介", specialtyId: "SO182", specialtyLabel: "不動産売買仲介営業（宅建士）" },
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG30", groupLabel: "不動産営業・開発", occupationId: "OC66", occupationLabel: "不動産営業・仲介", specialtyId: "SO183", specialtyLabel: "不動産賃貸仲介営業" },
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG30", groupLabel: "不動産営業・開発", occupationId: "OC67", occupationLabel: "不動産開発・用地仕入", specialtyId: "SO184", specialtyLabel: "不動産デベロッパー（用地取得）" },
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG30", groupLabel: "不動産営業・開発", occupationId: "OC67", occupationLabel: "不動産開発・用地仕入", specialtyId: "SO185", specialtyLabel: "不動産企画・事業開発担当" },
  // CA13 / OG31 不動産運用・管理
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG31", groupLabel: "不動産運用・管理", occupationId: "OC68", occupationLabel: "プロパティ・アセット管理", specialtyId: "SO186", specialtyLabel: "プロパティマネージャー（PM）" },
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG31", groupLabel: "不動産運用・管理", occupationId: "OC68", occupationLabel: "プロパティ・アセット管理", specialtyId: "SO187", specialtyLabel: "アセットマネージャー（AM）" },
  // CA13 / OG32 建設・施工
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG32", groupLabel: "建設・施工", occupationId: "OC69", occupationLabel: "施工管理", specialtyId: "SO188", specialtyLabel: "建築施工管理技士（一般建築）" },
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG32", groupLabel: "建設・施工", occupationId: "OC69", occupationLabel: "施工管理", specialtyId: "SO189", specialtyLabel: "土木施工管理技士（インフラ）" },
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG32", groupLabel: "建設・施工", occupationId: "OC70", occupationLabel: "設計・積算", specialtyId: "SO190", specialtyLabel: "建築設計士（意匠・構造）" },
  { careerId: "CA13", careerLabel: "不動産・建設", groupId: "OG32", groupLabel: "建設・施工", occupationId: "OC70", occupationLabel: "設計・積算", specialtyId: "SO191", specialtyLabel: "設備設計・積算担当" },
  // CA14 小売・流通 / OG33 店舗・販売
  { careerId: "CA14", careerLabel: "小売・流通", groupId: "OG33", groupLabel: "店舗・販売", occupationId: "OC71", occupationLabel: "販売スタッフ・店長", specialtyId: "SO192", specialtyLabel: "小売店販売スタッフ・店長" },
  { careerId: "CA14", careerLabel: "小売・流通", groupId: "OG33", groupLabel: "店舗・販売", occupationId: "OC71", occupationLabel: "販売スタッフ・店長", specialtyId: "SO193", specialtyLabel: "アパレル販売スタッフ・ショップマネージャー" },
  // CA14 / OG34 商品企画・MD
  { careerId: "CA14", careerLabel: "小売・流通", groupId: "OG34", groupLabel: "商品企画・MD", occupationId: "OC72", occupationLabel: "バイヤー・MD", specialtyId: "SO194", specialtyLabel: "バイヤー・仕入れ担当" },
  { careerId: "CA14", careerLabel: "小売・流通", groupId: "OG34", groupLabel: "商品企画・MD", occupationId: "OC72", occupationLabel: "バイヤー・MD", specialtyId: "SO195", specialtyLabel: "マーチャンダイザー（MD）・VMD" },
  { careerId: "CA14", careerLabel: "小売・流通", groupId: "OG34", groupLabel: "商品企画・MD", occupationId: "OC73", occupationLabel: "店舗開発・エリアSV", specialtyId: "SO196", specialtyLabel: "スーパーバイザー・エリアマネージャー" },
  { careerId: "CA14", careerLabel: "小売・流通", groupId: "OG34", groupLabel: "商品企画・MD", occupationId: "OC73", occupationLabel: "店舗開発・エリアSV", specialtyId: "SO197", specialtyLabel: "店舗開発・FC開発担当" },
  // CA14 / OG35 EC・デジタル流通
  { careerId: "CA14", careerLabel: "小売・流通", groupId: "OG35", groupLabel: "EC・デジタル流通", occupationId: "OC74", occupationLabel: "EC・通販運営", specialtyId: "SO198", specialtyLabel: "ECサイト運営・通販MD" },
  { careerId: "CA14", careerLabel: "小売・流通", groupId: "OG35", groupLabel: "EC・デジタル流通", occupationId: "OC74", occupationLabel: "EC・通販運営", specialtyId: "SO199", specialtyLabel: "ECカスタマーサービス・フルフィルメント管理" },
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
