// 2022 - 06 - 17

const banks = [
  {
    code: 1,
    name: "Banco do Brasil S.A."
  },
  {
    code: 70,
    name: "BRB - BANCO DE BRASILIA S.A."
  },
  {
    code: null,
    name: "Banco Central do Brasil - Selic"
  },
  {
    code: null,
    name: "Banco Central do Brasil"
  },
  {
    code: 430,
    name: "COOPERATIVA DE CREDITO RURAL SEARA - CREDISEARA"
  },
  {
    code: 272,
    name: "AGK CORRETORA DE CAMBIO S.A."
  },
  {
    code: 136,
    name: "CONFEDERAÇÃO NACIONAL DAS COOPERATIVAS CENTRAIS UNICRED LTDA. - UNICRED DO BRASI"
  },
  {
    code: 407,
    name: "ÍNDIGO INVESTIMENTOS DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA."
  },
  {
    code: 104,
    name: "CAIXA ECONOMICA FEDERAL"
  },
  {
    code: null,
    name: "Secretaria do Tesouro Nacional - STN"
  },
  {
    code: 77,
    name: "Banco Inter S.A."
  },
  {
    code: 423,
    name: "COLUNA S/A DISTRIBUIDORA DE TITULOS E VALORES MOBILIÁRIOS"
  },
  {
    code: 741,
    name: "BANCO RIBEIRAO PRETO S.A."
  },
  {
    code: 330,
    name: "BANCO BARI DE INVESTIMENTOS E FINANCIAMENTOS S.A."
  },
  {
    code: 739,
    name: "Banco Cetelem S.A."
  },
  {
    code: 743,
    name: "Banco Semear S.A."
  },
  {
    code: 100,
    name: "Planner Corretora de Valores S.A."
  },
  {
    code: 96,
    name: "Banco B3 S.A."
  },
  {
    code: 747,
    name: "Banco Rabobank International Brasil S.A."
  },
  {
    code: 362,
    name: "CIELO S.A."
  },
  {
    code: 322,
    name: "Cooperativa de Crédito Rural de Abelardo Luz - Sulcredi/Crediluz"
  },
  {
    code: 748,
    name: "BANCO COOPERATIVO SICREDI S.A."
  },
  {
    code: 350,
    name: "COOPERATIVA DE CRÉDITO RURAL DE PEQUENOS AGRICULTORES E DA REFORMA AGRÁRIA DO CE"
  },
  {
    code: 752,
    name: "Banco BNP Paribas Brasil S.A."
  },
  {
    code: 379,
    name: "COOPERFORTE - COOPERATIVA DE ECONOMIA E CRÉDITO MÚTUO DE FUNCIONÁRIOS DE INSTITU"
  },
  {
    code: 399,
    name: "Kirton Bank S.A. - Banco Múltiplo"
  },
  {
    code: 108,
    name: "\"PORTOCRED S.A. - CREDITO"
  },
  {
    code: 378,
    name: "BANCO BRASILEIRO DE CRÉDITO SOCIEDADE ANÔNIMA"
  },
  {
    code: 413,
    name: "BANCO BV S.A."
  },
  {
    code: 756,
    name: "BANCO COOPERATIVO SICOOB S.A. - BANCO SICOOB"
  },
  {
    code: 360,
    name: "TRINUS CAPITAL DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS S.A."
  },
  {
    code: 757,
    name: "BANCO KEB HANA DO BRASIL S.A."
  },
  {
    code: 102,
    name: "\"XP INVESTIMENTOS CORRETORA DE CÂMBIO"
  },
  {
    code: 84,
    name: "UNIPRIME DO BRASIL - COOPERATIVA DE CRéDITO LTDA."
  },
  {
    code: 180,
    name: "\"CM CAPITAL MARKETS CORRETORA DE CÂMBIO"
  },
  {
    code: 66,
    name: "BANCO MORGAN STANLEY S.A."
  },
  {
    code: 15,
    name: "\"UBS Brasil Corretora de Câmbio"
  },
  {
    code: 143,
    name: "Treviso Corretora de Câmbio S.A."
  },
  {
    code: null,
    name: "Câmara Interbancária de Pagamentos - CIP - LDL"
  },
  {
    code: 62,
    name: "Hipercard Banco Múltiplo S.A."
  },
  {
    code: 74,
    name: "Banco J. Safra S.A."
  },
  {
    code: 99,
    name: "UNIPRIME CENTRAL - CENTRAL NACIONAL DE COOPERATIVA DE CRÉDITO LTDA."
  },
  {
    code: 387,
    name: "Banco Toyota do Brasil S.A."
  },
  {
    code: 326,
    name: "\"PARATI - CREDITO"
  },
  {
    code: 25,
    name: "Banco Alfa S.A."
  },
  {
    code: 315,
    name: "PI Distribuidora de Títulos e Valores Mobiliários S.A."
  },
  {
    code: 75,
    name: "Banco ABN Amro S.A."
  },
  {
    code: 40,
    name: "Banco Cargill S.A."
  },
  {
    code: 307,
    name: "Terra Investimentos Distribuidora de Títulos e Valores Mobiliários Ltda."
  },
  {
    code: 385,
    name: "COOPERATIVA DE ECONOMIA E CREDITO MUTUO DOS TRABALHADORES PORTUARIOS DA GRANDE V"
  },
  {
    code: 425,
    name: "\"SOCINAL S.A. - CRÉDITO"
  },
  {
    code: 190,
    name: "SERVICOOP - COOPERATIVA DE CRÉDITO DOS SERVIDORES PÚBLICOS ESTADUAIS E MUNICIPAI"
  },
  {
    code: 296,
    name: "OZ CORRETORA DE CÂMBIO S.A."
  },
  {
    code: 63,
    name: "Banco Bradescard S.A."
  },
  {
    code: 191,
    name: "Nova Futura Corretora de Títulos e Valores Mobiliários Ltda."
  },
  {
    code: 382,
    name: "FIDÚCIA SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO PORTE L"
  },
  {
    code: 64,
    name: "GOLDMAN SACHS DO BRASIL BANCO MULTIPLO S.A."
  },
  {
    code: null,
    name: "Câmara Interbancária de Pagamentos"
  },
  {
    code: 459,
    name: "COOPERATIVA DE CRÉDITO MÚTUO DE SERVIDORES PÚBLICOS DO ESTADO DE SÃO PAULO - CRE"
  },
  {
    code: 97,
    name: "Credisis - Central de Cooperativas de Crédito Ltda."
  },
  {
    code: 16,
    name: "COOPERATIVA DE CRÉDITO MÚTUO DOS DESPACHANTES DE TRÂNSITO DE SANTA CATARINA E RI"
  },
  {
    code: 299,
    name: "BANCO SOROCRED S.A. - BANCO MÚLTIPLO"
  },
  {
    code: 468,
    name: "\"PORTOSEG S.A. - CREDITO"
  },
  {
    code: 12,
    name: "Banco Inbursa S.A."
  },
  {
    code: 3,
    name: "BANCO DA AMAZONIA S.A."
  },
  {
    code: 60,
    name: "Confidence Corretora de Câmbio S.A."
  },
  {
    code: 37,
    name: "Banco do Estado do Pará S.A."
  },
  {
    code: 411,
    name: "\"Via Certa Financiadora S.A. - Crédito"
  },
  {
    code: 359,
    name: "\"ZEMA CRÉDITO"
  },
  {
    code: 159,
    name: "Casa do Crédito S.A. Sociedade de Crédito ao Microempreendedor"
  },
  {
    code: 85,
    name: "Cooperativa Central de Crédito - Ailos"
  },
  {
    code: 400,
    name: "\"COOPERATIVA DE CRÉDITO"
  },
  {
    code: 429,
    name: "\"Crediare S.A. - Crédito"
  },
  {
    code: 410,
    name: "PLANNER SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR S.A."
  },
  {
    code: 114,
    name: "Central Cooperativa de Crédito no Estado do Espírito Santo - CECOOP"
  },
  {
    code: 328,
    name: "COOPERATIVA DE ECONOMIA E CRÉDITO MÚTUO DOS FABRICANTES DE CALÇADOS DE SAPIRANGA"
  },
  {
    code: 36,
    name: "Banco Bradesco BBI S.A."
  },
  {
    code: 469,
    name: "J&F DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA"
  },
  {
    code: 394,
    name: "Banco Bradesco Financiamentos S.A."
  },
  {
    code: 4,
    name: "Banco do Nordeste do Brasil S.A."
  },
  {
    code: 458,
    name: "HEDGE INVESTMENTS DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA."
  },
  {
    code: 320,
    name: "China Construction Bank (Brasil) Banco Múltiplo S/A"
  },
  {
    code: 189,
    name: "\"HS FINANCEIRA S/A CREDITO"
  },
  {
    code: 105,
    name: "\"Lecca Crédito"
  },
  {
    code: 76,
    name: "Banco KDB do Brasil S.A."
  },
  {
    code: 82,
    name: "BANCO TOPÁZIO S.A."
  },
  {
    code: 312,
    name: "HSCM - SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO PORTE LT"
  },
  {
    code: 195,
    name: "VALOR SOCIEDADE DE CRÉDITO DIRETO S.A."
  },
  {
    code: 286,
    name: "COOPERATIVA DE CRÉDITO RURAL DE OURO   SULCREDI/OURO"
  },
  {
    code: 93,
    name: "PÓLOCRED   SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO PORT"
  },
  {
    code: 391,
    name: "COOPERATIVA DE CREDITO RURAL DE IBIAM - SULCREDI/IBIAM"
  },
  {
    code: 273,
    name: "Cooperativa de Crédito Rural de São Miguel do Oeste - Sulcredi/São Miguel"
  },
  {
    code: 368,
    name: "Banco CSF S.A."
  },
  {
    code: 290,
    name: "PAGSEGURO INTERNET INSTITUIÇÃO DE PAGAMENTO S.A."
  },
  {
    code: 259,
    name: "MONEYCORP BANCO DE CÂMBIO S.A."
  },
  {
    code: 395,
    name: "F.D'GOLD - DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA."
  },
  {
    code: 364,
    name: "GERENCIANET S.A."
  },
  {
    code: 157,
    name: "ICAP do Brasil Corretora de Títulos e Valores Mobiliários Ltda."
  },
  {
    code: 183,
    name: "SOCRED S.A. - SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO P"
  },
  {
    code: 14,
    name: "STATE STREET BRASIL S.A. - BANCO COMERCIAL"
  },
  {
    code: 130,
    name: "\"CARUANA S.A. - SOCIEDADE DE CRÉDITO"
  },
  {
    code: 358,
    name: "\"MIDWAY S.A. - CRÉDITO"
  },
  {
    code: 127,
    name: "Codepe Corretora de Valores e Câmbio S.A."
  },
  {
    code: 79,
    name: "Banco Original do Agronegócio S.A."
  },
  {
    code: 340,
    name: "Super Pagamentos e Administração de Meios Eletrônicos S.A."
  },
  {
    code: 81,
    name: "BancoSeguro S.A."
  },
  {
    code: 133,
    name: "CONFEDERAÇÃO NACIONAL DAS COOPERATIVAS CENTRAIS DE CRÉDITO E ECONOMIA FAMILIAR E"
  },
  {
    code: 323,
    name: "MERCADO PAGO INSTITUIÇÃO DE PAGAMENTO LTDA."
  },
  {
    code: 121,
    name: "Banco Agibank S.A."
  },
  {
    code: 83,
    name: "Banco da China Brasil S.A."
  },
  {
    code: 138,
    name: "Get Money Corretora de Câmbio S.A."
  },
  {
    code: 24,
    name: "Banco Bandepe S.A."
  },
  {
    code: 384,
    name: "GLOBAL FINANÇAS SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO"
  },
  {
    code: 426,
    name: "\"Biorc Financeira - Crédito"
  },
  {
    code: 88,
    name: "BANCO RANDON S.A."
  },
  {
    code: 319,
    name: "OM DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA"
  },
  {
    code: 274,
    name: "MONEY PLUS SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E A EMPRESA DE PEQUENO PORT"
  },
  {
    code: 95,
    name: "Travelex Banco de Câmbio S.A."
  },
  {
    code: 94,
    name: "Banco Finaxis S.A."
  },
  {
    code: 478,
    name: "\"GAZINCRED S.A. SOCIEDADE DE CRÉDITO"
  },
  {
    code: 276,
    name: "BANCO SENFF S.A."
  },
  {
    code: 447,
    name: "\"MIRAE ASSET WEALTH MANAGEMENT (BRAZIL) CORRETORA DE CÂMBIO"
  },
  {
    code: 92,
    name: "\"BRK S.A. Crédito"
  },
  {
    code: 47,
    name: "Banco do Estado de Sergipe S.A."
  },
  {
    code: 144,
    name: "BEXS BANCO DE CÂMBIO S/A"
  },
  {
    code: 332,
    name: "Acesso Soluções de Pagamento S.A."
  },
  {
    code: 450,
    name: "FITBANK PAGAMENTOS ELETRONICOS S.A."
  },
  {
    code: 126,
    name: "BR Partners Banco de Investimento S.A."
  },
  {
    code: 325,
    name: "Órama Distribuidora de Títulos e Valores Mobiliários S.A."
  },
  {
    code: 301,
    name: "BPP Instituição de Pagamento S.A."
  },
  {
    code: 173,
    name: "BRL Trust Distribuidora de Títulos e Valores Mobiliários S.A."
  },
  {
    code: 331,
    name: "Fram Capital Distribuidora de Títulos e Valores Mobiliários S.A."
  },
  {
    code: 119,
    name: "Banco Western Union do Brasil S.A."
  },
  {
    code: 396,
    name: "HUB PAGAMENTOS S.A"
  },
  {
    code: 309,
    name: "CAMBIONET CORRETORA DE CÂMBIO LTDA."
  },
  {
    code: 254,
    name: "PARANÁ BANCO S.A."
  },
  {
    code: 268,
    name: "BARI COMPANHIA HIPOTECÁRIA"
  },
  {
    code: 401,
    name: "IUGU INSTITUIÇÃO DE PAGAMENTO S.A."
  },
  {
    code: 107,
    name: "Banco Bocom BBM S.A."
  },
  {
    code: 412,
    name: "SOCIAL BANK BANCO MÚLTIPLO S/A"
  },
  {
    code: 124,
    name: "Banco Woori Bank do Brasil S.A."
  },
  {
    code: 149,
    name: "Facta Financeira S.A. - Crédito Financiamento e Investimento"
  },
  {
    code: 197,
    name: "STONE INSTITUIÇÃO DE PAGAMENTO S.A."
  },
  {
    code: 439,
    name: "ID CORRETORA DE TÍTULOS E VALORES MOBILIÁRIOS S.A."
  },
  {
    code: 313,
    name: "AMAZÔNIA CORRETORA DE CÂMBIO LTDA."
  },
  {
    code: 142,
    name: "Broker Brasil Corretora de Câmbio Ltda."
  },
  {
    code: 389,
    name: "Banco Mercantil do Brasil S.A."
  },
  {
    code: 184,
    name: "Banco Itaú BBA S.A."
  },
  {
    code: 634,
    name: "BANCO TRIANGULO S.A."
  },
  {
    code: 545,
    name: "SENSO CORRETORA DE CAMBIO E VALORES MOBILIARIOS S.A"
  },
  {
    code: 132,
    name: "ICBC do Brasil Banco Múltiplo S.A."
  },
  {
    code: 298,
    name: "Vip's Corretora de Câmbio Ltda."
  },
  {
    code: 377,
    name: "BMS SOCIEDADE DE CRÉDITO DIRETO S.A."
  },
  {
    code: 321,
    name: "CREFAZ SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E A EMPRESA DE PEQUENO PORTE LT"
  },
  {
    code: 260,
    name: "NU PAGAMENTOS S.A. - INSTITUIÇÃO DE PAGAMENTO"
  },
  {
    code: 470,
    name: "CDC SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESADE PEQUENO PORTE LTDA."
  },
  {
    code: 129,
    name: "UBS Brasil Banco de Investimento S.A."
  },
  {
    code: 128,
    name: "MS Bank S.A. Banco de Câmbio"
  },
  {
    code: 416,
    name: "LAMARA SOCIEDADE DE CRÉDITO DIRETO S.A."
  },
  {
    code: 461,
    name: "ASAAS GESTÃO FINANCEIRA INSTITUIÇÃO DE PAGAMENTO S.A."
  },
  {
    code: 194,
    name: "PARMETAL DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA"
  },
  {
    code: 383,
    name: "EBANX INSTITUICAO DE PAGAMENTOS LTDA."
  },
  {
    code: 324,
    name: "CARTOS SOCIEDADE DE CRÉDITO DIRETO S.A."
  },
  {
    code: 310,
    name: "VORTX DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA."
  },
  {
    code: 380,
    name: "PICPAY INSTITUIçãO DE PAGAMENTO S.A."
  },
  {
    code: 163,
    name: "Commerzbank Brasil S.A. - Banco Múltiplo"
  },
  {
    code: 280,
    name: "\"WILL FINANCEIRA S.A. CRÉDITO"
  },
  {
    code: 146,
    name: "GUITTA CORRETORA DE CAMBIO LTDA."
  },
  {
    code: 343,
    name: "FFA SOCIEDADE DE CRÉDITO AO MICROEMPREENDEDOR E À EMPRESA DE PEQUENO PORTE LTDA."
  },
  {
    code: 279,
    name: "COOPERATIVA DE CREDITO RURAL DE PRIMAVERA DO LESTE"
  },
  {
    code: 335,
    name: "Banco Digio S.A."
  },
  {
    code: 349,
    name: "\"AL5 S.A. CRÉDITO"
  },
  {
    code: 427,
    name: "COOPERATIVA DE CREDITO DOS SERVIDORES DA UNIVERSIDADE FEDERAL DO ESPIRITO SANTO"
  },
  {
    code: 374,
    name: "\"REALIZE CRÉDITO"
  },
  {
    code: 278,
    name: "Genial Investimentos Corretora de Valores Mobiliários S.A."
  },
  {
    code: 271,
    name: "\"IB Corretora de Câmbio"
  },
  {
    code: 21,
    name: "BANESTES S.A. BANCO DO ESTADO DO ESPIRITO SANTO"
  },
  {
    code: 246,
    name: "Banco ABC Brasil S.A."
  },
  {
    code: 292,
    name: "BS2 Distribuidora de Títulos e Valores Mobiliários S.A."
  },
  {
    code: null,
    name: "Sistema do Balcão B3"
  },
  {
    code: null,
    name: "Câmara Interbancária de Pagamentos - CIP C3"
  },
  {
    code: 751,
    name: "Scotiabank Brasil S.A. Banco Múltiplo"
  },
  {
    code: 352,
    name: "TORO CORRETORA DE TÍTULOS E VALORES MOBILIÁRIOS S.A."
  },
  {
    code: 208,
    name: "Banco BTG Pactual S.A."
  },
  {
    code: 386,
    name: "\"NU FINANCEIRA S.A. - Sociedade de Crédito"
  },
  {
    code: 746,
    name: "Banco Modal S.A."
  },
  {
    code: 241,
    name: "BANCO CLASSICO S.A."
  },
  {
    code: 398,
    name: "IDEAL CORRETORA DE TÍTULOS E VALORES MOBILIÁRIOS S.A."
  },
  {
    code: 336,
    name: "Banco C6 S.A."
  },
  {
    code: 612,
    name: "Banco Guanabara S.A."
  },
  {
    code: 604,
    name: "Banco Industrial do Brasil S.A."
  },
  {
    code: 505,
    name: "Banco Credit Suisse (Brasil) S.A."
  },
  {
    code: 329,
    name: "QI Sociedade de Crédito Direto S.A."
  },
  {
    code: 196,
    name: "FAIR CORRETORA DE CAMBIO S.A."
  },
  {
    code: 342,
    name: "Creditas Sociedade de Crédito Direto S.A."
  },
  {
    code: 300,
    name: "Banco de la Nacion Argentina"
  },
  {
    code: 477,
    name: "Citibank N.A."
  },
  {
    code: 266,
    name: "BANCO CEDULA S.A."
  },
  {
    code: 122,
    name: "Banco Bradesco BERJ S.A."
  },
  {
    code: 376,
    name: "BANCO J.P. MORGAN S.A."
  },
  {
    code: 348,
    name: "Banco XP S.A."
  },
  {
    code: 473,
    name: "Banco Caixa Geral - Brasil S.A."
  },
  {
    code: 745,
    name: "Banco Citibank S.A."
  },
  {
    code: 120,
    name: "BANCO RODOBENS S.A."
  },
  {
    code: 265,
    name: "Banco Fator S.A."
  },
  {
    code: 7,
    name: "BANCO NACIONAL DE DESENVOLVIMENTO ECONOMICO E SOCIAL"
  },
  {
    code: 188,
    name: "\"ATIVA INVESTIMENTOS S.A. CORRETORA DE TÍTULOS"
  },
  {
    code: 134,
    name: "BGC LIQUIDEZ DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA"
  },
  {
    code: 29,
    name: "Banco Itaú Consignado S.A."
  },
  {
    code: 467,
    name: "\"MASTER S/A CORRETORA DE CâMBIO"
  },
  {
    code: 243,
    name: "BANCO MASTER S/A"
  },
  {
    code: 397,
    name: "LISTO SOCIEDADE DE CREDITO DIRETO S.A."
  },
  {
    code: 78,
    name: "Haitong Banco de Investimento do Brasil S.A."
  },
  {
    code: 355,
    name: "ÓTIMO SOCIEDADE DE CRÉDITO DIRETO S.A."
  },
  {
    code: 367,
    name: "VITREO DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS S.A."
  },
  {
    code: 445,
    name: "\"PLANTAE S.A. - CRÉDITO"
  },
  {
    code: 373,
    name: "UP.P SOCIEDADE DE EMPRÉSTIMO ENTRE PESSOAS S.A."
  },
  {
    code: 111,
    name: "OLIVEIRA TRUST DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIARIOS S.A."
  },
  {
    code: 408,
    name: "BONUSPAGO SOCIEDADE DE CRÉDITO DIRETO S.A."
  },
  {
    code: 402,
    name: "COBUCCIO SOCIEDADE DE CRÉDITO DIRETO S.A."
  },
  {
    code: 404,
    name: "SUMUP SOCIEDADE DE CRÉDITO DIRETO S.A."
  },
  {
    code: 418,
    name: "ZIPDIN SOLUÇÕES DIGITAIS SOCIEDADE DE CRÉDITO DIRETO S/A"
  },
  {
    code: 414,
    name: "WORK SOCIEDADE DE CRÉDITO DIRETO S.A."
  },
  {
    code: 449,
    name: "DMCARD SOCIEDADE DE CRÉDITO DIRETO S.A."
  },
  {
    code: 406,
    name: "ACCREDITO - SOCIEDADE DE CRÉDITO DIRETO S.A."
  },
  {
    code: 403,
    name: "CORA SOCIEDADE DE CRÉDITO DIRETO S.A."
  },
  {
    code: 419,
    name: "NUMBRS SOCIEDADE DE CRÉDITO DIRETO S.A."
  },
  {
    code: 435,
    name: "DELCRED SOCIEDADE DE CRÉDITO DIRETO S.A."
  },
  {
    code: 421,
    name: "LAR COOPERATIVA DE CRÉDITO - LAR CREDI"
  },
  {
    code: 443,
    name: "CREDIHOME SOCIEDADE DE CRÉDITO DIRETO S.A."
  },
  {
    code: 457,
    name: "UY3 SOCIEDADE DE CRÉDITO DIRETO S/A"
  },
  {
    code: 428,
    name: "CRED-SYSTEM SOCIEDADE DE CRÉDITO DIRETO S.A."
  },
  {
    code: 448,
    name: "HEMERA DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA."
  },
  {
    code: 452,
    name: "CREDIFIT SOCIEDADE DE CRÉDITO DIRETO S.A."
  },
  {
    code: 462,
    name: "STARK SOCIEDADE DE CRÉDITO DIRETO S.A."
  },
  {
    code: 465,
    name: "CAPITAL CONSIG SOCIEDADE DE CRÉDITO DIRETO S.A."
  },
  {
    code: 306,
    name: "PORTOPAR DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA."
  },
  {
    code: 463,
    name: "AZUMI DISTRIBUIDORA DE TíTULOS E VALORES MOBILIáRIOS LTDA."
  },
  {
    code: 451,
    name: "J17 - SOCIEDADE DE CRÉDITO DIRETO S/A"
  },
  {
    code: 444,
    name: "TRINUS SOCIEDADE DE CRÉDITO DIRETO S.A."
  },
  {
    code: 454,
    name: "MÉRITO DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA."
  },
  {
    code: 460,
    name: "UNAVANTI SOCIEDADE DE CRÉDITO DIRETO S/A"
  },
  {
    code: 17,
    name: "BNY Mellon Banco S.A."
  },
  {
    code: 174,
    name: "\"PEFISA S.A. - CRÉDITO"
  },
  {
    code: 433,
    name: "BR-CAPITAL DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS S.A."
  },
  {
    code: 495,
    name: "Banco de La Provincia de Buenos Aires"
  },
  {
    code: 125,
    name: "BANCO GENIAL S.A."
  },
  {
    code: 488,
    name: "\"JPMorgan Chase Bank"
  },
  {
    code: 65,
    name: "Banco AndBank (Brasil) S.A."
  },
  {
    code: 492,
    name: "ING Bank N.V."
  },
  {
    code: 145,
    name: "LEVYCAM - CORRETORA DE CAMBIO E VALORES LTDA."
  },
  {
    code: null,
    name: "RSFN"
  },
  {
    code: 354,
    name: "NECTON INVESTIMENTOS  S.A. CORRETORA DE VALORES MOBILIÁRIOS E COMMODITIES"
  },
  {
    code: 253,
    name: "Bexs Corretora de Câmbio S/A"
  },
  {
    code: 269,
    name: "BANCO HSBC S.A."
  },
  {
    code: 213,
    name: "Banco Arbi S.A."
  },
  {
    code: null,
    name: "Câmara B3"
  },
  {
    code: 139,
    name: "Intesa Sanpaolo Brasil S.A. - Banco Múltiplo"
  },
  {
    code: 18,
    name: "Banco Tricury S.A."
  },
  {
    code: 422,
    name: "Banco Safra S.A."
  },
  {
    code: 630,
    name: "BANCO LETSBANK S.A."
  },
  {
    code: 224,
    name: "Banco Fibra S.A."
  },
  {
    code: 393,
    name: "Banco Volkswagen S.A."
  },
  {
    code: 600,
    name: "Banco Luso Brasileiro S.A."
  },
  {
    code: 390,
    name: "BANCO GM S.A."
  },
  {
    code: 623,
    name: "Banco Pan S.A."
  },
  {
    code: 655,
    name: "Banco Votorantim S.A."
  },
  {
    code: 479,
    name: "Banco ItauBank S.A."
  },
  {
    code: 456,
    name: "Banco MUFG Brasil S.A."
  },
  {
    code: 464,
    name: "Banco Sumitomo Mitsui Brasileiro S.A."
  },
  {
    code: 341,
    name: "ITAÚ UNIBANCO S.A."
  },
  {
    code: 237,
    name: "Banco Bradesco S.A."
  },
  {
    code: 381,
    name: "BANCO MERCEDES-BENZ DO BRASIL S.A."
  },
  {
    code: 613,
    name: "Omni Banco S.A."
  },
  {
    code: 652,
    name: "Itaú Unibanco Holding S.A."
  },
  {
    code: 637,
    name: "BANCO SOFISA S.A."
  },
  {
    code: null,
    name: "Câmara de Câmbio B3"
  },
  {
    code: 653,
    name: "BANCO VOITER S.A."
  },
  {
    code: 69,
    name: "Banco Crefisa S.A."
  },
  {
    code: 370,
    name: "Banco Mizuho do Brasil S.A."
  },
  {
    code: 249,
    name: "Banco Investcred Unibanco S.A."
  },
  {
    code: 318,
    name: "Banco BMG S.A."
  },
  {
    code: 626,
    name: "BANCO C6 CONSIGNADO S.A."
  },
  {
    code: 270,
    name: "Sagitur Corretora de Câmbio Ltda."
  },
  {
    code: 366,
    name: "BANCO SOCIETE GENERALE BRASIL S.A."
  },
  {
    code: 113,
    name: "NEON CORRETORA DE TÍTULOS E VALORES MOBILIÁRIOS S.A."
  },
  {
    code: 131,
    name: "TULLETT PREBON BRASIL CORRETORA DE VALORES E CÂMBIO LTDA"
  },
  {
    code: 11,
    name: "CREDIT SUISSE HEDGING-GRIFFO CORRETORA DE VALORES S.A"
  },
  {
    code: 611,
    name: "Banco Paulista S.A."
  },
  {
    code: 755,
    name: "Bank of America Merrill Lynch Banco Múltiplo S.A."
  },
  {
    code: 89,
    name: "CREDISAN COOPERATIVA DE CRÉDITO"
  },
  {
    code: 643,
    name: "Banco Pine S.A."
  },
  {
    code: 140,
    name: "NU INVEST CORRETORA DE VALORES S.A."
  },
  {
    code: 707,
    name: "Banco Daycoval S.A."
  },
  {
    code: 288,
    name: "CAROL DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LTDA."
  },
  {
    code: 363,
    name: "SINGULARE CORRETORA DE TÍTULOS E VALORES MOBILIÁRIOS S.A."
  },
  {
    code: 101,
    name: "RENASCENCA DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA"
  },
  {
    code: 487,
    name: "DEUTSCHE BANK S.A. - BANCO ALEMAO"
  },
  {
    code: 233,
    name: "Banco Cifra S.A."
  },
  {
    code: 177,
    name: "Guide Investimentos S.A. Corretora de Valores"
  },
  {
    code: 438,
    name: "PLANNER TRUSTEE DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA."
  },
  {
    code: 365,
    name: "SIMPAUL CORRETORA DE CAMBIO E VALORES MOBILIARIOS  S.A."
  },
  {
    code: 633,
    name: "Banco Rendimento S.A."
  },
  {
    code: 218,
    name: "Banco BS2 S.A."
  },
  {
    code: 293,
    name: "Lastro RDV Distribuidora de Títulos e Valores Mobiliários Ltda."
  },
  {
    code: 285,
    name: "Frente Corretora de Câmbio Ltda."
  },
  {
    code: 80,
    name: "B&T CORRETORA DE CAMBIO LTDA."
  },
  {
    code: 753,
    name: "Novo Banco Continental S.A. - Banco Múltiplo"
  },
  {
    code: 222,
    name: "BANCO CRÉDIT AGRICOLE BRASIL S.A."
  },
  {
    code: 281,
    name: "Cooperativa de Crédito Rural Coopavel"
  },
  {
    code: 754,
    name: "Banco Sistema S.A."
  },
  {
    code: 311,
    name: "DOURADA CORRETORA DE CÂMBIO LTDA."
  },
  {
    code: 98,
    name: "Credialiança Cooperativa de Crédito Rural"
  },
  {
    code: 610,
    name: "Banco VR S.A."
  },
  {
    code: 712,
    name: "Banco Ourinvest S.A."
  },
  {
    code: 720,
    name: "BANCO RNX S.A."
  },
  {
    code: 10,
    name: "CREDICOAMO CREDITO RURAL COOPERATIVA"
  },
  {
    code: 440,
    name: "CREDIBRF - COOPERATIVA DE CRÉDITO"
  },
  {
    code: 442,
    name: "MAGNETIS - DISTRIBUIDORA DE TÍTULOS E VALORES MOBILIÁRIOS LTDA"
  },
  {
    code: 283,
    name: "RB INVESTIMENTOS DISTRIBUIDORA DE TITULOS E VALORES MOBILIARIOS LIMITADA"
  },
  {
    code: 33,
    name: "BANCO SANTANDER (BRASIL) S.A."
  },
  {
    code: 217,
    name: "Banco John Deere S.A."
  },
  {
    code: 41,
    name: "Banco do Estado do Rio Grande do Sul S.A."
  },
  {
    code: 117,
    name: "ADVANCED CORRETORA DE CÂMBIO LTDA"
  },
  {
    code: 654,
    name: "BANCO DIGIMAIS S.A."
  },
  {
    code: 371,
    name: "WARREN CORRETORA DE VALORES MOBILIÁRIOS E CÂMBIO LTDA."
  },
  {
    code: 212,
    name: "Banco Original S.A."
  },
  {
    code: 289,
    name: "EFX CORRETORA DE CÂMBIO LTDA."
  }
]

export { banks }
