/**
 * Resources, Tax News, Insights, and Guides Data
 * Bilingual (EN / RU) content accurately transcribing all attached PDF specifications.
 */

export const resourceCategories = [
    { id: 'all', en: 'All Resources', ru: 'Все материалы' },
    { id: 'tax-news', en: 'Tax News', ru: 'Новости' },
    { id: 'insights', en: 'Insights', ru: 'Полезное' },
    { id: 'guides', en: 'Guides', ru: 'Инструкции' }
];

export const resourcesData = [
    {
        id: 'irs-mobile-app',
        slug: 'irs-mobile-app',
        category: 'tax-news',
        readTime: { en: '3 min read', ru: '3 мин чтения' },
        date: '2026-09-29',
        source: {
            en: 'IRS Tax Tip 2026-71, September 29, 2026',
            ru: 'IRS Tax Tip 2026-71, 29 сентября 2026 г.'
        },
        en: {
            title: 'IRS Launches a New Mobile App for Taxpayers',
            summary: 'The IRS has launched a new official mobile app replacing IRS2Go, offering taxpayers a secure and expanded way to manage their account, check refund status, view balances, make payments, and retrieve an IP PIN.',
            sections: [
                {
                    type: 'paragraph',
                    text: 'The IRS has launched a new official mobile app, giving taxpayers an easier way to access tax information and selected IRS services directly from their phones. The new IRS app replaces the former IRS2Go app.'
                },
                {
                    type: 'heading',
                    text: 'What Can You Do in the New IRS App?'
                },
                {
                    type: 'paragraph',
                    text: 'Taxpayers can securely sign in and access several useful account features, including:'
                },
                {
                    type: 'list',
                    items: [
                        'Check the status of a tax refund or amended return',
                        'View available balance information',
                        'Make tax payments and review payment activity',
                        'View certain IRS notices and letters',
                        'Access available tax records and transcripts',
                        'Manage certain profile and communication preferences',
                        'Access an Identity Protection PIN (IP PIN)'
                    ]
                },
                {
                    type: 'heading',
                    text: 'How Is the New IRS App Different from IRS2Go?'
                },
                {
                    type: 'paragraph',
                    text: 'The former IRS2Go app focused mainly on basic services such as checking refund status, making payments and accessing IRS information.'
                },
                {
                    type: 'paragraph',
                    text: 'The new IRS app offers broader access to a taxpayer’s IRS account. Users can now securely sign in to view balances and payment activity, access certain notices and tax transcripts, retrieve an IP PIN, and manage selected account preferences — features that were not part of the traditional IRS2Go experience.'
                },
                {
                    type: 'callout',
                    text: 'In other words, the new app is moving beyond a basic IRS mobile tool toward mobile access to selected Individual Online Account services.'
                },
                {
                    type: 'heading',
                    text: 'Do You Need to Download a New App?'
                },
                {
                    type: 'paragraph',
                    text: 'If you already use IRS2Go, you generally do not need to download a separate application. Users who have automatic updates enabled should receive the new IRS app through the normal update process.'
                },
                {
                    type: 'paragraph',
                    text: 'For new users, the app is available free through the Apple App Store and Google Play.'
                },
                {
                    type: 'heading',
                    text: 'Does the App Replace IRS.gov?'
                },
                {
                    type: 'paragraph',
                    text: 'No. The new app provides mobile access to selected services available through an IRS Individual Online Account, but it does not replace IRS.gov or the full IRS online account.'
                },
                {
                    type: 'paragraph',
                    text: 'IRS.gov will continue to provide tax forms, guidance, tools, and other services that may not be available through the mobile app.'
                },
                {
                    type: 'heading',
                    text: 'Be Careful With Fake IRS Apps'
                },
                {
                    type: 'paragraph',
                    text: 'The IRS also warns taxpayers to be cautious of fake apps, advertisements, emails, and messages that may attempt to imitate official IRS services.'
                },
                {
                    type: 'paragraph',
                    text: 'The safest way to find the app is through verified links on IRS.gov or through the official listings in the Apple App Store and Google Play. The IRS will not request sensitive personal or financial information through an unsolicited text message, email, or pop-up.'
                },
                {
                    type: 'heading',
                    text: 'Why This Matters'
                },
                {
                    type: 'paragraph',
                    text: 'The new app makes several common IRS tasks more accessible from a mobile device. Instead of navigating through multiple pages on IRS.gov, taxpayers can now quickly check a refund, review a balance, access certain notices and transcripts, or make a payment from their phone.'
                }
            ]
        },
        ru: {
            title: 'IRS запускает новое мобильное приложение для налогоплательщиков',
            summary: 'Налоговая служба США (IRS) выпустила новое официальное мобильное приложение на замену IRS2Go, предоставляющее удобный и защищенный доступ к балансу, статусу возврата, платежам, выпискам и получению IP PIN.',
            sections: [
                {
                    type: 'paragraph',
                    text: 'IRS запустила новое официальное мобильное приложение, предоставив налогоплательщикам более простой способ доступа к налоговой информации и отдельным сервисам IRS прямо со смартфонов. Новое приложение IRS приходит на смену прежнему приложению IRS2Go.'
                },
                {
                    type: 'heading',
                    text: 'Что можно делать в новом приложении IRS?'
                },
                {
                    type: 'paragraph',
                    text: 'Налогоплательщики могут безопасно войти в систему и воспользоваться полезными функциями личного кабинета, включая:'
                },
                {
                    type: 'list',
                    items: [
                        'Проверка статуса возврата налога (tax refund) или исправленной декларации (amended return)',
                        'Просмотр информации о текущем балансе и задолженности',
                        'Совершение налоговых платежей и просмотр истории оплат',
                        'Просмотр определенных уведомлений и писем от IRS',
                        'Доступ к налоговым выпискам и справкам (tax transcripts)',
                        'Управление профилем и предпочтениями в получении уведомлений',
                        'Получение защитного PIN-кода (Identity Protection PIN — IP PIN)'
                    ]
                },
                {
                    type: 'heading',
                    text: 'Чем новое приложение отличается от IRS2Go?'
                },
                {
                    type: 'paragraph',
                    text: 'Прежнее приложение IRS2Go фокусировалось преимущественно на базовых сервисах: проверке статуса возврата, проведении платежей и доступе к общей справочной информации IRS.'
                },
                {
                    type: 'paragraph',
                    text: 'Новое приложение IRS предлагает более широкий функционал личного кабинета (IRS account). Пользователи могут защищенно входить для просмотра баланса, доступа к уведомлениям и транскриптам, получения IP PIN и настройки профиля — всего того, чего не было в традиционном IRS2Go.'
                },
                {
                    type: 'callout',
                    text: 'Иными словами, сервис переходит от статуса простого информатора к полноценному мобильному доступу к сервисам Individual Online Account.'
                },
                {
                    type: 'heading',
                    text: 'Нужно ли скачивать новое приложение?'
                },
                {
                    type: 'paragraph',
                    text: 'Если вы уже пользуетесь IRS2Go, скачивать отдельное приложение, как правило, не требуется. У пользователей с включенным автоматическим обновлением приложение обновится до новой версии автоматически.'
                },
                {
                    type: 'paragraph',
                    text: 'Для новых пользователей приложение доступно бесплатно в Apple App Store и Google Play.'
                },
                {
                    type: 'heading',
                    text: 'Заменяет ли приложение веб-сайт IRS.gov?'
                },
                {
                    type: 'paragraph',
                    text: 'Нет. Новое приложение предоставляет мобильный доступ к ключевым сервисам личного кабинета, но не заменяет IRS.gov или полный онлайн-аккаунт.'
                },
                {
                    type: 'paragraph',
                    text: 'IRS.gov продолжит оставаться главным ресурсом для скачивания форм, инструкций, профессиональных руководств и других сервисов.'
                },
                {
                    type: 'heading',
                    text: 'Остерегайтесь поддельных приложений IRS'
                },
                {
                    type: 'paragraph',
                    text: 'IRS также предупреждает налогоплательщиков о необходимости быть бдительными в отношении фейковых приложений, рекламы, спам-рассылок и сообщений, имитирующих сервисы налоговой службы.'
                },
                {
                    type: 'paragraph',
                    text: 'Самый надежный способ загрузить приложение — перейти по проверенным ссылкам на официальном сайте IRS.gov или найти официальное приложение в App Store и Google Play. Напоминаем: IRS никогда не запрашивает конфиденциальные личные или финансовые данные через нежелательные SMS, email или всплывающие окна.'
                },
                {
                    type: 'heading',
                    text: 'Почему это важно'
                },
                {
                    type: 'paragraph',
                    text: 'Новое приложение делает регулярные налоговые задачи гораздо более доступными. Вместо переходов по страницам веб-сайта теперь можно быстро проверить возврат, посмотреть сальдо счета, открыть налоговый транскрипт или оплатить налог прямо с телефона.'
                }
            ]
        }
    },
    {
        id: 'working-families-tax-cuts-2026',
        slug: 'working-families-tax-cuts-2026',
        category: 'tax-news',
        readTime: { en: '5 min read', ru: '5 мин чтения' },
        date: '2026-09-30',
        source: {
            en: 'IRS, Working Families Tax Cuts',
            ru: 'IRS, Working Families Tax Cuts (OBBBA)'
        },
        en: {
            title: 'Working Families Tax Cuts (OBBBA): Key Tax Changes for 2026',
            summary: 'An overview of major tax changes affecting individuals, families, employees, and business owners, including higher standard deductions, senior deductions, tip and overtime rules, car loan interest, and Trump accounts.',
            sections: [
                {
                    type: 'paragraph',
                    text: 'The IRS has published an updated overview of the Working Families Tax Cuts, highlighting a number of changes that affect individuals, families, employees, and business owners.'
                },
                {
                    type: 'paragraph',
                    text: 'Some provisions already took effect in 2025, while others become effective in 2026. Here are several of the changes taxpayers should know about.'
                },
                {
                    type: 'heading',
                    text: 'Higher Standard Deduction for 2026'
                },
                {
                    type: 'paragraph',
                    text: 'For tax year 2026, the standard deduction increases to:'
                },
                {
                    type: 'list',
                    items: [
                        '$32,200 for Married Filing Jointly',
                        '$16,100 for Single and Married Filing Separately',
                        '$24,150 for Head of Household'
                    ]
                },
                {
                    type: 'paragraph',
                    text: 'Tax brackets and several other tax thresholds have also been adjusted for inflation.'
                },
                {
                    type: 'heading',
                    text: 'New Deduction for Seniors'
                },
                {
                    type: 'paragraph',
                    text: 'From 2025 through 2028, taxpayers age 65 and older may qualify for an additional deduction of up to $6,000 per eligible individual.'
                },
                {
                    type: 'paragraph',
                    text: 'A married couple may qualify for up to $12,000 if both spouses meet the requirements.'
                },
                {
                    type: 'paragraph',
                    text: 'The deduction begins to phase out when Modified Adjusted Gross Income exceeds $75,000 for single taxpayers or $150,000 for married couples filing jointly. It is available whether the taxpayer itemizes deductions or takes the standard deduction.'
                },
                {
                    type: 'heading',
                    text: '“No Tax on Tips” Deduction'
                },
                {
                    type: 'paragraph',
                    text: 'Eligible employees and self-employed individuals may deduct up to $25,000 of qualified tip income for tax years 2025 through 2028.'
                },
                {
                    type: 'paragraph',
                    text: 'The deduction applies only to qualifying tips received in eligible occupations and begins to phase out when MAGI exceeds $150,000 for single filers or $300,000 for joint filers.'
                },
                {
                    type: 'callout',
                    text: 'Importantly, this is a deduction from income — it does not mean that all tips are completely exempt from every type of tax.'
                },
                {
                    type: 'heading',
                    text: 'New Overtime Deduction'
                },
                {
                    type: 'paragraph',
                    text: 'Taxpayers may also qualify for a deduction for certain qualified overtime compensation. The deduction generally applies to the overtime premium portion of pay — for example, the extra “half” in time-and-a-half compensation — rather than the employee’s entire overtime wage.'
                },
                {
                    type: 'paragraph',
                    text: 'The maximum deduction is:'
                },
                {
                    type: 'list',
                    items: [
                        '$12,500 for most taxpayers',
                        '$25,000 for Married Filing Jointly'
                    ]
                },
                {
                    type: 'paragraph',
                    text: 'The deduction is available from 2025 through 2028 and is subject to income phaseouts.'
                },
                {
                    type: 'heading',
                    text: 'Deduction for Car Loan Interest'
                },
                {
                    type: 'paragraph',
                    text: 'A new temporary deduction allows eligible taxpayers to deduct up to $10,000 per year of interest on certain loans used to purchase qualifying personal-use vehicles.'
                },
                {
                    type: 'paragraph',
                    text: 'Among other requirements, the loan generally must have originated after December 31, 2024, and the vehicle must have undergone final assembly in the United States.'
                },
                {
                    type: 'paragraph',
                    text: 'The deduction begins to phase out at MAGI above $100,000 for single taxpayers and $200,000 for married couples filing jointly. It is available for tax years 2025 through 2028.'
                },
                {
                    type: 'heading',
                    text: 'HSA Eligibility Expands in 2026'
                },
                {
                    type: 'paragraph',
                    text: 'Beginning January 1, 2026, more taxpayers may become eligible to contribute to a Health Savings Account.'
                },
                {
                    type: 'paragraph',
                    text: 'The new rules treat certain bronze and catastrophic health insurance plans as HSA-compatible, even if they previously did not meet the traditional High Deductible Health Plan definition.'
                },
                {
                    type: 'paragraph',
                    text: 'Certain direct primary care arrangements may also be used together with an HSA, and eligible HSA funds may be used tax-free to pay qualifying periodic direct primary care fees.'
                },
                {
                    type: 'heading',
                    text: 'New Trump Accounts for Children'
                },
                {
                    type: 'paragraph',
                    text: 'The law also created Trump Accounts, a new type of tax-advantaged account for eligible children. Parents, guardians, and others may establish an account for a qualifying child. Contributions cannot begin before July 4, 2026.'
                },
                {
                    type: 'paragraph',
                    text: 'Eligible children may also qualify for a one-time $1,000 federal government contribution, and annual authorized contributions generally may total up to $5,000. Employers may contribute up to $2,500 per year for an employee or dependent, subject to the applicable rules.'
                },
                {
                    type: 'heading',
                    text: 'Adoption Credit Becomes Partially Refundable'
                },
                {
                    type: 'paragraph',
                    text: 'Beginning with tax years after December 31, 2024, part of the Adoption Credit may be refundable. For 2026, the maximum adoption credit is $17,670, and up to $5,120 may be refundable.'
                },
                {
                    type: 'heading',
                    text: 'Some Clean Energy Credits Have Ended'
                },
                {
                    type: 'paragraph',
                    text: 'The law also accelerated the expiration of several clean-energy tax credits. The federal credits for new, used, and qualifying commercial clean vehicles generally are not available for vehicles acquired after September 30, 2025.'
                },
                {
                    type: 'paragraph',
                    text: 'The Energy Efficient Home Improvement Credit and Residential Clean Energy Credit generally ended for qualifying property or expenditures after December 31, 2025.'
                },
                {
                    type: 'heading',
                    text: 'Changes for Business Owners'
                },
                {
                    type: 'paragraph',
                    text: 'Business taxpayers also received several significant changes. One of the biggest is the return of 100% bonus depreciation for qualifying business property acquired after January 19, 2025. The provision is now permanent under the new law, subject to the applicable qualification rules.'
                },
                {
                    type: 'paragraph',
                    text: 'The employer tax credit for Paid Family and Medical Leave was also permanently expanded, including broader eligibility for certain employees and additional options for employers providing paid leave benefits.'
                },
                {
                    type: 'heading',
                    text: 'The Bottom Line'
                },
                {
                    type: 'paragraph',
                    text: 'The Working Families Tax Cuts introduced substantial changes affecting deductions, credits, healthcare accounts, families, and businesses.'
                },
                {
                    type: 'paragraph',
                    text: 'Many of the provisions are already effective, while others begin in 2026. Because several benefits have income limits, eligibility requirements, or special reporting rules, taxpayers should review how the changes apply to their individual situation rather than assuming that every new deduction automatically applies.'
                }
            ]
        },
        ru: {
            title: 'Working Families Tax Cuts (OBBBA): ключевые налоговые изменения на 2026 год',
            summary: 'Обзор масштабных налоговых изменений для физических лиц, семей, наемных сотрудников и владельцев бизнеса: новые стандартные вычеты, вычеты для пожилых людей, вычеты чаевых и сверхурочных, автокредиты и счета для детей.',
            sections: [
                {
                    type: 'paragraph',
                    text: 'IRS опубликовала обновленный обзор закона Working Families Tax Cuts, подчеркнув ряд важных изменений, затрагивающих частных лиц, семьи, работников и владельцев бизнеса.'
                },
                {
                    type: 'paragraph',
                    text: 'Некоторые положения вступили в силу еще в 2025 году, другие начинают действовать в 2026 году. Ниже приведены главные изменения, о которых следует знать налогоплательщикам.'
                },
                {
                    type: 'heading',
                    text: 'Повышенный стандартный вычет на 2026 год'
                },
                {
                    type: 'paragraph',
                    text: 'Для налогового года 2026 стандартный налоговый вычет (Standard Deduction) увеличен до:'
                },
                {
                    type: 'list',
                    items: [
                        '$32,200 — для состоящих в браке при совместной подаче (Married Filing Jointly)',
                        '$16,100 — для холостых (Single) и состоящих в браке при раздельной подаче (Married Filing Separately)',
                        '$24,150 — для глав домохозяйств (Head of Household)'
                    ]
                },
                {
                    type: 'paragraph',
                    text: 'Налоговые скобки (tax brackets) и ряд других порогов также были скорректированы с учетом инфляции.'
                },
                {
                    type: 'heading',
                    text: 'Новый вычет для пожилых людей (Seniors)'
                },
                {
                    type: 'paragraph',
                    text: 'С 2025 по 2028 год налогоплательщики в возрасте 65 лет и старше могут претендовать на дополнительный вычет до $6,000 на каждого подходящего человека.'
                },
                {
                    type: 'paragraph',
                    text: 'Супружеская пара может получить вычет до $12,000, если оба супруга соответствуют критериям.'
                },
                {
                    type: 'paragraph',
                    text: 'Вычет начинает постепенно снижаться (phase out), когда модифицированный скорректированный валовой доход (MAGI) превышает $75,000 для одиноких налогоплательщиков или $150,000 для супругов при совместной подаче. Вычет доступен как при стандартном, так и при детализированном вычете.'
                },
                {
                    type: 'heading',
                    text: 'Вычет «No Tax on Tips» (без налога на чаевые)'
                },
                {
                    type: 'paragraph',
                    text: 'Сотрудники и самозанятые могут вычитать до $25,000 квалифицированного дохода от чаевых в налоговых периодах с 2025 по 2028 год.'
                },
                {
                    type: 'paragraph',
                    text: 'Вычет применяется только к чаевым в квалифицированных профессиях и начинает уменьшаться при MAGI свыше $150,000 для одиночных деклараций или $300,000 для совместных.'
                },
                {
                    type: 'callout',
                    text: 'Важно: это вычет из налогооблагаемого дохода, а не полное освобождение чаевых от всех видов налогов.'
                },
                {
                    type: 'heading',
                    text: 'Новый вычет за сверхурочные (Overtime Deduction)'
                },
                {
                    type: 'paragraph',
                    text: 'Налогоплательщики также могут претендовать на вычет части квалифицированной оплаты за сверхурочную работу. Вычет применяется к надбавке за сверхурочные (например, к дополнительным «0.5» при оплате в полуторном размере), а не ко всей зарплате за сверхурочные часы.'
                },
                {
                    type: 'paragraph',
                    text: 'Максимальный размер вычета:'
                },
                {
                    type: 'list',
                    items: [
                        '$12,500 — для большинства налогоплательщиков',
                        '$25,000 — для супругов при совместной подаче (Married Filing Jointly)'
                    ]
                },
                {
                    type: 'paragraph',
                    text: 'Вычет действует с 2025 по 2028 год и подлежит ограничениям по уровню дохода.'
                },
                {
                    type: 'heading',
                    text: 'Вычет процентов по автокредитам'
                },
                {
                    type: 'paragraph',
                    text: 'Новый временный вычет позволяет вычитать до $10,000 в год процентов по определенным кредитам, взятым на покупку личных автомобилей.'
                },
                {
                    type: 'paragraph',
                    text: 'Среди требований: кредит должен быть оформлен после 31 декабря 2024 года, а автомобиль должен пройти финальную сборку на территории США.'
                },
                {
                    type: 'paragraph',
                    text: 'Вычет уменьшается при MAGI выше $100,000 для одиночных и $200,000 для совместных деклараций (действует с 2025 по 2028 год).'
                },
                {
                    type: 'heading',
                    text: 'Расширение доступности счетов HSA в 2026 году'
                },
                {
                    type: 'paragraph',
                    text: 'С 1 января 2026 года большее число налогоплательщиков сможет открывать и пополнять медицинские счета HSA (Health Savings Account).'
                },
                {
                    type: 'paragraph',
                    text: 'Новые правила признают совместимыми с HSA определенные бронзовые и катастрофические страховые планы, даже если ранее они не подпадали под классическое определение плана с высокой франшизой (HDHP).'
                },
                {
                    type: 'paragraph',
                    text: 'Ряд соглашений с первичными медицинскими организациями (Direct Primary Care) также теперь совместимы с HSA, и средства счета можно без налогов тратить на периодическую оплату таких услуг.'
                },
                {
                    type: 'heading',
                    text: 'Новые счета для детей (Trump Accounts)'
                },
                {
                    type: 'paragraph',
                    text: 'Закон создал Trump Accounts — новый тип счетов с налоговыми льготами для детей. Родители и опекуны смогут открывать такие счета. Взносы на счета разрешены с 4 июля 2026 года.'
                },
                {
                    type: 'paragraph',
                    text: 'Квалифицированные дети также могут получить единоразовый государственный взнос $1,000, а общий годовой лимит взносов составляет до $5,000. Работодатели могут перечислять до $2,500 в год на сотрудника или иждивенца.'
                },
                {
                    type: 'heading',
                    text: 'Частичная возвратность кредита на усыновление (Adoption Credit)'
                },
                {
                    type: 'paragraph',
                    text: 'Начиная с налоговых периодов после 31 декабря 2024 года, часть кредита на усыновление становится возвратной (refundable). На 2026 год максимальный размер кредита составляет $17,670, из которых до $5,120 подлежат возврату.'
                },
                {
                    type: 'heading',
                    text: 'Завершение ряда льгот на чистую энергию'
                },
                {
                    type: 'paragraph',
                    text: 'Закон ускорил прекращение нескольких «зеленых» налоговых льгот. Федеральные кредиты на покупку новых, подержанных и коммерческих экологичных автомобилей больше недоступны для машин, приобретенных после 30 сентября 2025 года.'
                },
                {
                    type: 'paragraph',
                    text: 'Кредиты на энергоэффективное улучшение жилья (Energy Efficient Home Improvement Credit) и домашнюю чистую энергию (Residential Clean Energy Credit) в целом прекратили действие для расходов после 31 декабря 2025 года.'
                },
                {
                    type: 'heading',
                    text: 'Изменения для владельцев бизнеса'
                },
                {
                    type: 'paragraph',
                    text: 'Бизнес также получил значительные налоговые изменения. Одно из важнейших — возвращение 100% бонусной амортизации (100% bonus depreciation) для квалифицированного имущества, приобретенного после 19 января 2025 года. По новому закону это положение стало постоянным.'
                },
                {
                    type: 'paragraph',
                    text: 'Налоговый кредит для работодателей за оплачиваемый семейный и медицинский отпуск (Paid Family and Medical Leave) также расширен на постоянной основе.'
                },
                {
                    type: 'heading',
                    text: 'Итог'
                },
                {
                    type: 'paragraph',
                    text: 'Закон Working Families Tax Cuts внес масштабные коррективы в вычеты, кредиты, медицинские счета, поддержку семей и налогообложение компаний.'
                },
                {
                    type: 'paragraph',
                    text: 'Многие нормы уже вступили в силу, другие стартуют в 2026 году. Поскольку большинство льгот имеют лимиты дохода и особые условия отчетности, рекомендуем детально разобрать вашу ситуацию со специалистом.'
                }
            ]
        }
    },
    {
        id: 'cant-pay-tax-bill',
        slug: 'cant-pay-tax-bill',
        category: 'insights',
        readTime: { en: '4 min read', ru: '4 мин чтения' },
        date: '2026-09-25',
        source: {
            en: 'IRS Guidelines & Regulations',
            ru: 'Руководство и регламенты IRS'
        },
        en: {
            title: 'Can’t Pay Your Tax Bill? File Your Tax Return Anyway',
            summary: 'Failing to file your tax return is far more costly than not having money to pay the tax. Learn how the Failure-to-File penalty compares to Failure-to-Pay, and explore IRS payment plans and penalty relief options.',
            sections: [
                {
                    type: 'paragraph',
                    text: 'One of the most expensive tax mistakes is not filing your tax return simply because you cannot afford to pay the tax due.'
                },
                {
                    type: 'paragraph',
                    text: 'If you cannot pay the full balance right away, you should generally still file your return on time and deal with the payment separately.'
                },
                {
                    type: 'heading',
                    text: 'Why filing on time matters'
                },
                {
                    type: 'paragraph',
                    text: 'The IRS charges different penalties for filing late and paying late.'
                },
                {
                    type: 'list',
                    items: [
                        'The Failure-to-Pay Penalty is generally 0.5% of the unpaid tax for each month or part of a month the balance remains unpaid, up to 25%.',
                        'The Failure-to-File Penalty is generally 5% of the unpaid tax for each month or part of a month the return is late, also up to 25%.'
                    ]
                },
                {
                    type: 'paragraph',
                    text: 'When both penalties apply in the same month, the combined penalty is generally 5%: 4.5% for failure to file and 0.5% for failure to pay.'
                },
                {
                    type: 'callout',
                    text: 'That means the penalty for not filing can build up much faster than the penalty for not paying.'
                },
                {
                    type: 'paragraph',
                    text: 'If a return is more than 60 days late, a minimum Failure-to-File penalty may also apply. For returns due in 2026, the minimum penalty can be $525 or 100% of the unpaid tax, whichever is less.'
                },
                {
                    type: 'heading',
                    text: 'What if you cannot pay the full amount?'
                },
                {
                    type: 'paragraph',
                    text: 'First, do not ignore IRS notices. The longer the balance remains unpaid, the more interest and penalties may accumulate.'
                },
                {
                    type: 'paragraph',
                    text: 'If you cannot pay in full, the IRS offers payment options, including:'
                },
                {
                    type: 'list',
                    items: [
                        'a short-term payment plan, generally allowing up to 180 days to pay;',
                        'a long-term installment agreement, which allows monthly payments.'
                    ]
                },
                {
                    type: 'paragraph',
                    text: 'Interest and certain penalties continue to apply while you are on a payment plan.'
                },
                {
                    type: 'paragraph',
                    text: 'If you filed your return on time and have an approved installment agreement, the Failure-to-Pay penalty may generally be reduced from 0.5% to 0.25% per month while the agreement is in effect.'
                },
                {
                    type: 'heading',
                    text: 'You may qualify for penalty relief'
                },
                {
                    type: 'paragraph',
                    text: 'In some situations, the IRS may reduce or remove certain penalties. You may qualify for:'
                },
                {
                    type: 'list',
                    items: [
                        'First-Time Penalty Abatement — available to some taxpayers with a good recent compliance history.',
                        'Reasonable Cause Relief — may apply when you were unable to file or pay on time because of circumstances beyond your control, even though you exercised ordinary care.'
                    ]
                },
                {
                    type: 'paragraph',
                    text: 'Eligibility depends on the facts of each case.'
                },
                {
                    type: 'heading',
                    text: 'How to avoid another tax balance next year'
                },
                {
                    type: 'paragraph',
                    text: 'If you owed more than expected, consider reviewing your tax payments during the year. You may need to:'
                },
                {
                    type: 'list',
                    items: [
                        'adjust your paycheck withholding;',
                        'make quarterly estimated tax payments;',
                        'review your expected income and tax liability during the year.'
                    ]
                },
                {
                    type: 'paragraph',
                    text: 'This is especially important for self-employed taxpayers, business owners, and anyone receiving income without sufficient tax withholding.'
                },
                {
                    type: 'heading',
                    text: 'The Bottom Line'
                },
                {
                    type: 'paragraph',
                    text: 'Not having enough money to pay your tax bill is usually not a reason to delay filing your tax return.'
                },
                {
                    type: 'paragraph',
                    text: 'File on time, pay as much as you can, and consider requesting an IRS payment plan for the remaining balance.'
                },
                {
                    type: 'paragraph',
                    text: 'Filing on time can help you avoid the much larger Failure-to-File penalty and reduce the overall cost of resolving your tax debt.'
                }
            ]
        },
        ru: {
            title: 'Не можете оплатить налог? Все равно подавайте налоговую декларацию',
            summary: 'Неподача декларации обходится в 10 раз дороже, чем задержка платежа. Разбираем штрафы IRS за неподачу и неуплату, планы рассрочки и возможности списания штрафов.',
            sections: [
                {
                    type: 'paragraph',
                    text: 'Одна из самых дорогостоящих налоговых ошибок — не подавать налоговую декларацию только потому, что у вас сейчас нет денег на уплату начисленного налога.'
                },
                {
                    type: 'paragraph',
                    text: 'Если вы не можете выплатить всю сумму сразу, в большинстве случаев все равно следует подать декларацию вовремя, а вопрос оплаты решать отдельно.'
                },
                {
                    type: 'heading',
                    text: 'Почему так важно подавать декларацию вовремя'
                },
                {
                    type: 'paragraph',
                    text: 'IRS начисляет совершенно разные штрафы за несвоевременную подачу декларации и за несвоевременную уплату налога.'
                },
                {
                    type: 'list',
                    items: [
                        'Штраф за неуплату (Failure-to-Pay Penalty) составляет 0.5% от неуплаченной суммы за каждый месяц просрочки (до 25% максимум).',
                        'Штраф за неподачу декларации (Failure-to-File Penalty) составляет 5% от суммы за каждый месяц просрочки (также до 25%).'
                    ]
                },
                {
                    type: 'paragraph',
                    text: 'Когда в один месяц применяются оба штрафа, совокупный штраф составляет 5% (4.5% за неподачу и 0.5% за неуплату).'
                },
                {
                    type: 'callout',
                    text: 'Это означает, что штраф за неподачу декларации накапливается в 10 раз быстрее, чем штраф за неоплату!'
                },
                {
                    type: 'paragraph',
                    text: 'Если просрочка подачи составляет более 60 дней, начинает действовать минимальный штраф. Для деклараций, подаваемых в 2026 году, минимальный штраф за неподачу составляет $525 или 100% от неуплаченного налога (в зависимости от того, что меньше).'
                },
                {
                    type: 'heading',
                    text: 'Что делать, если вы не можете оплатить всю сумму?'
                },
                {
                    type: 'paragraph',
                    text: 'Главное — не игнорируйте письма и уведомления от IRS. Чем дольше долг остается без внимания, тем больше штрафов и процентов начисляется.'
                },
                {
                    type: 'paragraph',
                    text: 'Если полная сумма недоступна, IRS предлагает официальные варианты урегулирования:'
                },
                {
                    type: 'list',
                    items: [
                        'краткосрочный план оплаты (short-term payment plan) — дает до 180 дней на погашение;',
                        'долгосрочное соглашение о рассрочке (installment agreement) — позволяет вносить ежемесячные платежи.'
                    ]
                },
                {
                    type: 'paragraph',
                    text: 'Проценты и определенные штрафы продолжают начисляться и во время действия плана, однако при вовремя поданной декларации и одобренной рассрочке штраф за неуплату снижается с 0.5% до 0.25% в месяц.'
                },
                {
                    type: 'heading',
                    text: 'Возможность списания штрафов (Penalty Relief)'
                },
                {
                    type: 'paragraph',
                    text: 'В ряде ситуаций IRS может снизить или полностью отменить начисленные штрафы. Вы можете претендовать на:'
                },
                {
                    type: 'list',
                    items: [
                        'First-Time Penalty Abatement — первичное освобождение от штрафа для налогоплательщиков с хорошей историей дисциплины за последние 3 года.',
                        'Reasonable Cause Relief — освобождение по уважительной причине, если нарушение произошло из-за форс-мажорных обстоятельств вне вашего контроля.'
                    ]
                },
                {
                    type: 'paragraph',
                    text: 'Решение принимается индивидуально на основе предоставленных доказательств.'
                },
                {
                    type: 'heading',
                    text: 'Как избежать долга по налогам в следующем году'
                },
                {
                    type: 'paragraph',
                    text: 'Если сумма к доплате оказалась больше ожидаемой, пересмотрите налоговые платежи в течение года:'
                },
                {
                    type: 'list',
                    items: [
                        'скорректируйте удержание налогов из зарплаты через форму W-4;',
                        'делайте ежеквартальные авансовые платежи (Estimated Tax Payments);',
                        'периодически оценивайте ожидаемый доход и налоговые обязательства.'
                    ]
                },
                {
                    type: 'paragraph',
                    text: 'Это особенно критично для самозанятых, владельцев бизнеса и всех, кто получает доходы без автоматического удержания налога.'
                },
                {
                    type: 'heading',
                    text: 'Итог'
                },
                {
                    type: 'paragraph',
                    text: 'Нехватка денег для оплаты налогового счета никогда не должна быть причиной задержки подачи декларации.'
                },
                {
                    type: 'paragraph',
                    text: 'Подайте декларацию вовремя, заплатите столько, сколько можете сейчас, и оформите план рассрочки в IRS на оставшуюся сумму.'
                },
                {
                    type: 'paragraph',
                    text: 'Своевременная подача спасет вас от огромного 5%-го штрафа за просрочку и существенно сократит общие затраты на погашение долга.'
                }
            ]
        }
    },
    {
        id: 'us-gift-tax-rules-2026',
        slug: 'us-gift-tax-rules-2026',
        category: 'insights',
        readTime: { en: '5 min read', ru: '5 мин чтения' },
        date: '2026-09-22',
        source: {
            en: 'IRS Gift and Estate Tax Provisions (2026)',
            ru: 'Положения IRS о налоге на дарение и наследство (2026)'
        },
        en: {
            title: 'U.S. Gift Tax Rules for 2026: What You Need to Know',
            summary: 'Updated for 2026: lifetime gift and estate exemption is $15 million, annual exclusion is $19,000, and non-U.S.-citizen spouse limit is $194,000. Learn who pays the tax, when Form 709 is required, and foreign gift rules.',
            sections: [
                {
                    type: 'paragraph',
                    text: 'Gift tax rules are often misunderstood. Giving someone more than a certain amount does not automatically mean you owe gift tax. In many cases, the main consequence is simply a reporting requirement.'
                },
                {
                    type: 'paragraph',
                    text: 'For 2026, the annual federal gift tax exclusion is $19,000 per recipient. This means you can generally give up to $19,000 to as many people as you want during the year without using any of your lifetime gift and estate tax exemption.'
                },
                {
                    type: 'paragraph',
                    text: 'For example, you could give $19,000 to your daughter, $19,000 to your son, and $19,000 to a friend, and each gift could qualify separately for the annual exclusion.'
                },
                {
                    type: 'heading',
                    text: 'What Happens If You Give More Than $19,000?'
                },
                {
                    type: 'paragraph',
                    text: 'Giving more than $19,000 to one person does not automatically create a gift tax bill.'
                },
                {
                    type: 'paragraph',
                    text: 'Instead, you will generally need to file Form 709, United States Gift and Generation-Skipping Transfer Tax Return. The amount above the annual exclusion generally reduces your available lifetime gift and estate tax exemption.'
                },
                {
                    type: 'paragraph',
                    text: 'For 2026, the federal basic exclusion amount is $15 million per individual.'
                },
                {
                    type: 'callout',
                    text: 'For example, if you give someone $50,000 in 2026: $50,000 − $19,000 = $31,000. The first $19,000 may qualify for the annual exclusion, while the remaining $31,000 generally reduces your available lifetime exemption.'
                },
                {
                    type: 'paragraph',
                    text: 'In most cases, no federal gift tax is actually due unless your cumulative taxable gifts exceed your available lifetime exemption. The top federal gift tax rate remains 40%.'
                },
                {
                    type: 'heading',
                    text: 'Gifts Between Spouses'
                },
                {
                    type: 'paragraph',
                    text: 'Gifts between spouses receive special treatment.'
                },
                {
                    type: 'paragraph',
                    text: 'If your spouse is a U.S. citizen, qualifying gifts generally benefit from the unlimited marital deduction, which means you can usually transfer an unlimited amount without federal gift tax.'
                },
                {
                    type: 'paragraph',
                    text: 'If your spouse is not a U.S. citizen, the rules are different. For 2026, the special annual exclusion for qualifying gifts to a non-U.S.-citizen spouse is $194,000.'
                },
                {
                    type: 'paragraph',
                    text: 'Amounts above that limit may require Form 709 reporting and may use part of the donor’s available lifetime exemption.'
                },
                {
                    type: 'heading',
                    text: 'Married Couples Can Use Two Annual Exclusions'
                },
                {
                    type: 'paragraph',
                    text: 'Each spouse has a separate $19,000 annual exclusion. That means a married couple may potentially give up to $38,000 to the same recipient in 2026 using both spouses’ annual exclusions.'
                },
                {
                    type: 'paragraph',
                    text: 'In some situations, spouses may elect to “split” a gift made by one spouse and treat it as though half was made by each spouse. Gift splitting generally requires Form 709 filing.'
                },
                {
                    type: 'heading',
                    text: 'Tuition and Medical Expenses Can Be Treated Differently'
                },
                {
                    type: 'paragraph',
                    text: 'Certain payments for education and medical expenses may fall outside the normal annual gift exclusion rules.'
                },
                {
                    type: 'paragraph',
                    text: 'Qualifying tuition paid directly to an educational institution generally is not treated as a taxable gift.'
                },
                {
                    type: 'paragraph',
                    text: 'Similarly, qualifying medical expenses paid directly to the medical provider or insurer can generally be excluded from gift tax.'
                },
                {
                    type: 'paragraph',
                    text: 'This means someone may be able to pay qualifying tuition or medical expenses directly and still separately give the recipient up to the annual exclusion amount.'
                },
                {
                    type: 'heading',
                    text: 'What About the Person Receiving the Gift?'
                },
                {
                    type: 'paragraph',
                    text: 'A genuine gift is generally not taxable income to the recipient.'
                },
                {
                    type: 'paragraph',
                    text: 'For example, if your parents give you $50,000, you generally do not report the $50,000 as income on your Form 1040 simply because you received it. Federal gift tax rules generally place the reporting and tax responsibility on the donor, not the recipient.'
                },
                {
                    type: 'paragraph',
                    text: 'However, receiving property instead of cash can create future tax consequences because gifted property may carry over the donor’s tax basis. That can affect your capital gain when you eventually sell the property.'
                },
                {
                    type: 'heading',
                    text: 'Gifts From Foreign Persons'
                },
                {
                    type: 'paragraph',
                    text: 'Foreign gifts have separate reporting rules. If a U.S. person receives a large gift or bequest from a nonresident alien individual or foreign estate, Form 3520 may be required once the applicable foreign-gift reporting threshold is exceeded.'
                },
                {
                    type: 'paragraph',
                    text: 'Importantly, the $19,000 annual gift exclusion is not the Form 3520 reporting threshold for a gift received from a foreign individual.'
                },
                {
                    type: 'paragraph',
                    text: 'Different rules and lower thresholds can also apply to purported gifts from foreign corporations or foreign partnerships. Receiving a reportable foreign gift generally does not make the gift taxable income, but failure to properly report it can result in significant penalties.'
                },
                {
                    type: 'heading',
                    text: 'Keep Good Records'
                },
                {
                    type: 'paragraph',
                    text: 'For substantial gifts, it is important to keep documentation showing:'
                },
                {
                    type: 'list',
                    items: [
                        'the date and amount of the gift;',
                        'the identity of the donor and recipient;',
                        'the fair market value of gifted property;',
                        'the donor’s basis in gifted property;',
                        'copies of any Forms 709 or Form 3520;',
                        'appraisals when appropriate;',
                        'documentation of direct tuition or medical payments.'
                    ]
                },
                {
                    type: 'paragraph',
                    text: 'Good records become especially important when gifts involve real estate, investments, foreign persons, or multiple years of gifting.'
                },
                {
                    type: 'heading',
                    text: 'The Bottom Line'
                },
                {
                    type: 'paragraph',
                    text: 'For 2026, you can generally give up to $19,000 per recipient without using your lifetime exemption. If you give more than that, you may need to file Form 709, but that does not necessarily mean you owe gift tax.'
                },
                {
                    type: 'paragraph',
                    text: 'The lifetime federal gift and estate tax exemption for 2026 is $15 million per individual, and the special annual exclusion for qualifying gifts to a non-U.S.-citizen spouse is $194,000.'
                },
                {
                    type: 'paragraph',
                    text: 'The rules become more complex when gifts involve spouses who are not U.S. citizens, foreign donors, real estate, investments, or other property, so proper reporting is important even when no tax is due.'
                }
            ]
        },
        ru: {
            title: 'Правила налога на дарение в США на 2026 год: что нужно знать',
            summary: 'Актуальные цифры на 2026 год: пожизненный лимит освобождения от налога на дарение и наследство вырос до $15 млн, годовой лимит исключения составляет $19,000, а лимит подарков супругу-негражданину США — $194,000.',
            sections: [
                {
                    type: 'paragraph',
                    text: 'Правила налога на дарение (Gift Tax) часто понимают неверно. Подарок выше определенной суммы вовсе не означает автоматическую обязанность платить налог. В подавляющем большинстве случаев последствием является лишь обязанность подать информационную форму.'
                },
                {
                    type: 'paragraph',
                    text: 'В 2026 году годовой лимит необлагаемого дарения (Annual Exclusion) составляет $19,000 на одного получателя. Это означает, что вы можете подарить до $19,000 любому количеству людей в течение года без уменьшения вашего пожизненного лимита.'
                },
                {
                    type: 'paragraph',
                    text: 'Например, вы можете подарить $19,000 дочери, $19,000 сыну и $19,000 другу — каждый подарок подпадает под отдельное годовое исключение.'
                },
                {
                    type: 'heading',
                    text: 'Что происходит, если подарить больше $19,000?'
                },
                {
                    type: 'paragraph',
                    text: 'Подарок свыше $19,000 одному лицу не создает автоматического счета на уплату налога.'
                },
                {
                    type: 'paragraph',
                    text: 'Вместо этого вам потребуется подать декларацию Form 709 (United States Gift and Generation-Skipping Transfer Tax Return). Сумма превышения просто уменьшает ваш пожизненный лимит освобождения от налога на дарение и наследство.'
                },
                {
                    type: 'paragraph',
                    text: 'На 2026 год базовый федеральный пожизненный лимит освобождения составляет $15 миллионов на человека.'
                },
                {
                    type: 'callout',
                    text: 'Пример: если в 2026 году вы подарили $50,000: $50,000 − $19,000 = $31,000. Первые $19,000 полностью освобождены от налога, а $31,000 списываются из вашего пожизненного лимита в $15 млн. Реального налога к уплате не возникает!'
                },
                {
                    type: 'paragraph',
                    text: 'Налог на дарение придется платить только в том случае, если сумма ваших накопленных налогооблагаемых подарков за всю жизнь превысит $15 млн. Максимальная ставка федерального налога составляет 40%.'
                },
                {
                    type: 'heading',
                    text: 'Подарки между супругами'
                },
                {
                    type: 'paragraph',
                    text: 'Для подарков между супругами действуют особые правила.'
                },
                {
                    type: 'paragraph',
                    text: 'Если ваш супруг является гражданином США, действует неограниченный супружеский вычет (unlimited marital deduction) — дарить можно любые суммы без ограничений и налогов.'
                },
                {
                    type: 'paragraph',
                    text: 'Если супруг НЕ является гражданином США, правила иные: на 2026 год специальное годовое исключение для подарков супругу-негражданину составляет $194,000.'
                },
                {
                    type: 'paragraph',
                    text: 'Суммы свыше этого порога требуют подачи формы 709 и уменьшают пожизненный лимит дарителя.'
                },
                {
                    type: 'heading',
                    text: 'Супружеские пары могут объединять лимиты ($38,000)'
                },
                {
                    type: 'paragraph',
                    text: 'У каждого из супругов есть собственный лимит $19,000. Это дает возможность семейной паре подарить в 2026 году до $38,000 одному получателю без использования пожизненного лимита.'
                },
                {
                    type: 'paragraph',
                    text: 'Если подарок делается со счета одного супруга, можно использовать процедуру разделения подарка (Gift Splitting), подав форму 709.'
                },
                {
                    type: 'heading',
                    text: 'Оплата обучения и медицинских расходов напрямую'
                },
                {
                    type: 'paragraph',
                    text: 'Платежи за обучение и медицинские услуги могут вообще не считаться подарком, если они перечисляются напрямую поставщику услуг.'
                },
                {
                    type: 'paragraph',
                    text: 'Оплата обучения, направленная непосредственно в учебное заведение, не считается налогооблагаемым подарком.'
                },
                {
                    type: 'paragraph',
                    text: 'Аналогично, медицинские расходы, оплаченные напрямую больнице, врачу или страховой компании, полностью освобождаются от налога на дарение.'
                },
                {
                    type: 'paragraph',
                    text: 'Это значит, что вы можете оплатить кому-либо лечение или учебу в любом объеме напрямую и при этом подарить еще $19,000 наличными без каких-либо отчетов!'
                },
                {
                    type: 'heading',
                    text: 'Налоги для получателя подарка'
                },
                {
                    type: 'paragraph',
                    text: 'Настоящий подарок не является доходом получателя.'
                },
                {
                    type: 'paragraph',
                    text: 'Если родители подарили вам $50,000, вы не указываете эту сумму в своей декларации Form 1040. В США вся налоговая ответственность за подарки лежит на дарителе.'
                },
                {
                    type: 'paragraph',
                    text: 'Однако если вам дарят имущество (акции, недвижимость), к вам переходит налоговая база дарителя (tax basis), что повлияет на налог на прирост капитала при будущей продаже.'
                },
                {
                    type: 'heading',
                    text: 'Подарки от иностранных лиц (Form 3520)'
                },
                {
                    type: 'paragraph',
                    text: 'Для подарков из-за рубежа действуют специальные строгие правила. Если резидент США получает крупный подарок или наследство от иностранного лица (нерезидента США), может потребоваться подача формы 3520 (Form 3520).'
                },
                {
                    type: 'paragraph',
                    text: 'Обратите внимание: стандартный лимит $19,000 не имеет отношения к отчетности по Form 3520. Получение подарка от иностранца не делает его доходом, но непредставление формы 3520 грозит огромными штрафами (от 5% до 25% от суммы подарка).'
                },
                {
                    type: 'heading',
                    text: 'Хранение документов'
                },
                {
                    type: 'paragraph',
                    text: 'При крупных подарках обязательно сохраняйте подтверждающие документы:'
                },
                {
                    type: 'list',
                    items: [
                        'дату и точную сумму перевода;',
                        'данные дарителя и получателя;',
                        'справедливую рыночную стоимость и первоначальную стоимость (basis) подаренного имущества;',
                        'копии поданных форм 709 или 3520;',
                        'оценку независимого оценщика (при дарении недвижимости/долей бизнеса);',
                        'квитанции прямой оплаты обучения или медицины.'
                    ]
                },
                {
                    type: 'heading',
                    text: 'Итог'
                },
                {
                    type: 'paragraph',
                    text: 'В 2026 году вы можете свободно дарить до $19,000 каждому человеку без необходимости отчитываться перед IRS.'
                },
                {
                    type: 'paragraph',
                    text: 'Подарки свыше этой суммы требуют подачи формы 709, но благодаря высокому пожизненному лимиту в $15 миллионов налог возникает крайне редко.'
                }
            ]
        }
    },
    {
        id: 'medical-expenses-tax-guide',
        slug: 'medical-expenses-tax-guide',
        category: 'guides',
        readTime: { en: '7 min read', ru: '7 мин чтения' },
        date: '2026-09-18',
        source: {
            en: 'IRS Publication 502 & Internal Revenue Code',
            ru: 'Публикация IRS 502 и Налоговый кодекс США'
        },
        en: {
            title: 'Guide: How to Use Medical Expenses to Reduce Your Tax Bill',
            summary: 'A step-by-step practical guide covering Schedule A deductions (7.5% AGI threshold), self-employed health insurance deductions, S-Corporation shareholder 2% rules, HSA "pay today, reimburse later" strategy, FSAs, and HRAs.',
            sections: [
                {
                    type: 'paragraph',
                    text: 'Healthcare can be expensive, but the tax code provides several ways to make those costs work in your favor. Depending on your employment status, insurance coverage, and business structure, you may be able to deduct medical expenses, pay for them with pre-tax dollars, or reimburse yourself tax-free.'
                },
                {
                    type: 'paragraph',
                    text: 'Here is a practical guide to the main options.'
                },
                {
                    type: 'heading',
                    text: 'Step 1: Check Whether You Can Deduct Medical Expenses'
                },
                {
                    type: 'paragraph',
                    text: 'If you itemize deductions on Schedule A, you may be able to deduct qualified medical and dental expenses that exceed 7.5% of your Adjusted Gross Income (AGI).'
                },
                {
                    type: 'callout',
                    text: 'For example, if your AGI is $80,000: $80,000 × 7.5% = $6,000. If you paid $10,000 in qualifying medical expenses during the year, the amount above the threshold would be: $10,000 − $6,000 = $4,000. That $4,000 may potentially be included in your itemized medical deduction.'
                },
                {
                    type: 'paragraph',
                    text: 'Qualified expenses can include things such as doctor and hospital visits, dental care, prescription medications, vision care, certain medical equipment and supplies, and some health insurance premiums. Only expenses that were not reimbursed by insurance or another source can generally be included.'
                },
                {
                    type: 'paragraph',
                    text: 'Keep in mind that this deduction is useful only if itemizing your deductions makes sense compared with taking the standard deduction.'
                },
                {
                    type: 'heading',
                    text: 'Step 2: If You Are Self-Employed, Check the Health Insurance Deduction'
                },
                {
                    type: 'paragraph',
                    text: 'Self-employed taxpayers may be able to deduct health insurance premiums paid for themselves, their spouse, and dependents. Medical, dental, vision, and certain qualified long-term care insurance premiums may qualify.'
                },
                {
                    type: 'paragraph',
                    text: 'Unlike the Schedule A medical expense deduction, this deduction generally does not require you to itemize.'
                },
                {
                    type: 'paragraph',
                    text: 'However, there are important eligibility rules. The deduction is generally limited by income from the business, and you cannot claim it for months when you were eligible to participate in a subsidized health plan through your employer or your spouse\'s employer.'
                },
                {
                    type: 'subheading',
                    text: 'Special Rule for S Corporation Owners'
                },
                {
                    type: 'paragraph',
                    text: 'If you own more than 2% of an S corporation, health insurance must be handled correctly through the S corporation in order to qualify for the self-employed health insurance deduction.'
                },
                {
                    type: 'paragraph',
                    text: 'The S corporation must either:'
                },
                {
                    type: 'list',
                    items: [
                        'pay the insurance premiums directly, or',
                        'reimburse you for premiums you paid personally.'
                    ]
                },
                {
                    type: 'paragraph',
                    text: 'The premiums must then generally be included in Box 1 of your Form W-2 as wages. If the shareholder pays the premiums personally and the S corporation does not reimburse them and include them in W-2 wages, the insurance plan generally will not be considered established under the S corporation for purposes of the deduction.'
                },
                {
                    type: 'paragraph',
                    text: 'For qualifying more-than-2% shareholder-employees, these premiums are generally included in Box 1 but not Boxes 3 and 5 when the applicable requirements are met. So for S corporation owners, health insurance should not be treated as a simple personal expense. It needs to be coordinated with the company and payroll.'
                },
                {
                    type: 'heading',
                    text: 'Step 3: Use an HSA if You Are Eligible'
                },
                {
                    type: 'paragraph',
                    text: 'If you are covered by an HSA-qualified High Deductible Health Plan (HDHP) and otherwise meet the eligibility requirements, a Health Savings Account can be one of the most tax-efficient ways to pay for healthcare.'
                },
                {
                    type: 'paragraph',
                    text: 'An HSA can provide three major tax advantages:'
                },
                {
                    type: 'list',
                    items: [
                        'contributions may be deductible or made with pre-tax dollars;',
                        'investment earnings can grow tax-free;',
                        'withdrawals are tax-free when used for qualified medical expenses.'
                    ]
                },
                {
                    type: 'paragraph',
                    text: 'Unlike an FSA, unused HSA money generally stays in the account instead of expiring at the end of the year.'
                },
                {
                    type: 'subheading',
                    text: 'A Powerful HSA Strategy: Pay Today, Reimburse Yourself Later'
                },
                {
                    type: 'paragraph',
                    text: 'You do not necessarily have to withdraw money from your HSA immediately when you incur a medical expense. Suppose you have a $1,500 qualified medical expense today. Instead of paying it directly from your HSA, you could:'
                },
                {
                    type: 'list',
                    items: [
                        '1. Pay the $1,500 with regular cash.',
                        '2. Keep the receipt and proof of payment.',
                        '3. Leave the $1,500 in your HSA invested.',
                        '4. Allow the money to potentially grow tax-free.',
                        '5. Reimburse yourself from the HSA years later for that original expense.'
                    ]
                },
                {
                    type: 'paragraph',
                    text: 'This can allow more money to remain invested in the HSA for a longer period. The medical expense must generally have been incurred after the HSA was established, and it cannot have been reimbursed from another source or already used for another tax benefit.'
                },
                {
                    type: 'paragraph',
                    text: 'IRS guidance also requires adequate records supporting HSA distributions. That makes recordkeeping especially important. Consider keeping digital copies of: medical receipts, invoices, Explanation of Benefits (EOB) statements, proof of payment, and records showing that the expense was not reimbursed elsewhere.'
                },
                {
                    type: 'heading',
                    text: 'Step 4: Use an FSA for Predictable Medical Expenses'
                },
                {
                    type: 'paragraph',
                    text: 'If your employer offers a Health Flexible Spending Account (FSA), you may be able to set aside money from your paycheck on a pre-tax basis and use it for eligible medical expenses.'
                },
                {
                    type: 'paragraph',
                    text: 'Because those contributions reduce taxable wages, an FSA can lower the after-tax cost of healthcare expenses you already expect to incur. Before choosing your annual contribution, estimate expenses such as prescriptions, copays, dental treatment, vision expenses, and eligible medical supplies.'
                },
                {
                    type: 'paragraph',
                    text: 'FSAs are generally subject to a use-it-or-lose-it rule, although an employer may allow either a limited carryover or a grace period (up to 2½ months), subject to applicable annual rules.'
                },
                {
                    type: 'heading',
                    text: 'Step 5: Business Owners Should Review HRAs and Employer Health Plans'
                },
                {
                    type: 'paragraph',
                    text: 'Business owners may have additional options for paying healthcare costs in a tax-efficient way. Possibilities can include employer-sponsored health insurance, Health Reimbursement Arrangements (HRAs), and certain small-employer reimbursement arrangements.'
                },
                {
                    type: 'paragraph',
                    text: 'An HRA is funded by the employer, and qualifying reimbursements can generally be tax-free to employees.'
                },
                {
                    type: 'callout',
                    text: 'However, ownership matters. Special rules apply to sole proprietors, partners, more-than-2% S corporation shareholders, and highly compensated employees. For example, IRS Publication 969 notes that self-employed individuals are not themselves eligible participants in a traditional HRA in the same way common-law employees are.'
                },
                {
                    type: 'heading',
                    text: 'Step 6: Avoid Double-Dipping'
                },
                {
                    type: 'paragraph',
                    text: 'The same medical expense generally cannot be used to receive multiple tax benefits. For example, you generally cannot claim an expense as an itemized medical deduction if it was already reimbursed by insurance, paid with a tax-free HSA distribution, or reimbursed through an FSA or HRA.'
                },
                {
                    type: 'paragraph',
                    text: 'Similarly, Form 7206 specifically provides that an amount claimed as the self-employed health insurance deduction should not also be included in the Schedule A medical deduction. Always track which expenses were paid or reimbursed through each account.'
                },
                {
                    type: 'heading',
                    text: 'Step 7: Keep Good Documentation'
                },
                {
                    type: 'paragraph',
                    text: 'Medical tax benefits can involve years of records, particularly if you use the delayed HSA reimbursement strategy. Keep documentation such as medical and dental receipts, insurance premium statements, invoices, pharmacy records, proof of payment, HSA and FSA statements, and mileage or transportation records.'
                },
                {
                    type: 'heading',
                    text: 'Quick Decision Guide'
                },
                {
                    type: 'list',
                    items: [
                        'You had unusually high medical expenses: Calculate whether your unreimbursed expenses exceeded 7.5% of AGI and whether itemizing deductions makes sense.',
                        'You are self-employed: Check whether you qualify for the self-employed health insurance deduction.',
                        'You own more than 2% of an S corporation: Make sure the corporation pays or reimburses your premiums and that they are properly reported through payroll and on your W-2.',
                        'You have an HSA-qualified health plan: Consider using an HSA and, if your cash flow allows, paying current expenses out of pocket while preserving receipts for possible tax-free reimbursement later.',
                        'Your employer offers an FSA: Use pre-tax dollars for predictable medical expenses, but be careful not to overfund the account.',
                        'You own a business with employees: Review whether an employer health plan or HRA could provide tax-efficient benefits.'
                    ]
                },
                {
                    type: 'heading',
                    text: 'Bottom Line'
                },
                {
                    type: 'paragraph',
                    text: 'Medical expenses can create several different tax-saving opportunities, but the rules are very different depending on whether you are an employee, self-employed, an S corporation shareholder, or a business owner.'
                },
                {
                    type: 'paragraph',
                    text: 'The key is to plan before year-end rather than waiting until tax preparation time. A properly structured HSA, self-employed health insurance deduction, FSA, HRA, or employer health plan can reduce the after-tax cost of healthcare — but the details matter, especially when business ownership is involved.'
                }
            ]
        },
        ru: {
            title: 'Инструкция: как использовать медицинские расходы для снижения налогов',
            summary: 'Пошаговое руководство: вычет по Schedule A (порог 7.5% AGI), вычет медстраховки для самозанятых, правила для владельцев S-Corp (>2%), стратегия HSA «плати сейчас — компенсируй позже», FSA и HRA.',
            sections: [
                {
                    type: 'paragraph',
                    text: 'Медицинские расходы в США могут быть существенными, однако налоговый кодекс предлагает несколько эффективных инструментов, позволяющих обратить эти затраты в налоговую экономию. В зависимости от вашего статуса, страховки и структуры бизнеса, вы можете списывать медицинские расходы, оплачивать их до вычета налогов или возмещать без уплаты налогов.'
                },
                {
                    type: 'paragraph',
                    text: 'Ниже представлено практическое пошаговое руководство по основным возможностям.'
                },
                {
                    type: 'heading',
                    text: 'Шаг 1: Проверьте вычет медицинских расходов (Schedule A)'
                },
                {
                    type: 'paragraph',
                    text: 'Если вы применяете детализированный вычет (Itemized Deductions на Schedule A), вы можете списать квалифицированные медицинские и стоматологические расходы, превышающие 7.5% от вашего скорректированного валового дохода (AGI).'
                },
                {
                    type: 'callout',
                    text: 'Пример: если ваш AGI составляет $80,000, то 7.5% = $6,000. Если ваши непокрытые страховкой медицинские расходы за год составили $10,000, сумма превышения составит: $10,000 − $6,000 = $4,000. Именно эти $4,000 включаются в налоговый вычет.'
                },
                {
                    type: 'paragraph',
                    text: 'К квалифицированным расходам относятся визиты к врачам, лечение в больнице, стоматология, рецептурные медикаменты, коррекция зрения, медицинское оборудование и некоторые страховые взносы. Списывать можно только те расходы, которые не были компенсированы страховкой.'
                },
                {
                    type: 'paragraph',
                    text: 'Помните: этот вычет выгоден только в том случае, если сумма всех ваших детализированных вычетов превышает стандартный вычет.'
                },
                {
                    type: 'heading',
                    text: 'Шаг 2: Вычет медстраховки для самозанятых (Self-Employed)'
                },
                {
                    type: 'paragraph',
                    text: 'Самозанятые налогоплательщики могут вычитать взносы на медицинское страхование за себя, супруга и иждивенцев. Подходят медицинские, стоматологические, офтальмологические страховки и квалифицированное страхование долговременного ухода.'
                },
                {
                    type: 'paragraph',
                    text: 'В отличие от Schedule A, этот вычет уменьшает скорректированный доход (Adjusted Gross Income) и не требует детализации вычетов.'
                },
                {
                    type: 'paragraph',
                    text: 'Важные условия: вычет ограничен доходом от бизнеса и недоступен за те месяцы, когда вы или ваш супруг имели право на участие в субсидируемом плане страхования от работодателя.'
                },
                {
                    type: 'subheading',
                    text: 'Особое правило для владельцев S-Corporation (>2%)'
                },
                {
                    type: 'paragraph',
                    text: 'Если вы владеете более чем 2% акций S-корпорации, страховка должна быть правильно оформлена через компанию, чтобы квалифицироваться на вычет.'
                },
                {
                    type: 'paragraph',
                    text: 'Корпорация S обязана либо напрямую оплачивать страховые взносы, либо официально компенсировать акционеру расходы, оплаченные им лично.'
                },
                {
                    type: 'paragraph',
                    text: 'Затем эта сумма должна быть включена в Box 1 формы W-2 как заработная плата (но не облагается налогами Social Security и Medicare в Boxes 3 и 5 при соблюдении правил). Если страховка не проведена через payroll компании, вычет применить нельзя.'
                },
                {
                    type: 'heading',
                    text: 'Шаг 3: Используйте HSA, если у вас есть право'
                },
                {
                    type: 'paragraph',
                    text: 'Если вы застрахованы по плану с высокой франшизой (HDHP) и соответствуете критериям, счет HSA (Health Savings Account) становится одним из самых выгодных налоговых инструментов в США.'
                },
                {
                    type: 'paragraph',
                    text: 'HSA дает тройную налоговую выгоду:'
                },
                {
                    type: 'list',
                    items: [
                        'взносы уменьшают налогооблагаемый доход (до вычета налогов);',
                        'инвестиционный доход на счете растет без налогов;',
                        'снятие средств на медицинские расходы полностью освобождено от налогов.'
                    ]
                },
                {
                    type: 'paragraph',
                    text: 'В отличие от FSA, неизрасходованные средства HSA не сгорают в конце года, а накапливаются и инвестируются.'
                },
                {
                    type: 'subheading',
                    text: 'Мощная стратегия HSA: «Плати сейчас — возмещай через годы»'
                },
                {
                    type: 'paragraph',
                    text: 'Вам не обязательно сразу снимать деньги с HSA при оплате медицинских счетов. Если сегодня вы потратили $1,500 на лечение:'
                },
                {
                    type: 'list',
                    items: [
                        '1. Оплатите $1,500 обычными деньгами (с карты или наличными).',
                        '2. Сохраните чек и подтверждение оплаты в надежном месте.',
                        '3. Оставьте $1,500 на счете HSA в инвестициях.',
                        '4. Позвольте деньгам расти и приносить доход без уплаты налогов 5, 10 или 20 лет.',
                        '5. В любой момент в будущем возместите себе эти $1,500 с HSA без единого доллара налога!'
                    ]
                },
                {
                    type: 'paragraph',
                    text: 'Главное условие — расходы должны быть совершены после открытия HSA. Ведите электронный архив чеков, счетов и выписок EOB.'
                },
                {
                    type: 'heading',
                    text: 'Шаг 4: Используйте FSA для предсказуемых расходов'
                },
                {
                    type: 'paragraph',
                    text: 'Если ваш работодатель предлагает счет FSA (Flexible Spending Account), вы можете отчислять на него средства из зарплаты до уплаты налогов.'
                },
                {
                    type: 'paragraph',
                    text: 'Это снижает эффективную стоимость запланированных медицинских расходов: покупки очков, линз, стоматологии, медикаментов. Однако помните о правиле «Use it or lose it»: неиспользованные за год деньги могут сгореть (за исключением разрешенного льготного периода до 2.5 месяцев или небольшого лимита переноса).'
                },
                {
                    type: 'heading',
                    text: 'Шаг 5: Программы HRA для владельцев бизнеса'
                },
                {
                    type: 'paragraph',
                    text: 'Владельцы бизнеса с наемными сотрудниками могут использовать планы HRA (Health Reimbursement Arrangement). Работодатель компенсирует сотрудникам медицинские расходы до налогов.'
                },
                {
                    type: 'callout',
                    text: 'Внимание к структуре: согласно публикации IRS 969, индивидуальные предприниматели, партнеры в партнерствах и акционеры S-Corp с долей >2% не могут участвовать в традиционных HRA на тех же условиях, что и наемные сотрудники.'
                },
                {
                    type: 'heading',
                    text: 'Шаг 6: Избегайте «двойного вычета» (Double-Dipping)'
                },
                {
                    type: 'paragraph',
                    text: 'Один и тот же расход нельзя использовать для получения налоговой выгоды дважды. Вы не можете включить в Schedule A то, что уже было оплачено с HSA/FSA или компенсировано страховкой.'
                },
                {
                    type: 'paragraph',
                    text: 'Также медицинская страховка, списанная через форму 7206 для самозанятых, не может дублироваться в Schedule A.'
                },
                {
                    type: 'heading',
                    text: 'Шаг 7: Ведите тщательную документацию'
                },
                {
                    type: 'paragraph',
                    text: 'Сохраняйте чеки от врачей и аптек, выписки EOB, квитанции об оплате страховых премий, выписки по счетам HSA/FSA и учет медицинского пробега автомобиля.'
                },
                {
                    type: 'heading',
                    text: 'Экспресс-шпаргалка для принятия решений'
                },
                {
                    type: 'list',
                    items: [
                        'Были очень большие медицинские расходы: посчитайте, превышают ли они 7.5% от AGI, и выгодно ли детализировать вычеты.',
                        'Вы работаете на себя (1099/LLC): оформите вычет медицинской страховки для самозанятых.',
                        'Вы владеете >2% S-Corporation: проведите страховку через компанию и корректно отразите ее в форме W-2.',
                        'У вас план HDHP: откройте HSA и используйте стратегию отложенного возмещения для долгосрочного инвестирования.',
                        'Работодатель предлагает FSA: заложите предсказуемую сумму на очки, стоматологию и регулярные лекарства.',
                        'У вас бизнес с сотрудниками: изучите программы HRA для оптимизации затрат на здоровье коллектива.'
                    ]
                },
                {
                    type: 'heading',
                    text: 'Итог'
                },
                {
                    type: 'paragraph',
                    text: 'Грамотно выстроенная налоговая стратегия по медицине способна ежегодно экономить тысячи долларов. Главное — планировать эти шаги до окончания календарного года, а не в разгар налогового сезона!'
                }
            ]
        }
    }
];

export function getResourcesByCategory(category) {
    if (!category || category === 'all') {
        return resourcesData;
    }
    return resourcesData.filter(item => item.category === category);
}

export function getResourceBySlug(slug) {
    return resourcesData.find(item => item.slug === slug);
}
